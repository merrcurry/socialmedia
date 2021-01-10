// старый файл, давно не используется
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
   _state: {
      profilePage: {
         publicationsData: [
            { id: 1, publicationText: 'It/s me', likesCount: 0 },
            { id: 2, publicationText: 'Hello World', likesCount: 13 },
            { id: 3, publicationText: 'test', likesCount: 1231231231 },
            { id: 4, publicationText: 'privet', likesCount: 1 }
         ],
         newPublicationText: 'Hello world'
      },
      dialogsPage: {
         dialogsData: [
            { id: 1, name: 'Akhmed' },
            { id: 2, name: 'Said' },
            { id: 3, name: 'Umalat' },
            { id: 4, name: 'Ramz' }
         ],
         messagesData: [
            { id: 1, messageText: 'Hello' },
            { id: 2, messageText: 'Its me' },
            { id: 3, messageText: 'isadakdlasdnfajf' },
            { id: 4, messageText: '1234' }
         ],
         newMessageText: ''
      }
   },
   _callSubscriber() {
      console.log('State changed');
   },

   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._callSubscriber(this._state);
   }
}

export default store;
window.store = store;
