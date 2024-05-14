import React from 'react'

const About = () => {
  return (
    <div className='flex justify-evenly p-4'>
        <div className='size-40 md:basis-1/4'>
            <img className='size-full rounded' src={"/image/Paint-photo.png"} alt="" />
        </div>
        <div className='bg-teal-500  p-3 md:basis-2/4 rounded'>
            <h1 className='border-b-2 rounded text-white p-2 bg-orange-500 text-xl'>Alauddin Hriday</h1>
            <p className='pt-3 border-b'>Web Developer</p>
            <p className='border-b'>Graphic Designer</p>
            <p>Programmer</p>
        </div>

    </div>
  )
}

export default About