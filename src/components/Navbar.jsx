import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"
import { motion } from "framer-motion";


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const links = [
    {
      id: 1,
      text: "home",
      url: "home",
    },
    {
      id: 2,
      text: "about",
      url: "about",
    },
    {
      id: 3,
      text: "projects",
      url: "projects",
    },
    {
      id: 4,
      text: "Technology",
      url: "experience",
    },
    {
      id: 5,
      text: "contact",
      url: "contact",
    },
  ];

  return (
    <div className="  z-50 flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      <div>
        <motion.h1
         initial={{ opacity: 0,  x: -40 }}
         animate={{ opacity: 1,  x: 0 }}
         transition={{ duration: 0.5}}
         className="text-5xl font-signature ml-2 md:ml-10">Yasir <span className="hidden lg:inline-block">Mukhtar</span></motion.h1>
      </div>
      <ul className="hidden sm:flex md:mr-10">
        {links.map((link,index) => (
          <motion.li
          initial={{ opacity: 0, x:-50, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
            key={link.id}
            className="hover:text-red-600 px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-100 duration-200 md:text-xl lg:px-5"
          >
            <Link smooth={true} duration={500} to={link.url}>{link.text}</Link>
          </motion.li>
        ))}
      </ul>
      <div
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="sm:hidden cursor-pointer z-10 text-gray-500"
      >
        {navbarOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {navbarOpen && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
            <Link smooth={true} duration={500} to={link.url} onClick={()=>setNavbarOpen(!navbarOpen)}>{link.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
