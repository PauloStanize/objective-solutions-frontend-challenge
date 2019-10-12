import { connect } from 'react-redux'
import SearchInput from './SearchInput'
import { fetchFilter } from '../../../actions/filters'
import { getCurrentFilters } from '../../../reducers/filters'

const mapStateToProps = state => ({
  currentFilters: getCurrentFilters(state),
})

const mapDispatchToProps = (dispatch) => ({
  setFilter: filter => dispatch(fetchFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput)