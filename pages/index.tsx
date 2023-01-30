import Head from 'next/head'
import { Inter } from '@next/font/google'
import { About, ContactMe, Header, Hero, Projects, Skills } from '@/components'
import ChevronDoubleUpIcon from '@heroicons/react/24/outline/ChevronDoubleUpIcon'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[#161616] text-color3 h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-color5/20 scrollbar-thumb-color5/80'>
      <Head>
        <title>Eric Laura Portfolio</title>
        <meta name="description" content="FullStack, Developer, NodeJS, React, NextJS, Javascript, Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image.ico" />
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
      <section id='contact' className='snap-end'>
        <ContactMe />
      </section>
      <Link href={'#hero'}>
        <footer className='sticky bottom-6 w-full cursor-pointer '>
          <div className='w-14 h-14 m-auto  text-color5/30 hover:text-color5'>
            <ChevronDoubleUpIcon />
          </div>
        </footer>
      </Link>
    </div>
  )
}

