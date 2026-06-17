export const navItems = [
  ["about", "About"],
  ["projects", "Projects"],
  ["certificates", "Certificates"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

const dataBase = import.meta.env.BASE_URL;
const placeholderImage = `${dataBase}images/project-placeholder.svg`;
const linkedinLink = "http://www.linkedin.com/in/marco-pereira-da-silva-195480330";
const githubLink = "https://github.com/marcorpds?tab=repositories";
const youtubeLink = "https://www.youtube.com/@MarcoSilva-hh6hl";
const contactLink = "mailto:marcoruisilva@gmail.com";
const eportfolioRepoLink = "https://github.com/marcorpds/eportfolio";

export const socials = [
  { id: "linkedin", label: "LinkedIn", href: linkedinLink },
  { id: "github", label: "GitHub", href: githubLink },
  { id: "youtube", label: "YouTube", href: youtubeLink },
  { id: "mail", label: "Email", href: contactLink },
];

export const skillRows = [
  [
    "Java",
    "C#",
    "C++",
    "SQL",
    "JavaScript",
    "HTML",
    "CSS",
    "MATLAB",
    "React",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MariaDB",
    "MySQL",
    "Oracle Database",
    "Database Design",
  ],
  [
    "Oracle APEX",
    "Microsoft Power Apps",
    "SharePoint Lists",
    "Git",
    "GitHub",
    "GitLab",
    "Jira",
    "Figma",
    "XAMPP",
    "Postman",
    "Visual Studio Code",
    "Software Development Lifecycle (SDLC)",
    "Agile",
    "Scrum",
    "Kanban",
    "Waterfall",
    "Requirements Analysis",
    "ChatGPT",
    "Codex",
    "Ollama",
    "Claude",
    "Prompt Engineering",
    "AI-Assisted Development",
    "Debugging",
    "Documentation",
    "Research",
  ],
];

export const skills = skillRows.flat();

export const services = [
  {
    icon: "code",
    title: "Web Development",
    body: "Building responsive and accessible web applications with modern technologies.",
  },
  {
    icon: "engineering",
    title: "Software Engineering",
    body: "Designing and developing reliable software solutions using modern development practices.",
  },
  {
    icon: "project",
    title: "Project Planning",
    body: "Planning, tracking, and delivering projects efficiently and on time.",
  },
];

const cseconnectLink = "https://www.cseconnect.org/";
const traveljabsReactRepoLink = "https://github.com/marcorpds/react-traveljabs";
const traveljabsExpressRepoLink = "https://github.com/marcorpds/express-traveljabs";
const expensetrackerLink = "https://apps.powerapps.com/open/f6f33c58-e3da-4c72-9270-f335a381f033?tenantId=c9ef029c-18cf-4016-86d3-93cf8e94ff94&hint=fe08a7eb-efb9-46ed-a2c2-c21d54360f81&sourcetime=1781720715006&source=portal&environmentName=default-c9ef029c-18cf-4016-86d3-93cf8e94ff94";
const expensetrackerLogbookLink = `${dataBase}documents/Expense Tracker Logbook.pdf`;
const expenseTrackerDocumentationLink = `${dataBase}documents/Expense Tracker Documentation.pdf`;
const cvbuilderVideoLink = "https://www.youtube.com/watch?v=8_oSevZN76I&t=417s";
const brightideasLink = "https://www.kingston.ac.uk/about/news/bright-ideas-grand-final-showcases-kingston-university-students-innovation-0";
const smartkitchenPresentationLink = `${dataBase}documents/Smart Kitchen Presentation.pdf`;
const smartkitchenSlidesLink = `${dataBase}documents/Smart Kitchen Slides.pptx`;
const networkdesignReportLink = `${dataBase}documents/Network Design Report.pdf`;
const networkdesignPacketTracerLink = `${dataBase}documents/Network Design Packet Tracer.pkt`;
const tabledatatoarrayRepoLink = "https://github.com/marcorpds/GoogleDocsDataToArray";
const gamesportalprototypeFigmaLink = "https://www.figma.com/@gamesportal";
const gamesportalprototypeReportLink = `${dataBase}documents/GamesPortal Prototype Documentation.pdf`;
const gamesportalprototypeVideoLink = "https://www.youtube.com/watch?v=WH98CB0i6zE&t=88s";
const thepitchLogbookLink = `${dataBase}documents/The Pitch Logbook.pdf`;
const thepitchSlidesLink = `${dataBase}documents/The Pitch Slides.pptx`;
const thepitchVideoLink = "https://www.youtube.com/watch?v=j2XGXqOvmWU";
const cardgamesRepoLink = "https://github.com/marcorpds/P1CardsGameBasicImages";
const imagetohexadecimalRepoLink = "https://github.com/marcorpds/ImageToHexArray";
const gamesportalLogbookLink = `${dataBase}documents/GamesPortal Design Logbook.pdf`;
const gamesportalDocumentationLink = `${dataBase}documents/GamesPortal Design Documentation.pdf`;
const impactofaiCCLogbookLink = `${dataBase}documents/Impact of AI Code of Conduct and Logbook.pdf`;
const impactofaiReportLink = `${dataBase}documents/Impact of AI Report.pdf`;
const impactofaiSlidesLink = `${dataBase}documents/Impact of AI Slides.pptx`;
const impactofaiVideoLink = "https://www.youtube.com/watch?v=w_-pJaixUlo";
const programcalculatorRepoLink = "https://github.com/marcorpds/ProgramCalculatorV1";

export const projects = [
  {
    year: "2026",
    title: "CSE Connect AppFactory - FacilityHub (In Progress)",
    description:
      "FacilityHub is a web-based platform designed to improve the management of maintenance and service requests within office environments. As part of Kingston University's Summer Internship Programme with CSE Connect, I am working within an Agile development team to gather requirements, create user stories, design system functionality, and contribute to the development of the application. This project has provided valuable experience working with stakeholders and applying software engineering principles to a real-world business solution.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "Agile",
      "Kanban",
      "SDLC",
      "Requirements Engineering",
      "Figma",
    ],
    image: `${dataBase}images/CSE Connect AppFactory - FacilityHub Image.jpg`,
    link: `${dataBase}images/CSE Connect AppFactory - FacilityHub Image.jpg`,
    links: [{ label: "CSE Connect", href: cseconnectLink, type: "link" }],
    featured: true,
  },
  {
    year: "2026",
    title: "ePortfolio Website",
    description:
      "This portfolio was developed to showcase my projects, technical skills, certifications, and professional experience. I designed and built the website using React, creating reusable components, responsive layouts, and interactive project showcases. The completed website serves as a central platform for demonstrating my academic achievements, technical development, and professional growth as a Computer Science student.",
    tags: ["React", "JavaScript", "HTML", "CSS", "Responsive Design", "UI Design"],
    image: `${dataBase}images/ePortfolio Website Image.jpg`,
    link: `${dataBase}images/ePortfolio Website Image.jpg`,
    links: [{ label: "Repository", href: eportfolioRepoLink, type: "github" }],
    featured: false,
  },
  {
    year: "2026",
    title: "TravelJabs Clinics Management System",
    description:
      "TravelJabs is a full-stack clinic management system developed as part of a university project. I designed the database structure, developed REST API functionality, and implemented user interfaces for managing appointments, patient records, vaccinations, and invoices. The completed system successfully supports clinic operations through role-based access control, appointment scheduling, and secure data management.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MariaDB",
      "REST API",
      "Database Design",
      "Full Stack Development",
    ],
    image: `${dataBase}images/TravelJabs Clinics Management System Image.jpg`,
    link: `${dataBase}images/TravelJabs Clinics Management System Image.jpg`,
    links: [
      { label: "React", href: traveljabsReactRepoLink, type: "github" },
      { label: "Express", href: traveljabsExpressRepoLink, type: "github" },
    ],
    featured: true,
  },
  {
    year: "2026",
    title: "Student Expense Tracker",
    description:
      "The Student Expense Tracker was developed using Microsoft Power Apps and SharePoint Lists to help students manage their finances more effectively. In this group project I was resposible of creating functionality for recording transactions, setting budgets, filtering financial data, and generating visual reports through charts and dashboards. The completed application provides users with a clear overview of their spending habits and supports informed budgeting decisions.",
    tags: [
      "Microsoft Power Apps",
      "SharePoint Lists",
      "Data Visualisation",
      "Business Applications",
    ],
    image: `${dataBase}images/Student Expense Tracker Image.jpg`,
    link: `${dataBase}images/Student Expense Tracker Image.jpg`,
    links: [
      { label: "PowerApps", href: expensetrackerLink, type: "link" },
      { label: "Logbook", href: expensetrackerLogbookLink, type: "document" },
      { label: "Documentation", href: expenseTrackerDocumentationLink, type: "document" },
    ],
    featured: false,
  },
  {
    year: "2026",
    title: "CV Builder",
    description:
      "This desktop application was developed using Java Swing to assist users in creating and managing professional CVs. I implemented a structured graphical interface, file handling functionality, and applied the Model-View-Controller (MVC) architectural pattern to improve maintainability and organisation. The final application allows users to efficiently create, edit, load, and save CV information through a user-friendly interface.",
    tags: ["Java", "Java Swing", "MVC", "Object-Oriented Programming", "Desktop Applications"],
    image: `${dataBase}images/CV Builder Image.jpg`,
    link: `${dataBase}images/CV Builder Image.jpg`,
    links: [
      { label: "Presentation", href: cvbuilderVideoLink, type: "youtube" },
    ],
    featured: false,
  },
  {
    year: "2026",
    title: "Bright Ideas Competition - SmartKitchen",
    description:
      "SmartKitchen was a concept developed for the Bright Ideas Competition, where I created a technology-driven solution to reduce household food waste while promoting healthy eating habits. This involved market research, product planning, business modelling, and presentation development while helping define features such as inventory management, expiry tracking, recipe recommendations, and AI-assisted meal planning. The project progressed to the finalist stage and demonstrated how technology can be used to address sustainability and health challenges.",
    tags: [
      "Aritificial Intelligence",
      "Entrepreneurship",
      "Innovation",
      "Business Analysis",
      "Product Design",
      "Presentation Skills",
    ],
    image: `${dataBase}images/Bright Ideas Competition - SmartKitchen Image.jpg`,
    link: `${dataBase}images/Bright Ideas Competition - SmartKitchen Image.jpg`,
    links: [
      { label: "Bright Ideas", href: brightideasLink, type: "link" },
      { label: "Presentation", href: smartkitchenPresentationLink, type: "document" },
      { label: "Slides", href: smartkitchenSlidesLink, type: "download" },
    ],
    featured: true,
  },
  {
    year: "2025",
    title: "Network Design",
    description:
      "This project involved designing and simulating a secure computer network using Cisco Packet Tracer. I configured network devices, implemented IP addressing schemes, applied subnetting techniques, and tested connectivity across multiple network segments. The completed design demonstrated an understanding of networking principles and secure network architecture.",
    tags: ["Cisco Packet Tracer", "Network Design", "Subnetting", "IP Addresses"],
    image: `${dataBase}images/Network Assigment Image.jpg`,
    link: `${dataBase}images/Network Assigment Image.jpg`,
    links: [
      { label: "Documentation", href: networkdesignReportLink, type: "document" },
      { label: "Packet Tracer", href: networkdesignPacketTracerLink, type: "download" },
    ],
    featured: false,
  },
  {
    year: "2025",
    title: "Google Docs Table Data to Array",
    description:
      "This Python project was developed to automate the conversion of table data from Google Docs document into a structured array for processing a secret message. I created functionality to extract and transform tabular information into a format suitable for displaying the information on the terminal. The final solution revealed the secret message successfully.",
    tags: ["Python", "Pandas", "Google Docs", "Data Processing", "Arrays"],
    image: `${dataBase}images/Google Docs Table Data to Array Image.jpg`,
    link: `${dataBase}images/Google Docs Table Data to Array Image.jpg`,
    links: [
      { label: "Repository", href: tabledatatoarrayRepoLink, type: "github" },
    ],
    featured: false,
  },
  {
    year: "2025",
    title: "GamesPortal Prototype",
    description:
      "This project focused on designing and developing  a digital games marketplace inspired by modern online distribution platforms. Using stakeholder analysis, gathered requirements, and wireframes, from the past GamesPortal Prototype project, we as a group designed an interactive application using Figma. The final product demonstrated complete user journeys and provided a strong foundation for future software development.",
    tags: ["Figma", "UI/UX Design", "Prototyping", "Usability Testing", "Documentation"],
    image: `${dataBase}images/GamesPortal Prototype Image.jpg`,
    link: `${dataBase}images/GamesPortal Prototype Image.jpg`,
    links: [
      { label: "Documentation", href: gamesportalprototypeReportLink, type: "document" },
      { label: "Presentation", href: gamesportalprototypeVideoLink, type: "youtube" },
    ],
    featured: false,
  },
  {
    year: "2025",
    title: "The Pitch - Allocation App",
    description:
      "The Allocation App was a group project developed as part of an entrepreneurship-focused project that required the creation and presentation of a new business concept. I participated in idea generation, business planning, market analysis, and presentation development while applying tools such as the Business Model Canvas. The project strengthened my ability to teamwork, communicate technical concepts, and evaluate the commercial viability of digital solutions.",
    tags: [
      "Entrepreneurship",
      "Presentation Skills",
      "Business Model Canvas",
      "Market Analysis",
      "Critical Thinking",
    ],
    image: `${dataBase}images/The Pitch - Allocation App Image.jpg`,
    link: `${dataBase}images/The Pitch - Allocation App Image.jpg`,
    links: [
      { label: "Logbook", href: thepitchLogbookLink, type: "document" },
      { label: "Slides", href: thepitchSlidesLink, type: "download" },
      { label: "Presentation", href: thepitchVideoLink, type: "youtube" },
    ],
    featured: false,
  },
  {
    year: "2025",
    title: "Card Games with Basic Images",
    description:
      "This project involved developing a collection of card games using Java while incorporating graphical assets and object-oriented programming concepts. I designed the game logic, implemented user interaction features, and integrated images to enhance the user experience. The completed project strengthened my understanding of software design and reusable code structures.",
    tags: ["Java", "Object-Orientated Programming", "Visual Studio Code", "Game Development"],
    image: `${dataBase}images/Programming 1 Card Games Basic Images Image.jpg`,
    link: `${dataBase}images/Programming 1 Card Games Basic Images Image.jpg`,
    links: [
      { label: "Repository", href: cardgamesRepoLink, type: "github" },
    ],
    featured: false,
  },
  {
    year: "2024",
    title: "Image to Hexadecimal Array",
    description:
      "This application was developed to convert image pixel data into hexadecimal arrays suitable for storage and processing within software applications. I implemented functionality to read image files, extract colour information, and generate structured hexadecimal output. The completed project provided practical experience with image processing concepts and low-level data representation.",
    tags: ["Java", "Arrays", "Image Processing", "RGBA", "Data Representation"],
    image: `${dataBase}images/Image to Hexadecimal Array Image.jpg`,
    link: `${dataBase}images/Image to Hexadecimal Array Image.jpg`,
    links: [
      { label: "Repository", href: imagetohexadecimalRepoLink, type: "github" },
    ],
    featured: false,
  },
  {
    year: "2024",
    title: "GamesPortal Design",
    description:
      "This project focused on the early stages of software development by applying requirements engineering and design methodologies to a digital games marketplace concept. I performed stakeholder analysis, developed user stories, created wireframes, and produced a prototype to visualise the proposed system. The completed work established a clear set of requirements and design foundations for future development.",
    tags: [
      "Requirements Engineering",
      "Design",
      "Wireframing",
      "Software Development Lifecycle",
      "Business Analysis",
      "Business Model Canvas",
    ],
    image: `${dataBase}images/GamesPortal Design Image.jpg`,
    link: `${dataBase}images/GamesPortal Design Image.jpg`,
    links: [
      { label: "Logbook", href: gamesportalLogbookLink, type: "document" },
      { label: "Documentation", href: gamesportalDocumentationLink, type: "document" },
    ],
    featured: false,
  },
  {
    year: "2024",
    title: "Impact of AI Technical Report",
    description:
      "This technical report examined the impact of artificial intelligence on students and future graduates. I conducted research using academic and industry sources, evaluated information using recognised credibility frameworks, and analysed both the opportunities and challenges associated with AI adoption. The completed report developed my research, critical thinking, and technical writing skills while providing a balanced assessment of emerging technologies.",
    tags: [
      "Critical Analysis",
      "Research",
      "Academic Writing",
      "Ethics",
      "Sources Evaluation",
      "CRAAP",
      "RADAR",
    ],
    image: `${dataBase}images/Impact of AI Image.jpg`,
    link: `${dataBase}images/Impact of AI Image.jpg`,
    links: [
      { label: "CC and Logbook", href: impactofaiCCLogbookLink, type: "document" },
      { label: "Report", href: impactofaiReportLink, type: "document" },
      { label: "Slides", href: impactofaiSlidesLink, type: "download" },
      { label: "Presentation", href: impactofaiVideoLink, type: "youtube" },
    ],
    featured: false,
  },
  {
    year: "2023",
    title: "Program Calculator v1.0",
    description:
      "Program Calculator v1.0 is a C# application developed in Visual Studio Code that performs mathematical calculations with live expression evaluation. I implemented real-time input processing, expression validation using regular expressions, and dynamic result updates as users entered calculations. The completed application improved usability by providing immediate feedback and strengthened my understanding of real-time programming techniques.",
    tags: ["C#", "Regex", "Visual Studio Code", "Problem Solving"],
    image: `${dataBase}images/Program Calculator v1.0 Image.jpg`,
    link: `${dataBase}images/Program Calculator v1.0 Image.jpg`,
    links: [
      { label: "Repository", href: programcalculatorRepoLink, type: "github" },
    ],
    featured: false,
  },
];

export const certificates = [
  {
    year: "2026",
    title: "Course Representative",
    description:
      "Represented the views and concerns of students in meetings with academic staff. Collected and communicated feedback, contributing to successful advocacy efforts that led to changes in the international tuition payment structure, improving payment flexibility for affected students.",
    tags: ["Leadership", "Communication", "Student Representation"],
    image: `${dataBase}images/Course Rep Certificate Image.jpg`,
    link: `${dataBase}images/Course Rep Certificate Image.jpg`,
  },
  {
    year: "2024",
    title: "Data Protection",
    description:
      "Provided me with an overview of the principles and laws governing personal data under the UK GDPR and Data Protection Act 2018. It covers lawful processing, data subject rights, organisational responsibilities, data security, and compliance to ensure transparent and responsible data handling.",
    tags: ["Data Regulation", "GDPR", "CCPA", "Information Security"],
    image: `${dataBase}images/Data Protection Certificate Image.jpg`,
    link: `${dataBase}images/Data Protection Certificate Image.jpg`,
  },
  {
    year: "2024",
    title: "Generative AI",
    description:
      "This certification helped me develop a deeper understanding of generative AI and its role in modern software development and productivity. It reinforced the importance of using AI as a tool to support learning, problem-solving, and innovation while remaining aware of its limitations and ethical implications.",
    tags: [
      "Artificial Intelligence",
      "Generative AI Tools",
      "LLM's",
      "Prompt Engineering",
      "Responsible AI",
    ],
    image: `${dataBase}images/Generative AI Certificate Image.jpg`,
    link: `${dataBase}images/Generative AI Certificate Image.jpg`,
  },
];

export const experience = [
  {
    date: "2026 - Present",
    title: "Software Development Intern",
    place: "Kingston University with CSE Connect",
    type: "Part-time",
    description:
      "Participating in Kingston University's Summer Internship Programme in partnership with CSE Connect, contributing to the development of FacilityHub, a facility management platform. Working within an Agile team to gather requirements, create user stories, develop software solutions, and produce project documentation while collaborating with stakeholders and fellow developers.",
    tags: ["React", "Node.js", "Agile", "SDLC", "Requirements Engineering"],
    link: "https://www.cseconnect.org/",
  },
  {
    date: "2024 - Present",
    title: "BSc Computer Science Student",
    place: "Kingston University",
    type: "Full-time",
    description:
      "My Computer Science degree has enabled me to build a strong foundation in software engineering, web development, database design, and requirements analysis. Through academic projects, personal development, and industry experience, I have applied the software development lifecycle to create practical solutions while developing technical, analytical, and teamwork skills.",
    tags: [
      "Software Development",
      "Web Development",
      "Database Design",
      "Requirements Analysis",
      "Teamwork",
    ],
    link: "https://www.kingston.ac.uk/",
  },
  {
    date: "2018 - Present",
    title: "Postal Worker",
    place: "Royal Mail",
    type: "Part-time",
    description:
      "Working at Royal Mail has strengthened my ability to work independently, manage competing priorities, and maintain high levels of accuracy under pressure. Responsible for delivering mail and parcels across assigned routes, I have developed strong organisational, time management, and customer service skills while consistently meeting deadlines in a fast-paced environment. This role has reinforced the importance of reliability, accountability, and effective communication.",
    tags: ["Time Management", "Teamwork", "Organisation", "Problem Solving"],
    link: "https://www.royalmail.com/",
  },
  {
    date: "2016 - 2018",
    title: "Restaurant Manager",
    place: "Shoryu Ramen",
    type: "Full-time",
    description:
      "As a Restaurant Manager, I was responsible for overseeing daily operations, coordinating staff, managing stock levels, and ensuring a high-quality customer experience. Leading a diverse team in a busy environment helped me develop leadership, decision-making, and team management skills while maintaining operational efficiency and service standards.",
    tags: ["Leadership", "Team Management", "Customer Service", "Decision Making", "Reliability"],
    link: "https://www.shoryuramen.com/",
  },
];
