import { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  role: string;
  rating: number;
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials', { cache: 'no-store' });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Testimonial[] = await res.json();
        setTestimonials(data);
      } catch (e: any) {
        setError(e.message);
        // Fallback to static data if API fails
        const { testimonials: fallbackTestimonials } = await import('@/lib/data');
        setTestimonials(fallbackTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
}
