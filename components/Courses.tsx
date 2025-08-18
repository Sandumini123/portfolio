import { BookOpen, Award, Clock, CheckCircle } from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      title: "Python for Data Science, AI & Development",
      provider: "Coursera",
      status: "Reading",
      category: "Data Science",
      description: "Comprehensive course covering Python fundamentals for data science and AI applications"
    },
    {
      title: "QA Automation",
      provider: "Udemy",
      status: "Completed",
      category: "Quality Assurance",
      description: "Advanced automation testing techniques and framework development"
    },
    {
      title: "TestNG for QA Test Automation Framework",
      provider: "Udemy", 
      status: "Completed",
      category: "Testing Framework",
      description: "Mastering TestNG framework for building robust automation test suites"
    },
    {
      title: "UNIX for Software Testers",
      provider: "Udemy",
      status: "Completed", 
      category: "System Administration",
      description: "Essential UNIX commands and scripting for software testing professionals"
    },
    {
      title: "Cloud Computing and Cloud Architecture",
      provider: "Udemy",
      status: "Completed",
      category: "Cloud Technology",
      description: "Understanding cloud computing concepts, architecture, and deployment strategies"
    }
  ]

  const getStatusIcon = (status: string) => {
    if (status === "Completed") {
      return <CheckCircle className="text-green-400" size={16} />
    } else {
      return <Clock className="text-yellow-400" size={16} />
    }
  }

  const getStatusColor = (status: string) => {
    if (status === "Completed") {
      return "text-green-400 bg-green-900/20 border-green-800"
    } else {
      return "text-yellow-400 bg-yellow-900/20 border-yellow-800"
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Data Science": "from-purple-500 to-pink-600",
      "Quality Assurance": "from-green-500 to-emerald-600", 
      "Testing Framework": "from-blue-500 to-cyan-600",
      "System Administration": "from-orange-500 to-red-600",
      "Cloud Technology": "from-indigo-500 to-purple-600"
    }
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600"
  }

  return (
    <section id="courses" className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Courses & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 card-hover">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(course.category)} rounded-lg flex items-center justify-center`}>
                    <BookOpen className="text-white" size={20} />
                  </div>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(course.status)}`}>
                    {getStatusIcon(course.status)}
                    <span className="ml-1">{course.status}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {course.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <Award className="text-blue-400" size={14} />
                    <span className="text-sm text-blue-400">{course.provider}</span>
                  </div>
                  <span className="inline-block px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs border border-gray-700 mb-3">
                    {course.category}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I am committed to staying current with the latest technologies and best practices in software quality assurance. 
              Currently expanding my knowledge in CI/CD pipelines, containerization, and advanced automation frameworks to enhance 
              my testing capabilities and contribute more effectively to modern software development teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses