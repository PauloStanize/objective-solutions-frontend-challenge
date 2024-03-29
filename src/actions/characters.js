import Qs from 'qs'
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

  const { pagination, filters } = getState()
  const queryString = Qs.stringify(query || { 
    page: pagination, 
    filter: {
      ...filters.name && { name: filters.name }
    }    
  })

  fetch(`https://kitsu.io/api/edge/characters?${queryString}`)
    .then(res => res.json())
    .then(res => {
        if(res.error) {
            throw(res.error)
        }

        dispatch(fetchSuccess({ data: res.data, total: res.meta.count}))
        return { data: res.data, total: res.meta.count}
    })
    .catch(error => {
        dispatch(fetchError(error))
    })
}