import { combineReducers } from 'redux'
import * as types from './types'

const init = {
  userAll: {}
}

// USER REDUCER
const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.FETCH_USER:
      state.userAll = payload.data
      return payload.data
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  user: userReducer,
}

export default combineReducers(reducers)
