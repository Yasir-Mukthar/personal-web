import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import mongodb from "../assets/mongodbicon.png"
import nodejs from "../assets/nodejsicon.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import nextjs from "../assets/next.jfif"
import { motion } from "framer-motion";



const Experience = () => {

    const programingLanguages=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:"hover:shadow-orange-500 border-orange-500"
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:"hover:shadow-blue-500 border-blue-500"
        },
        {
            id:3,
            src:javascript,
            title:"JavaScript",
            style:"hover:shadow-yellow-500 border-yellow-500"
        },
        {
            id:4,
            src:reactImage,
            title:"React",
            style:"hover:shadow-blue-600 border-blue-500"
        },
        {
            id:5,
            src:tailwind,
            title:"Tailwind",
            style:"hover:shadow-sky-400 border-sky-500"
        },
        {
            id:6,
            src:nodejs,
            title:"Node JS",
            style:"hover:shadow-sky-400 border-sky-500"
        },
        {
            id:7,
            src:nextjs,
            title:"Next.js",
            style:"hover:shadow-gray-400 border-gray-500"
        },
        
        
        {
            id:8,
            src:github,
            title:"GitHub",
            style:"hover:shadow-gray-400 border-gray-500"
        },{
            id:9,
            src:mongodb,
            title:"MongoDB",
            style:"hover:shadow-sky-400 border-sky-500"
        }
    ]


return (
    <div name="experience" id='experience' className='bg-black w-full min-h-screen max-h-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 inline p-2 border-gray-500'>Technology</p>
                <p className='py-6'>These are the technologies I've Worked with...</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-10 px-12 sm:px-0'>
                {
                    programingLanguages.map(({ id, src, title, style }) => {
                        return (
                            <motion.div key={id} className={` border-dashed border-2  shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`} initial={{ opacity: 0,y:-20 }} whileInView={{ opacity: 1,y:0 }} transition={{duration:0.5, delay:0.1*id}} exit={{ opacity: 0 }}>
                                <motion.img className='w-10 sm:w-20 mx-auto' src={src} alt="Programming Images" />
                                <motion.p className='mt-4 font-bold'>{title}</motion.p>
                            </motion.div>
                        )
                    })
                }
            </div>
            
        </div>
    </div>
)
}

export default Experience