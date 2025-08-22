import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import madhubaniArt from "@/assets/madhubani-hero.jpg";
import warliArt from "@/assets/warli-art.jpg";
import pithoraArt from "@/assets/pithora-art.jpg";

const ArtForms = () => {
  const artForms = [
    {
      name: "Madhubani",
      description: "Vibrant paintings from Bihar featuring geometric patterns, nature motifs, and mythological themes with natural dyes and pigments.",
      image: madhubaniArt,
      region: "Bihar",
      artists: "45+ Artists",
    },
    {
      name: "Warli",
      description: "Tribal art from Maharashtra using simple white figures on earthy backgrounds to depict daily life and spiritual beliefs.",
      image: warliArt,
      region: "Maharashtra",
      artists: "32+ Artists",
    },
    {
      name: "Pithora",
      description: "Sacred wall paintings from Gujarat featuring horses, elephants, and mythological figures in vibrant colors during festivals.",
      image: pithoraArt,
      region: "Gujarat",
      artists: "28+ Artists",
    },
  ];

  return (
    <section id="artforms" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Traditional <span className="text-primary">Art Forms</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the rich heritage of Indian folk art. Each form tells a story of cultural traditions 
            passed down through generations, now brought to life through our digital platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artForms.map((art, index) => (
            <Card
              key={art.name}
              className="group overflow-hidden border-0 shadow-soft hover:shadow-royal transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={art.image}
                  alt={`${art.name} traditional art form from ${art.region}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground">{art.name}</h3>
                  <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">
                    {art.region}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {art.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">
                    {art.artists}
                  </span>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8">
            View All Art Forms
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtForms;