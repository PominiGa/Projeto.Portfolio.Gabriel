import React from 'react'
import Header from './components/layout/Header'
import Hero from './components/hero/Hero'
import ProjectsGrid from './components/projects/ProjectsGrid'
import Contact from './components/contact/Contact'
import Footer from './components/layout/Footer'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <ProjectsGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
