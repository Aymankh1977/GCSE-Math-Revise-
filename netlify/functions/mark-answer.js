import { getClient, MODEL, json, parseBody, textOf, extractJSON, wrap } from './_lib.js';

function markGuidance(markingStyle) {
  switch (markingStyle) {
    case 'maths':
      return `Mark like a maths teacher: award method marks for valid working even if the final answer is wrong. Use LaTeX for maths. Give a clear worked solution as numbered steps.`;
    case 'science':
      return `Mark like a KS3 science teacher: reward correct points, working, units and command words. Use LaTeX for any equations. Give concise model-answer points.`;
    case 'english-language':
      return `Mark like an English teacher: comment on understanding, language and structure (or, for writing, on content, organisation and accuracy). Say what was good and what would push it higher. Give a short model paragraph, not a full essay.`;
    case 'language':
      return `Mark like a supportive KS3 modern-languages teacher. Reward correct vocabulary, verb tenses and conjugation, accuracy and (above all) successful communication of meaning. Gently note spelling/accent slips. Always give the correct version or a short model answer in the target language with an English gloss.`;
    default: // essay — humanities & vocational
      return `Mark like a KS3 teacher using a levels-based mark scheme appropriate to the command word and tariff. Reward knowledge, application and (where relevant) explanation/judgement. Give indicative content / model points rather than a long essay.`;
  }
}

export const handler = wrap(async (event) => {
  const body = parseBody(event);
  const { subject, markingStyle = 'essay', topicName, context = '' } = body;

  let parts = Array.isArray(body.parts) ? body.parts : null;
  if (!parts && body.question != null) {
    parts = [{ label: '', prompt: body.question, marks: body.marks || 3, answer: body.studentAnswer }];
  }
  if (!parts || !parts.length) return json(400, { error: 'parts (or question) are required.' });

  const totalMarks = parts.reduce((s, p) => s + (Number(p.marks) || 0), 0);

  const partsBlock = parts.map((p, i) => {
    const lbl = p.label ? `(${p.label})` : `Part ${i + 1}`;
    return `${lbl} [${p.marks} mark${p.marks === 1 ? '' : 's'}]
QUESTION: ${p.prompt}
STUDENT ANSWER: ${p.answer && String(p.answer).trim() ? p.answer : '(no answer given)'}`;
  }).join('\n\n');

  const system = `You are a supportive but rigorous UK Key Stage 3 ${subject || ''} teacher marking a Year 8 Summer Big Test answer.

${markGuidance(markingStyle)}

Mark EACH part separately, awarding marks out of that part's tariff, then give an overall judgement for the whole question. Always be warm and encouraging, address the student as "you", and be specific about where marks were won or lost. Respond with ONLY a JSON object, no prose and no code fences.`;

  const user = `Subject: ${subject || 'Year 8'}
Topic: ${topicName || ''}
Total marks available: ${totalMarks}
${context ? `\nShared context:\n${context}\n` : ''}
The question has ${parts.length} part(s):

${partsBlock}

Return JSON exactly in this shape:
{
  "parts": [ {"label": "a", "awarded": <number from 0 to that part's marks>, "marks": <integer>, "comment": "<one or two sentences, specific and encouraging>"} ],
  "score": 0 | 0.5 | 1,
  "verdict": "<short one-line headline for the whole question>",
  "feedback": "<2-3 sentences overall, encouraging>",
  "workedSolution": "<model answer / indicative content covering EVERY part, using \\n between parts>"
}
Overall score: 1 = full or nearly full marks across the whole question, 0.5 = partial credit, 0 = little or no credit.`;

  const client = getClient();
  const msg = await client.messages.create({
    model: MODEL, max_tokens: 1600, temperature: 0.2, system,
    messages: [{ role: 'user', content: user }],
  });

  const data = extractJSON(textOf(msg));
  let score = Number(data.score);
  if (![0, 0.5, 1].includes(score)) score = score >= 0.75 ? 1 : score >= 0.25 ? 0.5 : 0;

  const rparts = Array.isArray(data.parts)
    ? data.parts.map((p) => ({
        label: String(p.label ?? ''),
        awarded: Number(p.awarded) || 0,
        marks: Number(p.marks) || 0,
        comment: String(p.comment || ''),
      }))
    : [];

  return json(200, {
    score,
    verdict: data.verdict || (score === 1 ? 'Strong answer' : score === 0.5 ? 'Partially there' : 'Not quite yet'),
    parts: rparts,
    feedback: data.feedback || '',
    workedSolution: data.workedSolution || '',
  });
});
