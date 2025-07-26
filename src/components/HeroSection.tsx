import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Bell, Sparkles } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  // Handler for smooth scroll to FeaturesSection
  const handleLearnMoreClick = () => {
    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/20 backdrop-blur-sm border border-primary/20 rounded-full mb-8 group hover:bg-card/30 transition-all duration-300">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-foreground">Coming Soon: The Future of MCP Deployment</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent leading-tight">
          The World's First
          <br />
          <span className="text-primary">MCP Marketplace</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Browse, deploy, and manage any MCP server in seconds—no infrastructure required. 
          Get your own live URL instantly.
        </p>

        

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            size="xl"
            className="bg-card/20 backdrop-blur-sm border-primary/20 hover:bg-card/30"
            onClick={handleLearnMoreClick}
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">MCP Servers Ready</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">&lt;5s</div>
            <div className="text-sm text-muted-foreground">Average Deploy Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-muted-foreground">Infrastructure To Manage</div>
          </div>
        </div>
      </div>
    </section>
  );
};