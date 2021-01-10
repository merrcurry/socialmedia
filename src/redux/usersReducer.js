import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
   users: [],
   totalUsers: 0,
   pageSize: 10,
   currentPage: 1,
   isFetching: false,
   followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
         }
      case SET_USERS:
         return {
            ...state,
            users: [...action.users]
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         }
      case SET_TOTAL_USERS:
         return {
            ...state,
            totalUsers: action.totalUsers
         }
      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching
         }
      case TOGGLE_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId)
         }
      default:
         return state;
   }
}

export const followSuccess = (userId) => {
   return {
      type: FOLLOW,
      userId
   }
}

export const unfollowSuccess = (userId) => {
   return {
      type: UNFOLLOW,
      userId
   }
}

export const setUsers = (users) => {
   return {
      type: SET_USERS,
      users
   }
}

export const setCurrentPage = (currentPage) => {
   return {
      type: SET_CURRENT_PAGE,
      currentPage
   }
}

export const setTotalUsers = (totalUsers) => {
   return {
      type: SET_TOTAL_USERS,
      totalUsers
   }
}

export const toggleIsFetching = (isFetching) => {
   return {
      type: TOGGLE_IS_FETCHING,
      isFetching
   }
}

export const toggleFollowingProgress = (isFetching, userId) => {
   return {
      type: TOGGLE_FOLLOWING_PROGRESS,
      isFetching,
      userId
   }
}

export const requestUsers = (currentPage, pageSize) => {
   return async (dispatch) => {
      dispatch(toggleIsFetching(true))
      dispatch(setCurrentPage(currentPage))

      let response = await usersAPI.getUsers(currentPage, pageSize)

      dispatch(toggleIsFetching(false))
      dispatch(setUsers(response.items))
      dispatch(setTotalUsers(response.totalCount))
   }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
   dispatch(toggleFollowingProgress(true, userId))

   let response = await apiMethod(userId)

   if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId))
   }
   dispatch(toggleFollowingProgress(false, userId))
}

export const unfollow = (userId) => {
   return (dispatch) => {
      followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
   }
}

export const follow = (userId) => {
   return (dispatch) => {
      followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
   }
}

export default usersReducer;
