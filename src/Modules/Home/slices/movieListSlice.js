
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieAPI from '../../../apis/movieAPI';

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  selectedMovie : null,
};
export const getMovieData = createAsyncThunk(
  'MovieManagement/getMovieData' , 
  async (movieID, {rejectWithValue}) => {
    try {
      const {data} = await movieAPI.getMovieData(movieID);
      console.log(data.content);
      return data.content
    } catch (error) {
      return rejectWithValue(error.response.data.content)
    }
  }
)
export const getMovies = createAsyncThunk(
  'Home/MovieManagement/Content/getMovies',
  async (_, { rejectWithValue }) => {
    try {
      const  {data}  = await movieAPI.getMovies();
      return data.content
    } catch (error) {
      return rejectWithValue(error.response.data.content);
    }
  }
);
export const addMovies = createAsyncThunk(
  'Home/MovieManagement/ContentForm/addMovies',
  async (value, { rejectWithValue, dispatch }) => {
    try {
      await movieAPI.addMovies(value);
      console.log(value);
      dispatch(getMovies());
      alert('Add Movie SuccessFully');
    } catch (error) {
      alert('Add Movie Failed');
      return rejectWithValue(error.response?.data.content);
    }
  }
);
export const deleteMovies = createAsyncThunk(
  'Home/MovieManagement/ContentForm/deleteMovies',
  async (value, { rejectWithValue, dispatch }) => {
    try {
      await movieAPI.deleteMovies(value);
      dispatch(getMovies());
      alert('Delete Movie SuccessFully');
    } catch (error) {
      alert('Delete Movie Failed');
      return rejectWithValue(error.response?.data.content);
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
      console.log(action.payload);
      state.movies = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMovieData.fulfilled, (state, action) => {
      state.selectedMovie = action.payload;
      console.log(state.selectedMovie)
      state.isLoading = false;
  });
}
});
export default movieListSlice.reducer;
