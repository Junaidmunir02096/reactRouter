import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // }, []);
  return (
    <div className='bg-gray-500 text-center text-white text-3xl p-4'>
      <h1>Github Followers : {data.followers}</h1>
      <img src="data.avatar_url" alt="Github Picture" width={300}/>
    </div>
  )
}
export default Github

export const GithubInfoLoader =async ()=>{
    // const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const response = await fetch('https://api.github.com/users/Junaidmunir02096')
    
    
    return response.json()
}