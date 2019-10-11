import { connect } from 'react-redux'
import Pagination from './Pagination'
import { setPagination } from '../../../actions/pagination'
import { getTotal } from '../../../reducers/characters'
import { getCurrentPagination } from '../../../reducers/pagination'

const mapStateToProps = state => ({
  total: getTotal(state),
  currentPagination: getCurrentPagination(state),
})

const mapDispatchToProps = (dispatch) => ({
  setPagination: pagination => dispatch(setPagination(pagination))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)