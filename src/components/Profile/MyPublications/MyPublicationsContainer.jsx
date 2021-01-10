import { addPublicationActionCreator } from '../../../redux/profileReducer'
import MyPublications from './MyPublications'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
   return {
      publicationsData: state.profilePage.publicationsData
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPublication: (publication) => {
         dispatch(addPublicationActionCreator(publication))
      }
   }
}

const MyPublicationsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPublications)

export default MyPublicationsContainer;
