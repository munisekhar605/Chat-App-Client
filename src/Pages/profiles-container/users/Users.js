import React from 'react'
import './users.css'

const Users = () => {
  return (
    <div className="user-container">
        <div className='user-logo-container'>
            <img className='user-logo' src='https://res.cloudinary.com/muni/image/upload/v1732716308/sekhar-img.jpg'></img>
        </div>
        <div>
        <div className='name-container'>Munisekhar</div>
        <div className='email-container'>munisekhar@gmail.com</div>
        </div> 
    </div>
  )
}

export default Users;
