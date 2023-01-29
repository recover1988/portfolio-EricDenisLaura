import React from 'react'
import { Skill } from './'
import { motion } from 'framer-motion'
import { Icon, icono } from '@/utils'
type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000-x] xl:px-10 min-h-screen justify-center mx-auto items-center xl:space-y-0'
    >

      <h3 className='titleSection'>Skills</h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-color3 text-sm'>Esta son mis <strong className='strongWord'>habilidades</strong>  por ahora...</h3>



      <div className='grid grid-cols-3 gap-5 md:grid-cols-4'>
        <Skill directionLeft={false} name={icono.javascript} />
        <Skill directionLeft={true} name={icono.typescript} />
        <Skill directionLeft={false} name={icono.react} />
        <Skill directionLeft={true} name={icono.redux} />
        <Skill directionLeft={false} name={icono.css3} />
        <Skill directionLeft={true} name={icono.html5} />
        <Skill directionLeft={false} name={icono.chartjs} />
        <Skill directionLeft={true} name={icono.mui} />
        <Skill directionLeft={false} name={icono.docker} />
        <Skill directionLeft={true} name={icono.git} />
        <Skill directionLeft={false} name={icono.mongodb} />
        <Skill directionLeft={true} name={icono.nextjs} />
        <Skill directionLeft={false} name={icono.nodejs} />
        <Skill directionLeft={true} name={icono.postgresql} />
        <Skill directionLeft={false} name={icono.tailwind} />
      </div>
    </motion.div>
  )
}

export default Skills