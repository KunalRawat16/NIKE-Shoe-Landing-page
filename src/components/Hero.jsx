import React from "react";
import { motion } from "motion/react";
import { FaShoppingBag } from "react-icons/fa";
import shoe from "../assets/shoe_image.png";
import flipkart from "../assets/flipkart.png";
import amazon from "../assets/amazon.png";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-center px-4 md:px-16 py-8">
      {/* Left section */}
      <motion.section
        className="w-full md:w-3/6 text-center md:text-left order-2 md:order-1 "
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-8xl font-bold text-black">
          YOUR FEET DESERVE THE BEST
        </h1>

        <p className="pt-4 text-base md:text-xl">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="pt-4 flex justify-center md:justify-start gap-4">
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 text-white font-semibold">
            <FaShoppingBag />
            Shop Now
          </button>

          <button className="border-2 border-gray-400 hover:bg-gray-200 px-4 py-2 font-semibold">
            Category
          </button>
        </div>

        <div className="pt-4">
          <p className="text-gray-700">Also Available On</p>
          <div className="flex justify-center md:justify-start pt-2 gap-3">
            <img className="h-8 cursor-pointer" src={flipkart} alt="flipkart" />
            <img className="h-8 cursor-pointer" src={amazon} alt="amazon" />
          </div>
        </div>
      </motion.section>

      {/* Right section */}
      <motion.section
        className="w-full md:w-3/6 pt-8 md:pt-0 flex justify-center order-1 md:order-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img className="w-72 md:w-full" src={shoe} alt="shoe" />
      </motion.section>
    </main>
  );
};

export default Hero;
