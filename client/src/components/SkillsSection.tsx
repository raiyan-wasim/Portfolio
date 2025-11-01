import { Card } from "@/components/ui/card";
import { Code, Cloud, Wrench, Brain } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C++", "Python", "JavaScript", "HTML/CSS", "SQL"],
      color: "primary"
    },
    {
      title: "Cloud Technologies",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS (EC2, S3, ECS, ECR)", "Microsoft Azure", "GCP (As Needed)","Cloud Computing"],
      color: "coral"
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Docker", "VS Code", "Redis", "n8n"],
      color: "teal"
    },
    {
      title: "Core Concepts",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Data Structures & Algorithms", "OOP", "OS", "DBMS", "Computer Networks"],
      color: "primary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center" data-testid="text-skills-title">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300 hover:scale-105"
              data-testid={`card-skill-category-${index}`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-${category.color}/10 rounded-md flex items-center justify-center text-${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-center gap-2 group"
                      data-testid={`text-skill-${index}-${idx}`}
                    >
                      <span className={`w-1.5 h-1.5 bg-${category.color} rounded-full group-hover:scale-150 transition-transform`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
