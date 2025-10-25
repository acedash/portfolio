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

export const oldProjects = [
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
    "id": "david-kim",
    "quote": "Amaan's AI chatbot transformed our customer service. We saw a 30% improvement in self-service resolution and our customers love the instant, accurate responses. The ROI was evident within the first month.",
    "author": "David Kim, VP Customer Experience - Global Airlines",
    "company": "Global Airlines",
    "role": "VP Customer Experience",
    "rating": 5,
    "order": 1
  },
  {
    "id": "maria-rodriguez",
    "quote": "The dynamic pricing system Amaan built increased our revenue by 20% while maintaining customer satisfaction. His ML models are not just accurate but also explainable, which was crucial for our business stakeholders.",
    "author": "Maria Rodriguez, Revenue Manager - Luxury Hotels",
    "company": "Luxury Hotel Chain",
    "role": "Revenue Manager",
    "rating": 5,
    "order": 2
  },
  {
    "id": "james-wilson",
    "quote": "Amaan's fuel optimization model saved us $2.5M annually. His deep understanding of both aviation operations and machine learning made the difference. The system has been running flawlessly for over a year.",
    "author": "James Wilson, Chief Operations Officer - International Airlines",
    "company": "International Airlines",
    "role": "Chief Operations Officer",
    "rating": 5,
    "order": 3
  }
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
export const projects = [
  {
    "id": "airline-chatbot-system",
    "name": "AI-Powered Airline Customer Service Chatbot",
    "stack": [
      "Python",
      "LangChain",
      "OpenAI GPT-4",
      "FastAPI",
      "Docker",
      "AWS Bedrock"
    ],
    "summary": "Built a production conversational AI system that improved self-service resolution by 30% and reduced support ticket volume by 40%.",
    "href": "/projects/airline-chatbot-system",
    "visitUrl": "https://airline-chatbot-demo.vercel.app",
    "category": "Conversational AI",
    "description": "An intelligent customer service chatbot for a major airline that handles booking modifications, flight information, and customer support queries using advanced RAG (Retrieval-Augmented Generation) and fine-tuned language models.",
    "features": [
      "Natural language understanding for flight queries",
      "Automated booking modifications and cancellations",
      "Real-time flight status and gate information",
      "Multi-language support (English, Spanish, French)",
      "Integration with airline reservation systems",
      "Sentiment analysis and escalation triggers",
      "Comprehensive conversation analytics"
    ],
    "challenges": "The main challenge was ensuring the chatbot could handle complex, multi-turn conversations while maintaining accuracy in flight information and booking operations. We implemented robust error handling and fallback mechanisms.",
    "results": [
      "30% improvement in self-service resolution rate",
      "40% reduction in support ticket volume",
      "25% decrease in average response time",
      "95% customer satisfaction score for chatbot interactions"
    ],
    "techDetails": {
      "ai_ml": "OpenAI GPT-4, LangChain, RAG with vector embeddings",
      "backend": "FastAPI with async processing, Redis for caching",
      "deployment": "Docker containers on AWS ECS with auto-scaling",
      "monitoring": "MLflow for model tracking, CloudWatch for performance metrics"
    },
    "timeline": "8 weeks",
    "client": "Global Airlines Group"
  },
  {
    "id": "dynamic-pricing-ml-system",
    "name": "Dynamic Pricing ML System for Hospitality",
    "stack": [
      "Python",
      "XGBoost",
      "TensorFlow",
      "Apache Spark",
      "Kubernetes",
      "MLflow"
    ],
    "summary": "Developed a machine learning system that increased revenue by ~20% through intelligent dynamic pricing for hotel bookings.",
    "href": "/projects/dynamic-pricing-ml-system",
    "visitUrl": "https://pricing-demo.vercel.app",
    "category": "Predictive Analytics",
    "description": "A sophisticated ML-powered dynamic pricing system that optimizes hotel room rates based on demand patterns, competitor pricing, seasonal trends, and market conditions in real-time.",
    "features": [
      "Real-time price optimization using ensemble models",
      "Competitor price monitoring and analysis",
      "Demand forecasting with time series models",
      "A/B testing framework for pricing strategies",
      "Revenue impact tracking and reporting",
      "Automated model retraining pipeline",
      "Price elasticity analysis and insights"
    ],
    "challenges": "Balancing revenue optimization with customer satisfaction while ensuring pricing decisions were explainable and auditable. We implemented comprehensive model monitoring and A/B testing frameworks.",
    "results": [
      "~20% revenue uplift from optimized pricing",
      "15% increase in booking conversion rates",
      "12% improvement in revenue per available room (RevPAR)",
      "99.9% system uptime with automated failover"
    ],
    "techDetails": {
      "ml_models": "XGBoost, LSTM networks, ensemble methods",
      "data_pipeline": "Apache Spark for ETL, Kafka for real-time streaming",
      "deployment": "Kubernetes with auto-scaling, Redis for caching",
      "monitoring": "MLflow for experiment tracking, Grafana dashboards"
    },
    "timeline": "10 weeks",
    "client": "Luxury Hotel Chain"
  },
  {
    "id": "flight-fuel-optimization",
    "name": "Flight-Level Fuel Cost Optimization ML Model",
    "stack": [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Apache Airflow",
      "AWS SageMaker",
      "PostgreSQL"
    ],
    "summary": "Created a machine learning model that reduced fuel costs by 12% (annualized ~$2.5M savings) through optimized flight planning and routing.",
    "href": "/projects/flight-fuel-optimization",
    "visitUrl": "https://fuel-optimization-demo.vercel.app",
    "category": "Optimization",
    "description": "An advanced ML system that optimizes flight routes, altitudes, and speeds to minimize fuel consumption while maintaining safety standards and on-time performance.",
    "features": [
      "Weather pattern analysis and integration",
      "Aircraft performance modeling",
      "Route optimization algorithms",
      "Real-time fuel consumption predictions",
      "Carbon footprint tracking",
      "Pilot recommendation system",
      "Cost-benefit analysis dashboard"
    ],
    "challenges": "Integrating complex weather data, aircraft performance characteristics, and air traffic control constraints into a unified optimization model while ensuring safety compliance.",
    "results": [
      "12% reduction in fuel costs (annualized ~$2.5M savings)",
      "8% decrease in carbon emissions",
      "5% improvement in on-time performance",
      "15% reduction in flight planning time"
    ],
    "techDetails": {
      "ml_models": "Random Forest, Gradient Boosting, Neural Networks",
      "data_sources": "Weather APIs, aircraft telemetry, flight plans",
      "infrastructure": "AWS SageMaker, Apache Airflow for orchestration",
      "database": "PostgreSQL with time-series optimization"
    },
    "timeline": "14 weeks",
    "client": "International Airlines"
  }
];