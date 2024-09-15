import { motion } from "framer-motion";

import React from "react";
import pn from "../assets/portfolio/pn.jpg";
import twitterClone from "../assets/portfolio/twitter.jpg";
import auction from "../assets/portfolio/auction.jpeg";
import fl from "../assets/portfolio/fl.jpg";

function Portfolio() {
  const portfolioSource = [
    {
      id: 1,
      src: auction,
      name: "Real Time Auction Web App",
      description: `Developed an advanced auction bidding website with real-time bidding and notifications, powered by Socket.IO and Gemini AI chatbot. Features include user registration and login, auction creation with detailed listings, Stripe payment integration, user profile management, and secure authentication.`,
      demo: "https://youtu.be/vWLnbGh8oV0?si=0XdyBZ39QTqmhVJd",
      code: "https://github.com/Yasir-Mukthar/Auction-website-MERN-Stack",
      btnDesign: "bg-yellow-500",
    },
    {
      id: 2,
      src: pn,
      name: "ProtertyNama",
      description:
        "Developed a feature-rich PropertyNama website using Next.js, MongoDB, and NextAuth. The platform includes user-friendly login and registration options, along with profile update functionality. Users can easily upload, edit, and delete properties, while the robust search feature allows them to find properties quickly.",
      demo: "https://www.youtube.com/watch?v=bBhDanA7nqI",
      code: "https://github.com/Yasir-Mukthar/propertyNama-Nextjs",
    },
    {
      id: 3,
      src: fl,
      name: "Flex Jobs",
      description:
        "Created a flexible job platform where user can register, log in, and easily search for job listings. It’s equipped with features like job upload, so employers can post openings, and job seekers can browse and view opportunities in real time. With user authentication (login/logout), it ensures secure access for both job seekers and employers.",
      demo: "https://youtu.be/ZVfidOSGPJM?si=idRYAMQOopE87As7",
      code: "https://github.com/Yasir-Mukthar/flexjobs",
    },
    {
      id: 4,
      src: twitterClone,
      name: "Twitter Clone",
      description:
        "Built a complete Twitter clone with all the essential features. It includes user authentication, and you can create, read, update, and delete posts. The app also lets you follow other users, get random suggestions of other users, like posts, notifications for follow & comment, and leave comments, making it easy to stay connected and engage with content.",
      demo: "https://www.youtube.com/watch?v=ui2KaSnu4bs&ab_channel=YasirMukhtar",
      code: "https://github.com/Yasir-Mukthar/twitter-clone",
    },
  ];

  return (
    <div
      name="portfolio"
      id="projects"
      className="min-h-screen max-h-full  bg-gradient-to-b bg-black w-full text-white md:h-[1350px] md:pb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects here...</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10  sm:px-0 ">
          {portfolioSource.map(({ id, src, name, description, demo, code }) => {
            return (
              <motion.div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                // whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                transition={{ duration: 0.3, delay: 0.1 * id }}
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 w-full sm:h-[250px] "
                />
                <div className="p-2 ">
                  <h2 className="text-xl font-bold ">{name}</h2>
                  <p className="py-3">{description}</p>
                </div>
                <div className=" flex-col sm:flex-row gap-2 flex sm:items-center  justify-between px-4 py-2">
                  <a
                    href={demo}
                    className={`border   text-white font-bold py-2 px-4 rounded-md border-yellow-500 hover:bg-yellow-500 bg-yellow-500 hover:text-black text-center`}
                  >
                    Check Demo
                  </a>
                  <a
                    href={code}
                    className="border-yellow-500 border hover:bg-yellow-500 hover:text-black  text-white font-bold py-2 px-4 rounded-md bg-black text-center"
                  >
                    Source Code
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
