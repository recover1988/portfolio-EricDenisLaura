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
            'Hola, Yo soy Eric Denis Laura Isnado.',
            'Me-gusta-tomar-té.tsx" ;',
            '<PeroMeGustaMasCodear />',
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                src={miImagen}
                alt='Mi imagen'
                className='relative rounded-full h-40 w-40 object-cover mx-auto'
            />
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
                    <button>About</button>
                    <button>Experience</button>
                    <button>Skills</button>
                    <button>Projects</button>
                </div>
            </div>
        </div>
    )
}

export default Hero