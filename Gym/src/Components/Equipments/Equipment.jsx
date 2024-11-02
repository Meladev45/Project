import React from 'react'
import {GrYoga} from 'react-icons/gr'
import { FaDumbbell } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { SlideLeft } from '../../Utility/Utility'



const EquipmentData =[
    {id:1,
        tittle:'Yoga Equipments',
        desc:'It is a long established fact that a reader readable.It is a long established fact that a reader readable',
        icon:<GrYoga/>,
        delay:0.3,
    },
    {id:2,
        tittle:'Muscles Equipments',
        desc:'It is a long established fact that a reader readable.',
        link:'/',
        icon:<FaDumbbell/>,
        delay:0.6,
    },
    {id:3,
        tittle:'Fitness Equipments',
        desc:'It is a long established fact that a reader readable.',
        link:'/',
        delay:0.9,
    },
]

const Equipment = () => {
  return (
    <div>
        <div className="container py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
                <div className='space-y-4 p-6'>
                    <h1 className='text-3xl md:text-4xl font-bold'>What we offer for you</h1>
                    <p className='text-gray-500'>It is a long established fact that a reader readable.</p>
                </div>
                {
                    EquipmentData.map((item)=>{
                        return (
                            <motion.div
                            variants={SlideLeft(item.delay)}
                            initial='hidden'
                            whileInView='visible'
                            key={item.id}
                             className='space-y-4 p-6 bg-gray-100 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]'>
                                <div className='text-4xl'>{item.icon}</div>
                                <p className='text-2xl font-semibold'>{item.tittle}</p>
                                <p className='text-gray-500'>{item.desc}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Equipment