import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiGithub, SiLinkedin, SiLeetcode, SiHackerrank } from "react-icons/si";
import { Mail, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <SiGithub className="w-6 h-6" />,
      url: "https://github.com/raiyan-wasim",
      handle: "@raiyan-wasim",
      color: "hover:text-[#181717]"
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/raiyan-wasim",
      handle: "/raiyan-wasim",
      color: "hover:text-[#0A66C2]"
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="w-6 h-6" />,
      url: "https://leetcode.com/u/Raiyan_Wasim/",
      handle: "@Raiyan_Wasim",
      color: "hover:text-[#FFA116]"
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank className="w-6 h-6" />,
      url: "https://www.hackerrank.com/profile/wasimraiyan8",
      handle: "@wasimraiyan8",
      color: "hover:text-[#00EA64]"
    }
  ];

  const languages = [
    { name: "English", level: "Full Professional Proficiency" },
    { name: "Hindi", level: "Native or Bilingual Proficiency" },
    { name: "French", level: "Elementary Proficiency (In Progress)" }
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("wasimraiyan8@gmail.com");
    toast({
      title: "Email copied!",
      description: "wasimraiyan8@gmail.com has been copied to clipboard",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-semibold" data-testid="text-contact-title">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating on innovative cloud and AI projects? Let's build something impactful together.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Button
            onClick={copyEmail}
            className="gap-2 min-h-12 text-lg px-8"
            data-testid="button-copy-email"
          >
            <Mail className="w-5 h-5" />
            wasimraiyan8@gmail.com
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              data-testid={`link-social-${index}`}
            >
              <Button
                variant="outline"
                className={`w-full h-auto py-6 flex flex-col gap-3 hover-elevate transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50`}
              >
                <div className={`w-16 h-16 bg-card rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10 ${link.color}`}>
                  {link.icon}
                </div>
                <div className="text-center">
                  <p className="font-semibold group-hover:text-primary transition-colors">{link.name}</p>
                  <p className="text-sm text-muted-foreground font-mono">{link.handle}</p>
                </div>
              </Button>
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Languages:</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {languages.map((lang, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-muted/50"
                  data-testid={`badge-language-${index}`}
                >
                  {lang.name} - {lang.level}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Raiyan Wasim. Building the future with Cloud & AI.
          </p>
        </div>
      </div>
    </section>
  );
}
