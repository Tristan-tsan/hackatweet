import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const TweetSlice = createSlice({
  name: 'Tweet',
  initialState,
  reducers: {
    addTweet: (state, action) => {
      state.value.push(action.payload);
    },
    removeTweet: (state, action) => {
      state.value = state.value.filter(tweet => tweet !== action.payload);
    },
  },
});

export const { addTweet, removeTweet } = tweetSlice.actions;
export default tweetSlice.reducer;