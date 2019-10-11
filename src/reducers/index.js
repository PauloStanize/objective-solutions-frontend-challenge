import { combineReducers } from 'redux'
import characters from './characters'
import pagination from './pagination'

export default combineReducers({
  characters,
  pagination,
})