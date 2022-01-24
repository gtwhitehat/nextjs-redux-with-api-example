import { combineReducers } from 'redux'
import * as types from './types'

// USER REDUCER
const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.FETCH_USER:
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
