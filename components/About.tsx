'use client'

import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="pt-24 pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-1 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 p-1">
              <img 
                src="assets/profile.jpg" 
                alt="Sandumini Karunarathne"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-4xl text-blue-600 font-bold mb-2">
                Sandumini Karunarathne
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
                <p className="text-lg text-gray-300 leading-relaxed text-justify">
                  A passionate and hardworking fresh graduate with a strong background in Information Technology. 
                  Interested in areas such as software development, data analysis, and emerging technologies. 
                  Known for a positive attitude, teamwork, and adaptability. Self-motivated and eager to learn 
                  new tools and frameworks. Looking for an opportunity to contribute to an innovative IT role 
                  while growing my professional skills.
                </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-[#774dee]">
                <Mail className="text-blue-400" size={20} />
                <a href="mailto:imanthasandaumini1@gmail.com" className="hover:text-blue-400 transition-colors">
                  imanthasandaumini1@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-[#774dee]">
                <Phone className="text-blue-400" size={20} />
                <a href="tel:+94071908350" className="hover:text-blue-400 transition-colors">
                  +94 071 908 3505
                </a>
              </div>
              <div className="flex items-center space-x-3 text-[#774dee]">
                <Linkedin className="text-blue-400" size={20} />
                <a 
                  href="https://linkedin.com/in/sandumini-karunarathne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  sandumini-karunarathne
                </a>
              </div>
              <div className="flex items-center space-x-3 text-[#774dee]">
                <Github className="text-blue-400" size={20} />
                <a 
                  href="https://github.com/sandumini-karunarathne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  sandumini123
                </a>
              </div>
              </div>
            </div><br></br>

            <div className="flex space-x-4 pt-4">
              <a
                href="mailto:imanthasandaumini1@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}

export default About