import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="container py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              {project.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {project.name}
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={project.visitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                🌐 Visit Live Site
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-white/20 hover:border-blue-400 hover:text-blue-400 font-medium transition-colors flex items-center gap-2"
              >
                💬 Discuss Similar Project
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-lg border border-white/10 bg-slate-800/40">
                <div className="text-2xl font-bold text-blue-400 mb-1">{project.timeline}</div>
                <div className="text-sm text-slate-400">Timeline</div>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-slate-800/40">
                <div className="text-2xl font-bold text-blue-400 mb-1">{project.client}</div>
                <div className="text-sm text-slate-400">Client</div>
              </div>
            </div>
          </div>

          {/* Project Image/Thumbnail */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <div className="text-6xl opacity-70">
                {project.category === "E-commerce" ? "🛒" : project.category === "Healthcare" ? "🏥" : "💻"}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-slate-800/40"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-green-600/10"
              >
                <div className="text-2xl font-bold text-green-400 mb-2">{result}</div>
                <div className="text-slate-300">Measurable business impact</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Technical Implementation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(project.techDetails).map(([key, value]) => (
              <div key={key} className="p-6 rounded-xl border border-white/10 bg-slate-800/40">
                <h3 className="text-xl font-semibold text-white mb-3 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-slate-300">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Challenges & Solutions</h2>
          <div className="p-8 rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-orange-600/10">
            <p className="text-slate-300 text-lg leading-relaxed">{project.challenges}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-purple-600/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready to Build Something Similar?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve similar results for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/6006257942"
              className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors font-semibold text-white shadow-md flex items-center gap-2"
            >
              💬 Start a Conversation
            </a>
            <a
              href="mailto:mailtokhanasrar@gmail.com"
              className="px-8 py-4 rounded-xl border border-white/20 hover:border-blue-400 hover:text-blue-400 font-semibold transition-colors flex items-center gap-2"
            >
              ✉️ Send Email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
