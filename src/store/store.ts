import { configureStore } from "@reduxjs/toolkit";
import * as rootReducer from './Slices';

const store = configureStore({
    reducer: rootReducer,
});

export default store;