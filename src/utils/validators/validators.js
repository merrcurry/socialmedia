export const publicationValidator = value => {
   const maxLength = 100

   if (value && value.length > maxLength) {
      return `Maximum length: ${ maxLength } characters.`
   }
}

export const messagesValidator = value => {
   const maxLength = 3000

   if (value && value.length > maxLength) {
      return `Maximum length: ${ maxLength } characters.`
   }
}

export const loginValidator = value => {
   const maxLength = 40

   if (!value) {
      return 'Required'
   }

   if (value && value.length > maxLength) {
      return `Maximum length: ${ maxLength } characters.`
   }
}
