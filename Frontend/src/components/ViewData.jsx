import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ViewData() {
    let {id} = useParams()
    let [user, setUser] = useState([])
    useEffect(()=>{
        loadData()
    },[])
    async function loadData() {
        let response = await axios.get(`http://localhost:4000/api/viewProduct/${id}`)

        setUser(response.data)
      
    }
  return (
    <>
    <section className="container m-auto">

    <div id="card" className='m-auto mt-5'>
        {user.map((data)=>(
    <div className="w-[300px] rounded-md border">
      <img
                    src={`http://localhost:4000/${data.image}`}
                      alt="category"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">Catagory Title:- {data.productBrand}</h1>
        <h1 className="text-lg font-semibold">Catagory Type:- {data.catagory}</h1>
      </div>
    </div>
    ))}
    </div>

    </section>
    </>
   
  )
}
