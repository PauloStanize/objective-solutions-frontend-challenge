import { connect } from 'react-redux'
import List from './List'

const mapStateToProps = (state) => ({
  characters: state.characters.data
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)