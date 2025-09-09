"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type JsonValue = any;

// Social Media Links Editor
function SocialLinksEditor() {
  const [links, setLinks] = useState<any[]>([]);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/social-links", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        setLinks(data);
        setStatus("Loaded successfully");
      } catch (e) {
        console.error("Failed to load social links:", e);
        setStatus("Failed to load - using fallback data");
        // Set fallback data
        setLinks([
          {
            id: "github",
            name: "GitHub",
            url: "https://github.com/asrarbashir",
            icon: "github",
            color: "text-white",
            order: 1
          },
          {
            id: "linkedin",
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/asrarbashir",
            icon: "linkedin",
            color: "text-sky-500",
            order: 2
          }
        ]);
      }
    })();
  }, []);

  const addLink = () => {
    setLinks([...links, { id: "", name: "", url: "", icon: "link", color: "text-white", order: links.length + 1 }]);
  };

  const updateLink = (index: number, field: string, value: string) => {
    const updated = [...links];
    updated[index] = { ...updated[index], [field]: value };
    setLinks(updated);
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const save = async () => {
    setStatus("Saving...");
    try {
      const res = await fetch("/api/social-links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": process.env.NEXT_PUBLIC_ADMIN_KEY || "dev-key",
        },
        body: JSON.stringify(links),
      });
      if (!res.ok) {
        const j = await res.json();
        throw new Error(j?.error || `Error ${res.status}`);
      }
      setStatus("Saved ✔");
    } catch (e: any) {
      setStatus(`Error: ${e.message}`);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Social Media Links</h3>
            <p className="text-slate-400 text-sm">Manage your social media presence</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={addLink} 
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Link
            </div>
          </button>
          <button 
            onClick={save} 
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Save All
            </div>
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {links.map((link, index) => (
          <div key={index} className="group p-5 rounded-xl border border-white/10 bg-slate-800/40 hover:bg-slate-800/60 transition-all duration-200 hover:border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">ID</label>
                <input
                  type="text"
                  placeholder="github"
                  value={link.id}
                  onChange={(e) => updateLink(index, "id", e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  placeholder="GitHub"
                  value={link.name}
                  onChange={(e) => updateLink(index, "name", e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">URL</label>
                <input
                  type="url"
                  placeholder="https://github.com/username"
                  value={link.url}
                  onChange={(e) => updateLink(index, "url", e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Icon</label>
                <select
                  value={link.icon}
                  onChange={(e) => updateLink(index, "icon", e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-900/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                >
                  <option value="github">GitHub</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="twitter">Twitter</option>
                  <option value="instagram">Instagram</option>
                  <option value="youtube">YouTube</option>
                  <option value="facebook">Facebook</option>
                  <option value="link">Link</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Color</label>
                <select
                  value={link.color}
                  onChange={(e) => updateLink(index, "color", e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-900/50 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                >
                  <option value="text-white">White</option>
                  <option value="text-blue-400">Blue</option>
                  <option value="text-sky-500">Sky</option>
                  <option value="text-pink-500">Pink</option>
                  <option value="text-red-500">Red</option>
                  <option value="text-green-500">Green</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => removeLink(index)}
                  className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-white/10">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${status.includes('success') ? 'bg-green-400' : status.includes('Failed') ? 'bg-red-400' : 'bg-blue-400'}`}></div>
          <span className="text-slate-300 text-sm font-medium">{status || 'Ready to save'}</span>
        </div>
      </div>
    </div>
  );
}

// JSON Editor for complex data
function JsonEditor({ title, endpoint }: { title: string; endpoint: string }) {
  const [value, setValue] = useState<string>("[]");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(endpoint, { cache: "no-store" });
        const data = await res.json();
        setValue(JSON.stringify(data, null, 2));
      } catch (e) {
        setStatus("Failed to load");
      }
    })();
  }, [endpoint]);

  const save = async () => {
    setStatus("Saving...");
    try {
      const parsed: JsonValue = JSON.parse(value);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": process.env.NEXT_PUBLIC_ADMIN_KEY || "dev-key",
        },
        body: JSON.stringify(parsed),
      });
      if (!res.ok) {
        const j = await res.json();
        throw new Error(j?.error || `Error ${res.status}`);
      }
      setStatus("Saved ✔");
    } catch (e: any) {
      setStatus(`Error: ${e.message}`);
    }
  };

  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 md:p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button onClick={save} className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-semibold">Save</button>
      </div>
      <textarea
        className="w-full h-64 md:h-80 rounded-lg bg-slate-950 border border-white/10 p-3 font-mono text-sm text-slate-200"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="mt-2 text-sm text-slate-400">{status}</div>
    </div>
  );
}

// Projects Form Editor
function ProjectsEditor() {
  const [projects, setProjects] = useState<any[]>([]);
  const [status, setStatus] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const res = await fetch("/api/projects", { cache: "no-store" });
      const data = await res.json();
      setProjects(data);
      setStatus("Loaded successfully");
    } catch (e) {
      setStatus("Failed to load");
    }
  };

  const addProject = () => {
    const newProject = {
      id: "",
      name: "",
      stack: [],
      summary: "",
      href: "",
      visitUrl: "",
      category: "",
      description: "",
      features: [],
      challenges: "",
      results: [],
      techDetails: {},
      timeline: "",
      client: ""
    };
    setProjects([...projects, newProject]);
    setEditingIndex(projects.length);
  };

  const updateProject = (index: number, field: string, value: any) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    setProjects(updated);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
    if (editingIndex === index) setEditingIndex(null);
  };

  const saveProjects = async () => {
    setStatus("Saving...");
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projects),
      });
      if (res.ok) {
        setStatus("Saved successfully");
      } else {
        setStatus("Save failed");
      }
    } catch (e) {
      setStatus("Save failed");
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Projects</h3>
            <p className="text-slate-400 text-sm">Manage your portfolio projects</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={addProject} 
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Project
            </div>
          </button>
          <button 
            onClick={saveProjects} 
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Save All
            </div>
          </button>
        </div>
      </div>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="group p-6 rounded-xl border border-white/10 bg-slate-800/40 hover:bg-slate-800/60 transition-all duration-200 hover:border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Project Name</label>
                <input
                  type="text"
                  placeholder="Enter project name"
                  value={project.name}
                  onChange={(e) => updateProject(index, "name", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Category</label>
                <input
                  type="text"
                  placeholder="E-commerce, Healthcare, etc."
                  value={project.category}
                  onChange={(e) => updateProject(index, "category", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Visit URL</label>
                <input
                  type="url"
                  placeholder="https://project-demo.com"
                  value={project.visitUrl}
                  onChange={(e) => updateProject(index, "visitUrl", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Timeline</label>
                <input
                  type="text"
                  placeholder="8 weeks, 3 months, etc."
                  value={project.timeline}
                  onChange={(e) => updateProject(index, "timeline", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-slate-300">Summary</label>
                <textarea
                  placeholder="Brief project summary..."
                  value={project.summary}
                  onChange={(e) => updateProject(index, "summary", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                  rows={2}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-slate-300">Description</label>
                <textarea
                  placeholder="Detailed project description..."
                  value={project.description}
                  onChange={(e) => updateProject(index, "description", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                  rows={3}
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button
                  onClick={() => removeProject(index)}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove Project
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-white/10">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${status.includes('success') ? 'bg-green-400' : status.includes('Failed') ? 'bg-red-400' : 'bg-blue-400'}`}></div>
          <span className="text-slate-300 text-sm font-medium">{status || 'Ready to save'}</span>
        </div>
      </div>
    </div>
  );
}

// Testimonials Form Editor
function TestimonialsEditor() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const res = await fetch("/api/testimonials", { cache: "no-store" });
      const data = await res.json();
      setTestimonials(data);
      setStatus("Loaded successfully");
    } catch (e) {
      setStatus("Failed to load");
    }
  };

  const addTestimonial = () => {
    setTestimonials([...testimonials, { quote: "", author: "", company: "", role: "", rating: 5 }]);
  };

  const updateTestimonial = (index: number, field: string, value: any) => {
    const updated = [...testimonials];
    updated[index] = { ...updated[index], [field]: value };
    setTestimonials(updated);
  };

  const removeTestimonial = (index: number) => {
    setTestimonials(testimonials.filter((_, i) => i !== index));
  };

  const saveTestimonials = async () => {
    setStatus("Saving...");
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonials),
      });
      if (res.ok) {
        setStatus("Saved successfully");
      } else {
        setStatus("Save failed");
      }
    } catch (e) {
      setStatus("Save failed");
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Testimonials</h3>
            <p className="text-slate-400 text-sm">Manage client testimonials</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={addTestimonial} 
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Testimonial
            </div>
          </button>
          <button 
            onClick={saveTestimonials} 
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Save All
            </div>
          </button>
        </div>
      </div>
      
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="group p-6 rounded-xl border border-white/10 bg-slate-800/40 hover:bg-slate-800/60 transition-all duration-200 hover:border-white/20">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Testimonial Quote</label>
                <textarea
                  placeholder="What the client said about your work..."
                  value={testimonial.quote}
                  onChange={(e) => updateTestimonial(index, "quote", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Author Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={testimonial.author}
                    onChange={(e) => updateTestimonial(index, "author", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Company</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={testimonial.company}
                    onChange={(e) => updateTestimonial(index, "company", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Role</label>
                  <input
                    type="text"
                    placeholder="CEO, Founder, etc."
                    value={testimonial.role}
                    onChange={(e) => updateTestimonial(index, "role", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => removeTestimonial(index)}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove Testimonial
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-white/10">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${status.includes('success') ? 'bg-green-400' : status.includes('Failed') ? 'bg-red-400' : 'bg-blue-400'}`}></div>
          <span className="text-slate-300 text-sm font-medium">{status || 'Ready to save'}</span>
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("social");
  const [isClient, setIsClient] = useState(false);
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";
    
    if (password === adminPassword) {
      setAuthenticated(true);
      setShowLogin(false);
    } else {
      alert("Invalid password");
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setShowLogin(true);
    setPassword("");
  };

  // Show loading state until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-pulse">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="text-white text-lg font-semibold">Loading...</div>
        </div>
      </div>
    );
  }

  if (showLogin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="max-w-md w-full mx-4 relative z-10">
          <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-blue-500/10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                Admin Portal
              </h1>
              <p className="text-slate-400">Enter your password to access the CMS</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-slate-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 backdrop-blur-sm"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 p-4 rounded-xl bg-slate-900/50 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-slate-300 font-medium text-sm">Default Credentials</p>
              </div>
              <p className="text-slate-400 text-sm">
                Password: <code className="bg-slate-800 px-2 py-1 rounded text-blue-300 font-mono">admin123</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:30px_30px]"></div>
      </div>
      
      <div className="container py-8 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Content Management
              </h1>
              <p className="text-slate-400 mt-1">Manage your portfolio content with ease</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </div>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 p-1 rounded-2xl bg-slate-800/50 border border-white/10 backdrop-blur-sm">
          {[
            { id: "social", label: "Social Links", icon: "🔗" },
            { id: "projects", label: "Projects", icon: "💼" },
            { id: "testimonials", label: "Testimonials", icon: "💬" },
            { id: "brands", label: "Brands", icon: "🏢" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50 hover:scale-102"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid gap-8">
          {activeTab === "social" && <SocialLinksEditor />}
          {activeTab === "projects" && <ProjectsEditor />}
          {activeTab === "testimonials" && <TestimonialsEditor />}
          {activeTab === "brands" && <JsonEditor title="Brands" endpoint="/api/brands" />}
        </div>
      </div>
    </main>
  );
}
