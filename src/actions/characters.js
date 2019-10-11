import { FETCH_SUCCESS, FETCH_PENDING, FETCH_ERROR, SET_QUERY } from "../constants/actionTypes"
import Mock from '../mock'

export const setQuery = query => ({
  type: SET_QUERY,
  query,
})

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

  console.log('fetching query', query)
  console.log('getState', getState())

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
    dispatch(fetchSuccess({ data: Mock.data, total: Mock.meta.count}))
    return { data: Mock.data, total: Mock.meta.count}
  }, 1000);
}