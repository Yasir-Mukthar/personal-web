import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaRegCopyright } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="text-white px-5 py-6 bg-black border-t-2 border-gray-300 border-opacity-5 ">

      <div className="text-center">
        <span className="font-semibold">
          Created By{' '}
          <a href="https://yasir-mukthar.github.io/personal-web/index.html" rel="noreferrer" className="text-yellow-500 font-bold">
            YASIR MUKHTAR
          </a>{' '}
          |{' '}
          <FaRegCopyright className="inline-block mr-1"/>
          <span className="font-semibold">{new Date().getFullYear()} All rights reserved.</span>
          <div className="mt-2.3 flex justify-center items-center">
            <motion.a
              href="https://www.linkedin.com/in/yasir-mukhtar-85b590228/"
              rel="noreferrer"
              target="_blank"
              className="hover:text-red-500"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin className="m-1" size={25}></FaLinkedin>
            </motion.a>
            <motion.a
              href="https://github.com/Yasir-Mukthar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub className="m-1" size={25}></FaGithub>
            </motion.a>
            <motion.a
              href="https://www.youtube.com/channel/UC-i2CGRw09x3Dt6T0Cc-mew"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 text-xl"
              whileHover={{ scale: 1.2 }}
            >
              <FaYoutube className="m-1" size={25}></FaYoutube>
            </motion.a>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
