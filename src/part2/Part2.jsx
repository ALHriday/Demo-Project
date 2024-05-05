import React, { useRef } from 'react'

export default function Part2() {

  const changeText = useRef();

  function sectionA(){
    changeText.current.innerText = 
    `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Laborum quam placeat,
    accusamus excepturi recusandae numquam.`
  }
  function sectionB(){
    changeText.current.innerText = 
    `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit.`
  }
  function sectionC(){
    changeText.current.innerText = 
    `Lorem ipsum dolor sit amet, consectetur 
    adipisicing elit. Laborum quam placeat, 
    accusamus excepturi recusandae numquam.
    accusamus excepturi recusandae numquam.
    ipsum dolor sit amet, consectetur.`
  }


  return (
    <>
        <div className='flex p-4 bg-slate-900 text-white gap-2'>
           <div className='basis-2/6 border-2 p-2'>
                <h1 onClick={sectionA} className='bg-orange-500 cursor-pointer p-1 border-b-2 text-center hover:bg-gray-700'>Section A</h1>
                <h1 onClick={sectionB} className='bg-orange-500 cursor-pointer p-1 border-b-2 text-center hover:bg-gray-700'>Section B</h1>
                <h1 onClick={sectionC} className='bg-orange-500 cursor-pointer p-1 border-b-2 text-center hover:bg-gray-700'>Section C</h1>
            </div>
            <div className='basis-4/6 border-2 p-2 bg-gray-700'>
                <p ref={changeText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Possimus fugiat dolorum architecto aut minima, atque
                    laudantium iusto provident facere adipisci!
                </p>
            </div>
        </div>
    </>
  )
}
