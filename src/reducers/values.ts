import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

// Define a type for the slice state

export interface IGotTokenState {
  sid: string;
  name: string;
  email: string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
  exp: string;
  iss: string;
  aud: string;
}

export interface IDataUserNameState {
  image: string;
  dateUpdated: string;
  gender: string;
  firstName: string;
  lastName: string;
  locationId: number;
  dob: string;
  occupation: string;
  about: string;
}

export interface postsState {
  postId: number;
  userId: string;
  datePublished: string;
  images: any;
  postLikeCount: string;
  commentCount: string;
  postView: number;
  postFavorite: boolean;
  title: string;
  content: string;
}

interface CounterState {
  modalCreate: boolean;
  modalMore: boolean;
  modalLogout: boolean;
  modalViewPosts: boolean;
  modalStory: boolean;
  postsCnt: number;
  like: number;
  comment: number;
  follow: number;
  follower: number;
  following: number;
  search: string;
  userNameProfile: string;
  gotToken: IGotTokenState;
  dataUserName: any;
  posts: any;
  postId: number;
  userId: number;
}

// data: {
//   image: "625f2adb-df23-4aca-a8c9-991413005558.JPG",
//   dateUpdated: "2023-09-09T07:08:37.0817994Z",
//   gender: "Male",
//   lastName: "Karomatov",
//   firstName: "Olim",
//   locationId: 1,
//   dob: "2003-09-08T14:51:46.65721Z",
//   occupation: "Developer",
//   about: "Hello",
// },
// Define the initial state using that type
const initialState: CounterState = {
  modalCreate: false,
  modalMore: false,
  modalLogout: false,
  modalViewPosts: false,
  modalStory: false,
  postsCnt: 0,
  like: 0,
  comment: 0,
  follow: 0,
  follower: 0,
  following: 0,
  search: "",
  userNameProfile: "",
  gotToken: {
    sid: "",
    name: "",
    email: "",
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": "",
    exp: "",
    iss: "",
    aud: "",
  },
  dataUserName: [],

  // posts: {
  //   postId: 0,
  //   userId: "",
  //   datePublished: "",
  //   images: [],
  //   postLikeCount: "",
  //   commentCount: "",
  //   postView: 0,
  //   postFavorite: false,
  //   title: "",
  //   content: "",
  // },
  posts: [],
  postId: 0,
  userId: 0,
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
    closeAddModal(state: CounterState) {
      state.modalCreate = false;
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
    setDataUserName(
      state: CounterState,
      action: PayloadAction<IDataUserNameState>
    ) {
      state.dataUserName = action.payload;
      console.log(state.dataUserName);
      
    },
    setPosts(state: CounterState, action: PayloadAction<postsState>) {
      state.posts = action.payload;
    },
    closeModalAdd(state: CounterState) {
      state.modalCreate = false;
    }
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.values;
export const {
  openAddModal,
  handleClose,
  closeModalAdd,
  openModalMore,
  handleCloseMore,
  openLogoutModal,
  // setModalStory,
  handleCloseLogoutModal,
  closeLogoutModal,
  setSearch,
  openModalViewPostMine,
  handleCloseViewMyPostsOfProfileModal,
  setDataUserName,
  setPosts,
  closeAddModal
} = counterSlice.actions;

export default counterSlice.reducer;
