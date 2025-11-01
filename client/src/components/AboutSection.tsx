import { Card } from "@/components/ui/card";
import { Code2, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center" data-testid="text-about-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <Card className="p-8 hover-elevate transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-coral/10 rounded-md flex items-center justify-center">
                <Code2 className="w-8 h-8 text-coral" />
              </div>
              <h3 className="text-xl font-semibold">Strengths</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">C++</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Python</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Cloud</Badge>
                <Badge variant="secondary" className="bg-coral/10 text-coral border-coral/20">AI/ML</Badge>
                <Badge variant="secondary" className="bg-coral/10 text-coral border-coral/20">Automation</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover-elevate transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-teal/10 rounded-md flex items-center justify-center">
                <Heart className="w-8 h-8 text-teal" />
              </div>
              <h3 className="text-xl font-semibold">Passion</h3>
              <p className="text-sm text-muted-foreground">
                Building scalable and intelligent systems that solve real-world problems with cutting-edge technology
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-primary/5 border-l-4 border-l-primary">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-1 h-16 bg-coral rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Key Achievement</h3>
                <p className="text-muted-foreground">
                  Achieved the <span className="text-teal font-medium">Premium Milestone</span> in Google Cloud Arcade 2024, 
                  demonstrating advanced proficiency in cloud technologies and hands-on implementation skills.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
