import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

// Define a type for the slice state

interface gotTokenState {
  sid: string;
  name: string;
  email: string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
  exp:string;
  iss: string;
  aud: string;
}


interface CounterState {
  modalCreate: boolean;
  modalMore: boolean;
  modalSettingsOfPost: boolean;
  modalLogout: boolean;
  modalViewPosts: boolean;
  modalStory: boolean;
  like: number;
  comment: number;
  follow: number;
  follower: number;
  following: number;
  posts: number;
  search: string;
  userNameProfile: string;
  gotToken: gotTokenState;
}

// Define the initial state using that type
const initialState: CounterState = {
  modalCreate: false,
  modalMore: false,
  modalSettingsOfPost: false,
  modalLogout: false,
  modalViewPosts: false,
  modalStory:false,
  like: 0,
  comment: 0,
  follow: 0,
  follower: 0,
  following: 0,
  posts: 0,
  search: "",
  userNameProfile: "",
  gotToken: {
    sid: "",
    name: "",
    email: "",
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role":"",
      exp: "",
    iss: "",
    aud:""
  },
};

export const counterSlice = createSlice({
  name: "values",
  initialState,
  reducers: {
    openAddModal: (state: CounterState) => {
      state.modalCreate = true;
    },
    handleClose(state: CounterState) {
      state.modalCreate = false;
    },
    openModalMore(state: CounterState) {
      state.modalMore = true;
    },
    handleCloseMore(state: CounterState) {
      state.modalMore = false;
    },
    openModalSettingsOfPost(state: CounterState) {
      state.modalSettingsOfPost = true;
    },
    handleCloseSettingsOfPost(state: CounterState) {
      state.modalSettingsOfPost = false;
    },
    closeModalSettingsOfPost(state: CounterState) {
      state.modalSettingsOfPost = false;
    },
    openLogoutModal(state: CounterState) {
      state.modalLogout = true;
      state.modalMore = false;
    },
    handleCloseLogoutModal(state: CounterState) {
      state.modalLogout = false;
    },
    closeLogoutModal(state: CounterState) {
      state.modalLogout = false;
    },
    setSearch(state: CounterState, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    openModalViewPostMine(state: CounterState) {
      state.modalViewPosts = true;
    },
    handleCloseViewMyPostsOfProfileModal(state: CounterState) {
      state.modalViewPosts = false;
    },
    likeActive(state: CounterState) {
        state.like += 1;
    },
    likeInactive(state: CounterState) {
        state.like += 1;
    },
    setGotToken(state: CounterState, action: PayloadAction<gotTokenState>) {
     state.gotToken = action.payload 
    }
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.values;
export const {
  openAddModal,
  handleClose,
  openModalMore,
  handleCloseMore,
  openModalSettingsOfPost,
  handleCloseSettingsOfPost,
  closeModalSettingsOfPost,
  openLogoutModal,
  // setModalStory,
  handleCloseLogoutModal,
  closeLogoutModal,
  setSearch,
  openModalViewPostMine,
  handleCloseViewMyPostsOfProfileModal,
  likeActive,
  likeInactive,
  setGotToken
} = counterSlice.actions;

export default counterSlice.reducer;
