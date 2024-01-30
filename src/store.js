import { configureStore } from '@reduxjs/toolkit';

import habitsReducer from '../src/components/habitsSlice';

const store = configureStore({
  reducer: {
    allHabits: habitsReducer,
  },
});

export default store;