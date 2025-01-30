import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Table() {
    let [user, setUser] = useState([])
    useEffect(() => {
        loadData()
    }, [])

    async function loadData() {
        let response = await axios.get('http://localhost:4000/api/getProduct')

        setUser(response.data)

        console.log(response.data)
    }

    async function Deletedata(id) {
        let result = confirm("Are U sure to Delete")
        if (result == true) {
            await axios.delete(`http://localhost:4000/api/deleteProduct/${id}`)
            loadData()
        }
    }



    return (
        <>


            <section className="mx-auto w-full max-w-7xl px-4 py-4">


                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">




                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                <span>Category Title</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                <span>Category Type</span>
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Image URL
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Image
                                            </th>


                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                                            >
                                                Edit
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {user.map((data, key) => (
                                            <tr key={key}>

                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">

                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{data.productBrand}</div>

                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">

                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{data.catagory}</div>

                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{data.image}</div>
                                                        </div>
                                                    </div>
                                                </td>


                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <img
                                                        src={`http://localhost:4000/${data.image}`}
                                                        alt="Laptop"
                                                        className="h-[4rem] w-[4rem] rounded-md object-cover"
                                                    />
                                                </td>


                                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                    <Link
                                                        to={`/admin/viewdata/${data._id}`}
                                                        type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View</Link>
                                                    <button type="button"
                                                        onClick={() => Deletedata(data._id)}
                                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                                    <Link type="button"

                                                        to={`/admin/update/${data._id}`}
                                                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Update</Link>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
