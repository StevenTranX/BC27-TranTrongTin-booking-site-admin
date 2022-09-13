import { configureStore } from '@reduxjs/toolkit';
import movieListSlice from './Modules/Home/slices/movieListSlice';
export default configureStore({
  reducer: {
    movieList: movieListSlice,
    auth: authSlice,
  },
});
