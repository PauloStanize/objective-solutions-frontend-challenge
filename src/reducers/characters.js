import { FETCH_SUCCESS, FETCH_PENDING, FETCH_ERROR } from "../constants/actionTypes"

const initialState = {
  pending: false,
  data: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PENDING: 
      return {
          ...state,
          pending: true
      }
    case FETCH_SUCCESS:
      return {
          ...state,
          pending: false,
          data: action.payload
      }
    case FETCH_ERROR:
      return {
          ...state,
          pending: false,
          error: action.error
      }
    default:
      return state
  }
}

export const getData = state => state.characters.data
export const getPending = state => state.characters.pending
export const getError = state => state.characters.error