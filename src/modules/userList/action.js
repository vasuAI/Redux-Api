import axios from 'axios';

const getUserList = () => {
  return (dispatch, getState) => {
    const {data, page} = getState().UsersListReducer;
   
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then(response => {
        let newData = [...response.data.data];
        if (page > 1) {
            newData = [ ...data, ...newData];
        }
        dispatch({type: 'show', payload: {data:[...newData], total:response.data.total}});
      })
      .catch(err => {
        console.log('api err', err);
      });
  };
};

export default getUserList;
