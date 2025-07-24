import { Card } from "@/components/ui/card";
import { Code, Building, Cpu } from "lucide-react";

const audiences = [
  {
    icon: Code,
    title: "Developers",
    description: "Who want to explore, run, or integrate MCPs with no devops or infrastructure hassle.",
    benefits: [
      "Zero infrastructure setup",
      "Instant testing and prototyping",
      "Easy integration with existing projects",
      "Community-driven MCP discovery"
    ]
  },
  {
    icon: Building,
    title: "Companies",
    description: "Looking to test, compare, or sandbox open-source MCP servers.",
    benefits: [
      "Risk-free MCP evaluation",
      "Compare multiple solutions",
      "Secure sandbox environments",
      "Enterprise-grade reliability"
    ]
  },
  {
    icon: Cpu,
    title: "AI Agent Creators",
    description: "Tool integrators (Claude, Cursor, Dify, etc.) who need instant, persistent endpoints.",
    benefits: [
      "Persistent MCP endpoints",
      "Agent-ready deployments",
      "Multi-platform compatibility",
      "Real-time monitoring"
    ]
  }
];

export const AudienceSection = () => {
  return (
    <section className="py-24 bg-gradient-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Who It's For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for teams and individuals who want to focus on innovation, not infrastructure
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/80 backdrop-blur-sm border-primary/10 hover:shadow-glow transition-all duration-500 hover:scale-105 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <audience.icon className="w-9 h-9 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {audience.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {audience.description}
              </p>

              <div className="space-y-3">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};