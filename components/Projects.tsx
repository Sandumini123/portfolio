import { Code, Github, ExternalLink, Cog, TestTube } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Automation Testing Project",
      year: "2024",
      description: "Developed an automation suite for UI and API testing using Playwright and Cucumber, ensuring robust and maintainable test execution.",
      technologies: ["Playwright", "Cucumber", "Git", "Allure Reporting"],
      keyContributions: [
        "Designed and implemented automated test cases for UI and API validation",
        "Created detailed bug reports to document identified defects",
        "Utilized Git for version control"
      ],
      category: "Testing",
      icon: <TestTube className="text-white" size={24} />,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Sports Arena Booking System",
      year: "2022 - 2023",
      type: "2nd-year software project",
      description: "Developed a user-friendly web application for sports arena bookings and payments in Sri Lanka, enhancing user convenience and profitability for arena owners.",
      role: "UI/UX Designer, Frontend Developer, Backend Developer",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      keyContributions: [
        "Designed and implemented the Sports Arena List, Search, and Filter by sport type and location",
        "Developed sports arena profiles and displayed available time slots",
        "Implemented booking management, including active and past booking filters"
      ],
      category: "Web Development",
      icon: <Code className="text-white" size={24} />,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Multitasking Cane",
      year: "2021",
      type: "1st-year hardware project",
      description: "Designed and developed a smart cane with multiple assistive features to enhance safety and convenience for elders. Key functionalities include obstacle detection, an automatic night light, an alarm-based medicine box, an emergency alarm, and a color detection system.",
      hardware: ["Atmega 32 Microcontroller", "Sensors"],
      technologies: ["C Programming"],
      keyContributions: [
        "Developed an alarm-based medicine reminder system to alert users at scheduled times",
        "Designed a medicine box mechanism that automatically opens based on the alarm system"
      ],
      category: "Hardware",
      icon: <Cog className="text-white" size={24} />,
      gradient: "from-orange-500 to-red-600"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Testing': return 'text-green-400 bg-green-900/20 border-green-800'
      case 'Web Development': return 'text-blue-400 bg-blue-900/20 border-blue-800'
      case 'Hardware': return 'text-orange-400 bg-orange-900/20 border-orange-800'
      default: return 'text-gray-400 bg-gray-900/20 border-gray-800'
    }
  }

  return (
    <section id="projects" className="py-16">
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
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-gray-400">{project.year}</span>
                    {project.type && (
                      <>
                        <span className="text-gray-600">•</span>
                        <span className="text-sm text-gray-400">{project.type}</span>
                      </>
                    )}
                  </div>
                  {project.role && (
                    <p className="text-sm text-blue-400 mb-3">Role: {project.role}</p>
                  )}
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies:</h4>
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
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Key Contributions:</h4>
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
  )
}

export default Projects