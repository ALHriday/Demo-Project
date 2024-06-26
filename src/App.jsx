
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import Part1 from './part1/Part1'
import Part2 from './part2/Part2'
import Part3 from './part3/Part3'
import Part4 from './part4/Part4'
import Part5 from './part5/Part5'
import Part6 from './part6/Part6'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet></Outlet>
      <Part1/>
      <Part2/>
      <Part3/>
      <Part5/>
      <Part6/>
      {/* <Part4/> */}
    </>
  )
}

export default App
