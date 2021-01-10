import { auth } from "./authReducer";

const INITIALIZE = 'INITIALIZE'

let initialState = {
   initialed: false
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZE:
         return {
            ...state,
            initialed: true
         }
      default:
         return state
   }
}

export const initialize = () => ({ type: INITIALIZE })

export const initializeApp = () => dispatch => {

   dispatch(auth()).then(() => {
      dispatch(initialize())
   })
}

export default appReducer;
