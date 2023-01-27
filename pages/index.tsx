import Head from 'next/head'
import { Inter } from '@next/font/google'
import { About, Header, Hero } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[#161616] text-color4 h-screen snap-y snap-mandatory overflow-scroll z-0'>
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
     
      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}
