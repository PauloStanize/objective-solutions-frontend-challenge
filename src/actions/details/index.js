import Qs from 'qs'
import { FETCH_SUCCESS, FETCH_PENDING, FETCH_ERROR } from "./constants"
import Mock from '../../mock'

export const fetchPending = value => ({
  type: FETCH_PENDING,
})

export const fetchSuccess = payload => ({
  type: FETCH_SUCCESS,
  payload,
})

export const fetchError = error => ({
  type: FETCH_ERROR,
  error,
})

export const fetchData = query => (dispatch, getState) => {
  dispatch(fetchPending())

  fetch(`https://kitsu.io/api/edge/characters/${query.id}`)
    .then(res => res.json())
    .then(res => {
        if(res.error) {
            throw(res.error)
        }

        dispatch(fetchSuccess({ data: res.data }))
        return { data: res.data }
    })
    .catch(error => {
        dispatch(fetchError(error))
    })

  // setTimeout(() => {
  //   dispatch(fetchSuccess({ data: Mock.data[0] }))
  //   return { data: Mock.data[0] }
  // }, 1000);
}