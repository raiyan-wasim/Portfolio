import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Google Cloud Arcade 2024",
      subtitle: "Premium Milestone",
      issuer: "Google Cloud",
      type: "completed",
      url: "https://www.cloudskillsboost.google/public_profiles/bc682c20-3916-46a5-b562-a656b8526892"
    },
    {
      title: "Career Essentials in Software Development",
      subtitle: "Professional Certification",
      issuer: "Microsoft & LinkedIn",
      type: "completed",
      url: "https://www.linkedin.com/learning/certificates/3409c068ac4e3991add8bd6c103ef4bb2b05df2610eda57288e1e374fe2b0825"
    }
  ];

  const learning = [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      description: "Currently preparing for certification, focusing on core Azure services, architecture, and pricing"
    },
    {
      title: "AI/ML Fundamentals",
      description: "Actively studying core AI principles, model training, classification, and implementation with Python libraries like scikit-learn and TensorFlow"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center" data-testid="text-certifications-title">
          Certifications & Learning
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal/10 rounded-md flex items-center justify-center">
                <Award className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-2xl font-semibold">Completed Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate transition-all duration-300"
                  data-testid={`card-certification-${index}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <h4 className="font-semibold text-lg">{cert.title}</h4>
                        <p className="text-sm text-coral">{cert.subtitle}</p>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Badge variant="secondary" className="bg-teal/10 text-teal border-teal/20 shrink-0">
                        Certified
                      </Badge>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 w-full"
                      onClick={() => window.open(cert.url, '_blank')}
                      data-testid={`button-view-cert-${index}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Learning Roadmap</h3>
            </div>
            
            <div className="space-y-4">
              {learning.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate transition-all duration-300"
                  data-testid={`card-learning-${index}`}
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      In Progress
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
