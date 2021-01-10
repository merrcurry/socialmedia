import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import ReduxThunk from 'redux-thunk'
import appReducer from './appReducer'

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)));

window._store = store

export default store
