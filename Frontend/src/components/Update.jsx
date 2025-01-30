import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function AddUser() {
  let navigation = useNavigate()
  let [showCat, setShowCat] = useState([])
  let { id } = useParams()
  const myRef = useRef("");
  let [productBrand, setProductBrand] = useState('');
  let [image, setImage] = useState(null);


  useEffect(() => {
    loadData()
    getcatagory()
  }, [])

  async function loadData() {
    let response = await axios.get(`http://localhost:4000/api/viewProduct/${id}`);
    console.log(response.data);

    setProductBrand(response.data[0].productBrand);
    setImage(response.data[0].image);
  }



  const onSubmit = async (e) => {
    e.preventDefault();


    const user = new FormData();

    console.log(user);

    user.append("image", image);
    user.append("productBrand", productBrand);
    user.append("catagory", myRef.current.value);

    try {
      await axios.put(`http://localhost:4000/api/updateProduct/${id}`, user, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigation("/admin/table");
    } catch (error) {
      alert("Failed to upload product.");
    }
  };






  async function getcatagory() {
    let result = await axios.get(`http://localhost:4000/api/getCatagory`)
    setShowCat(result.data)
  }




  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Add User</h2>

            <form action="#" method="POST" className="mt-8" onSubmit={onSubmit}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Category Title{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      name='productBrand'
                      placeholder="productBrand"
                      id="name"
                      value={productBrand}
                      onChange={(e) => setProductBrand(e.target.value)}

                    ></input>
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Category Type{' '}
                  </label>
                  <div className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                    <select name="" id="" ref={myRef}>
                      {showCat.map((data, key) => (
                        <option key={key} value={data.catagory}>{data.catagory}</option>
                      ))}
                    </select>
                  </div>
                </div>


                <div>

                  <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Upload image{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="file"
                      accept="image/*"
                      placeholder="product_price"
                      id="password"
                      onChange={(e) => setImage(e.target.files[0])}
                    ></input>
                  </div>

                </div>
                

                  {image && (
                    <div className="mt-3">
                      <p>Current Image:</p>
                      <img
                        src={typeof image === "string" ? image : URL.createObjectURL(image)}
                        alt="Product"
                        className="w-32 h-32 object-cover rounded-md border"
                      />
                    </div>
                  )}

                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Add User Now <ArrowRight className="ml-2" size={16} />
                  </button>
                  <Link
                    to='/'
                    className="inline-flex w-full items-center justify-center rounded-md bg-white my-5 px-3.5 py-2.5 font-semibold leading-7 text-black border-dashed border-2 border-indigo-600 hover:bg-grey/80"
                  >
                    Cancle
                  </Link>
                </div>
              </div>
            </form>

          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}