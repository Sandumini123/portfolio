import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sandumini Karunarathne</h3>
                {/* <p className="text-gray-400">Software Quality Assurance Engineer</p> */}
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Passionate about ensuring software quality and building robust testing frameworks. 
              Always eager to learn new technologies and contribute to innovative projects.
            </p>
          </div>

          {/* Quick Links */}
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

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={16} />
                <a href="mailto:imanthasandaumini1@gmail.com" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  imanthasandaumini1@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={16} />
                <a href="tel:+94719083505" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  +94 71 908 3505
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/sandumini-karunarathne"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/sandumini-karunarathne"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github size={18} />
              </a>

              {/* Medium */}
              <a
                href="https://medium.com/@imanthasandaumini1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-[#00ab6c]"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 3.5A.5.5 0 0 1 2.5 3h19a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-17zM8.482 8.328v7.283c0 .105-.11.174-.193.121l-2.292-1.43c-.027-.016-.043-.046-.043-.078V9.714c0-.033.017-.063.044-.079l2.291-1.428c.084-.052.193.016.193.121zm3.048 6.407c.263 0 .476-.216.476-.483V9.748a.48.48 0 0 0-.953 0v4.504c0 .267.213.483.477.483zm5.495.076l-2.205-1.34a.083.083 0 0 1-.039-.071V10.6a.082.082 0 0 1 .039-.071l2.205-1.34c.055-.034.128.005.128.071v5.481c0 .066-.073.105-.128.071z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
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
