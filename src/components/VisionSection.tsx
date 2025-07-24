import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Sparkles, Target, Users } from "lucide-react";

export const VisionSection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 via-transparent to-primary-glow/30" />
      </div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main vision content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary-foreground animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">Our Vision</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 text-primary-foreground leading-tight">
            A New Era for
            <br />
            <span className="bg-gradient-to-r from-primary-foreground to-primary-foreground/70 bg-clip-text text-transparent">
              Open-Source MCP Servers
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Making the "run-anywhere" promise a reality for developers everywhere. 
            We're building the infrastructure so you can focus on innovation.
          </p>
        </div>

        {/* Vision cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 group">
            <Target className="w-12 h-12 text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-4 text-primary-foreground">
              Democratize Deployment
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Every developer should be able to deploy and test MCP servers instantly, regardless of their infrastructure knowledge.
            </p>
          </Card>

          <Card className="p-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 group">
            <Users className="w-12 h-12 text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-4 text-primary-foreground">
              Unite the Community
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Create a central hub where the MCP ecosystem can thrive, share knowledge, and accelerate innovation together.
            </p>
          </Card>

          <Card className="p-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 group">
            <Sparkles className="w-12 h-12 text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-4 text-primary-foreground">
              Accelerate AI Development
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empower AI agents and tools with instant access to the full spectrum of MCP capabilities and integrations.
            </p>
          </Card>
        </div>

        
      </div>
    </section>
  );
};