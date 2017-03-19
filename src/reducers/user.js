import * as UserActionTypes from '../constants/UserActionTypes';


const initialState = {
    loginState: UserActionTypes.LOGGEDIN_CHECKING,
    uid: '',
    user: {},
    displayName: 'guest'
};


export default function user(state = initialState, action) {
    // console.log(action.type === UserActionTypes.LOGGEDOUT);

    switch (action.type) {

        case UserActionTypes.LOGGEDIN_CHECKING:
        console.log('UserActionTypes.LOGGEDIN_CHECKING');

            return Object.assign({}, state, {
                loginState: UserActionTypes.LOGGEDIN_CHECKING,

            });

        case UserActionTypes.LOGGEDIN:
            console.log('UserActionTypes.LOGGEDIN');
            return Object.assign({}, state, {
                loginState: UserActionTypes.LOGGEDIN,
                uid: action.uid,
                user: action.user,
                displayName: action.displayName
            });

        case UserActionTypes.LOGGEDOUT:
            console.log('UserActionTypes.LOGGEDOUT');
            return Object.assign({}, state, {
                ...initialState,
                loginState: UserActionTypes.LOGGEDOUT,
            });


        case UserActionTypes.AUTHERROR:
            return Object.assign({}, state, {
                loginState: UserActionTypes.AUTHERROR,
                error: action.message
            });



        case UserActionTypes.UPDATE_USER_PROFILE:
            console.log('UPDATE_USER_PROFILE');
            return Object.assign({}, state, {
                error: action.user
            });


        default:
            return state;
    }
}
