import { Experience, Project, Education, Achievement, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Madhumitha V D',
  title: 'AI & Data Science Student | Software Developer',
  subtitle: 'Building intelligent, data-driven and scalable digital experiences.',
  shortBio:
    'Software Developer with hands-on experience in AI, full-stack development, and data analytics, passionate about turning ideas into practical and scalable solutions.',
  summary:
    'Madhumitha V D is a Software Developer with hands-on experience in AI, full-stack development, and data analytics through multiple internships. She is pursuing B.Tech in Artificial Intelligence and Data Science with a CGPA of 8.86. She is proficient in Python, SQL, HTML, CSS and JavaScript, with strong problem-solving skills and a passion for building scalable applications.',
  phone: '+91-7550007409',
  email: 'vdmadhu05@gmail.com',
  githubUsername: 'vdmadhu',
  githubUrl: 'https://github.com/vdmadhu',
  linkedinUsername: 'madhumitha-v-d-2317b2272',
  linkedinUrl: 'https://www.linkedin.com/in/madhumitha-v-d-2317b2272',
  location: 'Chennai, India',
  cgpa: '8.86',
  degree: 'B.Tech in Artificial Intelligence and Data Science',
  college: 'Sri Sairam Institute of Technology, Chennai',
  brandingStatement: 'Building intelligent solutions with AI, data and software.',
  keywords: [
    'AI',
    'Data Science',
    'Software Development',
    'Full Stack',
    'Machine Learning',
    'Analytics',
    'Computer Vision',
    'NLP',
  ],
};

export const HERO_HIGHLIGHTS = [
  { label: 'Academic Standing', value: '8.86 CGPA', detail: 'Consistent excellence' },
  { label: 'Degree Track', value: 'B.Tech AI & Data Science', detail: 'Sri Sairam Inst. of Tech' },
  { label: 'Practical Exposure', value: '4 Internship Experiences', detail: 'Industry hands-on' },
  { label: 'Core Capabilities', value: 'AI • Data • Full Stack', detail: 'Applied technical systems' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Foundational algorithmic and application development languages',
    skills: [
      { name: 'Python', level: 'Proficient' },
      { name: 'C', level: 'Proficient' },
      { name: 'Java (Beginner)', level: 'Beginner' },
    ],
  },
  {
    id: 'web',
    title: 'Web Technologies',
    description: 'Front-end interfaces and lightweight server routing',
    skills: [
      { name: 'HTML', level: 'Proficient' },
      { name: 'CSS', level: 'Proficient' },
      { name: 'JavaScript', level: 'Proficient' },
      { name: 'Basic Flask', level: 'Beginner' },
    ],
  },
  {
    id: 'ai-data',
    title: 'Data Science / AI',
    description: 'Machine learning, numerical computation, and model pipelines',
    skills: [
      { name: 'NumPy', level: 'Proficient' },
      { name: 'Pandas', level: 'Proficient' },
      { name: 'OpenCV', level: 'Proficient' },
      { name: 'Matplotlib', level: 'Proficient' },
      { name: 'Scikit-learn', level: 'Proficient' },
      { name: 'TensorFlow', level: 'Proficient' },
      { name: 'Keras', level: 'Proficient' },
    ],
  },
  {
    id: 'database',
    title: 'Databases / Cloud',
    description: 'Relational data structures, querying, and schema design',
    skills: [
      { name: 'SQL', level: 'Proficient' },
      { name: 'MySQL', level: 'Proficient' },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    description: 'Integrated environments, cloud notebooks, and version control',
    skills: [
      { name: 'VS Code', level: 'Proficient' },
      { name: 'GitHub', level: 'Proficient' },
      { name: 'Jupyter Notebook', level: 'Proficient' },
      { name: 'Google Colab', level: 'Proficient' },
    ],
  },
  {
    id: 'coursework',
    title: 'Relevant Coursework',
    description: 'Core computer science and intelligence curricula',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'Machine Learning' },
      { name: 'Design and Analysis of Algorithms' },
      { name: 'Database Management System' },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    description: 'Collaboration, adaptability, and leadership qualities',
    skills: [
      { name: 'Problem Solving' },
      { name: 'Communication' },
      { name: 'Self-learning' },
      { name: 'Adaptability' },
      { name: 'Leadership' },
      { name: 'Proficiency with AI tools' },
    ],
  },
  {
    id: 'interests',
    title: 'Areas of Interest',
    description: 'Passionate domains for continuous exploration and build-out',
    skills: [
      { name: 'Web Design' },
      { name: 'Software Development' },
      { name: 'Cloud Security' },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-fullstack',
    role: 'Full Stack Development Intern',
    company: 'Big-Si-Bucks Innovation Private Limited',
    duration: 'Nov 2025 – Dec 2025',
    domain: 'Full Stack',
    responsibilities: [
      'Developed and maintained dynamic web applications.',
      'Collaborated across front-end and back-end integration layers.',
      'Implemented clean interfaces using HTML, CSS, and JavaScript.',
      'Engineered responsive, accessible, and user-friendly interface designs.',
    ],
    techTags: ['HTML', 'CSS', 'JavaScript', 'Full Stack Development'],
  },
  {
    id: 'exp-ai-saksham',
    role: 'AI Engineer Intern – Transformative Learning with TechSaksham',
    company: 'Edunet Foundations',
    duration: 'Feb 2025 – Mar 2025',
    domain: 'AI Engineering',
    responsibilities: [
      'Developed an AI-powered resume screening and ranking system.',
      'Applied NLP techniques to parse and analyze unstructured candidate resumes.',
      'Engineered algorithmic matching between candidate profiles and job descriptions.',
      'Automated high-throughput, objective candidate shortlisting for hiring efficiency.',
    ],
    techTags: ['AI', 'NLP', 'Resume Analysis', 'Ranking Systems'],
  },
  {
    id: 'exp-data-analyst',
    role: 'Data Analyst Intern',
    company: 'Vebbox Software Solutions, Chennai',
    location: 'Chennai',
    duration: 'Aug 2024 – Feb 2025',
    domain: 'Data Analytics',
    responsibilities: [
      'Conducted end-to-end data analysis and reporting to support strategic business decision-making.',
      'Built interactive executive dashboards and visual analytics using Power BI and SQL.',
      'Extracted clean datasets and generated data-driven actionable business insights.',
    ],
    techTags: ['Power BI', 'SQL', 'Data Analytics', 'Data Visualization'],
  },
  {
    id: 'exp-data-science',
    role: 'Data Science Intern',
    company: 'Pumo Technologies, Chennai',
    location: 'Chennai',
    duration: 'May 2024 – Jun 2024',
    domain: 'Data Science',
    responsibilities: [
      'Developed data-driven analytical solutions for real-world datasets.',
      'Leveraged Python, SQL, and machine learning techniques for model pipelines.',
      'Executed systematic data cleaning, outlier handling, and preprocessing routines.',
      'Created analytical visualizations and built predictive models for business insights.',
    ],
    techTags: [
      'Python',
      'SQL',
      'Machine Learning',
      'Data Preprocessing',
      'Visualization',
      'Predictive Modeling',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'rag-system',
    title: 'Local LLM-Powered Semantic Retrieval System (RAG)',
    category: 'AI / ML',
    description:
      'Built a fully local Retrieval-Augmented Generation (RAG) pipeline where users can drop in documents and receive context-aware answers without sending their data to a cloud API.',
    problem:
      'Enterprise and academic environments require privacy-guaranteed document querying without transmitting sensitive text files to third-party commercial cloud APIs.',
    solution:
      'Engineered an offline-first RAG architecture that processes uploaded documents, computes dense mathematical vector embeddings locally, and queries a local LLM through zero-cloud containerized inference.',
    technicalConcept:
      'Local vector similarity search (cosine distance) paired with local language model context grounding via Docker.',
    techStack: ['Local LLM', 'Vector Database', 'Docker', 'Python'],
    architectureFlow: [
      { label: 'Document', sublabel: 'PDF / Text Input' },
      { label: 'Embeddings', sublabel: 'Local Vector Model' },
      { label: 'Vector Database', sublabel: 'Indexed Similarity' },
      { label: 'Retrieval', sublabel: 'Top-K Context' },
      { label: 'Local LLM', sublabel: 'Zero Cloud / Offline', accent: true },
      { label: 'Answer', sublabel: 'Grounded Response' },
    ],
    highlights: [
      '100% air-gapped local execution preventing data leaks',
      'High-speed vector similarity indexing with nearest-neighbor search',
      'Containerized deployment via Docker for cross-platform portability',
    ],
  },
  {
    id: 'resume-screening',
    title: 'AI-Powered Resume Screening & Ranking System',
    category: 'AI / ML',
    description:
      'Designed an AI system to screen and rank resumes based on job requirements, helping improve hiring efficiency.',
    problem:
      'Recruiters spend hundreds of hours manually parsing varied resume formats, introducing cognitive fatigue and subjective selection bias.',
    solution:
      'Constructed an intelligent natural language processing pipeline that ingests heterogeneous resumes, extracts canonical skill tokens, and computes match relevance against role specifications.',
    technicalConcept:
      'Tokenization, entity extraction, TF-IDF/vector space weighting, and algorithmic candidate ranking.',
    techStack: ['Python', 'NLP', 'Resume Analysis', 'Ranking Systems', 'Scikit-learn'],
    architectureFlow: [
      { label: 'Resume', sublabel: 'Candidate Profiles' },
      { label: 'NLP Processing', sublabel: 'Token & POS Clean' },
      { label: 'Skill Extraction', sublabel: 'Named Entity Logic' },
      { label: 'Job Matching', sublabel: 'Weighted Similarity' },
      { label: 'Ranking', sublabel: 'Score Matrix' },
      { label: 'Shortlist', sublabel: 'Automated Cohort', accent: true },
    ],
    highlights: [
      'Automated extraction of technical skills and experiential keywords',
      'Fair, deterministic ranking based on verifiable job description criteria',
      'Significant reduction in initial recruiter triage cycle time',
    ],
  },
  {
    id: 'smart-expense-ai',
    title: 'Smart Expense AI',
    category: 'Full Stack',
    description:
      'Built an AI-powered expense tracker with OCR receipt scanning, analytics and secure authentication.',
    problem:
      'Manual expense bookkeeping leads to lost receipts, forgotten entries, and lack of visual visibility into spending categories.',
    solution:
      'Developed a modern full-stack web application featuring camera/image OCR scanning to parse receipt totals, dates, and vendors automatically, paired with secure user sessions and interactive spending charts.',
    technicalConcept:
      'Client-side optical character recognition (OCR) parsing, typed database schemas, and authenticated analytical dashboards.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'Firebase',
      'Tesseract.js',
    ],
    architectureFlow: [
      { label: 'Receipt', sublabel: 'Image Capture' },
      { label: 'OCR', sublabel: 'Tesseract Engine' },
      { label: 'Data Extraction', sublabel: 'Regex & Date Parse' },
      { label: 'Expense Categorization', sublabel: 'Budget Rules' },
      { label: 'Analytics', sublabel: 'Visual Dashboard', accent: true },
    ],
    highlights: [
      'Client-side OCR processing with Tesseract.js for fast receipt digitizing',
      'Robust schema persistence with Prisma and secure Firebase authentication',
      'Interactive financial breakdown visualizations by category and timestamp',
    ],
  },
  {
    id: 'dominant-color-analysis',
    title: 'Dominant Color Analysis from Image',
    category: 'Computer Vision',
    description:
      'Applied K-means clustering to extract meaningful color palettes from images, with practical applications in e-commerce cataloguing and design workflows.',
    problem:
      'Design systems and e-commerce catalogs need objective, automated color palette extraction from product images without subjective manual color picking.',
    solution:
      'Implemented an unsupervised computer vision pipeline that transforms pixel matrices into an RGB 3D feature space and executes K-Means clustering to discover dominant cluster centroids.',
    technicalConcept:
      'Unsupervised K-means clustering over flattened 3D RGB pixel arrays with proportional area frequency sorting.',
    techStack: ['Python', 'Image Processing', 'K-means Clustering', 'OpenCV', 'NumPy', 'Matplotlib'],
    architectureFlow: [
      { label: 'Image', sublabel: 'Input Asset' },
      { label: 'Pixel Data', sublabel: '3D RGB Matrix' },
      { label: 'K-means', sublabel: 'Cluster Convergence' },
      { label: 'Color Clusters', sublabel: 'Centroid Coordinates' },
      { label: 'Palette', sublabel: 'Proportional Hex Swatches', accent: true },
    ],
    highlights: [
      'Vectorized pixel processing using NumPy and OpenCV matrix transforms',
      'Optimal centroid discovery with Scikit-learn K-Means clustering',
      'Direct utility for automated e-commerce merchandise catalog tagging',
    ],
  },
];

export const EDUCATION_DATA: Education = {
  degree: 'B.Tech in Artificial Intelligence and Data Science',
  institution: 'Sri Sairam Institute of Technology, Chennai',
  location: 'Chennai, Tamil Nadu',
  duration: '2026 – Present',
  cgpa: '8.86',
  coursework: [
    'Data Structures & Algorithms',
    'Design and Analysis of Algorithms',
    'Machine Learning',
    'Database Management System',
    'Operating Systems',
    'Computer Networks',
  ],
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ieee-yesist12',
    title: 'IEEE Yesist12 Grand Finale – Malaysia',
    subtitle: 'International Project Pitch & Presentation',
    description:
      'Selected for the prestigious IEEE Yesist12 Grand Finale in Malaysia in August 2025 and pitched the project on an international platform before global technical experts and researchers.',
    featured: true,
    type: 'international',
    tag: 'International Grand Finale',
    dateOrDuration: 'August 2025',
    bulletPoints: [
      'Represented institution on an international stage in Malaysia',
      'Defended technical methodology and societal impact before an international jury',
      'Selected after rigorous multi-tier regional and national technical screenings',
    ],
  },
  {
    id: 'nptel-star',
    title: 'NPTEL STAR Certification (15+ Courses)',
    subtitle: 'Ministry of Education / IITs Online Learning',
    description:
      'Completed 15+ rigorous technical and computational courses through NPTEL with verified distinction. Recognized and awarded the prestigious NPTEL STAR credential.',
    featured: false,
    type: 'certification',
    tag: 'Academic Distinction',
    bulletPoints: [
      'Certified as NPTEL STAR: Discipline',
      'Certified as NPTEL STAR: Believer',
      'Certified as NPTEL STAR: Motivated Learner',
    ],
  },
  {
    id: 'research-publications',
    title: 'Research Paper Publications',
    subtitle: 'Applied Engineering & Societal Solutions',
    description:
      'Published academic research papers investigating climate-resilient technologies and automated drone rescue systems.',
    featured: false,
    type: 'research',
    tag: 'Peer-Reviewed Research',
    bulletPoints: [
      'Paper Project: Climate Resilient Agricultural Enhancement',
      'Paper Project: Geo Rescue Drone',
    ],
  },
  {
    id: 'pals-iit-madras',
    title: 'PALS / IIT Madras Research Park Workshop',
    subtitle: '3-Day Immersive Technical Program',
    description:
      'Completed an intensive 3-day technical workshop at IIT Madras Research Park through the PALS initiative, focusing on advanced engineering practices and industrial innovation.',
    featured: false,
    type: 'workshop',
    tag: 'Elite Industrial Workshop',
  },
  {
    id: 'ibm-genai',
    title: 'IBM Generative AI Technical Workshop',
    subtitle: 'Modern AI Architecture & Applications',
    description:
      'Successfully completed a specialized Generative AI workshop conducted by IBM, gaining hands-on exposure to foundational models, modern generative architectures, and practical application patterns.',
    featured: false,
    type: 'workshop',
    tag: 'Enterprise AI Workshop',
  },
];
