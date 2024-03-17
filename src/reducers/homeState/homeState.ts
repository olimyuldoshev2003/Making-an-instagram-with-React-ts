import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import {
  addLikedPost,
  followUser,
  getPosts,
  getPostsById,
  getReels,
  getStories,
  getUsers,
} from "../../api/homeApi/homeApi";

// Define a type for the slice state
interface IHomeState {
  posts: any;
  postsById: any;
  reels: any;
  users: any;
  postId: number | null;
  postIdComment: number | null;
  userId: number | null;
  modalSettingsOfPost: boolean;
  modalComments: boolean;
  inpAddComment: string;
  inpAddCommentInsideModal: string;
  stories: any;
}

const initialState: IHomeState = {
  posts: [],
  postsById: [],
  reels: [],
  users: [],
  postId: null,
  postIdComment: null,
  userId: null,
  modalSettingsOfPost: false,
  modalComments: false,
  inpAddComment: "",
  inpAddCommentInsideModal: "",
  stories: [],
};

export const homeSlice = createSlice({
  name: "homeState",
  initialState,
  reducers: {
    setPostId(state: IHomeState, action: PayloadAction<number>) {
      state.postId = action.payload;
    },
    openModalSettingsOfPost(state: IHomeState, action: PayloadAction<any>) {
      state.modalSettingsOfPost = true;
      state.postId = action.payload.postId;
    },
    handleCloseSettingsOfPost(state: IHomeState): any {
      state.modalSettingsOfPost = false;
    },
    closeModalSettingsOfPost(state: IHomeState): any {
      state.modalSettingsOfPost = false;
    },
    setModalComments(state: IHomeState, action: PayloadAction<boolean>) {
      state.modalComments = action.payload;
    },
    setInpAddComment(state: IHomeState, action: PayloadAction<string>) {
      state.inpAddComment = action.payload;
    },
    setInpAddCommentInsideModal(
      state: IHomeState,
      action: PayloadAction<string>
    ) {
      state.inpAddCommentInsideModal = action.payload;
    },
    setPostIdComment(state: IHomeState, action: PayloadAction<number>) {
      state.postIdComment = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      getStories.fulfilled,
      (state: IHomeState, action: PayloadAction<any>) => {
        state.stories = action.payload;
      }
    );
    builder.addCase(
      getPosts.fulfilled,
      (state: IHomeState, action: PayloadAction<any>) => {
        state.posts = action.payload;
      }
    );
    builder.addCase(
      getUsers.fulfilled,
      (state: IHomeState, action: PayloadAction<any>) => {
        state.users = action.payload;
      }
    );
    builder.addCase(
      getReels.fulfilled,
      (state: IHomeState, action: PayloadAction<any>) => {
        state.reels = action.payload;
      }
    );
    builder.addCase(
      getPostsById.fulfilled,
      (state: IHomeState, action: PayloadAction<any>) => {
        state.postsById = action.payload;
      }
    );
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.homeState;
export const {
  openModalSettingsOfPost,
  handleCloseSettingsOfPost,
  closeModalSettingsOfPost,
  setModalComments,
  setInpAddComment,
  setInpAddCommentInsideModal,
  setPostIdComment
} = homeSlice.actions;

export default homeSlice.reducer;
