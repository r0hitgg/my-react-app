import { LOG_IN_USER } from "./type";

export const logInUser = ( user ) => {

    return dispatch => {
        console.log(user, 'user in action...........')
        dispatch({
            type: LOG_IN_USER,
            payload: {
                ...user,
                name: user.name,
                id: user.id,
                image: user.image_1920,
                email: user.login,
            }
        });
    }
}