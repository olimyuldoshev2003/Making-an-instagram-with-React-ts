import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { getMainPostsOfMainUser, getMainUser, getMainPostById, getFollowers, getFollowings } from "../../api/profileApi/profileApi";

// Define a type for the slice state
interface IProfileState {
  mainUser: any;
  mainPostsOfMainUser: any;
  modalViewMainPosts: boolean;
  mainPostById: any;
  followers: any;
  followings: any;
  modalFollowers: any;
  modalFollowings: any;
}

const initialState: IProfileState = {
  mainUser: [],
  mainPostsOfMainUser: [],
  modalViewMainPosts: false,
  mainPostById: [],
  followers: [],
  followings: [],
  modalFollowers:false,
  modalFollowings:false,
};

export const profileSlice = createSlice({
  name: "profileState",
  initialState,
  reducers: {
    setModalViewMainPosts(
      state: IProfileState,
      action: PayloadAction<boolean>
    ) {
      state.modalViewMainPosts = action.payload;
    },
    setModalFollowers(state: IProfileState, action: PayloadAction<boolean>) {
      state.modalFollowers = action.payload;
    },
    setModalFollowings(state: IProfileState, action: PayloadAction<boolean>) {
      state.modalFollowings = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getMainUser.fulfilled,
      (state: IProfileState, action: PayloadAction<any>) => {
        state.mainUser = action.payload;
      }
    );
    builder.addCase(
      getMainPostsOfMainUser.fulfilled,
      (state: IProfileState, action: PayloadAction<any>) => {
        state.mainPostsOfMainUser = action.payload;
      }
    );
    builder.addCase(
      getMainPostById.fulfilled,
      (state: IProfileState, action: PayloadAction<any>) => {
        state.mainPostById = action.payload;
      }
    );
    builder.addCase(
      getFollowers.fulfilled,
      (state: IProfileState, action: PayloadAction<any>) => {
        state.followers = action.payload;
      }
    );
    builder.addCase(
      getFollowings.fulfilled,
      (state: IProfileState, action: PayloadAction<any>) => {
        state.followings = action.payload;        
      }
    );
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.values;
export const {setModalViewMainPosts, setModalFollowers, setModalFollowings} = profileSlice.actions;

export default profileSlice.reducer;
