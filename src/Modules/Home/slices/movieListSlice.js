import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieAPI from '../../../apis/movieAPI';

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};
export const getMovies = createAsyncThunk(
  'home/movieManagement/getMovies',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await movieAPI.getMovies();
      return data.content;
    } catch (error) {
      return rejectWithValue(error.response.data.content);
    }
  }
);
const movieListSlice = createSlice({
  name: 'home/movieList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});
export default movieListSlice.reducer;
