import { FETCH } from "../constants/actionTypes"

export const fetch = value => ({
  type: FETCH,
  value,
})