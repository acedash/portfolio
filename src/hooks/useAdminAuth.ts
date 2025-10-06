"use client";

import { useState, useEffect } from "react";

export function useAdminAuth() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    try {
      const isAuthenticated = localStorage.getItem('admin_authenticated') === 'true';
      const loginTime = localStorage.getItem('admin_login_time');
      
      // Check if login is still valid (24 hours)
      if (isAuthenticated && loginTime) {
        const timeDiff = Date.now() - parseInt(loginTime);
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        
        if (hoursDiff < 24) {
          setAuthenticated(true);
        } else {
          // Session expired
          localStorage.removeItem('admin_authenticated');
          localStorage.removeItem('admin_login_time');
          setAuthenticated(false);
        }
      } else {
        setAuthenticated(false);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const login = (password: string) => {
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";
    
    if (password === adminPassword) {
      setAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      localStorage.setItem('admin_login_time', Date.now().toString());
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
    localStorage.removeItem('admin_login_time');
  };

  return {
    authenticated,
    isClient,
    loading,
    login,
    logout,
    checkAuthStatus
  };
}
