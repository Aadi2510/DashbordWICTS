import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Table from './components/Table.jsx'
import AddData from './components/AddData.jsx'
import ViewData from './components/ViewData.jsx'
import Update from './components/Update.jsx'
import Signin from './components/Signin.jsx'
import Protected from './components/Protected.jsx'
import Catagory from './components/Catagory.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path='/admin' element={<App />}>
        <Route path='' element={
            <Signin />
        } />

        <Route path='/admin/table' element={<Table />} />
        <Route path='/admin/addData' element={
          <Protected>
            <AddData />
          </Protected>
        } />
        <Route path='/admin/viewdata/:id' element={<ViewData />} />
        <Route path='/admin/catagory' element={
          <Protected>
            <Catagory />
          </Protected>
        } />
        <Route path='/admin/update/:id' element={<Update />} />

      </Route>
    </>


  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
