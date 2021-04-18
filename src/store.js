import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeMiddleware = applyMiddleware(thunk);

const store = createStore(rootReducer, composeWithDevTools(composeMiddleware));

export default store;
