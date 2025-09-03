import React from 'react'
import logo from '../assets/brand_logo.png'
import '../App.css'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center gap-2 mx-6 p-2'>
        <img src={logo} alt="" />
        <ul className='flex gap-3 justify-center'>
            <li className='font-semibold cursor-pointer hover:text-blue-600 hover:underline'>MENU</li>
            <li className='font-semibold cursor-pointer hover:text-blue-600 hover:underline'>LOCATION</li>
            <li className='font-semibold cursor-pointer hover:text-blue-600 hover:underline'>ABOUT</li>
            <li className='font-semibold cursor-pointer hover:text-blue-600 hover:underline'>CONTACT</li>
        </ul>
        <button className='bg-red-500 hover:bg-red-600 cursor-pointer w-20 h-8 text-white font-semibold'>Login</button>
    </nav>
  )
}

export default Navbar