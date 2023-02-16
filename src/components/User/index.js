import React, {useRef} from 'react'
import UserForm from '../Form'

const User = ({children, minHeight}) => {
  const inputRef =  useRef(null)

  const handleFileUpload = (e)=>{
    inputRef.current.click()
  }
  return (
    <div className={`flex `}>
        <div className='flex-1 h-[800px] flex flex-col items-center pt-12 gap-y-[40px] ' >
            <h1 className='text-8xl  '>Find Your Dream Job</h1>
            <p className='text-4xl '>Upload Your Resume</p>
            <button>
            <span className='bg-indigo-100 px-4 py-4 rounded text-rose-700  font-bold' onClick={handleFileUpload}>
              Upload Your File
            <input type="file" ref={inputRef} />
            </span>
            </button>
            <UserForm/>
        </div>
        <div className='flex-1 h-[800px] '>
            <img src='https://www.resume.com/static/fb4669c69e1a8f8a16eb0204c1535713/36490/first-screen.webp'/>
        </div>
    </div>
  )
}

export default User