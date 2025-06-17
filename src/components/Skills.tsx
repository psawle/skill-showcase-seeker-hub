
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Redux", "Context API"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Middleware", "API Design"],
      color: "from-green-400 to-green-600"
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose", "Database Design", "Aggregation", "Indexing", "MySQL (Basic)"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm/yarn", "Webpack", "Deployment", "Testing"],
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6">
                <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-slate-700 text-gray-300 hover:bg-slate-600 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-white">MERN Stack Proficiency</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "MongoDB", level: "85%" },
                { name: "Express.js", level: "90%" },
                { name: "React.js", level: "95%" },
                { name: "Node.js", level: "88%" }
              ].map((tech) => (
                <div key={tech.name} className="text-center">
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {tech.level}
                  </div>
                  <div className="text-gray-300 font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
