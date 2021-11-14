import { createSlice } from '@reduxjs/toolkit';

// export interface CounterState {
//   value: number;
//   status: 'idle' | 'loading' | 'failed';
// }

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state: any) => state.movie.movies;

export default movieSlice.reducer;
