import React, {useState, useEffect} from 'react'
import axios from 'axios';

const UserForm = () => {
    const [embed, setEmbed] = useState([])
    let arr;
    useEffect(()=>{
        const SIZE = 768;
        arr = new Array(SIZE);
        for (let i = 0; i < SIZE; i++) {
          arr[i] = Math.random(); // generates random float number between 0 and 1
        }
        setUser({...user, ["embed"]:arr})
    },[])  

const [user, setUser] = useState({})
const handleChange = (event)=>{
    if(event.target.name=="experience"){
        let value = parseInt(event.target.value)
        console.log(value)
        setUser({...user, [event.target.name]: value})
    }
    setUser({...user, [event.target.name]:event.target.value})
}


const handleSubmit = (e, user) =>{
    e.preventDefault()
        const data = {...user, ["experience"]:parseInt(user.experience)}
        console.log(data)
        var config = {
            method: 'post',
          maxBodyLength: Infinity,
            url: 'http://localhost:9200/candidate_data/_doc',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
}

  return  <form onSubmit={(e)=>handleSubmit(e,user)}  class="bg-white w-full rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Full Name
    </label>
    <input onChange={handleChange} value={user?.full_name || ""} name="full_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
  </div>
  <div className='flex gap-x-4'>
  <div class="mb-4 flex-1">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Email
    </label>
    <input onChange={handleChange} name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
  </div>
  <div class="mb-4 flex-1">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Experience (in years)
    </label>
    <input onChange={handleChange} name="experience" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" min={0} placeholder="Experience"/>
  </div>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Skills
    </label>
    <input onChange={handleChange} name="skills" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="skills" type="text" placeholder="Add Skills"/>
  </div>
  <div>
    <h1 className='mb-8 font-bold text-xl'>Experience Description</h1>
    {/* Start of experience */}
    <textarea onChange={handleChange} name="job_description" className='bg-purple-100 p-4 w-full outline-none rounded-md' id="w3review" placeholder='Job Description...'  rows="10" cols="75"></textarea>
  {/* End of Experience */}
  </div>
  <div class="flex items-center justify-center pt-12">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
        Submit
      </button>
    </div>
</form>
}

export default UserForm