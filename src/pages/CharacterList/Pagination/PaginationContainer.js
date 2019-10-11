import { connect } from 'react-redux'
import Pagination from './Pagination'
import { fetch } from '../../../actions/characters'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  fetch: query => dispatch(fetch(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)