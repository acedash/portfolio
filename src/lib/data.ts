export const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored applications that solve your specific business challenges. From internal tools to customer-facing platforms, built for your unique workflow and requirements.",
  },
  {
    title: "E-commerce & SaaS Platforms",
    description:
      "Complete digital storefronts and subscription platforms that drive revenue. Built with modern tech stacks for scalability, security, and exceptional user experience.",
  },
  {
    title: "Business Process Automation",
    description:
      "Streamline operations and reduce manual work with intelligent automation. APIs, integrations, and workflows that connect your existing tools and create new efficiencies.",
  },
  {
    title: "Data Analytics & Reporting",
    description:
      "Turn your business data into actionable insights. Custom dashboards, reporting systems, and analytics tools that help you make data-driven decisions and track KPIs.",
  },
];

export const industries = [
  "E-commerce", "Healthcare", "FinTech", "Education", "Real Estate", "Manufacturing", "Logistics", "Media"
];

export const projects = [
  {
    id: "ecommerce-fashion-platform",
    name: "E-commerce Platform for Fashion Retailer",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    summary:
      "Built a complete online store that increased sales by 300% in 6 months. Features include inventory management, customer analytics, and mobile-first design.",
    href: "/projects/ecommerce-fashion-platform",
    visitUrl: "https://fashion-store-demo.vercel.app",
    category: "E-commerce",
    description: "A comprehensive e-commerce solution built for a growing fashion retailer. The platform features a modern, mobile-first design with advanced inventory management, real-time analytics, and seamless payment processing.",
    features: [
      "Mobile-first responsive design",
      "Advanced inventory management system",
      "Real-time sales analytics dashboard",
      "Secure payment processing with Stripe",
      "Customer account management",
      "Order tracking and notifications",
      "Admin panel for store management"
    ],
    challenges: "The main challenge was creating a scalable architecture that could handle rapid growth while maintaining performance. We implemented efficient caching strategies and optimized database queries to ensure fast load times even during peak traffic.",
    results: [
      "300% increase in sales within 6 months",
      "40% improvement in page load speed",
      "25% increase in conversion rate",
      "99.9% uptime achieved"
    ],
    techDetails: {
      frontend: "Next.js with TypeScript, Tailwind CSS, React Query",
      backend: "Node.js with Express, PostgreSQL database",
      payments: "Stripe integration with webhook handling",
      deployment: "AWS with Vercel for frontend, RDS for database",
      monitoring: "Sentry for error tracking, Google Analytics"
    },
    timeline: "8 weeks",
    client: "Fashion Forward Inc."
  },
  {
    id: "healthcare-management-system",
    name: "Healthcare Management System",
    stack: ["React", "Node.js", "MongoDB", "HIPAA Compliant", "Docker"],
    summary:
      "Developed a patient management platform that reduced administrative overhead by 40% and improved patient satisfaction scores.",
    href: "/projects/healthcare-management-system",
    visitUrl: "https://healthcare-demo.vercel.app",
    category: "Healthcare",
    description: "A HIPAA-compliant patient management system designed to streamline healthcare operations. The platform digitizes patient records, appointment scheduling, and communication between healthcare providers and patients.",
    features: [
      "HIPAA-compliant patient records management",
      "Automated appointment scheduling",
      "Secure messaging between providers and patients",
      "Prescription management system",
      "Insurance verification integration",
      "Real-time notifications and reminders",
      "Comprehensive reporting dashboard"
    ],
    challenges: "Ensuring HIPAA compliance while maintaining a user-friendly interface was the primary challenge. We implemented end-to-end encryption, audit trails, and role-based access controls to meet strict healthcare regulations.",
    results: [
      "40% reduction in administrative overhead",
      "60% improvement in appointment scheduling efficiency",
      "35% increase in patient satisfaction scores",
      "100% HIPAA compliance achieved"
    ],
    techDetails: {
      frontend: "React with TypeScript, Material-UI, Redux",
      backend: "Node.js with Express, MongoDB with encryption",
      security: "JWT authentication, role-based access control",
      deployment: "Docker containers on AWS with load balancing",
      compliance: "HIPAA-compliant infrastructure and data handling"
    },
    timeline: "12 weeks",
    client: "MediCore Healthcare Group"
  },
];

export const testimonials = [
  {
    quote:
      "Working with Asrar was like having a CTO on our team. He understood our business challenges and built solutions that actually solved them. ROI was 400% in the first year.",
    author: "Michael Rodriguez, Founder - TechStart Solutions",
  },
  {
    quote:
      "Asrar delivered our e-commerce platform in half the time we expected, and it's been running flawlessly for 18 months. Our conversion rates increased by 25% within the first quarter.",
    author: "Sarah Chen, CEO - Fashion Forward Inc.",
  },
];

export const faqs = [
  {
    q: "What's your typical project timeline?",
    a: "Most projects are delivered in 4-12 weeks depending on complexity. I use agile methodologies with regular check-ins to ensure we're always aligned with your business goals.",
  },
  {
    q: "How do you handle ongoing support and maintenance?",
    a: "I offer flexible support packages including monitoring, updates, and feature additions. Many clients choose monthly retainers for ongoing development and maintenance.",
  },
  {
    q: "What makes you different from other developers?",
    a: "I focus on business outcomes, not just code. Every solution is designed with your ROI, scalability, and long-term success in mind. I'm your technology partner, not just a contractor.",
  },
];
// src/lib/data.ts
export const brands = [
  { name: "Apple", logo: "/logos/apple.svg", url: "https://apple.com" },
  { name: "Google", logo: "/logos/google.svg", url: "https://google.com" },
  { name: "Amazon", logo: "/logos/amazon.svg", url: "https://amazon.com" },
];
export const projects = [{
  id: "ecommerce-fashion-platform",
  name: "E-commerce Platform for Fashion Retailer",
  stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
  summary:
    "Built a complete online store that increased sales by 300% in 6 months. Features include inventory management, customer analytics, and mobile-first design.",
  href: "/projects/ecommerce-fashion-platform",
  visitUrl: "https://fashion-store-demo.vercel.app",
  category: "E-commerce",
  description: "A comprehensive e-commerce solution built for a growing fashion retailer. The platform features a modern, mobile-first design with advanced inventory management, real-time analytics, and seamless payment processing.",
}];