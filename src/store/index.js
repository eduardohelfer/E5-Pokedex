import { configureStore } from "@reduxjs/toolkit";
import userName from './slices/userName.slice'
import pagex from './slices/pagex.slice'
import typex from './slices/typex.slice'

export default configureStore({
  reducer: {
    userName,
    pagex,
    typex
  }
})
