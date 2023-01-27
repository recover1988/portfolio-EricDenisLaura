import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const BackgroundCircles = (props: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.8, 0.1, 1.0],
                borderRadius: ['20%', '20%', '50%', '80%', '20%',],
            }}
            transition={{
                duration: 2.5,
            }}
            className='relative flex justify-center items-center'
        >
            <div className='absolute border border-color5 rounded-full h-[400px] w-[400px] mt-52 animate-ping' />
            {/* <div className='rounded-full border border-color2  h-[300px] w-[300px] absolute mt-52 ' /> */}
            {/* <div className='rounded-full border border-color2  h-[500px] w-[500px] absolute mt-52 ' /> */}
            <div className='rounded-full border-2 border-color5 opacity-0  h-[550px] w-[550px] absolute mt-52 animate-pulse' />
            <div className='rounded-full border-4 border-color5  h-[800px] w-[800px] absolute mt-52 animate-pulse opacity-40' />
        </motion.div>
    )
}

export default BackgroundCircles