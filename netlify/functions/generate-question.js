import { getClient, MODEL, json, parseBody, textOf, extractJSON, wrap } from './_lib.js';

const DIFFICULTY = {
  1: 'foundational: short, one or two steps',
  2: 'standard: a typical Big Test question',
  3: 'stretch: more demanding problem-solving, analysis or evaluation',
};

function styleGuidance(markingStyle) {
  switch (markingStyle) {
    case 'maths':
      return `Write an exam-style maths question (it may have parts). Use LaTeX for ALL mathematics (single $...$ inline, double $$...$$ display). Give a sensible mark tariff per part (1–5 each).`;
    case 'science':
      return `Write an exam-style question (it may have parts). Use proper units and command words (state, describe, explain, calculate). Use LaTeX for any formulae/equations ($...$).`;
    case 'english-language':
      return `If the topic is a READING skill: first WRITE YOUR OWN ORIGINAL short extract (roughly 100–150 words — your own writing, never copied), put it in "context", then ask the matching question as the part(s). If the topic is WRITING: give a single imaginative writing task. Keep it at Year 8 level.`;
    case 'language':
      return `Write a short Year 8 modern-foreign-language question (it may have parts). Vary across: vocabulary recall, translation into English, translation from English, choosing or conjugating the correct verb tense, or a short writing task of 2–3 sentences. Keep vocabulary and grammar at KS3 Year 8 level. Write the instruction in English and put any target-language text in the part prompt. Tariff 1–8 per part.`;
    default: // 'essay' — humanities & vocational
      return `Write an exam-style question using appropriate command words ("Describe", "Explain", "Outline", "Why", "How far"). Realistic Year 8 tariff per part (commonly 1, 2, 4 or 8).`;
  }
}

// Detects references to a VISUAL the app cannot display, while allowing the
// student to be asked to DRAW one, and allowing data written out in text.
function refersToMissingVisual(text) {
  const t = String(text || '');
  const VISUAL = '(diagram|figure|image|photograph|photo|picture|illustration|graph|chart|map)';
  const patterns = [
    new RegExp(`\\b(the|this|following)\\s+${VISUAL}\\b`, 'i'),
    new RegExp(`\\b${VISUAL}\\s+(above|below|shown|opposite|provided)\\b`, 'i'),
    new RegExp(`\\b(refer to|use|using|see|from|in)\\s+the\\s+${VISUAL}\\b`, 'i'),
  ];
  const produce = /\b(draw|plot|sketch|construct|complete|label|create|produce|make|add to)\b/i;
  for (const re of patterns) {
    const m = t.match(re);
    if (m) {
      const before = t.slice(Math.max(0, m.index - 32), m.index);
      if (!produce.test(before)) return true;
    }
  }
  return false;
}

function buildParts(data) {
  let parts = Array.isArray(data.parts) ? data.parts : [];
  parts = parts
    .filter((p) => p && (p.prompt || p.text))
    .map((p) => ({ label: String(p.label ?? '').trim(), prompt: String(p.prompt ?? p.text).trim(), marks: Number(p.marks) || 1 }));
  if (!parts.length && data.question) {
    parts = [{ label: '', prompt: String(data.question), marks: Number(data.marks) || 3 }];
  }
  return parts;
}

export const handler = wrap(async (event) => {
  const { subject, markingStyle = 'essay', topicName, focus, difficulty = 2, exclude = [] } = parseBody(event);
  if (!subject || !topicName) return json(400, { error: 'subject and topicName are required.' });

  const level = DIFFICULTY[difficulty] || DIFFICULTY[2];
  const avoid = Array.isArray(exclude) && exclude.length
    ? `\nDo NOT repeat any of these recently-used questions:\n- ${exclude.slice(-6).join('\n- ')}`
    : '';

  const system = `You are an experienced UK Key Stage 3 ${subject} teacher writing exam-style questions for the Year 8 Summer Big Test. You write for a Year 8 student.

${styleGuidance(markingStyle)}

SELF-CONTAINED — VERY IMPORTANT: every question must be fully answerable from text alone. NEVER refer to a diagram, figure, graph, image, photograph, map or chart that is "shown", "below", "above" or "provided" — nothing can be displayed to the student. If data is needed, write it out in words/numbers in "context" (a small text data list is fine). You MAY ask the student to draw or sketch their own diagram/graph as part of their answer. Do not write "the diagram shows", "use the graph", "in the figure" or "see the chart".

If the question naturally has several parts, return them as SEPARATE parts, each with its own prompt and marks (label them a, b, c). Otherwise return a single part. Put any shared introduction/data/extract in "context".

Match the requested difficulty band exactly. Respond with ONLY a JSON object, no prose and no code fences.`;

  const user = `Subject: ${subject}
Topic: ${topicName}
Focus: ${focus || topicName}
Difficulty: ${level}${avoid}

Return JSON exactly in this shape:
{"context": "<shared intro/data/extract, or empty string>", "parts": [{"label": "a", "prompt": "<part text>", "marks": <integer>}]}
Use a single part with "label": "" when the question is not multi-part. Use LaTeX where appropriate.`;

  const client = getClient();
  let best = null;
  for (let attempt = 0; attempt < 2; attempt++) {
    const sys = attempt === 0
      ? system
      : `${system}\n\nYour previous attempt referred to a diagram/figure/graph/chart that cannot be displayed. Rewrite the question so it is 100% answerable from the text: remove every reference to a visual, and instead write any required data out as numbers/words in "context".`;
    const msg = await client.messages.create({
      model: MODEL, max_tokens: 1100, temperature: 0.9, system: sys,
      messages: [{ role: 'user', content: user }],
    });
    const data = extractJSON(textOf(msg));
    const parts = buildParts(data);
    if (!parts.length) continue;
    const marks = parts.reduce((s, p) => s + (Number(p.marks) || 0), 0) || 3;
    best = { context: String(data.context || ''), parts, marks };
    const blob = [best.context, ...parts.map((p) => p.prompt)].join(' \n ');
    if (!refersToMissingVisual(blob)) break;
  }
  if (!best) return json(502, { error: 'Model did not return a question.' });
  return json(200, best);
});
