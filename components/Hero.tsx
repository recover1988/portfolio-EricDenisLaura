import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {BackgroundCircles} from './'
import { motion } from 'framer-motion'

type Props = {}

const Hero = (props: Props) => {

    const [text, count] = useTypewriter({
        words: [
            'Hola, Mi Nombre Es Eric Denis Laura Isnado.',
            'const meGusta = "hace calor" ? "nadar" : "leer novelas" ;',
            '<PeroMeGustaMasCodear typescript javascript />',
            'FullStackDeveloper.tsx'
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#ff0062' />
            </h1>
        </div>
    )
}

export default Hero