const initialState = {
    data:[],
    pageNo:1
}

const UserDetailReducer = (state = initialState, action)=>{
    const {type, payload, pages} = action
    switch(type){
        case 'DETAILS':
            return({...state, data:payload})
        case 'INCRE':
            return({...state, pageNo:pages+1})
        default :
            return({...state})
    }

}
export default UserDetailReducer