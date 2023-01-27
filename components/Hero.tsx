import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { BackgroundCircles } from './'
import { motion } from 'framer-motion'
import Image from 'next/image'
import miImagen from '../public/fotoperfil.jpg'

type Props = {}

const Hero = (props: Props) => {

    const [text, count] = useTypewriter({
        words: [
            'Hola, Yo soy Eric Denis Laura Isnado',
            'Me-gusta-tomar-té.tsx',
            '<PeroMeGustaMasCodear />',
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <div
            className='relative h-50 w-50 mx-auto'
            >
                            <Image
                src={miImagen}
                alt='Mi imagen'
                className='object-contain rounded-full'
            />
            </div>

            <div>
                <h2
                    className='text-sm uppercase text-color4 pb-2 tracking-[15px]'
                >
                    Full Stack Developer
                </h2>
                <h1>
                    <span
                        className='text-5xl lg:text-6xl font-semibold px-10'
                    >
                        {text}
                    </span>
                    <Cursor cursorColor='#ff0062' />
                </h1>
                <div>
                    <button className='heroButton'>About</button>
                    <button className='heroButton'>Experience</button>
                    <button className='heroButton'>Skills</button>
                    <button className='heroButton'>Projects</button>
                </div>
            </div>
        </div>
    )
}

export default Hero