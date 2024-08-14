import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();

  const validateForm = () => {
    const formData = new FormData(form.current);
    const name = formData.get("from_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    // Basic validation checks
    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return false;
    }

    if (name.length < 5 || name.length > 20) {
      toast.error("Name must be between 5 and 20 characters.");
      return false;
    }

    if (email.length < 5 || email.length > 30) {
      toast.error("Email must be between 5 and 30 characters.");
      return false;
    }

    if (message.length < 20) {
      toast.error("Message must be at least 20 characters long.");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm("service_qvbrhqd", "template_llfzueg", form.current, {
        publicKey: "e2FbflmSwNqyMF6op",
      })
      .then(
        () => {
          toast.success("Email sent successfully.", {
            autoClose: 1000
          });
          form.current.reset();
        },
        () => {
          toast.error("Error sending email.");
        }
      );
  };

  return (
    <div
      name="contact"
      id="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Submit the form below to get in touch with me...
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              value="Yasir"
              className="hidden"
              name="to_name"
            />
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:border-yellow-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-yellow-500 border-gray-500"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-yellow-500 border-gray-500"
            ></textarea>
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="text-white text-xl font-bold bg-gradient-to-r from-red-800 to-red-500 hover:to-red-600 px-4 sm:px-8 py-3 my-8 mx-auto flex items-center rounded-md duration-300"
            >
              Send
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
