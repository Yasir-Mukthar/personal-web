import {  motion } from "framer-motion";

import React from 'react'

import epicGames from "../assets/portfolio/eg.jpeg"
import twitterClone from "../assets/portfolio/twitter.jpeg"
import auction from "../assets/portfolio/auction.jpeg"
import chatapp from "../assets/portfolio/chatappp.png"


function Portfolio() {
    const portfolioSource=[
        {
            id:1,
            src:auction,
            name:"Real Time Auction Web App",
            description:`Developed an advanced auction bidding website with real-time bidding and notifications, powered by Socket.IO and Gemini AI chatbot. Features include user registration and login, auction creation with detailed listings, Stripe payment integration, user profile management, and secure authentication.`
,
            demo:"https://youtu.be/vWLnbGh8oV0?si=0XdyBZ39QTqmhVJd",
            code:"https://github.com/Yasir-Mukthar/Auction-website-MERN-Stack",
            btnDesign:"bg-yellow-500"
        },
        {
            id:2,
            src:chatapp,
            name:"Chat App",
            description:"Created a cool chat app where you can register, log in, and start chatting instantly. It’s got real-time messaging, so conversations flow smoothly, and you can see who’s online at any time. Whether you're catching up with friends or making new connections, everything’s designed for a smooth and fun experience.",
            demo:"https://youtu.be/wCT4iDM-hWY",
            code:"https://github.com/Yasir-Mukthar/chat-app",

        }
        , {
            id:3,
            src:twitterClone,
            name:"Twitter Clone",
            description:"Built a complete Twitter clone with all the essential features you’d expect. It includes user authentication for secure sign-ins, and you can create, read, update, and delete posts. The app also lets you follow other users, get random suggestions of other users, like posts, notifications for follow & comment, and leave comments, making it easy to stay connected and engage with content.",
            demo:"https://www.youtube.com/watch?v=ui2KaSnu4bs&ab_channel=YasirMukhtar",
            code:"https://github.com/Yasir-Mukthar/twitter-clone"
        }
        , {
            id:4,
            src:epicGames,
            name:"Epic Games Website",
            description:"Developed a feature-packed Epic Games website with user-friendly login and registration options. The site includes a comprehensive products page where you can browse through various games and content. A robust search function helps you find exactly what you're looking for, and each product comes with detailed descriptions to help you make informed choices.",
            demo:"https://youtu.be/gyCAIqAjCJc?si=qtw8V40bGZ_Hb-az",
            code:"https://github.com/Yasir-Mukthar/epicgames"
        },
       
    ]

return (
    <div name="portfolio" id='projects' className='min-h-screen max-h-full  bg-gradient-to-b bg-black w-full text-white md:h-[1350px] md:pb-10'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of my projects here...</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-10  sm:px-0 '>
                {
                    portfolioSource.map(({id,src, name,description,demo,code})=>{
                        return (
                            <motion.div 
                                key={id} 
                                className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'
                                initial={{ opacity: 0, scale: 0.9,x:-20 }}
                                whileInView={{ opacity: 1, scale: 1 ,x:0}}
                               // whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                exit={{ opacity: 0, scale: 0.9 ,x:-20}}
                                transition={{ duration: 0.3,delay:0.1 *id } }
                            >
                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 w-full '/>
                                <div className='p-2 '>
                                    <h2 className='text-xl font-bold'>{name}</h2>
                                    <p className='py-3'>{description}</p>
                                </div>
                                <div className=' flex-col sm:flex-row gap-2 flex sm:items-center  justify-between px-4 py-2'>
                                    <a href={demo} className={`border   text-white font-bold py-2 px-4 rounded-md border-yellow-500 hover:bg-yellow-500 bg-yellow-500 hover:text-black text-center`}>Check Demo</a>
                                    <a href={code} className='border-yellow-500 border hover:bg-yellow-500 hover:text-black  text-white font-bold py-2 px-4 rounded-md bg-black text-center'>Source Code</a>
                                </div>
                            </motion.div>
                        );
                    })
                }
            </div>
        </div>
    </div>
);
}

export default Portfolio