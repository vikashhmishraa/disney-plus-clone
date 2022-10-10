import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movies/movieSlice'
import userReducer from '../features/user/userSlice'
import userSlice from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice,
  },
});
