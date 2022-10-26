import { createSlice } from "@reduxjs/toolkit";

const pagexSlice = createSlice({
  name: 'pagex',
  initialState: 1,
  reducers: {
    setPagexGlobal: (state, action) => action.payload
  }
})

export const { setPagexGlobal } = pagexSlice.actions

export default pagexSlice.reducer
