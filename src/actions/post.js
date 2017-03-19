import firebaseAppRef from './firebase'

export function likePost(post, list, index) {
    return (dispatch, getState) => {

        const state = getState();


        // console.log(state[list]['items'][index] === post);
        // console.log(state.user);
        const postKey = post.key;
        const uid = state.user.uid;
        const postLikePath = '/items/' + postKey + '/likes/byUser/' + uid;
        const userLikePath = '/user/' + uid + '/likes/' + postKey;
        let toggleLike = true;


        // Check if post is liked by user already

        firebaseAppRef.database().ref(postLikePath).once('value').then((snapshot) => {
            toggleLike = snapshot.val() || false;
            // console.log('toggleLike => ', toggleLike);

            if (toggleLike) {
                toggleLike = null;
            } else {
                toggleLike = true;
            }

            // Like on client-side
            // let newItemState = state[list][index]
            // newItemState.likes.byUser[uid] = toggleLike
            // console.log(newItemState);
            // dispatch({
            //     type: 'UPDATE_HOME_ITEM',
            //     newItemState,
            // });

            var updates = {};
            updates[postLikePath] = toggleLike;
            updates[userLikePath] = toggleLike;

            // console.log(updates);

            firebaseAppRef.database().ref().update(updates).then(() => {
                // console.log('it did it but it be trippn bro');
            });

            // console.log(state[list][index][postLikePath] = toggleLike);

        });

        // Write the new post's data simultaneously in the posts list and the user's like list.

        // dispatch(changePlayingSong(songIndex));
    };
}
