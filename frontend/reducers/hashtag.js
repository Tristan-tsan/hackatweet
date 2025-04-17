import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hashtagSlice = createSlice({
	name: 'hashtag',
	initialState,
	reducers: {
		addBookmark: (state, action) => {
			state.value.push(action.payload);
		},
		removeBookmark: (state, action) => {
			state.value = state.value.filter(bookmark => bookmark.title !== action.payload.title);
		},
		removeAllBookmark: (state) => {
			state.value = [];
		},
	},
});

export const { addBookmark, removeBookmark, removeAllBookmark } = hashtagSlice.actions;
export default hashtagSlice.reducer;
