import * as types from '../../actions/types'
import history from '../../store/history'
import moment from 'moment'
import { ajax } from 'rxjs/observable/dom/ajax'
import {
  requestedEditedPost,
  receiveEditPost,
  editFailedPost
} from '../../actions'

export function searchPost(action$) {  
  return action$
    .ofType(types.FETCH_SEARCH_POST)
    .map((action) => {
      action.payload
    })
    .switchMap((payload) => {
      requestedEditedPost()
      const url = `/post/${payload.id}`
      return ajax({
        method: 'put',
        url,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          id: payload.id,
          date:`${moment.format('YYYY-MM-DD')}\t${moment.format('HH:mm:ss')}`
        })
      })
        .map((json) => {
          json.success ? receiveEditPost(json) : editFailedPost(json)
        })
        .map(() => history.push(`/article/${payload.id}`))
        .catch((err) => editFailedPost(err))
    })
}
