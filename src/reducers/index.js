import { combineReducers } from 'redux'
import characters from './characters'
import details from './details'
import pagination from './pagination'
import filters from './filters'

export default combineReducers({
  characters,
  details,
  pagination,
  filters,
})