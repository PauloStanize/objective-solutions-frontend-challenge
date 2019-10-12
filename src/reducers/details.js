import { FETCH_SUCCESS, FETCH_PENDING, FETCH_ERROR } from "../actions/details/constants"

const initialState = {
  pending: false,
  data: {},
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
          data: action.payload.data,
          pending: false,
      }
    case FETCH_ERROR:
      return {
          ...state,
          error: action.error,
          pending: false,
      }
    default:
      return state
  }
}

export const getData = state => state.details.data
export const getPending = state => state.details.pending
export const getError = state => state.details.error