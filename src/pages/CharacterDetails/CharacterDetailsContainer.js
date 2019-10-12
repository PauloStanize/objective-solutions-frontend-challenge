import { connect } from 'react-redux'
import CharacterDetails from './CharacterDetails'
import { fetchData } from '../../actions/details'
import { getData, getPending } from '../../reducers/details'

const mapStateToProps = state => ({
  character: getData(state),
  isPending: getPending(state),
})

const mapDispatchToProps = dispatch => ({
  fetch: query => dispatch(fetchData(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetails)