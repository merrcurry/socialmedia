import React from 'react'
import s from './MyPublications.module.css'
import Publication from './Publication/Publication'
import { Form, Field } from 'react-final-form'
import { publicationValidator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPublications = (props) => {

   let publicationsElements = props.publicationsData.map(p => {
      return (
         <Publication key={ p.id } message={ p.publicationText } likesCount={ p.likesCount }/>
      )
   })

   let addPublication = (values) => {
      props.addPublication(values.publication)
   }

   return (
      <div className={ s.my_publications }>
         <h3>My publications</h3>

         <AddPublicationForm onSubmit={ addPublication }/>

         { publicationsElements }
      </div>
   )
}

const AddPublicationForm = (props) => {
   return (
      <Form onSubmit={ props.onSubmit }>
         { props => (
            <form onSubmit={ props.handleSubmit }>
               <div>
                  <Field placeholder='Enter here' component={Textarea} name='publication' validate={ publicationValidator }/>
               </div>
               <div>
                  <button>To publish</button>
               </div>
            </form>
         ) }
      </Form>
   )
}

export default MyPublications;
