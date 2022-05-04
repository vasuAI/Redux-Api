import { combineReducers } from "redux";
import UsersListReducer from "../modules/userList/reducer";
import UserDetailReducer from "../modules/userDet/reducer"
import PostListReducer from "../redux/PostList/reducer";

const rootReducer = combineReducers({
    PostListReducer,
    // UsersListReducer,
    // UserDetailReducer
});

export default rootReducer;


