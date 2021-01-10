import React from 'react'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/image/userPhoto.jpg'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import ProfileDescription from './ProfileDescription'

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader/>
   }

   const OnPhotoUpdate = (e) => {
      if (e.target.files.length) {
         props.changePhoto(e.target.files[0])
      }
   }

   return (
      <div className={ s.profile_info }>
         <div className={ s.main_info }>
            <div>
               <img src={ props.profile.photos.large || userPhoto } alt=''/>
            </div>
            <div>
               <h1>{ props.profile.fullName }</h1>
            </div>
            <div>
               Change your photo:
               { props.iwOwner && <input type="file" onChange={ OnPhotoUpdate }/> }
            </div>
            <ProfileStatus iwOwner={ props.iwOwner }
                           status={ props.status }
                           updateProfileStatus={ props.updateProfileStatus }
            />
         </div>
         <ProfileDescription changeProfileDescription={props.changeProfileDescription}
                             profile={ props.profile }
                             iwOwner={ props.iwOwner }
         />
      </div>
   )
}

export default ProfileInfo
