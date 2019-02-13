import { combineReducers } from 'redux';
import {addPosts , editPosts , searchPosts } from './comment_reducer';
import home_reducer from './home_reducer';

const comment = combineReducers({
    addPosts ,
    editPosts
})

export default combineReducers({
    commentList : home_reducer ,
    comment,
});
