import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import MessagesItem from './MessagesItem/MessagesItem'
import { Form, Field } from 'react-final-form'
import { Textarea } from '../common/FormsControls/FormsControls';
import { messagesValidator } from '../../utils/validators/validators';

const Dialogs = (props) => {

   let dialogsElements = props.dialogsPage.dialogsData.map(d => {
      return <DialogsItem key={ d.id } id={ d.id } name={ d.name }/>
   })

   let messagesElement = props.dialogsPage.messagesData.map(m => {
      return <MessagesItem key={ m.id } messageText={ m.messageText }/>
   })

   let sendMessage = (values) => {
      props.sendMessage(values.message)
   }

   return (
      <div className={ s.dialogs }>
         <div>
            { dialogsElements }
         </div>
         <div>
            { messagesElement }
            <AddMessageForm onSubmit={ sendMessage }/>
         </div>
      </div>
   )
}

const AddMessageForm = (props) => {
   return (
      <Form onSubmit={ props.onSubmit }>
         { props => (
            <form className={ s.addMessageForm } onSubmit={ props.handleSubmit }>
               <div>
                  <Field name='message' component={ Textarea } validate={ messagesValidator }
                         placeholder='Enter your message'/>
               </div>
               <div>
                  <button>Send</button>
               </div>
            </form>
         ) }
      </Form>
   )
}

export default Dialogs
