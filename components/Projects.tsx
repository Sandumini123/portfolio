import { Code, Github, Cog, TestTube, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Automation Testing Project",
      description: "Developed an automation suite for UI and API testing using Playwright and Cucumber.",
      technologies: ["Playwright", "Cucumber", "Git", "Allure Reporting"],
      keyContributions: [
        "Implemented automated UI and API test cases",
        "Created detailed bug reports",
        "Used Git for version control"
      ],
      category: "Testing",
      icon: <TestTube className="text-#eaad08" size={24} />,
      gradient: "from-green-500 to-emerald-600",
      github: "https://github.com/Sandumini123/ITQA_Group-Assignment_42"
    },
    {
      title: "Sports Arena Booking System",
      description: "A web app for booking and managing sports arenas in Sri Lanka.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      keyContributions: [
        "Implemented arena listing, search, and filters",
        "Built profile and time slot management",
        "Developed booking management UI"
      ],
      category: "Web Development",
      icon: <Code className="text-white" size={24} />,
      gradient: "from-blue-500 to-cyan-600",
      github: "https://github.com/Sandumini123/Bookings"
    },
    {
      title: "Multitasking Cane",
      description: "Smart cane with features like obstacle detection, medicine reminder, and emergency alarm.",
      technologies: ["C Programming"],
      keyContributions: [
        "Built a medicine reminder system",
        "Designed auto-opening medicine box"
      ],
      hardware: ["Atmega 32 Microcontroller", "Sensors"],
      category: "Hardware",
      icon: <Cog className="text-white" size={24} />,
      gradient: "from-orange-500 to-red-600",
      github: "https://github.com/your-username/multitasking-cane"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Testing': return 'text-green-400 bg-green-900/20 border-green-800';
      case 'Web Development': return 'text-blue-400 bg-blue-900/20 border-blue-800';
      case 'Hardware': return 'text-orange-400 bg-orange-900/20 border-orange-800';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-800';
    }
  };

  return (
    <section id="projects" className="py-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden card-hover">
              <div className="p-6 space-y-6">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}>
                    {project.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                    {project.title}
                    {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white ml-2"
                        >
                          <Github size={24} className="text-[#eaad08]" />
                        </a>
                    )}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.hardware && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Hardware:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.hardware.map((hw, hwIndex) => (
                          <span
                            key={hwIndex}
                            className="px-2 py-1 bg-orange-900/20 text-orange-300 rounded text-xs border border-orange-800"
                          >
                            {hw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Contributions:</h4>
                  <ul className="space-y-2">
                    {project.keyContributions.map((contribution, contribIndex) => (
                      <li key={contribIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
