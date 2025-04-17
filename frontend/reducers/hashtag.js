import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: ['test', 'toto', 'baba', 'toto'],
};

export const hashtagSlice = createSlice({
	name: 'hashtag',
	initialState,
	reducers: {
		taggies: (state, action) => {			
			state.value = state.value.filter(tweet => tweet === action.payload);
		},		
	},
});

export const { taggies } = hashtagSlice.actions;
export default hashtagSlice.reducer;
