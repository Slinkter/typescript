import { applyMiddleware, createStore } from "redux";
import thunk, { type ThunkDispatch } from "redux-thunk";
import type { Action } from "./actions";
import reducers, { type RootState } from "./reducers";

// redux-thunk 2.x es compatible con redux 4 y usa export default,
// igual que el libro. Los tipos vienen de @types/redux-thunk.
const middleware = applyMiddleware(thunk);

export const store = createStore(reducers, middleware);

// Tipo de dispatch que acepta tanto acciones planas como thunks.
// Se usa en los componentes: useDispatch<AppDispatch>().
export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;
