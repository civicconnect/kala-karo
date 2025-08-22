import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Users, ShoppingBag } from "lucide-react";
import madhubaniHero from "@/assets/madhubani-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Hero Content */}
          <div className="text-primary-foreground animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Kala <span className="text-accent">Karo</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-4 opacity-90 leading-relaxed">
              Preserving India's Rich Heritage
            </p>
            <p className="text-lg mb-8 opacity-80 max-w-lg">
              Discover, learn, and support traditional Indian folk art forms. 
              Connect with master artists and bring centuries-old traditions into the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="warm" size="lg" className="text-lg px-8">
                Explore Art Forms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Join as Artist
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-2 mx-auto">
                  <Palette className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm opacity-80">Art Forms</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-2 mx-auto">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">200+</div>
                <div className="text-sm opacity-80">Master Artists</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-2 mx-auto">
                  <ShoppingBag className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">1000+</div>
                <div className="text-sm opacity-80">Artworks</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <img
                src={madhubaniHero}
                alt="Beautiful traditional Madhubani painting featuring vibrant colors and intricate patterns"
                className="w-full h-auto rounded-2xl shadow-royal transform hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute -inset-4 bg-gradient-warm opacity-20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;