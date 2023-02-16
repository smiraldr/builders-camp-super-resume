import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../src/logo-2.png"
import Avatar from '../Avatar'


const NavBar = () => {
  return (
    <nav className='flex items-center justify-between px-16 py-4 bg-purple-600 shadow-md bg-slate-50'>
        <div className='overflow-hidden '>
            <Link to="/"><Avatar  src={logo} background={"bg-black"}/></Link>
        </div>
        <ul>
            <li><Link to="/feed">
                <span className='inline-block px-12 py-2 bg-transparent border-2 border-purple-100 text-white rounded-md'>Feed</span>
                </Link></li>
        </ul>
    </nav>
  )
}

export default NavBar