import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import heroBackground from "@/assets/hero-background.jpg";
import profileImage from "@/assets/asrar-profile.jpeg";
    
export const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const textRotation = [
    "Asrar Bashir",
    "Full Stack Developer",
    "Your Digital Success Partner",
    "Local Business Expert"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textRotation.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-background"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-200"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                Hi, I'm
              </p>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 h-20 flex items-center justify-center md:justify-start">
                <span 
                  key={currentText}
                  className="bg-gradient-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-700"
                >
                  {textRotation[currentText]}
                </span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              I help local businesses grow by creating professional websites that attract customers 24/7. 
              No technical knowledge required - I handle everything from design to launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-primary-foreground border-0"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:border-primary hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:border-accent hover:text-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:border-accent hover:text-accent transition-colors">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
              <p>Serving local businesses • Free consultations available</p>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center md:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-110"></div>
              <img 
                src={profileImage} 
                alt="Asrar Bashir - Full Stack Developer"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};