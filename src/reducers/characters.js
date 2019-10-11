import { FETCH_SUCCESS, FETCH_PENDING, FETCH_ERROR } from "../constants/actionTypes"

const initialState = {
  pending: false,
  data: [],
  total: 0,
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
          data: action.payload.data,
          total: action.payload.total,
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
export const getTotal = state => state.characters.total
export const getPending = state => state.characters.pending
export const getError = state => state.characters.error