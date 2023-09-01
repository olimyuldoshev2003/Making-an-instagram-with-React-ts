import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

// Define a type for the slice state
interface CounterState {
  modalCreate: boolean;
  modalMore: boolean;
  like: boolean;
  closeEdit: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  modalCreate: false,
  modalMore: false,
  like: false,
  closeEdit: true,


};

export const counterSlice = createSlice({
  name: "values",
  initialState,
  reducers: {
    openAddModal: (state: CounterState) => {
      state.modalCreate = true
      
    },
    
    handleClose(state: CounterState) {
      state.modalCreate = false
    },

    handleCloseMore(state: CounterState) {
      state.modalMore = false
    },

    openModalMore(state: CounterState) {
      
      state.modalMore = true
    },
    // closePageEdit(state: CounterState) {
      
    // }

  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.values;
export const { openAddModal, handleClose, openModalMore, handleCloseMore} = counterSlice.actions;

export default counterSlice.reducer;
