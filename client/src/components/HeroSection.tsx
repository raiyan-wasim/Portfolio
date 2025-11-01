import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import profileImage from "@assets/personal image_1760441285830.jpeg";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-shrink-0">
            <Avatar className="w-48 h-48 lg:w-64 lg:h-64 ring-4 ring-primary/50 hover-elevate transition-transform duration-500">
              <AvatarImage src={profileImage} alt="Raiyan Wasim" />
              <AvatarFallback className="text-4xl font-bold">RW</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight" data-testid="text-name">
                Raiyan Wasim
              </h1>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 border border-teal/30 rounded-md">
                <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-teal" data-testid="text-status">Available for opportunities</span>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                Building Scalable Systems at the
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                Intersection of{" "}
                <span className="text-primary">Cloud</span>{" "}
                <span className="text-coral">&</span>{" "}
                <span className="text-primary">AI</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-tagline">
              Final-year CS student at Galgotias University, specializing in cloud computing, AI/ML, and automation. 
              Passionate about designing impactful, research-driven solutions with cutting-edge technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="min-h-10"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="min-h-10 backdrop-blur-sm"
                data-testid="button-contact"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 lg:mt-24">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover-elevate p-4 rounded-md transition-all animate-bounce"
            data-testid="button-scroll-down"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
