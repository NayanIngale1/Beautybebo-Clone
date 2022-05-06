import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";

import thunk from "redux-thunk";
import { CheckoutReducer } from "./CheckoutDetails/reducer";

const rootReducer = combineReducers({
  checkoutAddress: CheckoutReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
