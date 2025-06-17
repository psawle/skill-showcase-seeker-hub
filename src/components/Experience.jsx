
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Current Company",
      period: "2023 - Present",
      description: "Developing and maintaining web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built 5+ responsive web applications from scratch",
        "Improved application performance by 40%",
        "Implemented secure authentication systems",
        "Mentored junior developers"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "AWS"]
    },
    {
      title: "Junior Web Developer",
      company: "Previous Company",
      period: "2022 - 2023",
      description: "Started my professional journey as a junior developer, focusing on frontend development and gradually expanding to full-stack development.",
      achievements: [
        "Developed responsive UI components",
        "Collaborated on 3 major projects",
        "Learned backend development",
        "Contributed to code reviews"
      ],
      technologies: ["React.js", "JavaScript", "HTML/CSS", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            My professional journey in web development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 transform lg:-translate-x-0.5"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform lg:-translate-x-2 z-10"></div>
                
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} ml-12 lg:ml-0`}>
                  <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="mb-4">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-400 font-medium text-sm sm:text-base">{exp.company}</p>
                        <p className="text-gray-400 text-xs sm:text-sm">{exp.period}</p>
                      </div>
                      
                      <p className="text-sm sm:text-base text-gray-300 mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2">Key Achievements:</h4>
                        <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-blue-400 mr-2 flex-shrink-0">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-slate-700 text-gray-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
