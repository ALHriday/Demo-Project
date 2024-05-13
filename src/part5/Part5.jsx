// import React,{useRef} from 'react'
import "./Part5.css"

const Part5 = () => {

    let parent = document.querySelector(".parent");

    function createEl(){
      let delEl;
        const node = document.createElement("h1");
        const node2 = document.createElement("p");
        const node3 = document.createElement("p");
        node.innerText = "Help!";
        node2.innerText = "Do you have a problem? contact us";
        node3.innerText = "X";
        delEl = node3.classList.add("delEl");
        parent.appendChild(node);
        parent.appendChild(node2);    
        parent.appendChild(node3);

        // function delChild(){
        //   parent.remove(node);
        //   parent.remove(node2);
        //   parent.remove(node3);
        // }
    }

   
  return (
    <>
    <div className='parent text-white p-3 bg-blue-500'>
    </div>
    <div className='bg-white p-3'>
        
       <div className='flex justify-center items-center gap-3 text-white text-xl'>
            <button onClick={createEl} className='bg-blue-700 size-16 border-4 border-blue-300 rounded-full'>?</button>
            <button className='bg-green-700 size-16 border-4 border-green-300 rounded-full'>OK</button>
            <button className='bg-orange-500 size-16 border-4 border-orange-300 rounded-full'>!</button>
            <button className='bg-red-500 size-16 border-4 border-red-300 rounded-full'>X</button>
       </div>
    </div>
    </>
  )
}

export default Part5