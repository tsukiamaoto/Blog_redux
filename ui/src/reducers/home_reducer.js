
const initialState = {
    loading: true ,
    error: false ,
    payload: [] ,
};

const posts = ( state = initialState , action) => {
    //console.log(action.payload);
    switch(action.type){
        case 'LOADING':
            return Object.assign({} , state ,
                {
                    loading: true ,
                });
        case 'FAILED':
            return Object.assign({} , state ,
                {
                    loading: false ,
                    error: true ,
                });
        case 'SUCCESS':
            return Object.assign({} , state ,                
                {
                    loading: false ,
                    payload: action.payload ,
                });
        default:
            return state;
    }
};

export default posts;

