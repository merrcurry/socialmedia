import React from 'react'
import { Form, Field } from 'react-final-form'

const ProfileDescriptionForm = (props) => {
   const required = value => (value ? undefined : "Required");

   const onSubmit = (formData) => {
      props.changeProfileDescription(formData)
         .then(() => {
            props.setEditDesc(false)
         })

      console.log(formData)
   }
   return (
      <Form
         onSubmit={ onSubmit }
         initialValues={ props.profile }
         render={ ({ handleSubmit }) => {
            return (
               <form onSubmit={ handleSubmit }>
                  <div>
                     <label>Full name</label>
                     <Field
                        name="fullName"
                        component="input"
                        placeholder="Ramzan"
                        validate={required}
                     />
                  </div>
                  <div>
                     <label>About me</label>
                     <Field
                        name="aboutMe"
                        component="input"
                        placeholder="I'm react developer"
                        validate={required}
                     />
                  </div>
                  <div>
                     <label>Looking for a job</label>
                     <Field
                        name="lookingForAJob"
                        component="input"
                        type="checkbox"
                     />
                  </div>
                  <div>
                     <label>Looking for a job description</label>
                     <Field
                        name="lookingForAJobDescription"
                        component="input"
                        placeholder="js, react, redux, html, css, axios, rest api"
                        validate={required}
                     />
                  </div>
                  <div>
                     <Contacts contacts={ props.profile.contacts }/>
                  </div>
                  <div>
                     <button type="submit">
                        Submit
                     </button>
                  </div>
               </form>
            )
         } }
      />
   )
}

const Contacts = ({ contacts }) => {
   return Object.keys(contacts)
      .map(contact => {
         debugger
         return (
            <div key={ contact }>
               <label>{ contact }</label>
               <Field
                  name={ "contacts." + contact }
                  component="input"
                  placeholder="github.com"
               />
            </div>
         )
      })
}

export default ProfileDescriptionForm
