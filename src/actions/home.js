import firebaseAppRef from './firebase'

let pageLimit = 30
let lastKey;
let called = 0

export function fetchHomeItems(nextPage) {
    console.log('fetchHomeItems : lastKey => ', lastKey);
    called++
    console.log('called => ', called);
    return function(dispatch, getState) {
        let newItems = []

        var ref = firebaseAppRef.database().ref("items");
        ref
            .orderByKey()
            .limitToFirst(pageLimit)
            .startAt(lastKey || '0')//
            .on("child_added", (snapshot, _lastKey) => {
                lastKey = _lastKey

                if (getState().home.findIndex(x => x.key === snapshot.key) < 0) {
                    // console.log(getState().home.findIndex(x => x.key === snapshot.key));
                    var newChildItem = Object.assign({}, snapshot.val(), {
                        key: snapshot.key
                    });

                    dispatch({
                        type: 'UPDATE_ITEMS',
                        newChildItem: newChildItem,
                    });
                }

                // console.log(newChildItem);
                // for (var item in newSet) {
                //     if (newSet.hasOwnProperty(item)) {
                //         newItems.push(newSet[item]);
                //         // getState().home.items.push(newSet[item])
                //     }
                // }
                // console.log('newChildItem', newChildItem);
            })


    }

}
