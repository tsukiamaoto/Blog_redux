import { connect } from 'react-redux'
import editComments from '../components/EditComment'
import {
  fetchSearchPost,
  fetchEditedPost,
  updateTitle,
  updateContent,
  clear
} from '../actions'

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
    updateTitle: (title) => updateTitle(title),
    updateContent: (content) => updateContent(content),
    searchPost: (id) => fetchSearchPost(id),
    handleSubmit: (payload) => fetchEditedPost(payload),
    handleClear: () => clear()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editComments)
