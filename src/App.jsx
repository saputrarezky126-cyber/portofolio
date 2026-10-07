import React from 'react'
import { brand, navLinks, socials, hero, about, skillGroups, projects, services, testimonials, contact } from './data/portofolio'
import { Navbar, Hero, About, Skills, Projects, Services, Testimonials, Contact, Footer } from './components'

function App() {
  return (
    <div className='min-h-screen bg-base-100 text-base-content'>
        <Navbar brand={brand} links={navLinks} />
      <main>
        <Hero {...hero} socials={socials} />
        <About {...about} />
        <Skills groups={skillGroups} />
        <Projects projects={projects} />
        <Services services={services} />
        <Testimonials items={testimonials} />
        <Contact contact={contact} socials={socials} onSubmit={(formData) => 
          console.log('contact form', formData)} />

      </main>
      <Footer brand={brand.name} builtWith="React, Next.js, Tailwindcss & DaisyUI" />
    </div>
  )
}

export default App