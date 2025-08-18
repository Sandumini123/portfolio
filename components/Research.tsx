// import { BookOpen, Brain, Target, Lightbulb } from 'lucide-react'

// const Research = () => {
//   const researchProject = {
//     title: "Multimodel Framework for Enhanced Stroke Risk Prediction",
//     type: "4th-year Research project",
//     description: "Developed a machine learning model to predict stroke risk levels using the Kaggle Stroke Prediction Dataset. Applied data preprocessing, feature engineering, and model training with XGBoost, incorporating class weighting and SHAP for explainability. This addresses the research gap in accurate, interpretable stroke prediction for clinical use.",
//     technologies: ["Python", "XGBoost", "SHAP", "StandardScaler"],
//     keyContributions: [
//       "Built a stroke-specific prediction model using key risk factors",
//       "Implemented multi-level risk classification (Low/Moderate/High) for clinical utility",
//       "Used SHAP for patient-specific explanations, enhancing transparency",
//       "Improved clinical decision-making with 30 unique, actionable summaries"
//     ],
//     impact: "Addresses the research gap in accurate, interpretable stroke prediction for clinical use",
//     methodology: "Applied data preprocessing, feature engineering, and model training with XGBoost, incorporating class weighting"
//   }

//   return (
//     <section id="research" className="py-0">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Research</h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
//         </div>

//         <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 lg:p-12 card-hover">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             <div className="lg:col-span-1 flex justify-center lg:justify-start">
//               <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
//                 <Brain className="text-white" size={40} />
//               </div>
//             </div>

//             <div className="lg:col-span-3 space-y-6">
//               <div>
//                 <span className="inline-block px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm font-medium mb-3">
//                   {researchProject.type}
//                 </span>
//                 <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
//                   {researchProject.title}
//                 </h3>
//                 <p className="text-lg text-gray-300 leading-relaxed">
//                   {researchProject.description}
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-3">
//                     <Target className="text-purple-400" size={20} />
//                     <h4 className="text-lg font-semibold text-white">Research Impact</h4>
//                   </div>
//                   <p className="text-gray-300 pl-8">
//                     {researchProject.impact}
//                   </p>
//                 </div>

//                 <div className="space-y-4">
//                   <div className="flex items-center space-x-3">
//                     <BookOpen className="text-purple-400" size={20} />
//                     <h4 className="text-lg font-semibold text-white">Methodology</h4>
//                   </div>
//                   <p className="text-gray-300 pl-8">
//                     {researchProject.methodology}
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex items-center space-x-3 mb-4">
//                   <Lightbulb className="text-purple-400" size={20} />
//                   <h4 className="text-lg font-semibold text-white">Key Contributions</h4>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8">
//                   {researchProject.keyContributions.map((contribution, index) => (
//                     <div key={index} className="flex items-start space-x-3">
//                       <span className="text-purple-400 mt-1">•</span>
//                       <span className="text-gray-300">{contribution}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies & Tools:</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {researchProject.technologies.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-lg text-sm border border-purple-800/50 font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Research

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
    authors: "G.L.I.S. Karunarathnea* and R.L.C.Shyamaa",
    affiliation: "Department of Interdisciplinary Studies, Faculty of Technology, University of Moratuwa, Sri Lanka",
    email: "karunarathneglis.20@uom.lk",
    technologies: ["Python", "XGBoost", "SHAP", "LIME", "RandomizedSearchCV"],
    keyContributions: [
      "Personalized stroke risk prediction using XAI",
      "Multi-level risk classification (Low/Moderate/High)",
      "SHAP and LIME for patient-specific explainability",
      "Real-time interactive interface for risk and explanations",
      "Class-weighted XGBoost addressing severe class imbalance"
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
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{researchProject.title}</h3>
                <p className="text-gray-300 mb-1">{researchProject.authors}</p>
                <p className="text-gray-400 mb-2 text-sm">{researchProject.affiliation}</p>
                <p className="text-gray-400 mb-4 text-sm">{researchProject.email}</p>
                <p className="text-lg text-gray-300 leading-relaxed">{researchProject.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="text-purple-400" size={20} />
                    <h4 className="text-lg font-semibold text-white">Key Contributions</h4>
                  </div>
                  <ul className="pl-8 list-disc text-gray-300">
                    {researchProject.keyContributions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="text-purple-400" size={20} />
                    <h4 className="text-lg font-semibold text-white">Technologies & Tools</h4>
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

              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <ExternalLink size={20} /> GitHub Repository
                </h4>
                <a
                  href={researchProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 underline break-all"
                >
                  {researchProject.github}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
