import { LOG_IN_USER } from "../actions/type";

const initialState = {
};

const userReducer = ( state = initialState, action) => {
    const userObject = action.payload
    console.log(userObject,'..........userObject in reducer')
    switch(action.type) {
        case LOG_IN_USER:
            return {
                ...state,
                userData: action.payload

            }
        default:
            return state;
    }
}
export default userReducer;
