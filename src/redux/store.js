import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./AppSlice";

const store = configureStore({
  reducer: {
    app: appReducer,  // ✅ should match `store.app` in selector
  },
});

export default store;
