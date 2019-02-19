import 'rxjs'
import { combineEpics } from 'redux-observable'
import { addPost , deletePost , editPost , searchAllPost , searchPost }from '../epics/article/addPost'
import article from '../epics/article/inputArtitcle'

const rootEpic = ()=> combineEpics({
  addPost ,
  editPost ,
  searchAllPost ,
  searchPost ,
  deletePost ,
  article
})

export default rootEpic