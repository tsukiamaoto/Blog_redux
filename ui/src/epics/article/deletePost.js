import * as types from '../../actions/types'
import history from '../../store/history'
import { ajax } from 'rxjs/observable/dom/ajax'
import {
  requestDeletedPost,
  receiveDeletedPost,
  deleteFailedPost
} from '../../actions'

export function deletePost(action$) {
  const d = new Date()
  return action$
    .ofType(types.FETCH_DELETED_POST)
    .map((action) => {
      action.payload
    })
    .switchMap((payload) => {
      requestDeletedPost()
      const url = `/post/${payload.id}`
      return ajax({
        method: 'delete',
        url,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: payload.id
        })
          .map((json) => {
            json.success ? receiveDeletedPost(json) : deleteFailedPost(json)
          })
          .map(() => history.push(`/`))
          .catch((err) => deleteFailedPost(err))
      })
    })
}
