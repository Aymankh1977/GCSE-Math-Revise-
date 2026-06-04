// All of Mohammed's Year 8 subjects, mapped from the Y8 Summer Big Test revision guide.
// markingStyle: 'maths' | 'science' | 'essay' | 'english-language' | 'english-literature' | 'language'
// mode: 'exam' (practice + marking) | 'portfolio' (checklist + tutor only)

const T = (id, name, focus, group, codes) => ({ id, name, focus, group, ...(codes ? { codes } : {}) });

const SUBJECTS = [
  {
    id: 'maths', name: 'Mathematics', icon: '∑',
    board: 'KS3 · Sparx', mode: 'exam', markingStyle: 'maths',
    paper: 'Paper 1 (non-calc) & Paper 2 (calc) · 2×45 min · 45 marks',
    examDate: '2026-06-08', examLabel: 'Big Test: 8–19 Jun', leadTeacher: 'Mr Hodgson',
    groups: { y7: { label: 'Year 7 units', color: '#2F6DB5' }, y8: { label: 'Year 8 units', color: '#1F8A4C' } },
    topics: [
      T('m-7-01', '7.01 Numerical skills', 'working with negative numbers and the four operations', 'y7', ['M763','M704','M522','M527','M111','M431','M878','M106','M288']),
      T('m-7-02', '7.02 Order of operations', 'BIDMAS / order of operations', 'y7', ['M521']),
      T('m-7-03', '7.03 Introduction to algebra', 'using letters, simplifying and basic algebra', 'y7', ['M813','M795','M531','M417','M327','M208','M979','M707','M242']),
      T('m-7-04', '7.04 Primes, factors & multiples', 'prime numbers, factors, multiples, HCF and LCM', 'y7', ['M227','M823','M698','M322']),
      T('m-7-05', '7.05 Expanding & factorising', 'expanding single brackets and factorising', 'y7', ['M237','M792','M100']),
      T('m-7-06', '7.06 Addition & subtraction', 'adding and subtracting whole numbers and decimals', 'y7', ['M928','M429','M347','M152','M899']),
      T('m-7-07', '7.07 Perimeter', 'perimeter of 2D shapes', 'y7', ['M920','M635','M690']),
      T('m-7-08', '7.08 Mean', 'calculating the mean average', 'y7', ['M940']),
      T('m-7-09', '7.09 Multiplication & division', 'multiplying and dividing whole numbers and decimals', 'y7', ['M113','M911','M187','M803','M462','M354','M873','M262']),
      T('m-7-10', '7.10 Area of triangles & quadrilaterals', 'area of triangles, rectangles and quadrilaterals', 'y7', ['M900','M390','M291','M610','M269','M996','M705']),
      T('m-7-11', '7.11 Fraction manipulation', 'equivalent fractions and simplifying', 'y7', ['M158','M410','M671','M939','M601']),
      T('m-7-12', '7.12 Adding & subtracting fractions', 'adding and subtracting fractions', 'y7', ['M835','M931']),
      T('m-7-13', '7.13 Comparing & ordering fractions', 'comparing and ordering fractions', 'y7', ['M335']),
      T('m-7-14', '7.14 Fractions of amounts', 'finding a fraction of an amount', 'y7', ['M695']),
      T('m-7-15', '7.15 Polygons', 'properties of polygons', 'y7', ['M276','M523']),
      T('m-7-16', '7.16 Angles', 'angle rules, angles on a line and around a point', 'y7', ['M502','M541','M780','M331','M818','M351','M679','M319']),
      T('m-7-17', '7.17 Coordinates', 'plotting and reading coordinates', 'y7', ['M618','M230','M622','M797']),
      T('m-7-18', '7.18 Time', 'working with time and timetables', 'y7', ['M892','M627','M963','M747','M515']),
      T('m-8-01', '8.01 Powers & roots', 'square/cube numbers, powers and roots', 'y8', ['M135']),
      T('m-8-02', '8.02 Prime factorisation', 'writing a number as a product of primes', 'y8', ['M322','M823','M108']),
      T('m-8-03', '8.03 Rounding', 'rounding to decimal places and significant figures', 'y8', ['M994','M131','M878']),
      T('m-8-04', '8.04 Fractions', 'all four operations with fractions', 'y8', ['M410','M671','M601','M835','M931','M157','M197','M110','M265','M645','M619']),
      T('m-8-05', '8.05 Solving equations', 'solving linear equations', 'y8', ['M707','M509','M387','M554','M634','M647','M401','M957']),
      T('m-8-06', '8.06 Angles in parallel lines', 'alternate, corresponding and co-interior angles', 'y8', ['M163','M606']),
      T('m-8-07', '8.07 Circumference', 'circumference of a circle', 'y8', ['M595','M169']),
      T('m-8-08', '8.08 Direct proportion', 'direct proportion and the unitary method', 'y8', ['M478','M681']),
      T('m-8-09', '8.09 Fractions, decimals & percentages', 'converting between fractions, decimals and percentages', 'y8', ['M267','M958','M264','M553']),
      T('m-8-10', '8.10 Percentage calculations', 'percentages of amounts and percentage change', 'y8', ['M437','M905','M235','M476','M533','M528']),
      T('m-8-11', '8.11 Ratio', 'simplifying and sharing in a ratio', 'y8', ['M885','M543','M267','M801','M525']),
      T('m-8-12', '8.12 Area of circles', 'area of a circle', 'y8', ['M705','M231','M430','M303','M269','M996']),
      T('m-8-13', '8.13 Statistics 1', 'presenting and interpreting data', 'y8', ['M210','M899','M597','M644','M460','M738','M140','M183','M574','M165','M648']),
      T('m-8-14', '8.14 Averages & spread', 'mean, median, mode and range', 'y8', ['M940','M934','M328','M841','M440']),
    ],
  },

  {
    id: 'english', name: 'English', icon: '✍️',
    board: 'KS3', mode: 'exam', markingStyle: 'english-language',
    paper: 'Paper 1 Reading (1h/50) · Paper 2 Writing (1h/50)',
    examDate: '2026-06-08', examLabel: 'Big Test: 8–19 Jun', leadTeacher: 'Miss Tregelles',
    groups: { reading: { label: 'Paper 1 — Reading', color: '#2F6DB5' }, writing: { label: 'Paper 2 — Writing', color: '#E8623A' } },
    topics: [
      T('eng-dystopian', 'Reading: dystopian extract', 'comprehension and key terminology on an unseen dystopian fiction extract', 'reading'),
      T('eng-transactional', 'Reading: transactional writing', 'identifying purpose, audience and form, and rhetorical devices such as fact vs opinion', 'reading'),
      T('eng-spag', 'Writing: SPaG', 'spelling, punctuation and grammar accuracy', 'writing'),
      T('eng-imaginative', 'Writing: imaginative writing', 'writing the opening of a dystopian short story with creative devices', 'writing'),
    ],
  },

  {
    id: 'science', name: 'Science', icon: '🔬',
    board: 'KS3', mode: 'exam', markingStyle: 'science',
    paper: '3 × 30-min papers · 90 marks', examDate: '2026-06-08', examLabel: 'Big Test: 8–19 Jun', leadTeacher: 'Mr Waters',
    groups: { bio: { label: 'Biology (Paper 1)', color: '#1F8A4C' }, chem: { label: 'Chemistry (Paper 2)', color: '#E8623A' }, phys: { label: 'Physics (Paper 3)', color: '#2F6DB5' } },
    topics: [
      T('sci-plants', 'Plants & photosynthesis', 'parts of a plant, structure of the leaf and the rate of photosynthesis', 'bio'),
      T('sci-reproduction', 'Reproduction & variation', 'reproductive organs, foetal development and variation within a species', 'bio'),
      T('sci-acids', 'Acids and alkalis', 'acids, alkalis, the pH scale, indicators and neutralisation', 'chem'),
      T('sci-rocks', 'Rocks & the atmosphere', 'rock types, the rock cycle and the Earth\u2019s atmosphere', 'chem'),
      T('sci-energy', 'Energy & the particle model', 'energy transfers during heating and cooling, density and the particle model', 'phys'),
      T('sci-forces', 'Forces & speed', 'resultant forces and speed (including distance\u2013time)', 'phys'),
    ],
  },

  {
    id: 'history', name: 'History', icon: '🏛️',
    board: 'KS3', mode: 'exam', markingStyle: 'essay',
    paper: 'Big Test · 1h · 40 marks', examDate: '2026-06-08', examLabel: 'Big Test: 8–19 Jun', leadTeacher: 'Mrs Rehman',
    groups: { ref: { label: 'Reformation', color: '#8A4FB0' }, tudors: { label: 'The Tudors', color: '#E0A526' }, cw: { label: 'Civil War', color: '#E8623A' }, slavery: { label: 'Slavery', color: '#2F6DB5' } },
    topics: [
      T('hist-reformation', 'The Reformation & Henry VIII', 'Martin Luther, the printing press, Henry VIII\u2019s break from Rome and the dissolution of the monasteries', 'ref'),
      T('hist-tudors', 'The Tudors: religious rollercoaster', 'the religious changes made by Edward VI, Mary I and Elizabeth I', 'tudors'),
      T('hist-civilwar', 'The English Civil War', 'the causes of the Civil War, the execution of Charles I and Oliver Cromwell as Lord Protector', 'cw'),
      T('hist-slavery', 'Slavery', 'the start of the slave trade, the Middle Passage, the British Empire, resistance and abolition', 'slavery'),
    ],
  },

  {
    id: 'geography', name: 'Geography', icon: '🌍',
    board: 'KS3', mode: 'exam', markingStyle: 'essay',
    paper: 'Paper 1', examDate: '2026-06-08', examLabel: 'Big Test: 8–19 Jun', leadTeacher: 'Miss Austin',
    groups: { pop: { label: 'Population', color: '#E0A526' }, coasts: { label: 'Coasts', color: '#2F6DB5' }, eco: { label: 'Ecosystems', color: '#1F8A4C' }, tect: { label: 'Tectonics', color: '#E8623A' } },
    topics: [
      T('geo-population', 'Population', 'population density and distribution, overpopulation, population pyramids, ageing populations and migration', 'pop'),
      T('geo-coasts', 'Coasts', 'waves, erosion, transportation and weathering, coastal landforms (headlands, caves, arches, stacks) and management', 'coasts'),
      T('geo-ecosystems', 'Ecosystems', 'climate graphs, and the taiga and coral reefs \u2014 characteristics, threats and management', 'eco'),
      T('geo-tectonics', 'Tectonics', 'the structure of the Earth, plate margins, volcano types (shield and composite) and living with volcanoes', 'tect'),
    ],
  },

  {
    id: 're', name: 'Religious Education', icon: '🕊️',
    board: 'KS3', mode: 'exam', markingStyle: 'essay',
    paper: 'Islam, Authority & Dharmic Faiths · 45 min · 44 marks', examDate: '2026-06-08', examLabel: 'Big Test: 8–19 Jun', leadTeacher: 'Ms Burkinshaw',
    groups: { islam: { label: 'Islam', color: '#1F8A4C' }, auth: { label: 'Religious authority', color: '#2F6DB5' }, dharmic: { label: 'Dharmic faiths', color: '#E0A526' }, hindu: { label: 'Hindu Dharma', color: '#8A4FB0' } },
    topics: [
      T('re-islam', 'Islam', 'pre-Islamic Arabia, Prophet Muhammad and the Qur\u2019an, the Hijrah, the Sunni\u2013Shi\u2019a split, caliphates, the Five Pillars and Salah', 'islam'),
      T('re-authority', 'Religious authority', 'founders and living traditions, the formation of texts and influential people', 'auth'),
      T('re-dharmic', 'Introduction to Dharmic faiths', 'the origins of the Dharmic traditions, cyclical time and Dharmic traditions in the UK', 'dharmic'),
      T('re-hindu', 'Hindu Dharma', 'Brahman, the Trimurti, sacred texts, worship, festivals, rituals, pilgrimage, ahimsa and the caste system', 'hindu'),
    ],
  },

  {
    id: 'french', name: 'French', icon: '🇫🇷',
    board: 'KS3', mode: 'exam', markingStyle: 'language',
    paper: '1 hr', examDate: '2026-06-08', examLabel: 'Big Test: 8–19 Jun', leadTeacher: 'Mrs Amaro',
    groups: { g: { label: 'Topics', color: '#2F6DB5' } },
    topics: [
      T('fr-holidays', 'Holidays', 'destinations and accommodation, transport, past and imperfect tenses, opinions and future plans', 'g'),
      T('fr-freetime', 'Going out & staying in', 'present, past, near future and conditional tenses, TV and free-time vocabulary', 'g'),
      T('fr-routine', 'Daily routine, health & fitness', 'morning and daily routine, healthy eating and keeping a healthy lifestyle', 'g'),
      T('fr-school', 'School & future plans', 'describing school, extracurricular activities, jobs (future tense) and school rules', 'g'),
    ],
  },

  {
    id: 'spanish', name: 'Spanish', icon: '🇪🇸',
    board: 'KS3', mode: 'exam', markingStyle: 'language',
    paper: '1 hr', examDate: '2026-06-08', examLabel: 'Big Test: 8–19 Jun', leadTeacher: 'Mrs Amaro',
    groups: { g: { label: 'Topics', color: '#E0A526' } },
    topics: [
      T('sp-holidays', 'Holidays', 'destinations and accommodation, transport, past and imperfect tenses, opinions and future plans', 'g'),
      T('sp-freetime', 'Going out & staying in', 'present, past, near future and conditional tenses, TV and free-time vocabulary', 'g'),
      T('sp-routine', 'Daily routine, health & fitness', 'morning and daily routine, healthy eating and keeping a healthy lifestyle', 'g'),
      T('sp-school', 'School & future plans', 'describing school, extracurricular activities, jobs (future tense) and school rules', 'g'),
    ],
  },

  {
    id: 'computing', name: 'Computing', icon: '💻',
    board: 'KS3', mode: 'exam', markingStyle: 'science',
    paper: 'Big Test · 1h · 70 marks', examDate: '2026-06-08', examLabel: 'Big Test: 8–19 Jun', leadTeacher: 'Ms Rashid',
    groups: { g: { label: 'Networks & programming', color: '#8A4FB0' } },
    topics: [
      T('comp-networks', 'Networks & hardware', 'what a computer network is, advantages and disadvantages, and the hardware needed to connect devices', 'g'),
      T('comp-internet', 'The internet & the World Wide Web', 'how data travels across the internet and the difference between the internet, its services and the WWW', 'g'),
      T('comp-os', 'Operating systems & interfaces', 'what an operating system is, and GUI versus CLI', 'g'),
      T('comp-python', 'Python programming', 'displaying messages, variables, keyboard input and simple arithmetic in Python', 'g'),
      T('comp-html', 'HTML & web design', 'what HTML is, the features of a website and the basics of good web design', 'g'),
    ],
  },

  {
    id: 'food', name: 'Food Technology', icon: '🍳',
    board: 'KS3', mode: 'exam', markingStyle: 'essay',
    paper: 'Paper 1 · 45 min · 50 marks', examDate: '2026-06-08', examLabel: 'Big Test: 8–19 Jun', leadTeacher: 'Mrs Stack',
    groups: { g: { label: 'Food & nutrition', color: '#1F8A4C' } },
    topics: [
      T('food-hygiene', 'Hygiene & safety', 'the danger zone, coloured chopping boards and cross-contamination', 'g'),
      T('food-storage', 'Storage & food safety', 'the fridge and freezer, and the role of the Environmental Health Officer', 'g'),
      T('food-fat', 'Fats & obesity', 'the function and sources of fat, how to reduce fat intake, and obesity', 'g'),
      T('food-protein', 'Protein', 'the function and sources of protein, and vegetarian diets', 'g'),
    ],
  },

  {
    id: 'music', name: 'Music', icon: '🎵',
    board: 'KS3', mode: 'exam', markingStyle: 'essay',
    paper: 'Big Test · 30 min · 30 marks', examDate: '2026-06-08', examLabel: 'Big Test: 8–19 Jun', leadTeacher: 'Mr Gamble',
    groups: { g: { label: 'Topic', color: '#E8623A' } },
    topics: [
      T('mus-hooks', 'Hooks & riffs', 'what hooks and riffs are, how they are built and repeated, and how they are used in songs', 'g'),
    ],
  },

  {
    id: 'art', name: 'Art', icon: '🎨',
    board: 'KS3', mode: 'portfolio', markingStyle: 'essay',
    paper: 'Maori Art page · practical', examDate: null, examLabel: 'Practical project', leadTeacher: 'Mrs Aspden',
    checklist: [
      'Page layout & composition: a watercolour background with two circles.',
      'Graphite transferring: transfer graffiti-style images of the artist\u2019s (Margaret Bremner) work.',
      'Facts & annotations: break down and annotate the artist\u2019s work.',
      'Watercolour blending: blend from dark to light tones.',
      'Maori patterns: add Maori patterns and designs to the two circle designs.',
      'Knowledge: recall facts about and analyse the artist\u2019s work.',
    ],
  },

  {
    id: 'drama', name: 'Drama', icon: '🎭',
    board: 'KS3', mode: 'portfolio', markingStyle: 'essay',
    paper: 'Performance · practical', examDate: null, examLabel: 'Practical assessment', leadTeacher: 'Mrs McLellan',
    checklist: [
      'Rehearsal: rehearse at least six times with focus, safety and control, contributing ideas to your group.',
      'Performance: use conventions confidently with clear characterisation (tone, facial expression, body language, use of space).',
      'Stay in character: sustain the role without laughing and face the audience throughout.',
      'Responding: discuss the elements of performance and analyse strengths and weaknesses.',
      'Listen & develop: build on or challenge others\u2019 ideas and use drama terminology confidently.',
      'Conventions: physical theatre, narration, direct address and still image.',
    ],
  },

  {
    id: 'dt', name: 'Design Technology', icon: '📐',
    board: 'KS3', mode: 'portfolio', markingStyle: 'essay',
    paper: 'Workshop project · practical', examDate: null, examLabel: 'Practical project', leadTeacher: 'Ms McBride',
    checklist: [
      'Workshop safety: explain why safety rules matter and name the PPE used (goggles, apron, dust mask) and why it is worn.',
      'Hand tools: use hand tools safely, secure material before cutting, and use correct posture and grip.',
      'Coping saw: hold and use it safely, cut accurately along a line, and turn the material (not the saw) on curves.',
      'Filing & sanding: choose coarse vs fine abrasives and work safely to shape and smooth.',
      'Good finish: explain why a smooth finish matters before decorating.',
      'Pillar drill safety: clamp material securely and understand the dangers of loose clothing/long hair.',
      'Design task: identify the brief, research ideas, create annotated sketches and explain how the design meets the user\u2019s needs.',
      'Designing for the future: generate original ideas, consider sustainability, and evaluate and improve.',
    ],
  },
];

export const SUBJECTS_LIST = SUBJECTS;
export const SUBJECTS_BY_ID = Object.fromEntries(SUBJECTS.map((s) => [s.id, s]));

export function topicsByGroup(subject) {
  const grouped = {};
  for (const key of Object.keys(subject.groups || {})) grouped[key] = [];
  for (const t of subject.topics || []) {
    if (!grouped[t.group]) grouped[t.group] = [];
    grouped[t.group].push(t);
  }
  return grouped;
}

export const PPE = { name: 'Y8 Summer Big Test', window: '8–19 June 2026' };
