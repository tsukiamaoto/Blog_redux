const initialState = {
    isFetched: false ,
    error: '' ,
    data:{
        id: '' ,
        title: '' ,
        author: 'anyone' ,
        content: '' ,
        update: '' ,
    }
};

export const addPosts = (state = initialState , action) => {
    //console.log(state);
    switch(action.type){
        case 'UPDATE_TITLE':
            return Object.assign({} , state ,
                {
                    data:{
                        ...state.data ,
                        title: action.payload,
                    }
                })
        case 'UPDATE_CONTENT':
            return Object.assign({} , state ,
                {
                    data:{
                        ...state.data ,
                        content: action.payload,
                    }
                })
        case 'SENDING':
            return Object.assign({} , state ,
                {
                    isFetched: false ,
                })
        case 'SEND_SUCCESS':
            return Object.assign({} , state ,
                {
                    isFetched: true ,
                })
        case 'SEND_FAILURE':
            return Object.assign({} , state ,
                {
                    error: action.payload.error ,
                })
        default:
            return state;
    }
}

export const editPosts = (state = initialState , action) => {
    switch(action.type){
        case 'UPDATE_TITLE':
            console.log(action.payload);
            return Object.assign({} , state ,
            {
                data:{
                    ...state.data ,
                    title: action.payload,
                }
            })
        case 'UPDATE_CONTENT':
            return Object.assign({} , state ,
            {
                data:{
                    ...state.data ,
                    content: action.payload,
                }
            })
        case 'CLEAR':
            return Object.assign({} , state ,
            {
                data:{
                    ...state.data ,
                    title: '',
                    content: ''
                }
            })
        case 'SENDING_EDITED_POST':
            return Object.assign({} , state ,{
                isFetched: false,
            })
        case 'SENDING_EDITED_SUCCESS':
            return Object.assign({} , state ,{
                isFetched: true 
            })
        case 'SENDING_EDITED_FAILURE':
            return Object.assign({} , state , {
                error: action.payload
            })
        case 'SEARCH_REQUEST':
            return Object.assign({} , state ,{
                isFetched: false
            })
        case 'SEARCH_SUCCESS':
        console.log(action.payload)
            return Object.assign({} , state , {
                isFetched: true,
                data: action.payload    
            })
        case 'SEARCH_FAILURE':
            return Object.assign({} , state , {
                error: action.payload
            })
        default:
            return state;
    }
}

export const deletePosts = (state = initialState , action) => {
    switch(action.type){
        case 'DELETE_REQUEST':
            return Object.assign({} , state , {
                isFetched: false
            })
        case 'DELETE_SUCCESS':
            return Object.assign({} , state , {
                isFetched: true ,
            })
        case 'DELETE_FAILURE':
            return Object.assign({} , state , {
                error: action.payload
            } )
        default:
            return state;

    }
}


