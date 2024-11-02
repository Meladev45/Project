import React from 'react'
import { ProductData } from '../../MockData/data'
import { useState } from 'react'
import {motion} from 'framer-motion'

const Tab = () => {
    const [active,setActive]=useState('All')

    const tabs =['All','Yoga','Fitness','Muscles']

    const filtertabs = active==='All'?ProductData:ProductData.filter((card)=>card.category===active)
  return (
    <>
        <div className="container my-12 md:my-16">
          <div className="flex space-x-4 mb-4 p-6">
            {
                tabs.map((tab)=>(
                    <button key={tab} onClick={()=>setActive(tab)} className={`py-2 px-4 rounded ${active=== tab ?'bg-primary text-white':'bg-gray-700'}`}>
                        {tab}
                    </button>
                ))
            }
          </div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {
        filtertabs.map((card)=>(
            <motion.div
             id={card.id}
             key={card.id}
             initial={{opacity:0, x:10}}
             whileInView={{opacity:1, x:0}}
             className='p-4 border rounded shadow-sm space-y-2'>
                <img src={card.image} alt="" className='h-[240px] w-full object-cover'/>
                <p className='text-xl font-semibold'>{card.tittle}</p>
                <p className='text-gray-500'>{card.category}</p>
            </motion.div>

        ))
    }
</div>
        </div>
    </>
  )
}

export default Tab