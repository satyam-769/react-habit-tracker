import { createSlice } from '@reduxjs/toolkit'

// Constants
const NEW_HABITS = 'newHabits';
export const details = [
  { day: 'Monday', status: 'done' },
  { day: 'Tuesday', status: 'not-done' },
  { day: 'Wednesday', status: 'none' },
  { day: 'Thursday', status: 'done' },
  { day: 'Friday', status: 'not-done' },
  { day: 'Saturady', status: 'none' },
  { day: 'Sunday', status: 'not-done' },
]

// load habits from local storage if there are any
const habitsFromStorage = localStorage.getItem(NEW_HABITS)
  ? JSON.parse(localStorage.getItem(NEW_HABITS))
  : [{ title: 'Music', description: '45 minutes per day', details },
  { title: 'Yoga', description: '30 minutes per day', details },
  { title: 'Walk', description: '45 minutes per day', details }]

let habits = [...habitsFromStorage]

const initialState = {
  habits: habits,
}


// habitsSlice contains store, actions and reducers
const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, { payload }) => {
      state.habits = [...state.habits, payload]
      habits = [...habits, payload]
      window.localStorage.setItem(NEW_HABITS, JSON.stringify(habits))
    },
    deleteHabit: (state, action) => {
      state.habits = state.habits.filter((habit) => habit.title !== action.payload)
      window.localStorage.setItem(NEW_HABITS, JSON.stringify(state.habits))
    },
    changeStatus: (state, { payload }) => {
      state.habits.forEach((habit) => {
        if (habit.title === payload.title) {
          habit.details.forEach((detail) => {
            if (detail.day === payload.details[0].day) {
              detail.status = payload.details[0].status
            }
          })
        }
      })
      window.localStorage.setItem(NEW_HABITS, JSON.stringify(state.habits))
    },
  },
})

console.log(habitsSlice)

export const { addHabit, deleteHabit, changeStatus } = habitsSlice.actions

export default habitsSlice.reducer;