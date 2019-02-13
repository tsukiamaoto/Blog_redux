import { connect } from 'react-redux';
import addComments from '../components/addComment';
import {addNewPost} from '../actions/comments';

const  mapStateToProps = state => {
    let payload = state.comment.addPosts;
    return{
        isFetched: payload.isFetched ,
        error: payload.error ,
        data: payload.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTitle: title => dispatch({
            type: 'UPDATE_TITLE' ,
            payload: title ,
        }) ,
        updateContent: content => dispatch({
            type: 'UPDATE_CONTENT' ,
            payload: content ,
        }) ,
        handleSubmit: payload => {
            dispatch(addNewPost(payload));
        }
    };
}

export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(addComments);