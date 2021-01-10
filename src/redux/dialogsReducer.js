const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
   dialogsData: [
      { id: 1, name: 'Ramz' },
      { id: 2, name: 'Akhmed' }
   ],
   messagesData: [
      { id: 1, messageText: 'Hello' },
      { id: 2, messageText: 'Hi' }
   ]
};

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case SEND_MESSAGE:
         let newMessage = { id: 3, messageText: action.message }
         return {
            ...state,
            messagesData: [...state.messagesData, newMessage]
         }
      default:
         return state;
   }

}

export const sendMessageCreator = (message) => {
   return {
      type: SEND_MESSAGE,
      message
   }
}

export default dialogsReducer;
