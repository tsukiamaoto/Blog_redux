import * as types from '../actions/types'

const initialState = {
  isFetched: false,
  error: '',
  data: {
    id: '',
    title: '',
    author: 'anyone',
    content: '',
    date: ''
  }
}

export const AddPosts = (state = initialState, action) => {  
  switch (action.type) {
    case 'UPDATE_TITLE':
      return Object.assign({}, state, {
        data: {
          ...state.data,
          title: action.payload
        }
      })
    case 'UPDATE_CONTENT':
      return Object.assign({}, state, {
        data: {
          ...state.data,
          content: action.payload
        }
      })
    case types.REQUESTED_ADDED_POST:
      return Object.assign({}, state, {
        isFetched: false
      })
    case types.RECEIVED_ADDED_POST:
      return Object.assign({}, state, {
        isFetched: true
      })
    case types.ADDED_FAILED_POST:
      return Object.assign({}, state, {
        error: action.payload.error
      })
    default:
      return state
  }
}

export const EditPosts = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return Object.assign({}, state, {
        data: {
          ...state.data,
          title: action.payload
        }
      })
    case 'UPDATE_CONTENT':
      return Object.assign({}, state, {
        data: {
          ...state.data,
          content: action.payload
        }
      })
    case 'CLEAR':
      return Object.assign({}, state, {
        data: {
          ...state.data,
          title: '',
          content: ''
        }
      })
    case types.REQUESTED_EDITED_POST:
      return Object.assign({}, state, {
        isFetched: false
      })
    case types.RECEIVED_EDITED_POST:
      return Object.assign({}, state, {
        isFetched: true
      })
    case types.EDITED_FAILED_POST:
      return Object.assign({}, state, {
        error: action.payload
      })
    case types.REQUESTED_SEARCH_POST:
      return Object.assign({}, state, {
        isFetched: false
      })
    case types.RECEIVED_SEARCH_POST:
      return Object.assign({}, state, {
        isFetched: true,
        data: action.payload
      })
    case types.SEARCH_FAILED_POST:
      return Object.assign({}, state, {
        error: action.payload
      })
    default:
      return state
  }
}

export const DeletePosts = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUESTED_DELETED_POST:
      return Object.assign({}, state, {
        isFetched: false
      })
    case types.RECEIVED_DELETED_POST:
      return Object.assign({}, state, {
        isFetched: true
      })
    case types.DELETED_FAILED_POST:
      return Object.assign({}, state, {
        error: action.payload
      })
    default:
      return state
  }
}
