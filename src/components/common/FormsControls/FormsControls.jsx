import React from 'react'
import s from './FormsControls.module.css'

export const Textarea = ({ meta, input, ...props }) => {
   const error = meta.error && meta.touched
   return (
      <div>
         <textarea className={ s.textarea + ' ' + (error ? s.textarea_error : undefined) }
                   { ...input } { ...props } rows='5' cols='50'/>
         <div className={ s.error_message }>
            { error && <span>{ meta.error }</span> }
         </div>
      </div>
   )
}



