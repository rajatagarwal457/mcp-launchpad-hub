import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Zap, Globe, Settings } from "lucide-react";

const highlights = [
  {
    icon: CheckCircle,
    text: "No servers to manage—just \"click & go\""
  },
  {
    icon: Globe,
    text: "Auto-generated, secure public URLs"
  },
  {
    icon: Zap,
    text: "Fastest way to preview any MCP on the web"
  },
  {
    icon: Settings,
    text: "Easily manage and reconfigure deployments"
  },
  {
    icon: Clock,
    text: "Real-time documentation sync with GitHub"
  },
  {
    icon: Shield,
    text: "Enterprise-grade security and reliability"
  }
];

export const HighlightsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary-glow/5" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
            Product Highlights
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Built for Speed & Simplicity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to deploy and manage MCP servers, without the complexity
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 bg-gradient-card backdrop-blur-sm border border-primary/10 rounded-xl hover:shadow-soft transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <p className="text-foreground font-medium leading-relaxed group-hover:text-primary transition-colors">
                {highlight.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
            <Zap className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold">Deploy in under 5 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};