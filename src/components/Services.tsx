"use client";

export function Services() {
  const services = [
    {
      id: "predictive-modeling",
      title: "Predictive Modeling",
      description: "Build supervised models (XGBoost, neural nets) for demand forecasting, pricing, churn, and more.",
      value: "Better forecasts → smarter inventory/pricing decisions and measurable revenue uplift.",
      deliverables: ["Data prep scripts", "Trained model", "Evaluation report", "Inference API"],
      icon: "📊",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: "mlops-deployment",
      title: "End-to-End Machine Learning Deployment (MLOps)",
      description: "From data ingestion to production inference: ETL, model versioning (MLflow), CI/CD, monitoring, and rollback.",
      value: "Reliable models in production with traceability and automated retraining.",
      deliverables: ["Deployment pipelines", "Monitoring dashboards", "Runbooks"],
      icon: "🚀",
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30"
    },
    {
      id: "chatbot-conversational-ai",
      title: "Chatbot & Conversational AI Development",
      description: "Design RAG systems, fine-tune LLMs, integrate LangChain / Bedrock, and validate via regression tests.",
      value: "Faster self-service, fewer support tickets, better CSAT. Example: 30% improvement in resolution for an airline chatbot.",
      deliverables: ["Conversation flows", "LLM fine-tuning", "Test suite", "Hosted API"],
      icon: "🤖",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: "agentic-ai-automation",
      title: "Agentic AI & Automation (Booking Agents, Task Automation)",
      description: "Build multi-agent orchestration (MCP), transactional agents for bookings/cancellations, and operational automation.",
      value: "Reduced manual handling, transactional consistency, 24/7 automated workflows.",
      deliverables: ["Agent orchestration", "API layer (FastAPI)", "Audit logs"],
      icon: "⚡",
      color: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-500/30"
    },
    {
      id: "deep-learning-models",
      title: "Deep Learning Model Creation (NLP, CV, Time Series)",
      description: "Architect and train CNNs, RNNs/LSTM, Transformers for classification, detection, or sequence problems.",
      value: "Higher accuracy on complex tasks (text, images, sequences).",
      deliverables: ["Training code", "Checkpoints", "Evaluation", "Inference endpoint"],
      icon: "🧠",
      color: "from-indigo-500/20 to-indigo-600/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Pipelines",
      description: "Scalable ETL with Spark/Hadoop, data cleaning, feature stores, and automated ingestion.",
      value: "Reliable, queryable datasets that speed up model development and reduce data debt.",
      deliverables: ["ETL jobs", "Schema documentation", "CI for data pipelines"],
      icon: "🔧",
      color: "from-cyan-500/20 to-cyan-600/20",
      borderColor: "border-cyan-500/30"
    },
    {
      id: "model-optimization",
      title: "Model Training, Testing & Optimization",
      description: "Hyperparameter tuning, profiling, pruning/quantization, and establishing test coverage for models (unit, regression).",
      value: "Faster inference, smaller models, reproducible training runs.",
      deliverables: ["Optimized model artifacts", "Benchmarking report", "Test suites"],
      icon: "⚙️",
      color: "from-pink-500/20 to-pink-600/20",
      borderColor: "border-pink-500/30"
    }
  ];

  return (
    <div className="container py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in-up">
          Services <span className="ml-2 text-blue-300">🛠️</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-100">
          What I can do for you — AI/ML solutions that deliver measurable business value.
        </p>
      </div>

      <div className="space-y-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`rounded-2xl border ${service.borderColor} bg-gradient-to-br ${service.color} p-8 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in-up group`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-6">
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                {service.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300 mb-2">What I do:</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-green-300 mb-2">Value:</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {service.value}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300 mb-2">Deliverables:</h3>
                    <ul className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <li
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-slate-200 text-sm font-medium"
                        >
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-purple-600/20 p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to discuss your AI/ML project? <span className="ml-2 text-emerald-300">💬</span>
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Let's talk about how AI can solve your specific business challenges and deliver measurable results.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="mailto:amaan@example.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors font-semibold shadow-md">
              💬 Let's talk
            </a>
            <a href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:border-white/30 hover:text-white transition-colors font-semibold">
              📁 View my work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
