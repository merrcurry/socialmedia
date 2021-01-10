import React, { Suspense } from 'react';
import './App.css'
import { HashRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import HeaderContainer from './components/Header/HeaderContainer'
import { connect } from 'react-redux'
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

const Login = React.lazy(() => import('./components/Login/Login'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {

   componentDidMount() {
      this.props.initializeApp()
   }

   render() {
      if (!this.props.initialed) return <Preloader/>

      return (
         <HashRouter>
            <div className='app-wrapper'>
               <HeaderContainer/>
               <Navbar/>
               <div className='app-wrapper-content'>
                  <Route path='/profile/:userId?' render={ () => {
                     return (
                        <Suspense fallback={ <Preloader/> }>
                           <ProfileContainer/>
                        </Suspense>
                     )
                  } }/>
                  <Route path='/im' render={ () => {
                     return (
                        <Suspense fallback={ <Preloader/> }>
                           <DialogsContainer/>
                        </Suspense>
                     )
                  } }/>
                  <Route path='/users' render={ () => {
                     return (
                        <Suspense fallback={ <Preloader/> }>
                           <UsersContainer/>
                        </Suspense>
                     )
                  } }/>
                  <Route path='/feed' render={ () => <News/> }/>
                  <Route path='/music' render={ () => <Music/> }/>
                  <Route path='/settings' render={ () => <Settings/> }/>
                  <Route path='/login' render={ () => {
                     return (
                        <Suspense fallback={ <Preloader/> }>
                           <Login/>
                        </Suspense>
                     )
                  } }/>
               </div>
            </div>
         </HashRouter>
      );
   }
}

const mapStateToProps = (state) => ({
   initialed: state.app.initialed
})

export default connect(mapStateToProps, { initializeApp })(App)
