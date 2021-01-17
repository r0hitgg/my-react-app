import { LOG_IN_USER, LOG_OUT_USER } from "../actions/type";

const initialState = {
};

const userReducer = ( state = initialState, action) => {
    const user = action.payload;
    console.log(user,'..........userObject in reducer',state)
    switch(action.type) {
        case LOG_IN_USER:
            return {
                ...user
            }
        case LOG_OUT_USER:
            return {
                ...user
            }
        default:
            return state;
    }
}
export default userReducer;