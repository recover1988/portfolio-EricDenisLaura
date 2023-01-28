import Head from 'next/head'
import { Inter } from '@next/font/google'
import { About, ContactMe, Header, Hero, Projects, Skills } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[#161616] text-color3 h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden'>
      <Head>
        <title>Eric Laura Portfolio</title>
        <meta name="description" content="FullStack, Developer, NodeJS, React, NextJS, Javascript,Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects />
      </section>
      {/* Contact Me */}
      <section id='contactme' className='snap-end'>
        <ContactMe />
      </section>
    </div>
  )
}
