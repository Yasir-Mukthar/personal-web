import React from "react";
import HeroImage from "../assets/heroImage.png";
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      id="home"
      className="min-h-screen max-h-full w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="py-32 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-white"
          >
            I'm a{" "}
            <motion.span
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-yellow-500"
            >
              MERN
            </motion.span>{" "}
            Stack Developer
          </motion.h2>
          <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
           className="text-gray-500 py-4 max-w-md">
            I'm passionate about blending technology with creativity, always
            seeking new challenges to grow and develop my skills.
          </motion.p>
          <motion.div
           initial={{ opacity: 0, x: -40 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a                                 whileTap={{ scale: 0.90 }}
 className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-800 to-red-500 hover:to-red-600 cursor-pointer font-bold"
 href="https://drive.google.com/file/d/1jXHNaJ-0szDdpuNn_ITsgSrncjF6ZEK7/view?usp=sharing" 
      download="Yasir_Mukhtar_Resume.pdf"
      target="_blank"

      
      
 >
              Resume
              <span className="group-hover:scale-110 ml-3 duration-500">
                <IoMdDownload size={20} />
              </span>
            </motion.a>
          </motion.div>
        </div>
        <motion.div
        
         className="mt-20 md:w-3/5 group overflow-hidden rounded-xl md:mt-0 ">
          <motion.img
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}

        
            src={HeroImage}
            alt="profileImage"
            className="  mx-auto  sm:w-full md:w-5/6 hover:scale-95 duration-500 ease-in-out rounded-xl "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
