import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
import {
  getFollowings,
  getMainPostsOfMainUser,
  getMainUser,
} from "../profileApi/profileApi";
import { getToken } from "../../utils/token";
import { closeModalAddPost } from "../../reducers/layoutState/layoutState";
import { useAppSelector } from "../../store/hooks";
import { searchUsers } from "../layoutApi/layoutApi";
import { setInpAddCommentInsideModal } from "../../reducers/homeState/homeState";

//Posts
export const getPosts: any = createAsyncThunk(
  "homeApi/getPosts",
  async function () {
    try {
      const { data } = await axiosRequest.get("/Post/get-posts?PageSize=300");
      return data.data;
    } catch (error) {}
  }
);

export const getPostsById: any = createAsyncThunk(
  "homeApi/getPostsById",
  async function (postId) {
    try {
      const { data } = await axiosRequest.get(
        `/Post/get-post-by-id?id=${postId}`
      );

      return data.data;
    } catch (error) {}
  }
);

export const getReels: any = createAsyncThunk(
  "homeApi/getReels",
  async function () {
    try {
      const { data } = await axiosRequest.get("/Post/get-reels");
      return data.data;
    } catch (error) {}
  }
);

export const getFollowingsPosts: any = createAsyncThunk(
  "homeApi",
  async function (userId) {
    try {
      const { data } = await axiosRequest.get(
        `/Post/get-following-post?UserId=${userId}`
      );

      console.log(data.data);
    } catch (error) {}
  }
);

export const addPost: any = createAsyncThunk(
  "homeApi/addPost",
  async function (obj: any, { dispatch }) {
    const token = getToken();
    try {
      const { data } = await axiosRequest.post("Post/add-post", obj);
      console.log(data);
      dispatch(getPosts());
      dispatch(getMainPostsOfMainUser(token?.sid));
      dispatch(closeModalAddPost());
    } catch (error) {}
  }
);

export const deletePost = createAsyncThunk(
  "homeApi/deletePosts",
  async function (postId: number | null, { dispatch }) {
    const token = getToken();
    try {
      const { data } = await axiosRequest.delete(
        `Post/delete-post?id=${postId}`
      );

      console.log(data);

      dispatch(getPosts());
      dispatch(getMainPostsOfMainUser(token?.sid));
    } catch (error) {}
  }
);

export const addLikedPost: any = createAsyncThunk(
  "homeApi/addLikedPost",
  async function (id: number, { dispatch }) {
    try {
      const { data } = await axiosRequest.post(`Post/like-Post?postId=${id}`, {
        dispatch,
      });
      // console.log(data);

      dispatch(getPosts());
      console.log(data.data);
    } catch (error) {}
  }
);

export const addComment = createAsyncThunk("homeApi/addComment", async function (obj:any, { dispatch }) {
  
  const postIdComment = useAppSelector((store)=>store.homeState.postIdComment)

  try {
    const { data } = await axiosRequest.post(`/Post/add-comment`, obj);
  
    console.log(data, obj);
    

    dispatch(getPosts())
    dispatch(getPostsById(postIdComment))
    dispatch(setInpAddCommentInsideModal(""));
  } catch (error) {
    
  }
})

export const getUsers: any = createAsyncThunk("homeApi", async function () {
  try {
    const { data } = await axiosRequest.get("/User/get-users?pageSize=50");
    return data.data;
  } catch (error) {}
});

export const followUser: any = createAsyncThunk(
  "homeApi/followUser",
  async function (userId: string, { dispatch }) {
    const token = getToken();
    const searchedUsers = useAppSelector(
      (store) => store.layoutState.searchedUsers
    );
    try {
      const { data } = await axiosRequest.post(
        `/FollowingRelationShip/add-following-relation-ship?followingUserId=${userId}`
      );
      console.log(data.data);

      dispatch(getMainUser(token?.sid));
      dispatch(getUsers());
      dispatch(searchUsers(searchedUsers));
      dispatch(getFollowings(token?.sid));
      // dispatch(getMainUser())

      // message
    } catch (error) {}
  }
);

export const unfollowUser: any = createAsyncThunk(
  "homeApi/unfollowUser",
  async function (userId: string, { dispatch }) {
    const token = getToken();
    const searchedUsers = useAppSelector(
      (store) => store.layoutState.searchedUsers
    );
    try {
      const { data } = await axiosRequest.delete(
        `/FollowingRelationShip/delete-following-relation-ship?id=${userId}`
      );
      console.log(data.data);

      dispatch(getMainUser(token?.sid));
      dispatch(getUsers());
      dispatch(searchUsers(searchedUsers));
      dispatch(getFollowings(token?.sid));

      // message
    } catch (error) {}
  }
);

export const getStories: any = createAsyncThunk(
  "homeApi/getStories",
  async function () {
    try {
      const { data } = await axiosRequest.get("/Story/get-stories");

      return data.data;
    } catch (error) {}
  }
);

export const getStoriesById = createAsyncThunk(
  "homeApi/getStoriesById",
  async function (storyId) {
    try {
      const { data } = await axiosRequest.get(
        `/Story/GetStoryById?id=${storyId}`
      );
      return data.data;
    } catch (error) {}
  }
);
