const initialState = {
    data:[],
    start:0
}

const PostListReducer = (state=initialState, action)=>{
    const {type, payload, start} = action
    console.log(payload)
    switch(type){
        case 'PostList':
            return({...state, data:[...state.data,...payload]})
        case 'Paginate':
            return({...state, start:payload})
        default:
            return({...state})
    }
}

export default PostListReducer