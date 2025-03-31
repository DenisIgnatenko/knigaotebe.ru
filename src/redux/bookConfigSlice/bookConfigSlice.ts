import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookConfigState, BookFormat } from "./types";

const initialState: BookConfigState = {
  formats: [],
  selectedFormatId: null,
  modalFormatId: null,
};

const bookConfigSlice = createSlice({
  name: "bookFormats",
  initialState,
  reducers: {
    fetchFormatsRequest(state) {},

    fetchFormatsSuccess(state, action: PayloadAction<BookFormat[]>) {
      state.formats = action.payload;
    },

    fetchFormatsFailure(state, action: PayloadAction<string>) {},

    setFormats: (state, action: PayloadAction<BookFormat[]>) => {
      state.formats = action.payload;
    },

    selectFormat: (state, action: PayloadAction<string | null>) => {
      state.selectedFormatId = action.payload;
    },

    openModal: (state, action: PayloadAction<string>) => {
      state.modalFormatId = action.payload;
    },

    closeModal: (state) => {
      state.modalFormatId = null;
    },
  },
});

export const {
  fetchFormatsRequest,
  fetchFormatsFailure,
  fetchFormatsSuccess,
  setFormats,
  selectFormat,
  openModal,
  closeModal,
} = bookConfigSlice.actions;

export default bookConfigSlice.reducer;
