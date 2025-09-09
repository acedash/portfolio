import { useState, useEffect } from 'react';

interface Brand {
  name: string;
  logo: string;
  url?: string;
}

export function useBrands() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch('/api/brands', { cache: 'no-store' });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Brand[] = await res.json();
        setBrands(data);
      } catch (e: any) {
        setError(e.message);
        // Fallback to static data if API fails
        const { brands: fallbackBrands } = await import('@/lib/data');
        setBrands(fallbackBrands);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return { brands, loading, error };
}
