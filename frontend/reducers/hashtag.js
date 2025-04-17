import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: ['test', 'toto', 'baba'],
};

export const hashtagSlice = createSlice({
	name: 'hashtag',
	initialState,
	reducers: {
		taggies: (state, action) => {
			//state.value.push(action.payload);
			state.value = state.value.filter(tweet => tweet === action.payload);
		},
		/*addBookmark: (state, action) => {
			state.value.push(action.payload);
		},
		removeBookmark: (state, action) => {
			state.value = state.value.filter(bookmark => bookmark.title !== action.payload.title);
		},
		removeAllBookmark: (state) => {
			state.value = [];
		},*/
	},
});

export const { taggies } = hashtagSlice.actions;
export default hashtagSlice.reducer;
