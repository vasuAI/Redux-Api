
import axios from 'axios';

const getPostList=()=> {
   return (dispatch, getState)=>{
       const {start} = getState().PostListReducer
    axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`).then(res => {
        dispatch({type: 'PostList', payload: res.data}).catch(err =>
          console.log(err),
        );
      });
   }
}
export default getPostList