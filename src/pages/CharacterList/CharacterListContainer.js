import { connect } from 'react-redux'
import CharacterList from './CharacterList'
import { fetchData } from '../../actions/characters'
import { getData, getPending, getError } from '../../reducers/characters'

const mapStateToProps = state => ({
  error: getError(state),
  characters: getData(state),
  pending: getPending(state),
})

const mapDispatchToProps = dispatch => ({
  fetch: query => dispatch(fetchData(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList)