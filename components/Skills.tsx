import React from 'react'
import { Skill } from './'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000-x] xl:px-10 min-h-screen justify-center mx-auto items-center xl:space-y-0'>

      <h3 className='titleSection'>Skills</h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-color3 text-sm'>Esta son mis habilidades por ahora...</h3>



      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  )
}

export default Skills