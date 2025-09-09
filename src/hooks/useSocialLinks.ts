"use client";

import { useState, useEffect } from "react";

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  order: number;
}

export function useSocialLinks() {
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch("/api/social-links", { cache: "no-store" });
        const data = await response.json();
        setLinks(data.sort((a: SocialLink, b: SocialLink) => a.order - b.order));
      } catch (error) {
        console.error("Failed to fetch social links:", error);
        // Fallback to default links
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
          },
          {
            id: "twitter",
            name: "Twitter",
            url: "https://twitter.com/asrarbashir",
            icon: "twitter",
            color: "text-blue-400",
            order: 3
          },
          {
            id: "instagram",
            name: "Instagram",
            url: "https://instagram.com/asrarbashir",
            icon: "instagram",
            color: "text-pink-500",
            order: 4
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  return { links, loading };
}
