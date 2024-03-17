import { searchUsers } from "./../../api/layoutApi/layoutApi";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

// Define a type for the slice state
interface ILayoutState {
  searchedUsers: any;
  mainUser: any;
  modalAddPost: boolean;
  imgAddPost: any;
}

const initialState: ILayoutState = {
  searchedUsers: [],
  mainUser: [],
  modalAddPost: false,
  imgAddPost: [],
};

export const layoutSlice = createSlice({
  name: "layoutState",
  initialState,
  reducers: {
    openModalAddPost: (state: ILayoutState) => {
      state.modalAddPost = true;
    },
    handleCloseModalAddPost(state: ILayoutState) {
      state.modalAddPost = false;
    },
    closeModalAddPost(state: ILayoutState) {
      state.modalAddPost = false;
    },
    setImgAddPost(state: ILayoutState, action: PayloadAction<any>) {
      state.imgAddPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      searchUsers.fulfilled,
      (state: ILayoutState, action: PayloadAction<any>) => {
        state.searchedUsers = action.payload;
      }
    );
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.values;
export const { openModalAddPost, handleCloseModalAddPost, closeModalAddPost,setImgAddPost } =
  layoutSlice.actions;

export default layoutSlice.reducer;
