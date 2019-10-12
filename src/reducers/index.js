import { combineReducers } from 'redux'
import characters from './characters'
import pagination from './pagination'
import filters from './filters'

export default combineReducers({
  characters,
  pagination,
  filters,
})