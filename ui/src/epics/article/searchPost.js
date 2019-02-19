import * as types from '../../actions/types'
import { ajax } from 'rxjs/observable/dom/ajax'
import {
  requestSearchPost,
  receiveSearchPost,
  searchFailedPost
} from '../../actions'

export function searchPost(action$) {
  return action$
    .ofType(types.FETCH_SEARCH_POST)
    .map((action) => {
      action.payload
    })
    .switchMap((payload) => {
      requestSearchPost()
      const url = `/post/${payload.id}`
      return ajax({
        method: 'get',
        url,
        headers: { 'Content-Type': 'application/json' }
      })
        .map((res) => {
          return res.json()
        })
        .map((json) => receiveSearchPost(json))
        .catch((err) => searchFailedPost(err))
    })
}
