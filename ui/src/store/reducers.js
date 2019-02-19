import { combineReducers } from 'redux'
import { AddPosts as Add , EditPosts as Edit} from '../reducers/comment_reducer'
import Home from '../reducers/home_reducer'

const Comment = combineReducers({
  Add,
  Edit
})

export default combineReducers({
  CommentList: Home,
  Comment
})
