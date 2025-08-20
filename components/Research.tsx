
"use client";
import { BookOpen, Brain, Target, Lightbulb, ExternalLink } from 'lucide-react'

const Research = () => {
  const researchProject = {
    title: "An Explainable Machine Learning Framework for Personalized Stroke Risk Prediction",
    type: "4th-year Research project",
    description: `Since stroke is one of the world's leading causes of death and permanent disability, prevention and 
efficient clinical management depend on early and accurate risk prediction. The lack of trust 
quantification and poor interpretability of machine learning models based on clinical and demographic 
data limit their use in healthcare, despite their potential. This study develops a personalized stroke 
risk prediction system integrating explainable AI (XAI) to address these challenges.`,
    affiliation: "Department of Interdisciplinary Studies, Faculty of Technology, University of Moratuwa, Sri Lanka",
    technologies: ["Python", "XGBoost", "SHAP", "LIME", "RandomizedSearchCV"],
    keyContributions: [
<div className="mt-4">
  <h3 className="text-xl font-bold mb-2">Key Contributions</h3>
  <ul className="list-disc pl-6 space-y-1 text-sm">
    <li>Personalized stroke risk prediction using XAI</li>
    <li>Multi-level risk classification (Low/Moderate/High)</li>
    <li>SHAP and LIME for patient-specific explainability</li>
    <li>Real-time interactive interface for risk and explanations</li>
    <li>Class-weighted XGBoost addressing severe class imbalance</li>
  </ul>
</div>
    ],
    github: "https://github.com/Sandumini123/stroke-risk-prediction-xai"
  }

  return (
    <section id="research" className="py-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Research</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 lg:p-12 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Brain className="text-white" size={40} />
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium mb-3">
                  {researchProject.type}
                </span>
                <h4 className="text-2xl lg:text-2xl font-bold text-white mb-2">{researchProject.title}</h4>
                <p className="text-gray-400 mb-2 text-sm">{researchProject.affiliation}</p>
                <p className="text-sm text-white leading-relaxed">{researchProject.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="text-purple-400" size={20} />
                    <h4 className="text-lg font-semibold text-gray-300">Key Contributions</h4>
                  </div>
                  <ul className="pl-8 list-disc text-white">
                    {researchProject.keyContributions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="text-purple-400" size={20} />
                    <h4 className="text-lg font-semibold text-gray-300">Technologies & Tools</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-8">
                    {researchProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-800/50 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <span
                className="inline-block px-6 py-1 bg-[#9bcd52]/50 text-[#9bcd52] rounded-full text-sm font-medium mb-3 cursor-pointer hover:bg-[#9bcd52]/70 hover:text-white transition-all duration-300"
                onClick={() => window.open("https://github.com/Sandumini123/stroke-risk-prediction-xai", "_blank")}
              >
                GitHub Repository
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
