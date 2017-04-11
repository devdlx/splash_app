import firebaseAppRef from './firebase'

let pageLimit = 10
let lastKey;
// let called = 0


export function fetchFeedItems(nextPage) {
    // console.log('fetchFeedItems : lastKey => ', lastKey);
    // called++
    // console.log('called => ', called);
    return function(dispatch, getState) {

        if (!_listenToFeedItemsChanges) {
            listenToFeedItemsChanges(dispatch)
        }

        let newItems = []

        var ref = firebaseAppRef.database().ref('items');
        ref
            .orderByKey()
            .limitToFirst(pageLimit)
            .startAt(lastKey || '0') //
            .on("child_added", (snapshot, _lastKey) => {
                lastKey = _lastKey

                if (getState().feed.items.findIndex(x => x.key === snapshot.key) < 0) {
                    // console.log(getState().feed.items.findIndex(x => x.key === snapshot.key));
                    let likeCount = snapshot.child('likes/byUser').numChildren();
                    // console.log(likeCount);

                    var newChildItem = {
                        ...snapshot.val(),
                        key: snapshot.key,
                        likeCount,
                    }

                    dispatch({
                        type: 'Add_HOME_ITEM',
                        newChildItem: newChildItem,
                    });
                }
            });


    }

}

let _listenToFeedItemsChanges = false

function listenToFeedItemsChanges(dispatch) {
    // console.log(_listenToFeedItemsChanges);

    _listenToFeedItemsChanges = true;

    firebaseAppRef.database().ref("items").on('child_changed', (NewChild) => {

        // console.log({
        //     key: NewChild.key,
        //     ...NewChild.val()
        // });

        let likeCount = NewChild.child('likes/byUser').numChildren();

        const newItemState = {
            ...NewChild.val(),
            key: NewChild.key,
            likeCount
        }
        dispatch({
            type: 'UPDATE_HOME_ITEM',
            newItemState,
        });

    })

}
