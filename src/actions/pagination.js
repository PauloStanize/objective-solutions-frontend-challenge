import { SET_PAGINATION } from "../constants/actionTypes"

export const setPagination = pagination => ({
  type: SET_PAGINATION,
  pagination,
})