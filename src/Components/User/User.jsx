import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {Userid}=useParams()
  return (
    <div className='bg-blue-500 text-lg py-10 text-white text-center'>
      User: {Userid}
    </div>
  )
}

export default User
