
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              MERN Stack
            </span>
            <br />
            Developer
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
            Passionate Full-Stack Developer with 2 years of experience crafting 
            modern web applications using MongoDB, Express.js, React, and Node.js
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-3"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com"
               className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            size={32} 
            className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-200"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
