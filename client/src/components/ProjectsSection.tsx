import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  period: string;
  description: string;
  details: string[];
  technologies: string[];
  githubUrl: string;
  featured?: boolean;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Drive-to-Chat RAG Pipeline",
      period: "July 2025 – Aug 2025",
      description: "Automated RAG pipeline transforming documents into a conversational knowledge base",
      details: [
        "Developed an automated RAG pipeline in n8n to transform documents from Google Drive into a conversational knowledge base",
        "Engineered an ingestion workflow to process, chunk, and embed new documents into a Pinecone vector database using Google Gemini",
        "Implemented a Gemini-powered AI agent that retrieves relevant context from Pinecone to generate accurate, source-based answers"
      ],
      technologies: ["n8n", "RAG", "Google Gemini", "Pinecone"],
      githubUrl: "https://github.com/raiyan-wasim/n8n-document-rag-pipeline",
      featured: true
    },
    {
      title: "Static Hosting Platform (Vercel Clone)",
      period: "April 2025 – June 2025",
      description: "Cloud-based static site deployment tool with real-time build log streaming",
      details: [
        "Developed a cloud-based static site deployment tool that accepts GitHub URLs and builds projects on demand",
        "Implemented Docker-based build processes and automated container deployment using AWS ECS and ECR",
        "Served generated static files via AWS S3 with a reverse proxy for subdomain-based routing",
        "Enabled real-time build log streaming from the server to the client using Redis Pub/Sub and Socket.IO"
      ],
      technologies: ["Node.js", "AWS (ECS, ECR, S3)", "Docker", "Redis", "Socket.IO"],
      githubUrl: "https://github.com/raiyan-wasim/Vercel-Clone"
    },
    {
      title: "My Anime List",
      period: "Mar 2025 – Apr 2025",
      description: "Terminal-based anime tracker with persistent SQLite backend",
      details: [
        "Built a terminal-based anime tracker in Python with a persistent SQLite backend to manage personal anime titles and ratings",
        "Implemented full CRUD (Create, Read, Update, Delete) functionality for anime entries in the local database",
        "Enhanced user experience with animated prompts, formatted data display, and streamlined edit/delete workflows"
      ],
      technologies: ["Python", "SQLite"],
      githubUrl: "https://github.com/raiyan-wasim/My-Anime-List"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 text-center" data-testid="text-projects-title">Featured Projects</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-8 hover-elevate transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                project.featured ? 'lg:col-span-2 border-l-4 border-l-primary' : ''
              }`}
              data-testid={`card-project-${index}`}
            >
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">{project.period}</p>
                </div>

                <p className="text-muted-foreground">{project.description}</p>

                <ul className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-teal/10 text-teal border-teal/20"
                      data-testid={`badge-tech-${index}-${idx}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-6 pt-4 border-t border-border">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 w-full"
                    data-testid={`button-view-project-${index}`}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
