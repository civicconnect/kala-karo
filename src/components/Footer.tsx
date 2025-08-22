import { Palette, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                <Palette className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-secondary-foreground">Kala Karo</span>
            </div>
            <p className="text-secondary-foreground/70 max-w-md leading-relaxed">
              Preserving India's rich artistic heritage by connecting traditional master artists 
              with modern audiences, creating opportunities for learning, appreciation, and livelihood.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#artforms" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Art Forms</a></li>
              <li><a href="#artists" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Artists</a></li>
              <li><a href="#marketplace" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Marketplace</a></li>
              <li><a href="#workshops" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Workshops</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-secondary-foreground">Support</h4>
            <ul className="space-y-3">
              <li><a href="#help" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 Kala Karo. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-secondary-foreground/60">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for Indian Art & Culture</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;