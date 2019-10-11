import { connect } from 'react-redux'
import List from './List'
import { fetchData } from '../../../actions/characters'
import { getData, getTotal, getPending, getError } from '../../../reducers/characters'

const mapStateToProps = state => ({
  characters: getData(state),
  isPending: getPending(state),
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)