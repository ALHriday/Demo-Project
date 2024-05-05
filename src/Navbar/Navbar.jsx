import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
        <div className='flex justify-evenly items-center bg-slate-900 text-white'>
            <div className='text-xl font-bold'>Logo</div>
            <div className='list flex'>
                <li className='bg-orange-500'>Home</li>
                <li className='hover:bg-orange-500'>Home</li>
                <li className='hover:bg-orange-500'>Home</li>
                <li className='hover:bg-orange-500'>Home</li>
            </div>
        </div>
    </>
  )
}

export default Navbar