import * as UserActionTypes from '../constants/UserActionTypes';


const initialState = {
    loginState: UserActionTypes.LOGGEDIN_CHECKING,
};


export default function user(state = initialState, action) {
    // console.log(action.type === UserActionTypes.LOGGEDOUT);

    switch (action.type) {

        case UserActionTypes.LOGGEDIN_CHECKING:
            // console.log('user.reducer: ', 'UserActionTypes.LOGGEDIN_CHECKING');
            return Object.assign({}, state, {
                loginState: UserActionTypes.LOGGEDIN_CHECKING,

            });

        case UserActionTypes.LOGGEDIN:
            // console.log('user.reducer: ', 'UserActionTypes.LOGGEDIN');
            return Object.assign({}, state, {
                loginState: UserActionTypes.LOGGEDIN,
                uid: action.uid
            });

        case UserActionTypes.LOGGEDOUT:
            // console.log('user.reducer: ', 'UserActionTypes.LOGGEDOUT');
            return Object.assign({}, state, {
                ...initialState,
                loginState: UserActionTypes.LOGGEDOUT,
            });


        case UserActionTypes.AUTHERROR:
        // console.log('user.reducer: ', 'UserActionTypes.LOGGEDOUT');

            return Object.assign({}, state, {
                loginState: UserActionTypes.AUTHERROR,
                error: action.message
            });


        case UserActionTypes.UPDATE_USER_PROFILE:
            // console.log('user.reducer: ','UserActionTypes.UPDATE_USER_PROFILE');
            // console.log(action);
            return Object.assign({}, state, {
                profile: action.profile
            });


        default:
            return state;
    }
}
