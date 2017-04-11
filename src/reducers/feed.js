import Immutable from 'seamless-immutable'


export default function home(state = initialState, action) {
    switch (action.type) {

        case "Add_HOME_ITEM":
            // console.log(action);
            // console.log([...state, action.newChildItem]);
            return {
                items: [...state.items, action.newChildItem]
            };
            // console.log(Immutable(state).concat(action.newChildItem));
            // return Immutable(state).concat(action.newChildItem);

            break;
        case "UPDATE_HOME_ITEM":
            // console.log(action.newItemState.key);
            let index = state.items.findIndex(x => x.key === action.newItemState.key)
            // console.log(index);
            if (index > -1) {

                state.items[index] = Immutable.replace(state.items[index], action.newItemState, {
                    deep: true
                });

                // console.log(state.items[index].likes, action.newItemState.likes);

                return {...state};

            } else {
                return state;
            }


            break;
        default:
            return state;
    }
}

const initialState = {
    items: [],
    map: {}
};
