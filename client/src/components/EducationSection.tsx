import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

interface Education {
  institution: string;
  degree: string;
  score: string;
  period: string;
  startYear: string;
  endYear: string;
}

export default function EducationSection() {
  const education: Education[] = [
    {
      institution: "Galgotias University",
      degree: "B.Tech in Computer Science and Engineering",
      score: "CGPA: 8.13",
      period: "Aug 2022 – Aug 2026",
      startYear: "2022",
      endYear: "2026"
    },
    {
      institution: "Harrow English School",
      degree: "Senior Secondary (Class 12) - CBSE",
      score: "77.4%",
      period: "July 2021",
      startYear: "2021",
      endYear: "2021"
    },
    {
      institution: "Harrow English School",
      degree: "Secondary (Class 10) - CBSE",
      score: "86.4%",
      period: "March 2019",
      startYear: "2019",
      endYear: "2019"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-16 text-center" data-testid="text-education-title">
          Education Journey
        </h2>
        
        <div className="relative">
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-coral to-teal"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative flex gap-6 md:gap-8 group"
                data-testid={`timeline-education-${index}`}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="relative z-10">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-background border-4 border-primary rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <div className={`w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br ${
                        index === 0 ? 'from-primary to-coral' : 
                        index === 1 ? 'from-coral to-teal' : 
                        'from-teal to-primary'
                      } rounded-full flex items-center justify-center`}>
                        <GraduationCap className="w-5 h-5 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold whitespace-nowrap">
                    {edu.startYear} - {edu.endYear}
                  </div>
                </div>

                <div className="flex-1 pb-4">
                  <Card className="p-6 md:p-8 hover-elevate transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent" data-testid={`text-institution-${index}`}>
                          {edu.institution}
                        </h3>
                        <p className="text-lg text-foreground font-medium">{edu.degree}</p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground font-mono">{edu.period}</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full self-center"></div>
                        <div className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-md inline-flex items-center gap-2 w-fit">
                          <span className="font-semibold text-primary">{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
