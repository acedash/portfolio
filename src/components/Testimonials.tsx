import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    business: "Local Restaurant Owner",
    text: "Asrar transformed our business! Our online orders increased by 300% after he built our website. He made everything so simple to understand.",
    rating: 5,
    location: "Karachi"
  },
  {
    name: "Muhammad Hassan",
    business: "Retail Store Owner",
    text: "I had no idea how much I needed a website until Asrar showed me. Now customers find us online and our sales have doubled!",
    rating: 5,
    location: "Lahore"
  },
  {
    name: "Fatima Khan",
    business: "Beauty Salon",
    text: "Professional work, fair prices, and he explained everything in simple terms. My salon now gets bookings online 24/7!",
    rating: 5,
    location: "Islamabad"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 bg-gradient-primary bg-clip-text text-transparent">
            What Local Business Owners Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real businesses that grew with professional websites
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary/60" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.business}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};