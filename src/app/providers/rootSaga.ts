import { all } from "redux-saga/effects";
import { watchBookFormats } from "@/entities/book/model/format/saga";
import { watchOrderFlow } from "@/entities/book/model/order/saga";

export default function* rootSaga() {
  yield all([watchBookFormats(), watchOrderFlow()]);
}
