import { useState } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar'
import { TbLayoutSidebar } from 'react-icons/tb'
import Sidebar from './components/sidebar'

function App() {


  return (
    <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden'>
     <Navbar/>
     <Sidebar/>
    </div>
  )
}

export default App
