import { connect } from 'react-redux'
import addComments from '../components/AddComment'
import { fetchAddPost, updateTitle, updateContent } from '../actions'

const mapStateToProps = (state) => {
  let payload = state.Comment.Add
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
    handleSubmit: (payload) => fetchAddPost(payload)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addComments)
