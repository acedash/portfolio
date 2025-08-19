import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    status: "Live"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Prisma"],
    category: "SaaS",
    status: "In Development"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
    tech: ["React Native", "Firebase", "Node.js", "JWT", "Plaid API"],
    category: "Mobile",
    status: "Live"
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content creation platform that generates blog posts, social media content, and marketing copy using OpenAI GPT.",
    tech: ["Vue.js", "Python", "FastAPI", "OpenAI API", "Redis"],
    category: "AI/ML",
    status: "Live"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work across different technologies and industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-primary/20 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-accent border-accent/50">
                    {project.category}
                  </Badge>
                  <Badge 
                    variant={project.status === "Live" ? "default" : "secondary"}
                    className={project.status === "Live" ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="hover:border-primary hover:text-primary">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:border-accent hover:text-accent">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};