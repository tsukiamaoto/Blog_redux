import { connect } from 'react-redux'
import editComments from '../components/EditComment'
import { searchPost, editPost } from '../actions/comments'

const mapStateToProps = (state) => {
  let payload = state.Comment.Edit
  return {
    isFetched: payload.isFetched,
    error: payload.error,
    data: payload.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle: (title) =>
      dispatch({
        type: 'UPDATE_TITLE',
        payload: title
      }),
    updateContent: (content) =>
      dispatch({
        type: 'UPDATE_CONTENT',
        payload: content
      }),
    searchPost: (id) => {
      dispatch(searchPost(id))
    },
    handleSubmit: (payload) => {
      // console.log(payload);
      dispatch(editPost(payload))
    },
    handleClear: () =>
      dispatch({
        type: 'CLEAR'
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editComments)
