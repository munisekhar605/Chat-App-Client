import React from 'react'
import './ProfileContainer.css'
import Users from './users/Users'
const ProfileContainer = () => {
  return (
    <div className="pf-ms-container">
        
        <div className="pf-container">
        <div className="pf-title">Page</div>
            <div className="pf-user-container">
            <Users/>
             <Users/>
             <Users/>
             <Users/>
             <Users/>
             <Users/>
             <Users/>
             <Users/>
             <Users/>
             <Users/>
             <Users/>
             <Users/>
             <Users/>
             <Users/>

            </div>
        </div>
        <div className="massages-container">
        <Users/>
        <div className="mssage-container">
            <div className="mssage">hi</div>
        </div>
        </div>
    </div>
  )
}

export default ProfileContainer
