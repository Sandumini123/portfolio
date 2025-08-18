import Header from '@/components/Header'
import About from '@/components/About'
import Education from '@/components/Education'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import Skills from '@/components/Skills'
import Courses from '@/components/Courses'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-20">
        <About />
        <Education />
        <WorkExperience />
        <Research />
        <Projects />
        <Skills />
        <Courses />
      </div>
      <Footer />
    </main>
  )
}