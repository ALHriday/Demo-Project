import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='flex justify-evenly items-center bg-slate-900 text-white'>
            <div className='text-xl font-bold'>Logo</div>
            <div className='list flex'>
                <Link className='cursor-pointer bg-orange-500'>Home</Link>
                <Link className='cursor-pointer hover:bg-orange-500'>Service</Link>
                <Link to={"/contact"} className='cursor-pointer hover:bg-orange-500'>Contact</Link>
                <Link to={"/about"} className='cursor-pointer hover:bg-orange-500'>About</Link>
            </div>
        </div>
    </>
  )
}

export default Navbar