import { PayloadAction } from "@reduxjs/toolkit";
import { goToStep, orderFormatSelected, saveOrderFormat } from "./slice";
import { put, takeLatest } from "redux-saga/effects";

function* handleOrderFlow(action: PayloadAction<string>) {
  const formatId = action.payload;

  yield put(saveOrderFormat(formatId));
  yield put(goToStep("done"));
}

export function* watchOrderFlow() {
  yield takeLatest(orderFormatSelected.type, handleOrderFlow);
}
