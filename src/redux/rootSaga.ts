import { all } from "redux-saga/effects";
import { watchBookFormats } from "./bookConfigSlice/bookConfigSaga";

export default function* rootSaga() {
  yield all([watchBookFormats()]);
}
