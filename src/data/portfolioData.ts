
// Remove next/image import and define our own image type

export interface SkillType {
  name: string;
  category: string;
  proficiency: number; // 0-100
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image: string; // Changed from StaticImageData to string
  skills: string[];
  details: {
    challenge: string;
    solution: string;
    outcome: string;
  };
  links?: {
    live?: string;
    github?: string;
    report?: string;
  };
}

export interface ExperienceType {
  company: string;
  position: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface CertificationType {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  skills?: string[];
}

const profileData = {
  name: "Naman Vyas",
  title: "IT / Business Analyst Intern",
  email: "namanvyas14@gmail.com",
  phone: "+91 7898941713",
  location: "Bhopal, MP, India",
  bio: "Adaptable banking professional with a passion for technology. Seeking an IT role to apply strong communication, analysis, and problem-solving skills. Experienced in customer acquisition, digital marketing, and sales.",
  taglines: [
    "Business Analyst",
    "Banking Professional",
    "UX Collaborator",
    "Problem Solver",
    "Seeking IT Opportunities"
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/naman-vyas-898232183/",
  },
  funFacts: [
    "I'm a fitness enthusiast who loves going to the gym",
    "I have extensive experience in banking operations",
    "I'm passionate about optimizing business processes",
    "I've helped acquire 20 new banking customers quarterly",
    "I have expertise in requirement gathering and documentation"
  ]
};

const skills: SkillType[] = [
  // BA Tools
  { name: "Bizagi Modeler", category: "BA Tools", proficiency: 85 },
  { name: "Star UML", category: "BA Tools", proficiency: 80 },
  { name: "Balsamiq Mockups", category: "BA Tools", proficiency: 80 },
  { name: "EdrawMax", category: "BA Tools", proficiency: 75 },
  { name: "MS Office", category: "BA Tools", proficiency: 90 },
  { name: "Figma", category: "BA Tools", proficiency: 75 },
  { name: "MS Visio", category: "BA Tools", proficiency: 75 },
  { name: "Axure RP", category: "BA Tools", proficiency: 70 },
  
  // Methodologies
  { name: "Agile (Scrum)", category: "Methodology", proficiency: 85 },
  { name: "Iterative Waterfall", category: "Methodology", proficiency: 80 },
  { name: "Waterfall", category: "Methodology", proficiency: 75 },
  
  // Documentation Techniques
  { name: "BRD", category: "Documentation", proficiency: 90 },
  { name: "FRD", category: "Documentation", proficiency: 85 },
  { name: "Use Case Specifications", category: "Documentation", proficiency: 85 },
  { name: "User Stories", category: "Documentation", proficiency: 85 },
  
  // Elicitation Techniques
  { name: "Interviews", category: "Elicitation", proficiency: 90 },
  { name: "Requirement Workshops", category: "Elicitation", proficiency: 85 },
  { name: "Focus Groups", category: "Elicitation", proficiency: 80 },
  { name: "Observation", category: "Elicitation", proficiency: 85 },
  { name: "Surveys", category: "Elicitation", proficiency: 80 },
  
  // Requirements Modeling
  { name: "Use Case Diagrams", category: "Modeling", proficiency: 85 },
  { name: "UI Mock-ups", category: "Modeling", proficiency: 80 },
  
  // Soft Skills
  { name: "Stakeholder Management", category: "Soft Skills", proficiency: 85 },
  { name: "Communication", category: "Soft Skills", proficiency: 90 },
  { name: "Presentation Skills", category: "Soft Skills", proficiency: 85 },
  { name: "Negotiation", category: "Soft Skills", proficiency: 80 },
  { name: "Conflict Resolution", category: "Soft Skills", proficiency: 80 },
];

const projects: ProjectType[] = [
  {
    id: "healthcare-optimization",
    title: "Healthcare Process Optimization",
    description: "Streamlined patient intake process for a local clinic, reducing wait times by 35%",
    image: "/placeholder.svg",
    skills: ["BPMN", "Process Optimization", "Bizagi"],
    details: {
      challenge: "The clinic was experiencing significant patient bottlenecks during check-in, causing extended wait times and patient dissatisfaction.",
      solution: "Conducted process analysis using BPMN modeling to identify inefficiencies and implemented a streamlined digital intake system with pre-appointment data collection.",
      outcome: "Reduced average wait time from 20 minutes to 13 minutes, improved patient satisfaction scores by 40%, and increased daily patient throughput by 15%."
    }
  },
  {
    id: "retail-analytics",
    title: "Retail Sales Analytics Dashboard",
    description: "Designed interactive Power BI dashboard to track KPIs and forecast seasonal trends",
    image: "/placeholder.svg",
    skills: ["Power BI", "Data Analysis", "SQL"],
    details: {
      challenge: "Regional retail chain lacked visibility into store performance and inventory management, leading to stockouts and overstocking issues.",
      solution: "Developed a comprehensive Power BI dashboard integrating multiple data sources with predictive analytics for seasonal demand forecasting.",
      outcome: "Enabled data-driven inventory decisions, reducing stockouts by 28% and excess inventory costs by 17%, while providing actionable insights for store managers."
    }
  }
];

const experience: ExperienceType[] = [
  {
    company: "Banking Institution",
    position: "Banking Professional",
    duration: "April 2022 - May 2023",
    description: [
      "Managed charge of Branch clearing Inwards and outwards in Teller Counter and boosted efficiency of the counter by 20%",
      "Monitored Bank Account opening Form's on the daily basis and achieved highest Financial Transmission Right percentage",
      "Acquired average of 20 new customers in every quarter by cross-selling different banking products",
      "Pitched and converted 15 clients to buy third-party products for Life and General Insurance"
    ],
    skills: ["Customer Acquisition", "Banking Operations", "Cross-selling", "Documentation"]
  },
  {
    company: "Jaipuria Institute of Management",
    position: "PGDM Student",
    duration: "2018 - 2020",
    description: [
      "Completed Post Graduate Diploma in Management",
      "Developed key business analysis and management skills",
      "Participated in various academic and professional development activities"
    ],
    skills: ["Business Analysis", "Management", "Communication"]
  }
];

const certifications: CertificationType[] = [
  {
    name: "Business Process Management",
    issuer: "Professional Certification",
    date: "2023",
    skills: ["BPMN", "Process Optimization"]
  },
  {
    name: "Bizagi Modeler Proficiency",
    issuer: "Professional Training",
    date: "2023",
    skills: ["Bizagi", "Process Modeling"]
  },
  {
    name: "Agile Methodology Workshop",
    issuer: "Agile Training",
    date: "2022",
    skills: ["Agile", "Scrum"]
  },
  {
    name: "UX Design Fundamentals",
    issuer: "Design Training",
    date: "2022",
    skills: ["Figma", "UI Mockups"]
  },
  {
    name: "Documentation Techniques",
    issuer: "Professional Training",
    date: "2022",
    skills: ["BRD", "FRD", "Use Cases"]
  }
];

export { profileData, skills, projects, experience, certifications };
