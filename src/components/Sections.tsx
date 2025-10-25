"use client";

import { faqs, industries, services } from "@/lib/data";
import { useProjects } from "@/hooks/useProjects";
import { useTestimonials } from "@/hooks/useTestimonials";
import { useBrands } from "@/hooks/useBrands";
import { useSocialLinks } from "@/hooks/useSocialLinks";
import Image from "next/image";
import { useState, useEffect } from "react";

// Counter component for animated numbers
function Counter({ end, suffix = "", duration = 1200 }: { end: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const startValue = 0;
    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(startValue + (end - startValue) * progress);
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return <span>{value}{suffix}</span>;
}

export function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  
  const titles = [
    { text: "AI/ML Engineer", icon: "🤖" },
    { text: "Data Scientist", icon: "📊" },
    { text: "MLOps Specialist", icon: "⚙️" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="container pt-16 md:pt-20 pb-12 md:pb-16">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">
        {/* Left Content */}
        <div className="animate-fade-in-up text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 animate-fade-in-up animation-delay-100">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            Available for new projects
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-200">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Hi, I'm Amaan
            </span>
          </h1>
          
          {/* Rotating Title with proper spacing */}
          <div className="mb-8 animate-fade-in-up animation-delay-250">
            <div className="h-12 md:h-20 flex items-center justify-center md:justify-start">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-400 font-semibold transition-all duration-500 ease-in-out flex items-center gap-3">
                {titles[currentTitle].text}
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{titles[currentTitle].icon}</span>
              </span>
            </div>
          </div>
          
          <p className="text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8 animate-fade-in-up animation-delay-300 mx-auto md:mx-0">
            I'm a client-facing Data Scientist and AI/ML engineer who turns complex problems into production systems. 
            <span className="text-blue-400 font-semibold"> Specializing in agentic AI</span>, conversational systems, 
            <span className="text-blue-400 font-semibold"> predictive pricing, and MLOps</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-3 flex-wrap justify-center md:justify-start mb-8 animate-fade-in-up animation-delay-400">
            <a href="#contact" className="px-5 py-2.5 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 font-semibold text-white shadow-md hover:shadow-lg transition-colors text-sm md:text-base">
              Start Your Project
            </a>
            <a href="#projects" className="px-5 py-2.5 md:px-6 md:py-3 rounded-lg border border-white/20 hover:border-blue-400 hover:text-blue-400 font-medium transition-colors text-sm md:text-base">
              View My Work
            </a>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 animate-fade-in-up animation-delay-500">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">12%</div>
              <div className="text-xs md:text-sm text-slate-400">Fuel Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">30%</div>
              <div className="text-xs md:text-sm text-slate-400">Self-Service Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">~20%</div>
              <div className="text-xs md:text-sm text-slate-400">Revenue Uplift</div>
            </div>
          </div>

          {/* Capabilities Strip */}
          <div className="mt-6 text-slate-300/90 text-sm md:text-base flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🤖 Agentic AI</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">💬 Conversational Systems</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">📊 Predictive Pricing</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">⚙️ MLOps</span>
          </div>
        </div>
        
        {/* Right Photo */}
        <div className="hidden md:block justify-self-center animate-fade-in-up animation-delay-600">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl scale-150"></div>
            
            {/* Photo Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image 
                src="/asrar-photo-2.jpg" 
                alt="Syed Amaan Bukhari - AI/ML Engineer" 
                fill 
                sizes="(min-width: 768px) 20rem, 16rem"
                priority 
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl animate-bounce">
              💻
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg md:text-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
              🚀
            </div>
          </div>
        </div>
      </div>
      
      {/* Digital Solutions for Industries - Grid */}
      <div className="text-center mb-16 animate-fade-in-up animation-delay-700">
        <p className="text-slate-400 text-sm mb-8 font-medium tracking-wider">DIGITAL SOLUTIONS FOR THESE SECTORS</p>
        <div className="marquee group -mx-4 px-4">
          <div className="marquee-track gap-4">
            {(() => {
              const sectors = [
                { sector: "🏠 Real Estate", solution: "Property Management" },
                { sector: "✈️ Travel", solution: "Booking Platforms" },
                { sector: "🏥 Healthcare", solution: "Patient Systems" },
                { sector: "💰 FinTech", solution: "Payment Solutions" },
                { sector: "🛒 E-commerce", solution: "Online Stores" },
                { sector: "🏭 Manufacturing", solution: "Process Automation" },
                { sector: "🏫 Schools", solution: "Admissions & LMS" },
                { sector: "🎓 Education", solution: "Learning Platforms" },
                { sector: "🏨 Hospitality", solution: "Booking & CRM" },
                { sector: "🚚 Logistics", solution: "Supply Chain" },
                { sector: "🎟️ Events", solution: "Ticketing & Portals" },
              ];
              const track = [...sectors, ...sectors];
              return track.map((item, index) => (
                <div
                  key={`${item.sector}-${index}`}
                  className="marquee-item w-56 shrink-0 p-5 rounded-2xl border border-white/10 bg-slate-800/40 hover:border-blue-400/40 transition-colors text-left mx-2"
                >
                  <div className="text-2xl mb-2">{item.sector.split(' ')[0]}</div>
                  <div className="text-base font-semibold text-white mb-1">
                    {item.sector.split(' ').slice(1).join(' ')}
                  </div>
                  <div className="text-xs text-slate-300">{item.solution}</div>
                </div>
              ));
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const approaches = [
    {
      title: "Predictive Modeling & Analytics",
      description: "Build supervised models (XGBoost, neural nets) for demand forecasting, pricing, churn, and more. Better forecasts lead to smarter inventory/pricing decisions and measurable revenue uplift.",
      icon: "📊",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "MLOps & Production Deployment", 
      description: "From data ingestion to production inference: ETL, model versioning (MLflow), CI/CD, monitoring, and rollback. Reliable models in production with traceability and automated retraining.",
      icon: "⚙️",
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30"
    },
    {
      title: "Conversational AI & Chatbots",
      description: "Design RAG systems, fine-tune LLMs, integrate LangChain/Bedrock, and validate via regression tests. Faster self-service, fewer support tickets, better CSAT.",
      icon: "🤖",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Agentic AI & Automation",
      description: "Build multi-agent orchestration (MCP), transactional agents for bookings/cancellations, and operational automation. Reduced manual handling, transactional consistency, 24/7 automated workflows.",
      icon: "⚡",
      color: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-500/30"
    }
  ];

  return (
    <section id="approach" className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in-up">
          My AI/ML Expertise <span className="ml-2 text-purple-300">🧠</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
          I don't just build models — I solve business problems with AI/ML. Here's my proven approach to delivering measurable results.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {approaches.map((approach, index) => (
          <div 
            key={approach.title}
            className={`p-8 rounded-2xl border ${approach.borderColor} bg-gradient-to-br ${approach.color} hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in-up group`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{approach.icon}</div>
              <h3 className="text-2xl font-semibold text-white">{approach.title}</h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed group-hover:text-slate-200 transition-colors">
              {approach.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="container py-20">
      <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 md:p-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Heading + Value Items */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in-up">
              About Me <span className="ml-2 text-blue-300">👋</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl animate-fade-in-up animation-delay-100">
              I'm an AI/ML engineer specializing in agentic AI, production ML systems, and applied deep learning. I care about clean data pipelines, reproducible experiments, and deploying reliable models that are observable and maintainable in production.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "🤖",
                  title: "Agentic AI & Automation",
                  description:
                    "Built agentic AI booking agent that automates bookings & cancellations end-to-end. Experience with fine-tuning large language models, RAG, and LLM-based agents.",
                  color: "from-blue-500/15 to-blue-600/15",
                  border: "border-blue-500/25",
                },
                {
                  icon: "⚙️",
                  title: "Production ML Systems",
                  description:
                    "Delivered production ML pipelines using FastAPI, Docker, Terraform, and AWS. Strong background in Python, TensorFlow/PyTorch, LangChain, and model monitoring.",
                  color: "from-green-500/15 to-green-600/15",
                  border: "border-green-500/25",
                },
                {
                  icon: "📊",
                  title: "Data Science & Analytics",
                  description:
                    "My sweet spot: turning messy business problems into pragmatic ML solutions. I love working with product teams to prioritize what moves the needle, then moving fast to validate, iterate, and ship.",
                  color: "from-purple-500/15 to-purple-600/15",
                  border: "border-purple-500/25",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`flex gap-4 p-5 rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} animate-fade-in-up`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-3xl shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1.5">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stacked Stats + CTA */}
          <div>
            <div className="space-y-5 mb-6">
              {[
                { number: 12, suffix: "%", label: "Fuel Cost Reduction", icon: "✈️" },
                { number: 30, suffix: "%", label: "Self-Service Improvement", icon: "💬" },
                { number: 20, suffix: "%", label: "Revenue Uplift", icon: "📈" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{s.icon}</div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-blue-400">
                        <Counter end={s.number} suffix={s.suffix} />
                      </div>
                      <div className="text-slate-300">{s.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#approach" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/15 hover:border-white/30 hover:text-white transition-colors font-semibold">
              See how I work →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  const items = [
    {
      title: "Predictive Modeling",
      description: "Build supervised models for demand forecasting, pricing, churn, and more with measurable business impact.",
      icon: "📊",
    },
    {
      title: "MLOps & Deployment",
      description: "End-to-end ML pipelines from data ingestion to production inference with monitoring and CI/CD.",
      icon: "⚙️",
    },
    {
      title: "Conversational AI",
      description: "Design RAG systems, fine-tune LLMs, and build chatbots that improve customer service.",
      icon: "🤖",
    },
  ];

  return (
    <section id="services" className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in-up">
          AI/ML Services <span className="ml-2 text-amber-300">🛠️</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
          AI/ML solutions focused on measurable business outcomes, not just technical complexity.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mt-4">
        {items.map((item, index) => (
          <div 
            key={item.title} 
            className="rounded-2xl border border-slate-600/30 p-8 bg-gradient-to-br from-slate-800/40 to-slate-700/20 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 cursor-pointer group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">{item.icon}</div>
              <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">{item.title}</h3>
            </div>
            <p className="text-slate-300 text-lg group-hover:text-slate-200 transition-colors">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
          View all services →
        </a>
      </div>
    </section>
  );
}

export function Projects({ showViewAllLink = false }: { showViewAllLink?: boolean } = {}) {
  const { projects, loading, error } = useProjects();
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Conversational AI", "Predictive Analytics", "Optimization"];

  const projectCategory = (name: string): string => {
    if (name.toLowerCase().includes("chatbot") || name.toLowerCase().includes("conversational")) return "Conversational AI";
    if (name.toLowerCase().includes("pricing") || name.toLowerCase().includes("predictive")) return "Predictive Analytics";
    if (name.toLowerCase().includes("optimization") || name.toLowerCase().includes("fuel")) return "Optimization";
    return "Other";
  };

  const visibleProjects = projects.filter((p) => filter === "All" || projectCategory(p.name) === filter);

  if (loading) {
    return (
      <section id="projects" className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            My Recent Work <span className="ml-2 text-indigo-300">🧩</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Loading projects...
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-slate-600/30 overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-700/20 animate-pulse">
              <div className="h-40 md:h-44 bg-slate-700"></div>
              <div className="p-6">
                <div className="h-6 bg-slate-700 rounded mb-2"></div>
                <div className="h-4 bg-slate-700 rounded mb-4"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-16 bg-slate-700 rounded-full"></div>
                  <div className="h-6 w-20 bg-slate-700 rounded-full"></div>
                </div>
                <div className="h-10 bg-slate-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in-up">
          My Recent Work <span className="ml-2 text-indigo-300">🧩</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
          A growing collection of projects delivering measurable outcomes for businesses.
        </p>
      </div>

      {showViewAllLink && (
        <div className="-mt-6 mb-6 text-right">
          <a href="/projects" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            View all projects →
          </a>
        </div>
      )}

      {/* Filters */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full border transition-all duration-200 ${
              filter === c
                ? "border-blue-500/60 bg-blue-500/10 text-blue-300"
                : "border-white/15 hover:border-white/30 text-slate-300 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((p, index) => (
          <div
            key={p.name}
            className="rounded-xl border border-slate-600/30 overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-700/20 hover:border-blue-500/40 hover:shadow-lg transition-colors duration-300 group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Thumbnail: support optional p.image */}
            {"image" in p && (p as any).image ? (
              <div className="relative h-40 md:h-44">
                <Image src={(p as any).image} alt={p.name} fill className="object-cover" />
              </div>
            ) : (
              <div className="h-40 md:h-44 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                <div className="text-5xl md:text-6xl opacity-70 group-hover:opacity-100 transition-opacity">
                  {p.name.includes("Chatbot") || p.name.includes("Conversational") ? "🤖" : 
                   p.name.includes("Pricing") || p.name.includes("Predictive") ? "📊" : 
                   p.name.includes("Fuel") || p.name.includes("Optimization") ? "✈️" : "💻"}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-blue-500/80 text-white text-[11px] font-medium">
                  {p.stack[0]}
                </div>
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{p.name}</h3>
              <p className="text-slate-300 text-base mb-4 line-clamp-3 group-hover:text-slate-200 transition-colors">{p.summary}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">
                    {tech}
                  </span>
                ))}
                {p.stack.length > 3 && (
                  <span className="px-2.5 py-1 rounded-full bg-slate-600/50 text-slate-300 text-xs font-medium">
                    +{p.stack.length - 3} more
                  </span>
                )}
              </div>

              {/* <div className="pt-4 border-t border-slate-600/30 space-y-3">
                <div className="flex items-center justify-between">
                  <a href={p.href || "#contact"} className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    View Details →
                  </a>
                  <a href="#contact" className="text-slate-400 hover:text-slate-200 text-sm transition-colors">
                    Build Similar
                  </a>
                </div>
                {p.visitUrl && (
                  <a
                    href={p.visitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 font-medium text-white text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    🌐 Visit Live Site
                  </a>
                )}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  const { testimonials, loading, error } = useTestimonials();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (isPaused || testimonials.length === 0) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isPaused, testimonials.length]);

  if (loading) {
    return (
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            What My Clients Say <span className="ml-2 text-pink-300">💬</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Loading testimonials...
          </p>
        </div>
        <div className="relative">
          <div className="mx-auto max-w-3xl rounded-xl border border-white/15 p-7 md:p-10 bg-slate-900/70 shadow-md animate-pulse">
            <div className="h-6 bg-slate-700 rounded mb-4"></div>
            <div className="h-6 bg-slate-700 rounded mb-4"></div>
            <div className="h-6 bg-slate-700 rounded w-3/4 mx-auto mb-6"></div>
            <div className="h-4 bg-slate-700 rounded w-1/3 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in-up">
          What My Clients Say <span className="ml-2 text-pink-300">💬</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
          Real words from people I've helped grow their businesses.
        </p>
      </div>

      <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        {/* Slider viewport */}
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{ transform: `translateX(-${current * 100}%)`, transition: 'transform 500ms ease' }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full px-3 md:px-6">
                <blockquote className="relative mx-auto max-w-3xl rounded-xl border border-white/15 p-7 md:p-10 bg-slate-900/70 shadow-md">
                  <div className="absolute -top-6 -left-4 text-8xl text-white/5 select-none">“</div>
                  <p className="text-slate-100 text-xl md:text-2xl leading-relaxed mb-6 text-center">{t.quote}</p>
                  <footer className="text-base md:text-lg text-slate-300 font-medium text-center">— {t.author}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button onClick={prev} aria-label="Previous" className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur">
          ◀
        </button>
        <button onClick={next} aria-label="Next" className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur">
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${current === i ? 'bg-blue-400 w-5' : 'bg-white/25 hover:bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export function FAQs() {
  return (
    <section id="contact" className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in-up">
          Ready to Get Started? <span className="ml-2 text-blue-300">🚀</span>
        </h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
          Let's discuss how I can help transform your business with technology.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6 mb-12">
          {faqs.map((f, index) => (
            <details key={f.q} className="rounded-2xl border border-slate-600/30 p-6 bg-gradient-to-br from-slate-800/40 to-slate-700/20 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <summary className="cursor-pointer text-xl font-medium hover:text-blue-400 transition-colors">{f.q}</summary>
              <p className="text-slate-300 mt-4 text-lg">{f.a}</p>
            </details>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <div className="text-2xl font-semibold text-slate-200">
            Let's Build Something Amazing Together
          </div>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="mailto:amaansyed285@gmail.com" className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-lg">
              Start Your Project
            </a>
            <a href="tel:+917007175437" className="px-8 py-4 rounded-xl border-2 border-white/20 hover:border-blue-400 hover:text-blue-400 font-semibold transition-all duration-300 hover:scale-105 text-lg">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Brands() {
  const { brands, loading, error } = useBrands();

  if (loading) {
    return (
      <section className="container py-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">Brands I've Worked With <span className="ml-2 text-emerald-300">🤝</span></h3>
          <p className="text-slate-400 mt-2">Loading brands...</p>
        </div>
        <div className="space-y-6">
          <div className="marquee group">
            <div className="marquee-track gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-40 h-16 rounded-md border border-white/10 bg-slate-800/40 flex items-center justify-center animate-pulse">
                  <div className="w-16 h-8 bg-slate-700 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Split brands into two rows for marquee effect
  const midPoint = Math.ceil(brands.length / 2);
  const row1 = brands.slice(0, midPoint);
  const row2 = brands.slice(midPoint);

  const track1 = [...row1, ...row1];
  const track2 = [...row2, ...row2];

  return (
    <section className="container py-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">Brands I've Worked With <span className="ml-2 text-emerald-300">🤝</span></h3>
        <p className="text-slate-400 mt-2">Replace with your brand logos when available.</p>
      </div>

      <div className="space-y-6">
        <div className="marquee group">
          <div className="marquee-track gap-4">
            {track1.map((b, idx) => (
              <div
                key={`${b.name}-1-${idx}`}
                className="marquee-item w-40 h-16 rounded-md border border-white/10 bg-slate-800/40 flex flex-col items-center justify-center gap-1 hover:border-blue-400/40 transition-colors mx-2"
              >
                <div className="text-xl">{b.logo}</div>
                <div className="text-xs text-slate-300 font-medium whitespace-nowrap">{b.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee group">
          <div className="marquee-track reverse gap-4">
            {track2.map((b, idx) => (
              <div
                key={`${b.name}-2-${idx}`}
                className="marquee-item w-40 h-16 rounded-md border border-white/10 bg-slate-800/40 flex flex-col items-center justify-center gap-1 hover:border-blue-400/40 transition-colors mx-2"
              >
                <div className="text-xl">{b.logo}</div>
                <div className="text-xs text-slate-300 font-medium whitespace-nowrap">{b.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section id="contact" className="container py-16">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-purple-600/20 p-8 md:p-10 text-center shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to discuss your AI/ML project? <span className="ml-2 text-emerald-300">💬</span>
        </h3>
        <p className="text-slate-300 max-w-2xl mx-auto mb-6">
          I reply fast. Share your AI/ML challenges and I'll suggest the best approach to deliver measurable results.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="mailto:amaan@example.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors font-semibold shadow-md">
            💬 Let's talk
          </a>
          <a href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:border-white/30 hover:text-white transition-colors font-semibold">
            🛠️ View services
          </a>
        </div>
      </div>
    </section>
  );
}
