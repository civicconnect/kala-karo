import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Users } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-primary-foreground">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Begin Your <span className="text-accent">Artistic Journey?</span>
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Join thousands of art enthusiasts and master artists who are preserving and 
            celebrating India's rich cultural heritage. Whether you're here to learn, 
            teach, or simply appreciate, there's a place for you in our community.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <Palette className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Art Lovers</h3>
              <p className="text-primary-foreground/80 mb-6">
                Discover, learn, and purchase authentic traditional artworks from master craftspeople.
              </p>
              <Button variant="warm" size="lg">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Artists</h3>
              <p className="text-primary-foreground/80 mb-6">
                Share your expertise, connect with students, and build a sustainable livelihood from your art.
              </p>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Join as Artist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-primary-foreground/60 text-sm mb-4">
              Join over 1,000 artists and art enthusiasts
            </p>
            <div className="flex justify-center space-x-4 text-sm text-primary-foreground/40">
              <span>✓ Free to get started</span>
              <span>✓ No hidden fees</span>
              <span>✓ Secure payments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;