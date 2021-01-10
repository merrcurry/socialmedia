import { profileAPI } from '../api/api'

const ADD_PUBLICATION = 'ADD_PUBLICATION'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SET_USER_PHOTO = 'SET_USER_PHOTO'

let initialState = {
   publicationsData: [
      { id: 1, publicationText: 'Hello World', likesCount: 13 }
   ],
   profile: null,
   status: ''
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PUBLICATION:
         let newPublication = {
            id: 5,
            publicationText: action.publication,
            likesCount: 0
         }
         return {
            ...state,
            publicationsData: [...state.publicationsData, newPublication]
         }
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         }
      case SET_USER_STATUS:
         return {
            ...state,
            status: action.status
         }
      case SET_USER_PHOTO:
         return {
            ...state,
            profile: { ...state.profile, photos: action.filePhoto }
         }
      default:
         return state;
   }
}

export const addPublicationActionCreator = (publication) => {
   return {
      type: ADD_PUBLICATION,
      publication
   }
}

export const setUserProfile = (profile) => {
   return {
      type: SET_USER_PROFILE,
      profile
   }
}

export const setUserStatus = (status) => {
   return {
      type: SET_USER_STATUS,
      status
   }
}

export const changePhotoSuccess = (filePhoto) => {
   return {
      type: SET_USER_PHOTO,
      filePhoto
   }
}

export const getProfileInfo = (userId) => async (dispatch) => {
   let response = await profileAPI.getProfileInfo(userId)

   dispatch(setUserProfile(response.data))
}

export const getProfileStatus = (userId) => async (dispatch) => {
   let response = await profileAPI.getProfileStatus(userId)

   dispatch(setUserStatus(response.data))
}

export const updateProfileStatus = (status) => async (dispatch) => {
   let response = await profileAPI.updateProfileStatus(status)

   if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status))
   }
}

export const changePhoto = (filePhoto) => async (dispatch) => {
   let response = await profileAPI.updateProfilePhoto(filePhoto)

   if (response.data.resultCode === 0) {
      dispatch(changePhotoSuccess(response.data.data.photos))
   }
}

export const changeProfileDescription = (profile) => async (dispatch) => {
   let response = await profileAPI.updateProfileDescription(profile)
   if (response.data.resultCode === 0) {
      dispatch(setUserProfile(profile))
   }
}

export default profileReducer;
