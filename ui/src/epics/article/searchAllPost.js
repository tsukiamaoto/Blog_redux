import * as types from '../../actions/types'
import { ajax } from 'rxjs/observable/dom/ajax'
import {
  requestSearchAllPost,
  receiveSearchAllPost,
  searchFailedAllPost
} from '../../actions'

export function searchAllPost(action$) {
  return action$.ofType(types.FETCH_SEARCH_POST).switchMap(() => {
    requestSearchAllPost()
    const url = `/post/`
    return ajax({
      method: 'get',
      url,
      headers: { 'Content-Type': 'application/json' }
    })
      .map((res) => {
        return res.json()
      })
      .map((json) => receiveSearchAllPost(json))
      .catch((err) => searchFailedAllPost(err))
  })
}
