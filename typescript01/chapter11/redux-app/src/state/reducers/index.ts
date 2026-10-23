import { combineReducers } from "redux";
import bankReducer from "./bankReducer";

const reducers = combineReducers({
  bank: bankReducer,
});

export default reducers;

// Tipo del estado global: { bank: number }
export type RootState = ReturnType<typeof reducers>;
