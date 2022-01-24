import { combineReducers } from 'redux'
import * as types from './types'

const init = {
  data: {},
  pageNumber: 0
}

// USER REDUCER
const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.FETCH_USER:
      const { data: { data = {}, page = 0 } = {} } = payload || {}
      state.data = data
      state.pageNumber = page
      return state
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  user: userReducer,
}

export default combineReducers(reducers)
