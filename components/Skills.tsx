import { Code, TestTube, Database, Globe, Settings, GitBranch } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-white" size={24} />,
      gradient: "from-blue-500 to-cyan-600",
      skills: ["Java", "C", "Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Test Automation",
      icon: <TestTube className="text-white" size={24} />,
      gradient: "from-green-500 to-emerald-600",
      skills: ["Cucumber", "Playwright", "Selenium", "TestNG"]
    },
    {
      title: "Web Development",
      icon: <Globe className="text-white" size={24} />,
      gradient: "from-purple-500 to-pink-600",
      skills: ["HTML", "CSS", "Tailwind CSS", "React", "Angular", "Node.js", "Express.js", "PHP", "Laravel"]
    },
    {
      title: "Databases",
      icon: <Database className="text-white" size={24} />,
      gradient: "from-orange-500 to-red-600",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Project Management Tools",
      icon: <Settings className="text-white" size={24} />,
      gradient: "from-indigo-500 to-purple-600",
      skills: ["Jira", "ClickUp", "Trello"]
    },
    {
      title: "Version Control & Tools",
      icon: <GitBranch className="text-white" size={24} />,
      gradient: "from-teal-500 to-cyan-600",
      skills: ["Git", "IntelliJ IDE", "WebStorm", "Postman", "Insomnia", "Blender"]
    }
  ]

  const testingSkills = [
    "Test Case Writing",
    "Test Execution", 
    "Test Plan Creation",
    "Manual Testing",
    "Unit Testing",
    "Integration Testing",
    "System Testing",
    "Usability Testing",
    "Functional Testing",
    "Non-functional Testing",
    "Maintenance Testing"
  ]

  const currentlyLearning = [
    "CI/CD Pipeline concepts and tools",
    "Jenkins",
    "GitHub Actions", 
    "Docker"
  ]

  return (
    <section id="skills" className="py-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 card-hover">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                <TestTube className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Testing Expertise</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {testingSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span className="text-gray-300 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Currently Learning</h3>
            </div>
            <div className="space-y-3">
              {currentlyLearning.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills