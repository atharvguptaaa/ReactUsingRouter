import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios';

function GitHub() {
    //const data=useLoaderData();



    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/atharvguptaaa")
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log(res)
    //         setData(res)

    //     })

    // },[])

        const [data,setData]=useState([])
    useEffect(()=>{
        const fetchPosts=async()=>{
            try{
                const response=await axios.get("https://api.github.com/users/atharvguptaaa")
                setData(response.data);
            }
            catch(err){
                console.log(err);

            }
            
        }
        fetchPosts();
    },[])

    return (
    

        <div className='text-center text-blue-400'>
            Followers:{data.followers} 
            <br/>

            Public Repositories:{data.public_repos}
            <img className="mx-auto" src={data.avatar_url} alt="" />
        </div>
    )
}

export default GitHub

// export const githubInfoLoader= async()=>{
//     const response= await fetch('https://api.github.com/users/atharvguptaaa')
//     return response.json();
// }

