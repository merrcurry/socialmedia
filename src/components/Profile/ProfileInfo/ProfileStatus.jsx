import React, { useState, useEffect } from 'react'
import s from './ProfileStatus.module.css'

const ProfileStatus = (props) => {

   const [editMode, setEditMode] = useState(false)
   const [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => {
      if (props.iwOwner) {
         setEditMode(true)
      }
   }

   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateProfileStatus(status)
   }

   const changeStatus = (e) => {
      setStatus(e.currentTarget.value)
   }

   return (
      <div className={s.status}>
         { !editMode &&
         <div>
            <span onDoubleClick={ activateEditMode }><b>Profile status: </b>{ props.status || '❌' }</span>
         </div>
         }

         { editMode &&
         <div>
            <input onChange={ changeStatus } onBlur={ deactivateEditMode } value={ status } autoFocus={ true }/>
         </div>
         }

      </div>
   )

}

export default ProfileStatus
