import { connect } from 'react-redux'
import List from './List'
import { fetchData } from '../../../actions/characters'
import { getData, getPending, getError } from '../../../reducers/characters'

const mapStateToProps = state => ({
  error: getError(state),
  characters: getData(state),
  isPending: getPending(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetch: query => dispatch(fetchData(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)