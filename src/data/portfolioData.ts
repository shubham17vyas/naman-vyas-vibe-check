
import { StaticImageData } from 'next/image';

export interface SkillType {
  name: string;
  category: string;
  proficiency: number; // 0-100
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image: string;
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
  email: "naman.vyas@example.com",
  phone: "+1 (234) 567-8901",
  location: "Chicago, IL",
  bio: "Business Analytics graduate with expertise in process modeling and UX collaboration. Passionate about transforming complex data into actionable business insights.",
  taglines: [
    "Business Analytics Grad",
    "Process Modeling Expert",
    "UX Collaborator",
    "Data-Driven Decision Maker",
    "Problem Solver"
  ],
  socialLinks: {
    linkedin: "https://linkedin.com/in/namanvyas",
    github: "https://github.com/namanvyas",
    twitter: "https://twitter.com/namanvyas",
  },
  funFacts: [
    "I've visited 15 countries across 3 continents",
    "I can solve a Rubik's cube in under 2 minutes",
    "I'm a certified coffee connoisseur",
    "I practice meditation daily",
    "I've hiked 5 of the tallest peaks in North America"
  ]
};

const skills: SkillType[] = [
  // Technical Skills
  { name: "BPMN", category: "Technical", proficiency: 90 },
  { name: "SQL", category: "Technical", proficiency: 85 },
  { name: "Python", category: "Technical", proficiency: 75 },
  { name: "R", category: "Technical", proficiency: 65 },
  { name: "Power BI", category: "Technical", proficiency: 80 },
  { name: "Tableau", category: "Technical", proficiency: 75 },
  // Analysis Skills
  { name: "Data Analysis", category: "Analysis", proficiency: 90 },
  { name: "Requirements Gathering", category: "Analysis", proficiency: 85 },
  { name: "Process Optimization", category: "Analysis", proficiency: 80 },
  { name: "Business Intelligence", category: "Analysis", proficiency: 75 },
  // Tools
  { name: "Bizagi", category: "Tools", proficiency: 90 },
  { name: "Excel", category: "Tools", proficiency: 95 },
  { name: "Figma", category: "Tools", proficiency: 70 },
  { name: "JIRA", category: "Tools", proficiency: 75 },
  { name: "MS Office", category: "Tools", proficiency: 90 },
  // Soft Skills
  { name: "Communication", category: "Soft Skills", proficiency: 90 },
  { name: "Teamwork", category: "Soft Skills", proficiency: 85 },
  { name: "Problem Solving", category: "Soft Skills", proficiency: 90 },
  { name: "Adaptability", category: "Soft Skills", proficiency: 85 }
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
  },
  {
    id: "financial-reporting",
    title: "Financial Reporting Automation",
    description: "Automated monthly financial reporting process, saving 20+ hours of manual work",
    image: "/placeholder.svg",
    skills: ["Python", "Excel", "Process Optimization"],
    details: {
      challenge: "Financial team spent over 25 hours monthly compiling and formatting reports from multiple data sources, with high risk of manual errors.",
      solution: "Created Python scripts to extract, transform and consolidate data from various sources, with automated Excel output formatting and visualization.",
      outcome: "Reduced reporting time from 25+ hours to under 4 hours, eliminated manual errors, and standardized reporting formats across departments."
    }
  },
  {
    id: "crm-implementation",
    title: "CRM System Implementation",
    description: "Led requirements gathering and system configuration for new CRM platform",
    image: "/placeholder.svg",
    skills: ["Requirements Gathering", "Business Intelligence", "JIRA"],
    details: {
      challenge: "Company was using disconnected tools for customer management, resulting in data silos and inefficient customer service.",
      solution: "Gathered requirements from stakeholders, mapped existing processes, and configured new CRM system with custom workflows and integrations.",
      outcome: "Unified customer data across departments, improved lead conversion rate by 24%, and enhanced customer service response time by 40%."
    }
  }
];

const experience: ExperienceType[] = [
  {
    company: "TechVision Solutions",
    position: "Business Analyst Intern",
    duration: "May 2023 - Present",
    description: [
      "Assist in gathering and documenting business requirements through stakeholder interviews and workshops",
      "Create process models using BPMN to visualize and optimize workflows",
      "Collaborate with UX designers to translate business requirements into wireframes and mockups",
      "Support data analysis efforts using SQL and Excel to identify trends and opportunities",
      "Participate in agile development meetings and help track project progress in JIRA"
    ],
    skills: ["BPMN", "Requirements Gathering", "SQL", "Excel", "JIRA"]
  },
  {
    company: "Global Retail Inc.",
    position: "Data Analysis Assistant",
    duration: "June 2022 - August 2022",
    description: [
      "Assisted in analyzing sales data and creating weekly performance reports",
      "Developed Excel dashboards to track key performance metrics",
      "Supported inventory management optimization initiatives through data analysis",
      "Helped implement new reporting templates that improved data visualization"
    ],
    skills: ["Excel", "Data Analysis", "Business Intelligence"]
  },
  {
    company: "University Research Lab",
    position: "Research Assistant",
    duration: "September 2021 - May 2022",
    description: [
      "Collected and analyzed data for business process management research",
      "Assisted in literature review and documentation",
      "Helped prepare research findings for academic publication",
      "Created visualizations of research data for presentations"
    ],
    skills: ["Research", "Data Analysis", "Process Optimization"]
  }
];

const certifications: CertificationType[] = [
  {
    name: "Business Process Management Professional",
    issuer: "ABPMP International",
    date: "December 2023",
    link: "#",
    skills: ["BPMN", "Process Optimization"]
  },
  {
    name: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    date: "October 2023",
    link: "#",
    skills: ["Power BI", "Data Analysis"]
  },
  {
    name: "SQL Advanced Certification",
    issuer: "Data Camp",
    date: "August 2023",
    link: "#",
    skills: ["SQL", "Data Analysis"]
  },
  {
    name: "Agile Methodology Workshop",
    issuer: "Agile Alliance",
    date: "May 2023",
    skills: ["JIRA", "Teamwork"]
  },
  {
    name: "UX Design Fundamentals",
    issuer: "Interaction Design Foundation",
    date: "March 2023",
    link: "#",
    skills: ["Figma", "UX Collaboration"]
  }
];

export { profileData, skills, projects, experience, certifications };
