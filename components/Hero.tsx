import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { BackgroundCircles } from './'
import { motion } from 'framer-motion'
import Image from 'next/image'
import miImagen from '../public/fotoperfil.jpg'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {

    const [text, count] = useTypewriter({
        words: [
            'Hola, Yo soy Eric Denis Laura Isnado',
            'Me-gusta-tomar-té.tsx',
            '<PeroMeGustaMasCodear />',
        ],
        loop: true,
        delaySpeed: 2800,
    })

    return (
        <div className='h-screen pt-[200px] flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
            <BackgroundCircles />
            <Image
                src={miImagen}
                alt='Mi imagen'
                priority
                className='relative h-40 w-40  mx-auto rounded-full object-cover'
            />
            <div className='z-20'>
                <h2
                    className='text-sm uppercase text-color3 pb-2 tracking-[15px]'
                >
                    Full Stack Developer
                </h2>
                <h1 className='text-4xl text-color3 sm:text-lg lg:text-6xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='#004CFF' />
                </h1>
                <div className='mt-4 pt-4'>
                    <Link href='#about' passHref >
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#skills' passHref>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects' passHref>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero