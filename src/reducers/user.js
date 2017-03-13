import * as UserActionTypes from '../constants/UserActionTypes';

const initialState = {
    loginState: UserActionTypes.LOGGEDIN_CHECKING,
};


export default function user(state = initialState, action) {
    // console.log(action.type === UserActionTypes.LOGGEDOUT);

    switch (action.type) {

        case UserActionTypes.LOGGEDIN_CHECKING:
            return Object.assign({}, state, {
                loginState: UserActionTypes.LOGGEDIN_CHECKING
            });

        case UserActionTypes.LOGGEDIN:
            return Object.assign({}, state, {
                loginState: UserActionTypes.LOGGEDIN
            });

        case UserActionTypes.LOGGEDOUT:

            return Object.assign({}, state, {
                loginState: UserActionTypes.LOGGEDOUT,
                displayName: 'guest',
            });


        case UserActionTypes.AUTHERROR:

            return Object.assign({}, state, {
                loginState: UserActionTypes.AUTHERROR,
                error: action.message
            });


        default:
            return state;
    }
}
