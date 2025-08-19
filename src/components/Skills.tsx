import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS", "JavaScript ES6+"]
  },
  {
    title: "Backend", 
    icon: Database,
    skills: ["Node.js", "Python", "Laravel", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "DevOps & Tools",
    icon: Code,
    skills: ["Docker", "AWS", "Git", "CI/CD", "Linux", "Nginx", "Jest", "Cypress"]
  },
  {
    title: "Mobile & Others",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "GraphQL", "REST APIs", "Socket.io", "Figma", "Agile"]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-primary/20 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="text-center">
                  <category.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <CardTitle className="text-xl font-heading text-accent">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};