import * as types from '../../actions/types'
import moment from 'moment'
import history from '../../store/history'
import { ajax } from 'rxjs/observable/dom/ajax'
import {
  requestAddPost,
  receiveAddPost,
  addFailedPost
} from '../../actions'

export function addPost(action$) {  
  return action$
    .ofType(types.FETCH_ADD_POST)
    .map((action) => {
      action.payload
    })
    .switchMap((payload) => {
      requestAddPost()
      const url = `/post/${payload.id}`
      return ajax({
        method: 'post',
        url,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: payload.id,
          title: payload.title,
          content: payload.content,
          author: payload.author,          
          date:`${moment.format('YYYY-MM-DD')}\t${moment.format('HH:mm:ss')}`
        })
      })
        .map((json) => {
          json.success ? receiveAddPost(json) : addFailedPost(json)
        })
        .map(() => history.push(`/`))
        .catch((err) => addFailedPost(err))
    })
}
