import * as types from './types'
import axios from 'axios'

// api
const fetchUserRequest = () => axios.get('https://reqres.in/api/users?page=2')

// INITIALIZES CLOCK ON CLIENT
export const fetchUserAction = () => async (dispatch) => dispatch({ type: types.FETCH_USER, payload: await fetchUserRequest() })