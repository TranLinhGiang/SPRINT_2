import { configureStore } from '@reduxjs/toolkit';
import songReducer from "./slide/CardSlide";
export const store = configureStore({
  reducer: {
    card: songReducer
  },
})
