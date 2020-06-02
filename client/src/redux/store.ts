import {mainReducer} from "./reducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

export const store = createStore(mainReducer, applyMiddleware(thunk));
export type RootStore = ReturnType<typeof mainReducer>