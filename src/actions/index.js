import shop from '../api/shop'
import { firebaseApp } from "../firebase";
import * as types from '../constants/ActionTypes'
import quantityById from '../reducers/cart';
import register from '../reducers/users';

const Products = firebaseApp.database().ref().child('products');
const Users = firebaseApp.database().ref().child('users');

export const registerUser = (username, password) => dispatch => {
  dispatch({
    type: types.REGISTER_USER,
    // register
    payload: {
      username,
      password
    }
  })
}

export const logUser = () => dispatch => {
  Users.on('value', snapshot =>{
    dispatch(registerUser(snapshot.val()))
  })
}

const fetchProducts = products => {
  return {
    type: types.FETCH_PRODUCTS,
    products
  }
}

export const getFetchedProducts = () => dispatch => {
  // console.log(register)
  Products.on('value', snapshot => {
    dispatch(fetchProducts(snapshot.val()))
  })
}

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  // console.log('Aquí FER', quantityById(1, types.ADD_TO_CART))
    dispatch(addToCartUnsafe(productId))
  
}

export const checkoutCart = (newShippingAddress, newCreditCard, games) => dispatch =>  {
  dispatch({
    type: types.CHECKOUT_CART,
    payload: {
      newShippingAddress,
      newCreditCard,
      games
    }
  })
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}