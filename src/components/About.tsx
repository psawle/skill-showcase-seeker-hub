
import { Card, CardContent } from "@/components/ui/card";
import { Code, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Dedicated to building scalable, efficient, and user-friendly web applications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <User className="text-blue-400 mr-3 flex-shrink-0" size={24} />
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Professional Journey</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  With 2 years of hands-on experience in full-stack development, I've successfully 
                  delivered multiple web applications from concept to deployment. My expertise spans 
                  across modern JavaScript frameworks and backend technologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <Code className="text-purple-400 mr-3 flex-shrink-0" size={24} />
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Technical Focus</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  I specialize in creating responsive, performant web applications using the MERN stack. 
                  I'm passionate about clean code, best practices, and staying updated with the latest 
                  industry trends and technologies.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-300">Frontend Development</span>
                  <span className="text-blue-400 font-semibold text-sm sm:text-base">90%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full w-[90%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-300">Backend Development</span>
                  <span className="text-purple-400 font-semibold text-sm sm:text-base">85%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full w-[85%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-300">Database Management</span>
                  <span className="text-green-400 font-semibold text-sm sm:text-base">80%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
