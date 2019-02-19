import history from '../store/history'
import * as types from './types'

export const fetchSearchPost = (id) => {
  return {
    type: types.FETCH_SEARCH_POST,
    payload: id
  }
}

export const requestSearchPost = () => {
  return {
    type: types.REQUESTED_SEARCH_POST
  }
}

export const receiveSearchPost = (json) => {
  return {
    type: types.RECEIVED_SEARCH_POST,
    payload: json.items
  }
}

export const searchFailedPost = (error) => {
  return {
    type: types.SEARCH_FAILED_POST,
    payload: error
  }
}

export const searchAllPost = () => {
  return {
    type: types.FETCH_SEARCH_ALL_POSTS
  }
}

export const requestSearchAllPost = () => {
  return {
    type: types.REQUESTED_SEARCH_ALL_POSTS
  }
}

export const receiveSearchAllPost = (json) => {
  return {
    type: types.RECEIVED_SEARCH_ALL_POSTS,
    payload: json
  }
}

export const searchFailedAllPost = (error) => {
  return {
    type: types.SEARCH_FAILED_ALL_POSTS,
    payload: error
  }
}

export const fetchEditedPost = (payload) => {
  return {
    type: types.FETCH_EDITED_POST,
    payload
  }
}

export const requestedEditedPost = () => {
  return {
    type: types.REQUESTED_EDITED_POST
  }
}

export const receiveEditPost = () => {
  return {
    type: types.RECEIVED_EDITED_POST
  }
}

export const editFailedPost = (error) => {
  return {
    type: types.EDITED_FAILED_POST,
    payload: error
  }
}

export const fetchDeletedPost = (id) => {
  return {
    type: types.FETCH_DELETED_POST,
    payload: id
  }
}

export const requestDeletedPost = () => {
  return {
    type: types.REQUESTED_DELETED_POST
  }
}

export const receiveDeletedPost = () => {
  return {
    type: types.RECEIVED_DELETED_POST
  }
}

export const deleteFailedPost = (error) => {
  return {
    type: types.DELETED_FAILED_POST,
    payload: error
  }
}

export const fetchAddPost = (data) => {
  return {
    type: types.FETCH_ADD_POST,
    payload: data
  }
}
export const requestAddPost = () => {
  return {
    type: types.REQUESTED_ADDED_POST
  }
}

export const receiveAddPost = () => {
  return {
    type: types.RECEIVED_ADDED_POST
  }
}

export const addFailedPost = (error) => {
  return {
    type: types.ADDED_FAILED_POST,
    payload: error
  }
}

export const updateTitle = (title) => {
  return {
    type: types.UPDATE_TITLE,
    payload: title
  }
}

export const updateContent = (content) => {
  return {
    type: types.UPDATE_CONTENT,
    payload: content
  }
}

export const clear = () => {
  return {
    type: types.CLEAR_ARTICLE
  }
}
