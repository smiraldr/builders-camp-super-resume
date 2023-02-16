import React from 'react'

const Avatar = ({src = "https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg" }, background="bg-transparent") => {
  return (
    <div className={`w-[100px] h-[100px] border-2 border-purple-100 rounded-full bg-black flex justify-center items-center overflow-hidden`}>
        <img className='w-full  h-full object-cover' src={src}/>
    </div>
  )
}

export default Avatar