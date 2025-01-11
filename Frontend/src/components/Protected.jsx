import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../context/UserContext'

export default function Protected({children}) {
let {pass} = useContext(UserContext)

 if(pass == true){
    return children
 }else{
    return <Navigate to='/admin'/>
 }

}
