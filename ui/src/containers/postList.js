import { connect } from 'react-redux';
import Home from '../components/home';
import {fetchPosts} from '../actions';

const  mapStateToProps = state => {
    
    let payload = state.commentList;
    return{
        loading: payload.loading ,
        error: payload.error ,
        payload: payload.payload,
    };
}

const mapDispatchToProps = dispatch => {
    return { fetchposts: () => {
        dispatch(fetchPosts());
        } 
    }
}

export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(Home);

