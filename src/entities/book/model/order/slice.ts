import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type OrderStep = "character" | "upload" | "preview" | "format" | "done";

interface OrderState {
  formatId: string | null;
  step: OrderStep;
}

const initialState: OrderState = {
  formatId: null,
  step: "preview"
};

const slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    saveOrderFormat(state, action: PayloadAction<string>) {
      state.formatId = action.payload;
    },
    goToStep(state, action: PayloadAction<OrderStep>) {
      state.step = action.payload;
    },
    orderFormatSelected(state, _action: PayloadAction<string>) {}
  }
});

export const { saveOrderFormat, goToStep, orderFormatSelected } = slice.actions;
export default slice.reducer;
