import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    add: (state) => {
      state.value += 1
    },
    minus: (state) => {
      state.value -= 1
    },
    result: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { add, minus, result } = testSlice.actions

export default testSlice.reducer