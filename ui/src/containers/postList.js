import { connect } from 'react-redux'
import Home from '../components/Home'
import { searchAllPost } from '../actions'

const mapStateToProps = (state) => {
  let payload = state.CommentList
  return {
    loading: payload.loading,
    error: payload.error,
    payload: payload.payload
  }
}

const mapDispatchToProps = () => {
  return {
    fetchposts: () => searchAllPost()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
