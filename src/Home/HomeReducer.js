const initialState = {
  data: []
};

const HomeReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'RESET':
      return {...initialState};

    case 'INCREMENT':
      return {...state, ...payload};

    case 'DECREMENT':
      return {...state, ...{reduxCounter: reduxCounter - 1}};

    case 'ADD':
     // return {...state, ...{data: [...state.data, ...payload.data]}};

     return [...state,{...payload}]

    default:
      return [...state];
  }
};

export default HomeReducer;























// export default HomeReducer;
// const initialState={
//     counter:0
// }

// const HomeReducer=(state=initialState, action)=>{

//     const{type, payload}=action;
//        switch(type){
//        case "Increment":
//            return{...state, ...payload}
//        case "Decrement":
//            return {...state, ...{counter:state.counter-1}}
//            case "Reset":
//                return {...initialState}
//            default:
//            return{...state}
//         }
// }

// export default HomeReducer;
