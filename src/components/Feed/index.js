import React from 'react'
import Candidate from '../Candidate'

const CandidateFeed = () => {

  const candidates = [{
    name:"Sofia",
    pic:"https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg",
    email:"sofia490@gmail.com",
  },
  {
    name:"Sara",
    pic:"https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg",
    email:"sara490@gmail.com",
  },
  {
    name:"Jon Doe",
    pic:"https://tailwindcss.com/_next/static/media/sarah-dayan.a620c98f.jpg",
    email:"jondoe90@gmail.com",
  }
]
  return (
    <div className='flex flex-col justify-center items-center gap-y-[30px] py-12'>
        <h1 className='font-bold text-xl'>Matching Candidates</h1>
          {
            candidates.map((item)=>{
              return <Candidate name={item.name} pic={item.pic} email={item.email}/>
            })
          }
        </div>
  )
}

export default CandidateFeed