import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  id: number,
  name: string,
  img: string,
  video: string,
  description: string,
  repository: string,
}

const CardProject = ({ }: Props) => {
  return (
    <div key={proj} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
      <motion.img
        initial={{
          y: -300,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        src="https://st2.depositphotos.com/3591429/5246/i/450/depositphotos_52462511-stock-photo-catch-a-big-idea.jpg"
        alt="comp"

      />
      <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-2xl font-semibold text-center'>
          <span className='underline underline-offset-4 decoration-4 decoration-color5/50'>Aplicacion No{index + 1}:</span>
          Proyecto Individual
        </h4>
        <p className='text-lg text-center md:text-left'>Api Dogs: es una aplicacion para buscar perros atravez de diferentes filtros, como la raza, tamaño, espectativa de vida, etc y combinar los filtros. Tambien tiene una base de datos con la cual atravez de un formulario puedes subir una raza de perros nueva y guardarla.</p>
      </div>
    </div>
  )
}

export default CardProject