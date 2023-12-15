import { createSlice } from "@reduxjs/toolkit";

const tweetsSlicer = createSlice({
    name: "tweets",
    initialState: {
        tweet: "",
        tweets: [

        ],
        activeUser: ""

    },
    reducers: {
        setTweet: (state, action) => {
            state.tweet = action.payload

        },
        postTweet: (state, action) => {
            if (state.tweet) {
                state.tweets = [...state.tweets, action.payload];
                state.tweet = "";
            }

        },

        setLikes: (state, action) => {
            const { id, userId } = action.payload;
            const tweetIndex = id - 1;
            const likedIndex = state.tweets[tweetIndex].likes.indexOf(userId);

            if (likedIndex !== -1) {
                // Kullanıcının ID'si zaten like listesinde bulunuyorsa, çıkar.
                state.tweets[tweetIndex].likes.splice(likedIndex, 1);
            } else {
                // Kullanıcının ID'si like listesinde yoksa, ekle.
                state.tweets[tweetIndex].likes.push(userId);
            }
        },
        setRT: (state, action) => {
            const { id, userId } = action.payload;
            const tweetIndex = id - 1;
            const likedIndex = state.tweets[tweetIndex].rt.indexOf(userId);

            if (likedIndex !== -1) {
                // Kullanıcının ID'si zaten like listesinde bulunuyorsa, çıkar.
                state.tweets[tweetIndex].rt.splice(likedIndex, 1);
            } else {
                // Kullanıcının ID'si like listesinde yoksa, ekle.
                state.tweets[tweetIndex].rt.push(userId);
            }
        }


    }


})


export const { setTweet, postTweet, setTweetActiveUser, setLikes, setRT } = tweetsSlicer.actions;
export default tweetsSlicer.reducer;