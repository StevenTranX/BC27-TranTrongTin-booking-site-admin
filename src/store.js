import { configureStore } from '@reduxjs/toolkit';
import movieListSlice from './Modules/Home/slices/movieListSlice';
import authSlice from './Modules/Authentication/slices/authSlice';
const store = configureStore({
  reducer: {
    movieList: movieListSlice,
    auth: authSlice,
  },
});
export default store;
