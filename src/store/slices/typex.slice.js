import { createSlice } from "@reduxjs/toolkit";

const typexSlice = createSlice({
  name: 'typex',
  initialState: 'All Pokemons',
  reducers: {
    setTypexGlobal: (state, action) => action.payload
  }
})

export const { setTypexGlobal } = typexSlice.actions

export default typexSlice.reducer
