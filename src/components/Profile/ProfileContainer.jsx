import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
   changeProfileDescription,
   changePhoto,
   getProfileInfo,
   getProfileStatus,
   setUserProfile,
   updateProfileStatus
} from '../../redux/profileReducer'
import { withRouter } from 'react-router'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

   refreshProfile() {
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = this.props.authorizedUserId
         if (!userId) {
            this.props.history.push('/login')
         }
      }
      this.props.getProfileInfo(userId)
      this.props.getProfileStatus(userId)
   }

   componentDidMount() {
      this.refreshProfile()
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.match.params.userId !== this.props.match.params.userId) return this.refreshProfile()
   }

   render() {
      return <Profile { ...this.props } />
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserId: state.auth.id
})

export default compose(connect(mapStateToProps, {
   setUserProfile,
   getProfileInfo,
   getProfileStatus,
   updateProfileStatus,
   changePhoto,
   changeProfileDescription
}), withRouter)(ProfileContainer)
