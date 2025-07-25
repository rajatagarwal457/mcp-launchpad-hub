import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Twitter, Linkedin, Github, Bell, Users, Rocket } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/20">
            Stay Connected
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Be the First to Know
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community and get exclusive updates about the MCP marketplace launch
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          

          {/* Social & Community */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Follow Our Journey
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-14 bg-card/50 border-primary/20 hover:bg-card hover:border-primary/40">
                  <Twitter className="w-5 h-5 text-blue-500" />
                  <div className="text-left ml-3">
                    <div className="text-sm font-medium">Twitter/X</div>
                    <div className="text-xs text-muted-foreground">@rajat18agarwal</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="justify-start h-14 bg-card/50 border-primary/20 hover:bg-card hover:border-primary/40">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <div className="text-left ml-3">
                    <div className="text-sm font-medium">LinkedIn</div>
                    <div className="text-xs text-muted-foreground">rajat18agarwal</div>
                  </div>
                </Button>
                
              </div>
            </div>

            {/* Team intro */}
            <Card className="p-6 bg-gradient-card backdrop-blur-sm border-primary/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Built by Developers, for Developers</h4>
                  <p className="text-sm text-muted-foreground">A passionate team making MCP deployment effortless</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We're a team of infrastructure engineers and AI enthusiasts who believe that every developer 
                should have access to powerful deployment tools without the complexity.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};