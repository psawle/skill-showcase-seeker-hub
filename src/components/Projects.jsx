
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, cart functionality, and payment integration using Stripe.",
      image: "/placeholder.svg",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe", "JWT"],
      liveDemo: "https://demo.example.com",
      github: "https://github.com/username/ecommerce",
      features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Real-time Updates"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg",
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "Express.js"],
      liveDemo: "https://taskapp.example.com",
      github: "https://github.com/username/taskapp",
      features: ["Real-time Collaboration", "Drag & Drop", "Team Management", "File Attachments"]
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with data visualization, post scheduling, and engagement tracking across multiple platforms.",
      image: "/placeholder.svg",
      technologies: ["React.js", "Chart.js", "Node.js", "MongoDB", "Express.js", "API Integration"],
      liveDemo: "https://dashboard.example.com",
      github: "https://github.com/username/dashboard",
      features: ["Data Visualization", "Post Scheduling", "Analytics", "Multi-platform Integration"]
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Showcasing my expertise through real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="border-blue-500/50 text-blue-300 text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-700 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 text-xs sm:text-sm"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-3"
            onClick={() => window.open('https://github.com/username', '_blank')}
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
