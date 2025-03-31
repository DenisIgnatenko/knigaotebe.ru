import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import bookConfigReducer from "./bookConfigSlice/bookConfigSlice";
import orderReducer from "./bookConfigSlice/orderSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    bookConfig: bookConfigReducer,
    order: orderReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false
    }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
