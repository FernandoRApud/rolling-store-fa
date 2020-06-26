import {
  REGISTER_USER
} from '../constants/ActionTypes'
import { firebaseApp } from '../firebase'

const Users = firebaseApp.database().ref().child('users');

const createUsers = state => {
  Users.push(state)
}

const initialState = {
  username: "ab",
  password: "1",
  creditCards: [],
  shippingAddress: [],
}

const register = (state = initialState.username, action) =>{
  switch(action.type){
    case REGISTER_USER: 
      return state
    default:
      return state
  }
}

export const username = state => state.username
export const password = state => state.password

const users = (state = initialState, action) => {
  switch (action.type){
    // case REGISTER_USER:
    //   const newUser = {
    //     username: state.username,
    //     password: state.password
    //   }
    //   createUsers(newUser)
    //   return initialState
    // case REGISTER_USER:
    //   console.log('llega')
    //   return initialState
    default: 
      return {
        username: register(state.username, action),
        password: register(state.password, action)
      }
  }
}

export default users