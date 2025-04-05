import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type OrderStep = "character" | "upload" | "preview" | "format" | "done";

interface OrderState {
  formatId: string | null;
  step: OrderStep;
}

const initialState: OrderState = {
  formatId: null,
  step: "format"
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    saveOrderFormat(state, action: PayloadAction<string>) {
      state.formatId = action.payload;
    },
    goToStep(state, action: PayloadAction<OrderStep>) {
      state.step = action.payload;
    }
  }
});

export const { saveOrderFormat, goToStep } = orderSlice.actions;
export default orderSlice.reducer;
