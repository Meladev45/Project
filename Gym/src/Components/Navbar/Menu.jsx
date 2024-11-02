import React from 'react'
import { NavbarMenu } from '../../MockData/data'
import {motion,AnimatePresence} from 'framer-motion'

const Menu = ({open}) => {
  return <AnimatePresence mode='wait'>
    {
        open && (

            <motion.div 
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-100}}
            transition={{duration:0.3}}
            className='absolute top-20 left-0 w-full h-screen z-10'>
            <div className='text-xl font-semibold bg-primary text-white py-10 m-6 rounded-3xl md:hidden'>
            <ul className='flex flex-col justify-center items-center gap-10'>
            {NavbarMenu.map((item)=>{
                            return (
                                <li className=' uppercase' key={item.id}>
                                    <a href={item.link}>{item.tittle}</a>
                                </li>
                            )
                        })}
            </ul>
            </div>
            </motion.div>
           )
    }
  </AnimatePresence>
}

export default Menu