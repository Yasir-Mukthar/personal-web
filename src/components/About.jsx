import React from "react";
import {motion} from "framer-motion"
const About = () => {
  

  return (
    <motion.div
      name="about" id="about" className="w-full min-h-screen max-h-full md:h-screen bg-black text-white pt-16 sm:pt-0 pb-10 sm:pb-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="max-w-screen-lg px-6 mx-auto flex flex-col justify-center w-full h-full pb-4 sm:pb-0">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-xl sm:text-2xl mt-20 px-4 justify leading-8"
        >
          I'm Yasir Mukhtar, a budding <span className="font-bold text-yellow-500">full-stack developer</span> eager to explore the vast realm of technology and innovation. With experience in <span className="text-red-500 font-bold">MERN</span> Stack, <span className="font-bold text-yellow-500">Next.js</span>, and the <span className="font-bold text-red-500">React Native</span>, I've been immersing myself in the world of web development, building dynamic and responsive applications. I’m passionate about learning, solving puzzles, and continuously growing my skills.


        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-xl sm:text-2xl px-4 justify-center leading-8"
        >
          I'm always on the lookout for new problems to solve and <span className="text-yellow-500 font-bold">opportunities to grow my skills</span>. As I continue on this exciting journey, I'm thrilled to collaborate with like-minded individuals, push the boundaries of what's possible, and make a meaningful impact in the ever-evolving landscape of tech.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
