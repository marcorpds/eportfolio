export const navItems = [
  ['about', 'About'],
  ['projects', 'Projects'],
  ['certificates', 'Certificates'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
];

const imageBase = import.meta.env.BASE_URL;
const placeholderImage = `${imageBase}images/project-placeholder.svg`;

export const socials = [
  { id: 'linkedin', label: 'LinkedIn', href: '#contact' },
  { id: 'github', label: 'GitHub', href: '#contact' },
  { id: 'youtube', label: 'YouTube', href: '#contact' },
  { id: 'mail', label: 'Email', href: 'mailto:marco@example.com' },
];

export const skills = [
  'Java',
  'C#',
  'C++',
  'SQL',
  'JavaScript',
  'HTML',
  'CSS',
  'MATLAB',
  'React',
  'Node.js',
  'Express.js',
  'REST APIs',
  'Oracle APEX',
  'Microsoft Power Apps',
  'MariaDB',
  'MySQL',
  'Oracle Database',
  'SharePoint Lists',
  'Git',
  'GitHub',
  'GitLab',
  'Jira',
  'Figma',
  'XAMPP',
  'Postman',
  'Visual Studio Code',
  'Software Development Lifecycle (SDLC)',
  'Agile',
  'Scrum',
  'Kanban',
  'Waterfall',
  'Requirements Analysis',
  'Database Design',
  'ChatGPT',
  'Codex',
  'Ollama',
  'Claude',
  'Prompt Engineering',
  'AI-Assisted Development',
  'Debugging',
  'Documentation',
  'Research',
];

export const services = [
  {
    icon: 'code',
    title: 'Web Development',
    body: 'Building responsive and accessible web applications with modern technologies.',
  },
  {
    icon: 'database',
    title: 'Data Processing',
    body: 'Transforming and analysing data to extract insights and support decisions.',
  },
  {
    icon: 'project',
    title: 'Project Planning',
    body: 'Planning, tracking, and delivering projects efficiently and on time.',
  },
];

export const projects = [
  {
    year: '2026',
    title: 'Bright Ideas Competition - SmartKitchen',
    description: 'Built an innovative smart kitchen concept for the Bright Ideas Competition.',
    tags: ['Entrepreneurship', 'Innovation', 'Presentation'],
    image: placeholderImage,
    featured: false,
  },
  {
    year: '2025',
    title: 'Network Design',
    description: 'Designed and simulated a secure network using Cisco Packet Tracer.',
    tags: ['Cisco Packet Tracer', 'Network Design'],
    image: placeholderImage,
    featured: true,
  },
  {
    year: '2025',
    title: 'Google Docs Table Data to Array',
    description: 'Python script that converts table data from Google Docs into clean arrays.',
    tags: ['Python', 'Pandas', 'Google Docs'],
    image: placeholderImage,
    featured: true,
  },
  {
    year: '2025',
    title: 'Application Design and Clickable Prototype',
    description: 'Designed and prototyped a user-friendly application with Figma.',
    tags: ['Figma', 'Design', 'Wondershare Filmora'],
    image: placeholderImage,
    featured: true,
  },
  {
    year: '2024',
    title: 'Data Structures Visualizer',
    description: 'Interactive web app to visualize common data structures and algorithms.',
    tags: ['JavaScript', 'D3.js', 'Algorithms'],
    image: placeholderImage,
    featured: false,
  },
  {
    year: '2024',
    title: 'Personal Portfolio Website',
    description: 'Developed a responsive portfolio to showcase projects and experience.',
    tags: ['React', 'SCSS', 'Responsive Design'],
    image: placeholderImage,
    featured: false,
  },
];

export const certificates = [
  {
    year: '2024',
    title: 'Python Programming',
    description: 'Practical programming foundations with Python, files, data structures, and automation.',
    tags: ['Python', 'Programming', 'Automation'],
    image: placeholderImage,
  },
  {
    year: '2024',
    title: 'Cisco Networking Essentials',
    description: 'Networking fundamentals covering protocols, routing basics, and secure topologies.',
    tags: ['Cisco', 'Networking', 'Security'],
    image: placeholderImage,
  },
  {
    year: '2023',
    title: 'Data Structures & Algorithms',
    description: 'Core algorithmic thinking, complexity, and data structure implementation.',
    tags: ['Algorithms', 'Data Structures', 'Problem Solving'],
    image: placeholderImage,
  },
  {
    year: '2023',
    title: 'Database Design Fundamentals',
    description: 'Relational database design, normalization, SQL queries, and schema planning.',
    tags: ['SQL', 'Databases', 'Modelling'],
    image: placeholderImage,
  },
];

export const experience = [
  {
    date: '2024 - Present',
    title: 'Computer Science Student',
    place: 'University of Example',
    type: 'Full-time',
    tags: ['Computer Science', 'Software Development', 'Databases'],
    link: '#contact',
  },
  {
    date: 'Jan 2023 - Dec 2023',
    title: 'Academic Project Contributor',
    place: 'University Projects',
    type: 'Part-time',
    tags: ['Teamwork', 'Research', 'Project Delivery'],
    link: '#contact',
  },
  {
    date: '2022 - Present',
    title: 'Freelance Developer',
    place: 'Personal Projects',
    type: 'Self-employed',
    tags: ['React', 'Web Development', 'Client Projects'],
    link: '#contact',
  },
];
