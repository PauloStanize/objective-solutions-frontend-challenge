import { connect } from 'react-redux'
import CharacterList from './CharacterList'
import { fetchData } from '../../actions/characters'
import { getCurrentPagination } from '../../reducers/pagination'
import { getCurrentFilters } from '../../reducers/filters'

const mapStateToProps = state => ({
  pagination: getCurrentPagination(state),
  filters: getCurrentFilters(state),
})

const mapDispatchToProps = dispatch => ({
  fetch: query => dispatch(fetchData(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList)