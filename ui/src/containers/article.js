import { connect } from 'react-redux'
import article from '../components/Article'
import { fetchDeletedPost, fetchSearchPost } from '../actions'

const mapStateToProps = (state) => {
  let payload = state.Comment.Edit
  return {
    isFetched: payload.isFetched,
    error: payload.error,
    data: payload.data
  }
}

const mapDispatchToProps = () => {
  return {
    searchPost: (id) => fetchSearchPost(id),
    handleDelete: (id) => fetchDeletedPost(id)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(article)
