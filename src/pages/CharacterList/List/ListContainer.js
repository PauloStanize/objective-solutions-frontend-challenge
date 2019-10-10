import { connect } from 'react-redux'
import List from './List'
import { fetch } from '../../../actions/characters'

const mapStateToProps = (state) => {
  console.log('state', state)
  return ({
    characters: state.characters
  })
}

const mapDispatchToProps = (dispatch) => ({
  fetch: value => dispatch(fetch(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)