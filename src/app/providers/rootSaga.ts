import { all } from "redux-saga/effects";
import { watchBookFormats } from "@/entities/book/model/saga";

export default function* rootSaga() {
  yield all([watchBookFormats()]);
}
