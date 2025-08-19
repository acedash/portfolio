import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Users } from "lucide-react";

const experiences = [
  {
    title: "Website Developer for Local Businesses",
    company: "Freelance",
    period: "2022 - Present",
    location: "Local Area",
    description: "Help local businesses understand the importance of having a website and create professional sites that drive sales and customer engagement.",
    achievements: ["200% increase in customer inquiries", "Helped 30+ local businesses go digital", "Average 3x ROI within 6 months"]
  },
  {
    title: "Digital Solutions Consultant",
    company: "Local Business Development",
    period: "2020 - 2022", 
    location: "Community Focus",
    description: "Educated small business owners about digital marketing and online presence. Created simple, effective websites for restaurants, shops, and service providers.",
    achievements: ["90% client retention rate", "Simplified tech for 50+ businesses", "Boosted local online visibility"]
  }
];

const stats = [
  { label: "Years Experience", value: "5+", icon: Calendar },
  { label: "Projects Completed", value: "50+", icon: Award },
  { label: "Happy Clients", value: "30+", icon: Users },
  { label: "Countries Served", value: "15+", icon: MapPin }
];

export const About = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I help local businesses understand why they need a website and how it can transform their business. 
            From restaurants to retail shops, I create simple, effective websites that bring in more customers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-accent/20 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold font-heading text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold font-heading mb-8 text-center text-accent">
            Professional Experience
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title}
                  className="relative md:pl-20"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>
                  
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-primary/20 transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold font-heading text-primary mb-2">
                            {exp.title}
                          </h4>
                          <div className="flex items-center gap-4 mb-3">
                            <p className="text-accent font-semibold text-lg">{exp.company}</p>
                            <Badge variant="outline" className="text-sm">
                              {exp.period}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground flex items-center text-sm mb-4">
                            <MapPin className="h-4 w-4 mr-2 text-accent" />
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h5 className="font-semibold text-accent mb-3">Key Achievements:</h5>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {exp.achievements.map((achievement) => (
                            <div
                              key={achievement}
                              className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-sm font-medium"
                            >
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};