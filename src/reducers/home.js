import Immutable from 'seamless-immutable'


export default function home(state = initialState, action) {
    switch (action.type) {

        case "UPDATE_ITEMS":

            // console.log([...state, action.newChildItem]);
            return [...state, action.newChildItem];
            // console.log(Immutable(state).concat(action.newChildItem));
            // return Immutable(state).concat(action.newChildItem);

            break;
        default:
            return state;
    }
}

const initialState = [];
