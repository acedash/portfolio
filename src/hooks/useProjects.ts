import { useState, useEffect } from 'react';

interface Project {
  id: string;
  name: string;
  stack: string[];
  summary: string;
  href: string;
  visitUrl?: string;
  category: string;
  description: string;
  features: string[];
  challenges: string;
  results: string[];
  techDetails: Record<string, string | undefined>; // ✅ allow optional fields
  timeline: string;
  client: string;
}


export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects', { cache: 'no-store' });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (e: any) {
        setError(e.message);
        // Fallback to static data if API fails
        const { projects: fallbackProjects } = await import('@/lib/data');
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
