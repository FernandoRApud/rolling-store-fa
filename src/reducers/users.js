import {
  REGISTER_USER,
  LOGED_USERS
} from '../constants/ActionTypes'
import { firebaseApp } from '../firebase'

const Users = firebaseApp.database().ref().child('users');

const createUsers = state => {
  Users.push(state)
}

const initialState = {
  username: "",
  password: "",
  creditCards: [],
  shippingAddress: [],
}

// const register = (state = initialState.username, action) => {
//   switch(action.type){
//     case REGISTER_USER: 
//       return state
//     default:
//       return state
//   }
// }

const user = (state, action) => {
  return state
}

export const username = (state = initialState.username) => {
  return state
}

export const password = (state = initialState.password) => {
  return state
}

const users = (state = initialState, action) => {
  switch (action.type){
    case REGISTER_USER:
      const newUser = {
        username: action.payload.username,
        password: action.payload.password,
        creditCards: [],
        shippingAddress: [],
      }
      createUsers(newUser)
      return initialState
    // case REGISTER_USER:
    //   console.log('llega')
    //   return initialState
    case LOGED_USERS:
      return {
        ...state
      }
    default: 
      // if(action){
      //   return{
      //     ...state,
      //     []:
      //   }
      // }
      return {
        users: user(state)
      }
  }
}

export default users