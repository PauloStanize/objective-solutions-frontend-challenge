import { connect } from 'react-redux'
import CharacterList from './CharacterList'
import { fetchData } from '../../actions/characters'
import { getCurrentPagination } from '../../reducers/pagination'

const mapStateToProps = state => ({
  pagination: getCurrentPagination(state),
})

const mapDispatchToProps = dispatch => ({
  fetch: query => dispatch(fetchData(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList)