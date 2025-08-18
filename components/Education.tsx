import { GraduationCap, Calendar } from 'lucide-react'

const Education = () => {
  const educationData = [
    {
      institution: "University of Moratuwa",
      degree: "B.Sc.(Hons) in Information Technology & Management",
      duration: "2021 - 2025",
      grade: "Second Class Lower Division",
      activities: [
        "IEEE - Executive board member of the Development Committee (2022/2023)",
        "IEEE - Mora Uxplore 1.0 - Team Handling and Publicity Committee"
      ],
      type: "university"
    },
    {
      institution: "D.S. Senanayake National College - Ampara",
      degree: "Secondary Education",
      duration: "2011 - 2019",
      grade: "Ordinary Level: 9As | Advanced Level: 3As",
      activities: [
        "Head Prefect (2018 - 2019)",
        "Senior Prefect (2015 - 2018)",
        "Main announcer and Secretary of Media Society (2017 - 2019)"
      ],
      type: "school"
    }
  ]

  return (
    <section id="education" className="py-0">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-0">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 card-hover">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        edu.type === "university"
                          ? "bg-gradient-to-r from-blue-500 to-purple-600"
                          : "bg-gradient-to-r from-green-500 to-teal-600"
                      }`}
                    >
                      <GraduationCap className="text-white" size={28} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 lg:mb-0">
                        {edu.institution}
                      </h3>
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-blue-400 mb-2">
                      {edu.degree}
                    </h4>

                    {edu.grade && (
                      <p className="text-gray-300">
                        <span className="font-medium text-sm">Grade:</span>{" "}
                        <span className="font-semibold text-[#9bcd52] text-lg">
                          {edu.grade}
                        </span>
                      </p>
                    )}

                    {edu.activities && (
                      <div className="mt-3">
                        <p className="font-medium text-sm text-gray-400 mb-1">
                          Extracurricular Activities:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                          {edu.activities.map((act, i) => (
                            <li key={i}>{act}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {index < educationData.length - 1 && (
                <div className="flex justify-center my-0">
                  <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
