import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border-2 border-color5 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-color2 rounded-full h-[300px] w-[300px] mt-52 '/>
        <div className='absolute border border-color2 rounded-full h-[500px] w-[500px] mt-52 '/>
        <div className='absolute border-4 border-color5 opacity-20 rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
        <div className='absolute border border-color2 rounded-full h-[800px] w-[800px] mt-52 animate-pulse opacity-0' />
    </div>
  )
}

export default BackgroundCircles