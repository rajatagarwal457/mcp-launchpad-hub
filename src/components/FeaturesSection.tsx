import { Card } from "@/components/ui/card";
import { Globe, Zap, FileText, Settings, Bot, Shield } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global MCP Catalog",
    description: "Discover and search all MCP servers—filter by category, feature set, or provider. Browse the largest collection of ready-to-deploy MCP solutions."
  },
  {
    icon: Zap,
    title: "Instant One-Click Deploy",
    description: "Launch any MCP server instantly from GitHub or Docker in a secure sandbox. Receive your own live URL—no setup needed."
  },
  {
    icon: FileText,
    title: "Seamless Documentation",
    description: "Each listing provides up-to-date feature lists, configuration guides, and integration docs—automatically fetched from the source."
  },
  {
    icon: Settings,
    title: "User Dashboard",
    description: "Manage your deployments: start/stop servers, see usage stats, and edit environment variables from a unified dashboard."
  },
  {
    icon: Bot,
    title: "Agent Ready",
    description: "Deploy MCPs for agents, AI tools, and apps—compatible with platforms like Claude, Cursor, and more."
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "Enterprise-grade security with automatic scaling. Your MCP servers run in isolated environments with guaranteed uptime."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features-section" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 py-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            What's Coming
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A revolutionary platform that transforms how developers discover, deploy, and manage MCP servers
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card backdrop-blur-sm border-primary/10 hover:shadow-glow transition-all duration-500 hover:scale-105 group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};