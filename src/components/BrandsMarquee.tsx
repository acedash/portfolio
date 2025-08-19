const brands = [
  "Local Restaurant Chain", "Retail Fashion Store", "Medical Clinic", "Real Estate Agency", 
  "Auto Repair Shop", "Beauty Salon", "Fitness Center", "Law Firm",
  "Accounting Firm", "Construction Company", "Photography Studio", "Event Planning",
  "Pet Grooming", "Home Services", "Educational Center", "Coffee Shop"
];

export const BrandsMarquee = () => {
  return (
    <section className="py-16 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-muted-foreground mb-2">
            Businesses I've Built Solutions For
          </h3>
          <p className="text-sm text-muted-foreground/80">
            Helping local businesses thrive online
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-6 py-3 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg"
            >
              <span className="text-muted-foreground font-medium whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};