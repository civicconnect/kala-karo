import { Card } from "@/components/ui/card";
import { 
  Users, 
  ShoppingBag, 
  BookOpen, 
  Video, 
  Award, 
  Heart 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Connect with Masters",
      description: "Learn directly from master artists who have inherited these traditions for generations.",
      color: "text-primary",
    },
    {
      icon: ShoppingBag,
      title: "Art Marketplace",
      description: "Purchase authentic handcrafted artworks and support traditional artists directly.",
      color: "text-accent",
    },
    {
      icon: BookOpen,
      title: "Cultural Learning",
      description: "Explore the history, techniques, and cultural significance of each art form.",
      color: "text-secondary",
    },
    {
      icon: Video,
      title: "Live Workshops",
      description: "Join interactive workshops and masterclasses from the comfort of your home.",
      color: "text-primary",
    },
    {
      icon: Award,
      title: "Skill Certification",
      description: "Get certified in traditional art forms and showcase your newly acquired skills.",
      color: "text-accent",
    },
    {
      icon: Heart,
      title: "Preserve Heritage",
      description: "Be part of a mission to preserve and promote India's rich cultural heritage.",
      color: "text-secondary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="text-primary">Kala Karo?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building a bridge between ancient traditions and modern technology, 
            creating opportunities for artists while preserving cultural heritage for future generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-8 text-center border-0 shadow-soft hover:shadow-warm transition-all duration-500 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-current/20 to-current/10 flex items-center justify-center ${feature.color}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;