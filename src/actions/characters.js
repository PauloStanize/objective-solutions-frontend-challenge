import { FETCH_SUCCESS, FETCH_PENDING, FETCH_ERROR } from "../constants/actionTypes"
import Mock from '../mock'

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

export const fetchData = query => dispatch => {
  dispatch(fetchPending())

  console.log('fetching query', query)

  // fetch('https://kitsu.io/api/edge/characters')
  //   .then(res => res.json())
  //   .then(res => {
  //       if(res.error) {
  //           throw(res.error)
  //       }

  //       console.log('res', res)
  //       dispatch(fetchSuccess(res.data))
  //       return res.data
  //   })
  //   .catch(error => {
  //       dispatch(fetchError(error))
  //   })

  setTimeout(() => {
    dispatch(fetchSuccess(Mock.data))
    return Mock.data
  }, 1000);
}