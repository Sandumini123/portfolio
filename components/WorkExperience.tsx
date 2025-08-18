import { Briefcase, Calendar, ExternalLink } from 'lucide-react'

const WorkExperience = () => {
  const experiences = [
    {
      title: "Trainee Software Development Engineer",
      company: "I3cubes (Pvt) Ltd.",
      duration: "March 2024 - September 2024",
      projects: [
        {
          name: "I3CUBES Official Website",
          description: "Designed and developed the official company website, showcasing services and products, handling both front-end and back-end implementation.",
          technologies: ["HTML", "JavaScript", "CSS", "PHP", "Laravel"],
          contributions: [
            "Designed and developed the entire company website with a focus on usability and performance",
            "Conducted functional, non-functional, and maintenance testing to ensure quality, security, and long-term stability"
          ],
          website: "I3Cubes.com"
        },
        {
          name: "Application Processing and Analyzing System",
          client: "John Keells Group—Cinnamon Hotels and Resorts",
          description: "A streamlined job application system with tracking, candidate analysis, interview scheduling, and job postings.",
          technologies: ["Angular", "PHP", "Laravel", "MySQL"],
          contributions: [
            "Developed and optimized frontend features, including searching, filtering, status handling, and interview scheduling",
            "Integrated unit testing, system testing, usability testing, and maintenance testing to ensure functionality and performance"
          ]
        },
        {
          name: "Human Resource Management System – Project Inspirit",
          client: "1990 Suwasariya Ambulance Service",
          description: "A workforce management system handling shifts, employee records, leave requests, and improvement programs.",
          technologies: ["PHP", "Laravel", "MySQL"],
          contributions: [
            "Developed key components of the Leave Management System",
            "Conducted comprehensive usability and unit testing"
          ]
        },
        {
          name: "Operation Management System",
          description: "A system optimizing operations with fault ticket handling, job orders, and customer inquiry management.",
          technologies: ["PHP", "Laravel", "MySQL"],
          contributions: [
            "Contributed to backend development by implementing key functionalities",
            "Ensured robustness through unit and integration testing"
          ]
        },
        {
          name: "Lab Management System",
          description: "A system optimizing lab operations with inventory management, data tracking, scheduling, and reporting.",
          technologies: ["PHP", "Laravel", "MySQL"],
          contributions: [
            "Implemented some parts of PDF handling, report generation, and data management functionalities",
            "Conducted unit, integration, and maintenance testing to ensure system reliability and performance"
          ]
        }
      ]
    }
  ]

  return (
    <section id="experience" className="py-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 
             transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30">
              <div className="flex items-start space-x-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={28} />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-blue-400 mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h5 className="text-lg font-semibold text-white mb-6">Key Projects:</h5>
                
                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="border-l-4 border-blue-500 pl-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h6 className="text-lg font-semibold text-blue-400">
                        {project.name}
                        {project.client && (
                          <span className="text-gray-400 text-sm ml-2">({project.client})</span>
                        )}
                      </h6>
                      {project.website && (
                        <a 
                          href={`https://${project.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          <span className="text-sm">{project.website}</span>
                        </a>
                      )}
                    </div>

                    <p className="text-gray-300">{project.description}</p>

                    <div>
                      <h6 className="text-sm font-medium text-gray-400 mb-2 block"> Technologies:</h6>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h6 className="text-sm font-medium text-gray-400 mb-2 block">Key Contributions:</h6>
                      <ul className="space-y-2">
                        {project.contributions.map((contribution, contribIndex) => (
                          <li key={contribIndex} className="text-gray-300 flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {contribution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience