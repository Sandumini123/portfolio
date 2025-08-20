'use client'

import Image from 'next/image'
import { MapPin, Mail, Phone, Linkedin, Github, Heading3 } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="pt-24 pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Photo */}
        <div className="lg:col-span-1 flex justify-center">
          <div className="relative">
            <div className="w-64 h-128 rounded-full p-1 bg-transparent ring-4 ring-[#152743] ring-offset-2 ring-offset-gray-950 shadow-lg">
              <Image
                src="/assets/profile.jpeg"
                alt="Sandumini Karunarathne"
                width={256}
                height={256}
                className="rounded-full object-cover"
                onError={(e) => {
                  console.log('Image failed to load:', e.target);
                }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Shi5gpBjOSDgdgRUVU2dmpnnuEWFdjCDm2Db7tEZvhZkP1YSKsjfxESDQPRfnEdY5vJeXfhUEEP2LBaQgmGhTCfq8X+Q4LLlSJgFKyB5kj5Nnge6TbgIj2jGP2oVNjnzFJHqN7EX3YqnvKQMDHqKmMmFDKzYEQCKTFYD8B0OZG6Jb5eBU=n"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Text + contacts */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-2xl text-blue-600 font-bold mb-2 text-center">
                Sandumini Karunarathne
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed text-justify">
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
          </div>

          <br />

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
    </section>
  )
}
export default About