
export const fetchPosts = ()=>{
    //console.log(123);
    return dispatch => {   
        dispatch(requestPosts());
        return fetch('/post/queryAll' , {
            method : 'GET' ,
            headers : {
                'Content-type' : 'application/json' , 
            },
        }).then(response => response.json()
        ).then(json => {
            console.log(json);
            dispatch(receivePosts(json));
        }).catch(error =>{
            dispatch(requestFailed(error))
        });

    }
}

export const requestPosts = () =>{
    console.log('loading');
    return {
        type: 'LOADING' 
    }
}

export const receivePosts = json => {
    console.log('success');
    return {
        type: 'SUCCESS' ,
        payload: json ,
    }
}

export const requestFailed = error =>{
    console.log('failure');
    return {
        type: 'FAILURE' ,
        payload: error ,
    }
}


