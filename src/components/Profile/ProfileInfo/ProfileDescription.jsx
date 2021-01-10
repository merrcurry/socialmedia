import React, { useState } from 'react'
import s from './ProfileDescription.module.css'
import ProfileDescriptionForm from "./ProfileDescriptionForm";

const ProfileDescription = (props) => {
   const [editDesc, setEditDesc] = useState(false)

   return (
      <div>
         { !editDesc &&
         <>
            <p><b>About Me:</b> { props.profile.aboutMe }</p>
            <p><b>Looking for a job: </b>
               { props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : '⛔' }
            </p>
            <div>
               <b>Contacts:</b>
               <ul className={ s.contacts }>
                  <li><Contacts contacts={ props.profile.contacts }/></li>
               </ul>
            </div>
            { props.iwOwner && <button onClick={ () => setEditDesc(true) }>Edit</button> }
         </>
         }

         { editDesc && <ProfileDescriptionForm changeProfileDescription={ props.changeProfileDescription }
                                               profile={ props.profile }
                                               setEditDesc={ setEditDesc }/> }
      </div>
   )
}

const Contacts = ({ contacts }) => {
   return Object.keys(contacts)
      .map(contact => {
         return contacts[contact] && <li> 🟢 <b>{ contact }</b>: { contacts[contact] }</li>
      })
}

export default ProfileDescription
