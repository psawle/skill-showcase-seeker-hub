
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourusername",
      link: "https://github.com/yourusername"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Ready to Start Your Next Project?</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                  I'm currently available for full-time positions and freelance projects. 
                  Whether you need a complete web application or want to enhance your existing platform, 
                  I'd love to help bring your ideas to life.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center text-sm sm:text-base text-gray-300">
                    <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                    Full-Stack Web Development
                  </div>
                  <div className="flex items-center text-sm sm:text-base text-gray-300">
                    <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                    MERN Stack Applications
                  </div>
                  <div className="flex items-center text-sm sm:text-base text-gray-300">
                    <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                    API Development & Integration
                  </div>
                  <div className="flex items-center text-sm sm:text-base text-gray-300">
                    <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                    Database Design & Optimization
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-slate-700">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-4">Quick Response Guaranteed</h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  feel free to reach out via email or LinkedIn for faster communication.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4 flex-shrink-0">
                      <contact.icon size={20} className="text-white sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white font-medium text-sm sm:text-base">{contact.label}</h3>
                      <a 
                        href={contact.link}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-xs sm:text-sm break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="text-center pt-6">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm sm:text-base"
                onClick={() => window.location.href = 'mailto:your.email@example.com'}
              >
                <Mail size={18} className="mr-2 sm:w-5 sm:h-5" />
                Send Me an Email
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-700">
          <p className="text-gray-400 text-xs sm:text-sm px-4">
            © 2024 MERN Stack Developer Portfolio. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
