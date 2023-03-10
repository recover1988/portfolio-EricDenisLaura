import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'
    >
     
        <h3 className='titleSection'>About</h3>
  
      

      <motion.img
        initial={{
          x: -300,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src='ruinas2.jpeg'
        className=' mb-32  rounded-full object-cover flex-shrink w-32 h-32 sm:h-40 sm:w-40 sm:mb-0 sm:mx-7 md:mb-0 md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[500px] '
        // className='-m-5 rounded-full object-cover flex-shrink-0 w-30 h-30 sm:h-50 sm:w-50 sm:mb-0  md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] '
      />
      <div>
        <h4 className='text-2xl font-semibold text-color3 py-1'>Acerca de <span className='strongWord' >mi</span>:</h4>
        <div className='text-xs sm:text-base md:text-lg lg:text-xl  text-color3'>
          <p>
            Me llamo Eric, soy <strong className='strongWord'>Full Stack Developer</strong>, y aprendi a codear en Henry en un curso intensivo de +800 horas donde aprendi los fundamentos de la programacion, a trabajar en equipo y usar las metodologias de CI/CD, SCRUM y reuniones, ademas realize varios proyectos con el stack <strong className='strongWord'>MERN</strong> y <strong className='strongWord'>PERN</strong>.
          </p>
          <p>
            Durante mi paso por la universidad aprendi <strong className='strongWord'>logica de programacion</strong> dirigida a la resolucion de ecuaciones y desde ahi me enganche.
          </p>
          <p>
            Ahora estoy listo para seguir aprendiendo y hacerme un camino en la programaci??n, si puedo ayudarte <strong className='strongWord'>no dudes en contactar conmigo</strong>  desde ya muchas gracias por tomarte el tiempo de leer.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About