import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  directionLeft: boolean,
  name: string
  percentage?: string
}

const Skill = ({ directionLeft, name, percentage }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once:true}}
        src={name}
        className='rounded-lg bg-color4 border border-color3 object-cover w-20 h-20 xl:w-28 xl:h-28 filter transition duration-500 ease-in-out hover:animate-pulse hover:border-4 md:w-28 md:h-28'
      />
      {/* <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-color3 h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-color5 opacity-100 '>{percentage}</p>
        </div>
      </div> */}
    </div>
  )
}

export default Skill