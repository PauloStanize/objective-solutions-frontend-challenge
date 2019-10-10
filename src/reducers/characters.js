import { FETCH } from "../constants/actionTypes"
import Mock from '../mock'

const initialState = [
  ...Mock.data
]

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
      }
    default:
      return state
  }
}
