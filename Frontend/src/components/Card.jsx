import React, { useState } from 'react'
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'


export  default function Card() {
    let [user,setUser] = useState([])

    async function loadData(){
        let response = await  axios.get('http://localhost:4000/api/getProduct')

        setUser(response.data)
        // console.log(response.data)
    }
    loadData()


  return (
    <div id='main'>
      {user.map((data)=>(

    <div className="w-[300px] rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">Name:- {data.name}</h1>
        <h1 className="text-lg font-semibold">email:- {data.email}</h1>
 
        {/* <h1 className="text-lg font-semibold">password:- {data.password}</h1> */}
       
        {/* <Link
          to="/addcart"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Add To Cart
        </Link> */}

      </div>
    </div>
      ))}
    </div>
  )
}
