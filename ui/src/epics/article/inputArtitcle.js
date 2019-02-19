import * as types from '../../actions/types'
import 'rxjs'
import { combineEpics } from 'redux-observable'
function inputTitle(action$) {
  return action$
    .ofType(types.FETCH_UPDATE_TITLE)
    .map((action) => {
      action.payload
    })
    .switchMap((payload) => {
      return {
        type: types.UPDATE_TITLE,
        payload
      }
    })
}

function inputCotent(action$) {
  return action$.ofType(types.FETCH_UPDATE_CONTENT)
  .map((action) => {
      action.payload
  })
  .switchMap((payload) => {
      return {
          type: types.UPDATE_CONTENT,
          payload
      }
  })
}

export default combineEpics({
    inputTitle ,
    inputCotent
})
