import { motion } from 'framer-motion'
import React from 'react'
import dynamic from 'next/dynamic';

import { SocialIcon } from 'react-social-icons'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
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
    <div className='w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 lg:flex-row lg:space-x-5 '>
      <motion.div
        initial={{
          y: -300,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='h-1/3 w-auto  lg:h-96 lg:w-1/2'
      >
        <ReactPlayer
          key={id}
          url={video}
          playing={false}
          muted={true}
          controls={false}
          width='100%'
          height='100%'
        />
      </motion.div>

      <div className='space-y-5 flex flex-col h-1/3  lg:w-1/2 lg:h-auto'>

        <h4 className='text-base font-semibold text-center '>
          <span>Aplicacion No{id}:{' '}</span>
          <strong className='strongWord'>{name}</strong>
        </h4>
        <p className='text-sm px-4 text-center leading-loose overflow-y-auto scrollbar scrollbar-track-color5/20 scrollbar-thumb-color5/80 lg:text-left lg:text-base'>
          {description}
        </p>
        <div className='mx-auto'>
          <span className='strongWord'>Link:</span>
          <SocialIcon
            url={repository}
            fgColor='#004CFF'
            bgColor='transparent'
            target='_blank'
            className='mx-auto mt-0 pt-0'
          />
        </div>



      </div>
    </div>
  )
}

export default CardProject