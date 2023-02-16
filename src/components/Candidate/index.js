import React from 'react'
import Avatar from '../Avatar'

const Candidate = () => {
  return (
    <div className='flex gap-x-[30px] justify-between w-2/3 items-center shadow-sm border-2 border-cyan-600 px-8 py-4 rounded'>
        <Avatar/>
        <div className='flex flex-col flex-1'>
        <h1>Name</h1>
        <p>email</p>
        </div>
        <button> down </button>
    </div>
  )
}

export default Candidate