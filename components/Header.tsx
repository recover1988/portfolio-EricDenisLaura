import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center' >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'

      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/eric-denis-laura-isnado/"
          fgColor='#b3b4bd'
          bgColor='transparent'
          target='_blank'
        />
        <SocialIcon
          url="https://github.com/recover1988"
          fgColor='#b3b4bd'
          bgColor='transparent'
          target='_blank'
        />
        <SocialIcon
          url="https://twitter.com/EricDenisLaura"
          fgColor='#b3b4bd'
          bgColor='transparent'
          target='_blank'
        />
      </motion.div>
 <Link href='#contact' passHref legacyBehavior>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center  cursor-pointer'
      >
       
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='#b3b4bd'
            bgColor='transparent'
          />
          <p className='uppercase hidden md:inline-flex text-sm text-color3'>Hablemos!!!</p>
    
      </motion.div>
    </Link>

    </header>
  )
}

export default Header