import { connect } from 'react-redux';
import article from '../components/article';
import {deletePost , searchPost} from '../actions/comments';

const  mapStateToProps = state => {
    let payload = state.comment.editPosts;
    return{
        isFetched: payload.isFetched ,
        error: payload.error ,
        data: payload.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchPost: id => {
            dispatch(searchPost(id));
        } ,
        handleDelete: id => {
            dispatch(deletePost(id));
        }
    };
}

export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(article);