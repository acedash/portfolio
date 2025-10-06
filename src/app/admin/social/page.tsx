"use client";

import { useState, useEffect } from "react";
import AdminLayout from "@/components/AdminLayout";

interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  order: number;
}

export default function SocialAdmin() {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingLink, setEditingLink] = useState<SocialLink | null>(null);
  const [formData, setFormData] = useState<Partial<SocialLink>>({
    name: "",
    url: "",
    icon: "",
    color: "#3B82F6",
    order: 0
  });

  const socialPlatforms = [
    { name: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", color: "#181717" },
    { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", color: "#0077B5" },
    { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", color: "#1DA1F2" },
    { name: "Instagram", icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281h-1.297v1.297h1.297v-1.297zm-3.323 1.297c-1.297 0-2.448.49-3.323 1.297-.807.875-1.297 2.026-1.297 3.323s.49 2.448 1.297 3.323c.875.807 2.026 1.297 3.323 1.297s2.448-.49 3.323-1.297c.807-.875 1.297-2.026 1.297-3.323s-.49-2.448-1.297-3.323c-.875-.807-2.026-1.297-3.323-1.297z", color: "#E4405F" },
    { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", color: "#1877F2" },
    { name: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", color: "#FF0000" },
    { name: "Dribbble", icon: "M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.433 0-.856.04-1.27.112zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.48.47.985.68 1.49.08.19.15.38.22.57 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.32-6.43z", color: "#EA4C89" },
    { name: "Behance", icon: "M22 7h-7v-2h7v2zm1.726 10c0-5-3.86-9-8.726-9-4.866 0-8.726 4-8.726 9 0 5 3.86 9 8.726 9 4.866 0 8.726-4 8.726-9zm-8.726 7c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm-1.5-4h3c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-3c-.276 0-.5.224-.5.5s.224.5.5.5zm0-2h3c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-3c-.276 0-.5.224-.5.5s.224.5.5.5zm0-2h3c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-3c-.276 0-.5.224-.5.5s.224.5.5.5z", color: "#1769FF" }
  ];

  useEffect(() => {
    loadSocialLinks();
  }, []);

  const loadSocialLinks = async () => {
    try {
      const response = await fetch("/api/social-links");
      const data = await response.json();
      setSocialLinks(data);
    } catch (error) {
      console.error("Failed to load social links:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingLink ? `/api/social-links/${editingLink.id}` : "/api/social-links";
      const method = editingLink ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await loadSocialLinks();
        setShowForm(false);
        setEditingLink(null);
        setFormData({
          name: "",
          url: "",
          icon: "",
          color: "#3B82F6",
          order: 0
        });
      }
    } catch (error) {
      console.error("Failed to save social link:", error);
    }
  };

  const handleEdit = (link: SocialLink) => {
    setEditingLink(link);
    setFormData(link);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this social link?")) {
      try {
        await fetch(`/api/social-links/${id}`, { method: "DELETE" });
        await loadSocialLinks();
      } catch (error) {
        console.error("Failed to delete social link:", error);
      }
    }
  };

  const selectPlatform = (platform: any) => {
    setFormData(prev => ({
      ...prev,
      name: platform.name,
      icon: platform.icon,
      color: platform.color
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-pulse">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div className="text-white text-lg font-semibold">Loading social links...</div>
        </div>
      </div>
    );
  }

  return (
    <AdminLayout title="Social Media" description="Manage your social media presence">
      <div className="flex items-center justify-between mb-8">
        <div></div>
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Social Link
          </div>
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {editingLink ? "Edit Social Link" : "Add New Social Link"}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingLink(null);
                  setFormData({
                    name: "",
                    url: "",
                    icon: "",
                    color: "#3B82F6",
                    order: 0
                  });
                }}
                className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Platform</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {socialPlatforms.map((platform) => (
                    <button
                      key={platform.name}
                      type="button"
                      onClick={() => selectPlatform(platform)}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        formData.name === platform.name
                          ? "border-pink-500 bg-pink-500/10"
                          : "border-white/10 hover:border-pink-500/50"
                      }`}
                    >
                      <div className="text-center">
                        <div 
                          className="w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: platform.color }}
                        >
                          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d={platform.icon} />
                          </svg>
                        </div>
                        <p className="text-slate-300 text-xs">{platform.name}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Platform Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50"
                  placeholder="e.g., GitHub, LinkedIn"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">URL</label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50"
                  placeholder="https://github.com/username"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Icon (SVG Path)</label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData(prev => ({ ...prev, icon: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50"
                  placeholder="SVG path data"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Color</label>
                <div className="flex gap-3">
                  <input
                    type="color"
                    value={formData.color}
                    onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                    className="w-16 h-12 rounded-lg border border-white/10 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={formData.color}
                    onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50"
                    placeholder="#3B82F6"
                  />
                </div>
              </div>

              {formData.icon && formData.color && (
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Preview</label>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-white/10">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: formData.color }}
                    >
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d={formData.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">{formData.name}</p>
                      <p className="text-slate-400 text-sm">{formData.url}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  {editingLink ? "Update Social Link" : "Create Social Link"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingLink(null);
                  }}
                  className="px-8 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Social Links List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialLinks.map((link) => (
          <div key={link.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: link.color }}
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d={link.icon} />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{link.name}</h3>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-pink-400 text-sm transition-colors truncate block"
                >
                  {link.url}
                </a>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(link)}
                className="flex-1 px-3 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(link.id)}
                className="flex-1 px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {socialLinks.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-700 flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No social links yet</h3>
          <p className="text-slate-400 mb-6">Connect your social media profiles to expand your reach.</p>
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Add Your First Social Link
          </button>
        </div>
      )}
    </AdminLayout>
  );
}