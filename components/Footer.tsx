import { Mail, Phone, Linkedin, Github, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sandumini Karunarathne</h3>
                <p className="text-gray-400">Software Quality Assurance Engineer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Passionate about ensuring software quality and building robust testing frameworks. 
              Always eager to learn new technologies and contribute to innovative projects.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors">About</a>
              <a href="#education" className="block text-gray-400 hover:text-blue-400 transition-colors">Education</a>
              <a href="#experience" className="block text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
              <a href="#research" className="block text-gray-400 hover:text-blue-400 transition-colors">Research</a>
              <a href="#projects" className="block text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="block text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="text-blue-400" size={16} />
                <span className="text-sm">Hingurana, Ampara</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={16} />
                <a href="mailto:imanthasandaumini1@gmail.com" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  imanthasandaumini1@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={16} />
                <a href="tel:+94071908350" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  +94 071 908 3505
                </a>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://linkedin.com/in/sandumini-karunarathne"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/sandumini-karunarathne"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Sandumini Karunarathne. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-red-500" size={14} />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer