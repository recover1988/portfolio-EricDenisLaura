import { motion } from 'framer-motion'
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { SocialIcon } from 'react-social-icons'

type Props = {
  id: number,
  name: string,
  img?: string,
  video: string,
  description: string,
  repository: string,
}

const CardProject = ({ id, name, img, video, description, repository }: Props) => {
  return (
    <div key={id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
      <motion.div
        initial={{
          y: -300,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ReactPlayer
          url='https://youtu.be/ZgaNCsbAu7A'
          playing={true}
          muted
          width='100%'
          height='100%'
        />
      </motion.div>
      <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-2xl font-semibold text-center'>
          <span className='underline underline-offset-4 decoration-4 decoration-color5/50'>Aplicacion No{id}:</span>
          {name}
        </h4>
        <p className='text-lg text-center md:text-left'>
          {description}
        </p>
        <SocialIcon
          url={repository}
          fgColor='#004CFF'
          bgColor='transparent'
          target='_blank'
          
        />
      </div>
    </div>
  )
}

export default CardProject