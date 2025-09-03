import React from "react";
import shoe from "../assets/shoe_image.png";
import flipkart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'

const Hero = () => {
  return (
    <main className="flex m-8  mx-16">
      <section className="w-3/6 h-3/6 m-4 p-4">
        <h1 className="text-black text-8xl font-bold">YOUR FEET DESERVE THE BEST</h1>
        <p className="pt-4 text-xl">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="pt-4 flex gap-4">
            <button className='bg-red-500  hover:bg-red-600 cursor-pointer p-1 px-2 text-white font-semibold'>Shop Now</button>
            <button className='bg-white  hover:bg-gray-400 border-2 border-gray-400 cursor-pointer p-1 px-2 text-black font-semibold'>Category</button>
        </div>
        <div className="pt-4">
            <p className="text-gray-700">Also Available On</p>
            <div className="flex pt-2 gap-2">
                <img className="cursor-pointer" src={flipkart} alt="" />
                <img className="cursor-pointer" src={amazon} alt="" /></div>
        </div>
      </section>
      <section className="p-8">
        <img src={shoe} alt="" />
      </section>
    </main>
  );
};

export default Hero;
