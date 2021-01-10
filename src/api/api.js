import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': 'dfff1a06-08c1-4e2e-9778-be1153'
   }
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${ currentPage }&count=${ pageSize }`)
         .then(response => response.data)
   },
   unfollow(userId) {
      return instance.delete(`follow/${ userId }`)
   },
   follow(userId) {
      return instance.post(`follow/${ userId }`)
   }
}

export const authAPI = {
   auth() {
      return instance.get(`auth/me`)
   },
   login(email, password, rememberMe = false) {
      return instance.post(`auth/login`, { email, password, rememberMe })
   },
   logout() {
      return instance.delete(`auth/login`)
   }
}

export const profileAPI = {
   getProfileInfo(userId) {
      return instance.get(`profile/${ userId }`)
   },
   getProfileStatus(userId) {
      return instance.get(`profile/status/${ userId }`)
   },
   updateProfileStatus(status) {
      return instance.put(`profile/status`, { status })
   },
   updateProfilePhoto(filePhoto) {
      const formData = new FormData()
      formData.append('image', filePhoto)
      return instance.put(`profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });
   },
   updateProfileDescription(profile) {
      return instance.put(`profile`, profile )
   }
}
