import React from 'react'
import { useAuthentication } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import { Spinner } from 'flowbite-react'

const PrivateRoute = () => {
    const {user, loading} = useAuthentication()
    const location = useLocation
    
    if(loading) {
        return <div className='text-center'>
        Loading...
        <Spinner aria-label="Center-aligned spinner example"/>
        </div>
    }

    if(user){
        return Children;
    }
    

  return (
    <Navigate to="/login" state={{from: location}} ></Navigate>
  )
}

export default PrivateRoute
