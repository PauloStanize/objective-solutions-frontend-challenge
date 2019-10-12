import { SET_FILTER } from "../constants/actionTypes"
import { setPagination } from './pagination'

export const setFilter = filter => ({
  type: SET_FILTER,
  filter,
})

export const fetchFilter = filter => (dispatch, getState) => {
  dispatch(setPagination({ offset: 0 }))
  dispatch(setFilter(filter))
}