import history from './history';

export const searchPost = id => {  
    return dispatch => {
        dispatch(requestPost());
        return fetch('/post/queryOne' , {
            method: 'POST' , 
            headers: {
                'Content-Type' : 'application/json'
            } , 
            body : JSON.stringify({
                id: id ,
            }) ,
        }).then(response => {
            return response.json();
        }).then(json => {
            dispatch(receivePost(json));
        }).catch(error => {
            dispatch(requestFailed(error));
        })
    }
}

const requestPost = () =>{
    console.log('searching');
    return {
        type: 'SEARCH_REQUEST'
    }
}

const receivePost = (json) => {
    console.log('searching success');
    return {
        type: 'SEARCH_SUCCESS' ,
        payload: json.items
    }
}

const requestFailed = (error) => {
    return {
        type: 'SEARCH_FAILURE' ,
        payload: error
    }
}

export const editPost = payload => {
    return dispatch => {
        let d = new Date();
        dispatch(sendingEditedPost());
        return fetch('/post/update' , {
            method: 'POST' ,
            headers: {
                'Content-Type' : 'application/json'
            } , 
            body : JSON.stringify({
                ...payload ,
                id: payload._id ,
                update : d.getFullYear()+"/"+(d.getMonth()+1)+"/" + d.getDate() + "\t" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() , 
            }) ,
        }).then(response => {
            return response.json();
        }).then(json => {
            if(json.success)
                dispatch(editSuccess());
        }).then(() => {
            history.push(`/article/${payload._id}`);
        }).catch(error => {
            dispatch(editFailed(error))
        })
    }
}

export const sendingEditedPost = () => {
    return {
        type: 'SENDING_EDITED_POST'
    }
}

const editSuccess = () => {
    return {
        type: 'SENDING_EDITED_SUCCESS'
    }
}

const editFailed = (error) => {
    return {
        type: 'SENDING_EDITED_FAILURE' , 
        payload: error
    }
}

export const deletePost = id => {
    return dispatch => {
        dispatch(sendingDeletedPost());
        return fetch('/post/delete' , {
            method : 'POST' , 
            headers : {
                'Content-Type' : 'application/json' ,
            } ,
            body : JSON.stringify({
                id: id ,
            }) ,
        }).then(response =>{
            return response.json();
        }).then(json => {
            if(json.success)
                dispatch(deleteSuccess);
        }).then(() => {
            history.push("/");
        }).catch(error =>{
            dispatch(deleteFailed(error));
        })
    }
}

const sendingDeletedPost = () => {
    return {
        type: 'SENDING_DELETED_POST'
    }
}

const  deleteSuccess = () => {
    return {
        type: 'SENDING_DELETED_SUCCESS'
    }
}

const deleteFailed = error => {
    return {
        type: 'SENDING_DELETED_FAILED',
        payload: error
    }
}

export const addNewPost = data => {
    let d = new Date();
    return dispatch => {
        dispatch(sendingPost());
        return fetch('/post/create' , {
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json' , 
            },
            body : JSON.stringify({
                author: data.author ,
                title: data.title,
                update: d.getFullYear()+"/"+(d.getMonth()+1)+"/" + d.getDate() + "\t" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() ,
                content: data.content,
            }),
        }).then( response => {
            return response.json();
        }).then(json => {
            if(json.success)
                dispatch(sendSuccess);
        }).then( () => {
            history.push("/");
        }).catch( error => {
            dispatch(sendFailure(error));
        })
    }
}
const sendingPost = () => {
    console.log('sending');
    return {
        type: 'SENDING' ,
    }
}

const sendSuccess = () => {
    console.log('success');
    return {
        type: 'SEND_SUCCESS' ,
    }
}

const sendFailure = (error) => {
    console.log('failure');
    return {
        type: 'SEND_FAILURE' ,
        payload: error
    }
}

