import { motion } from 'framer-motion'
import React from 'react'
import { DB } from '@/database'
import { CardProject } from '.'


type Props = {}

const Projects = (props: Props) => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
        >
            <h3 className='titleSection'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-color5/20 scrollbar-thumb-color5/80'>
                {
                    DB.projects.map(({ id, description, name, repository, video }) => (
                        <CardProject
                            key={id}
                            id={id}
                            name={name}
                            video={video}
                            description={description}
                            repository={repository} />
                    ))
                }

            </div>

            <div className='w-full absolute top-[30%] bg-color5/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects