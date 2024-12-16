import {
  mobile,
  backend,
  creator,
  web,
  aws_logo,
  azure_logo,
  nodejs,
  mongodb,
  git,
  docker,
  Mercantile,
  Cloudtech,
  Datahub,
  python,
  django,
  sql,
  next,
  vue,
  paisaBachauChrome,
  ChatBotCMS,
  GermanIDCard,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  }
  // ,
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
];

const services = [
  {
    title: "DevOps Engineer",
    icon: web,
  },
  {
    title: "Site Reliability Engineer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "AWS",
    icon: aws_logo,
  },
  {
    name: "Azure",
    icon: azure_logo,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "vue",
    icon: vue,
  },
];

const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "Mercantile Cloud Consulting",
    icon: Mercantile,
    iconBg: "#383E56",
    date: "March 2023 - August 2024",
    points: [
      "Streamlined deployments of Java, NodeJs, Python, VueJS, and Laravel apps using GitLab, Jenkins, and AWS CodePipeline.",
      "Automated infrastructure creation and app deployment on AWS and Azure with Terraform, reducing deployment time by 60%.",
      "Managed AWS services like ECS, Lambda, API Gateway, RDS, Cognito, CloudFront, and VPC Peering.",
      "Implemented AWS Control Tower, GuardDuty, Inspector, and AWS Backup for ISO Certification.",
      "Worked with Azure services like App Service, Azure Functions, Container Apps, and VNET & NAT Gateways.",
      "Optimized CICD pipelines, reduced Docker image size and used golden images to increase speed by 30%.",
      "Reduced AWS costs by 20% through rightsizing and cleanup of unused resources.",
      "Developed a Python-based data scraping engine using Selenium and Scrapy.",
      "Created AI-based content and chatbots using LLMs, Automation, and RAG technology."
    ]    
  },
  {
    title: "Associate DevOps",
    company_name: "CloudTech Services",
    icon: Cloudtech,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Feb 2023",
    points: [

      "Used AWS ECS for creating scalable and highly available Blue Green application architecture of Broker Management System for US Broker agencies: Payment system ($200M in transactions), Message center (over 1 million messages i.e. emails/sms handled), and SSO application (single sign on)",
      "Used Git and Jenkins pipeline for creating CICD system for deployment, built scripts using Bash and Python for automating repetitive tasks",
      "Integrated monitoring tools like Grafana, Loki, Prometheus, and Thanos and configured SMS & RocketChat alerts",
      "Used AWS WAF for protection from SQL Injection attacks & implemented SonarQube for code analysis",
      "Configured Vault for centralized credentials management for backend applications",
    ],
  },
  {
    title: "System Administrator",
    company_name: "Datahub",
    icon: Datahub,
    iconBg: "#383E56",
    date: "June 2021 - Oct 2021",
    points: [
      "Used Apache CloudStack for managing Virtual Machines, LVM, Bind and PowerDN, Cpanel and WHM",
      "Worked on setting up infrastructure monitoring using Zabbix and automating backups for clients"
    ],
  }
];

const testimonials = [
  {
  }
];
const imageProjects = [
  {
    id: 1,
    image: ChatBotCMS,
    url: "https://chatbotcms.milanmahat.com.np/",
    title: "Document Based ChatBot",
    description: "",
  },
  {
    id: 2,
    image: GermanIDCard,
    url: "https://idcard.milanmahat.com.np/",
    title: "German ID Card Analyzer",
    description: "",
  },
  {
    id: 3,
    image: paisaBachauChrome,
    url: "https://chromewebstore.google.com/detail/paisa-bachau/acmloocogmpcjakjklolmgiebhoeagco?pli=1",
    title: "Paisa Bachau Chrome Extension",
    description: "",
  }
];

const projects = [
  {
    name: "ChatBotCMS",
    description:
      "An AI powered Application where you can easily chat with the uploaded document",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: ChatBotCMS,
    source_code_link: "https://github.com/LordMilan/DocumentChatBot",
    liveUrl: "https://chatbotcms.milanmahat.com.np/",
  },
  {
    name: "ID Card Analyzer",
    description:
      "Extract Essential data from German National ID Card.",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Textract",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: GermanIDCard,
    source_code_link: "https://github.com/LordMilan/ID_Card_Extractor",
    liveUrl: "https://idcard.milanmahat.com.np",
  },
  {
    name: "Paisa Bachau",
    description:
      "Chrome extension to get the best deals from various ecommerce websites directly in your browser.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Scraping",
        color: "pink-text-gradient",
      },
    ],
    image: paisaBachauChrome,
    source_code_link: "https://github.com/LordMilan/paisa-bachau-v2",
    liveUrl: "https://chromewebstore.google.com/detail/paisa-bachau/acmloocogmpcjakjklolmgiebhoeagco?pli=1",
  }
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  imageProjects,
};
