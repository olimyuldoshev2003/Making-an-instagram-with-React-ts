import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

export const getMainUser: any = createAsyncThunk(
  "profileApi/getMainUser",
  async function (userId: string) {
    try {
      const { data } = await axiosRequest.get(
        `/UserProfile/get-user-profile-by-id?id=${userId}`
      );

      return data.data;
    } catch (error) {}
  }
);

export const getMainPostsOfMainUser: any = createAsyncThunk(
  "profileApi/getMainPostsOfMainUser",
  async function (userId: string) {
    try {
      const { data } = await axiosRequest.get(
        `Post/get-posts?UserId=${userId}`
      );
      return data.data;
    } catch (error) {}
  }
);

export const getMainPostById = createAsyncThunk(
  "profileApi/getMainPostById",
  async function (postId: number) {
    try {
      const { data } = await axiosRequest.get(
        `/Post/get-post-by-id?id=${postId}`
      );
      return data.data;
    } catch (error) {}
  }
);

export const getFollowers: any = createAsyncThunk(
  "profileApi/getFollowers",
  async function (userId) {
    try {
      const { data } = await axiosRequest.get(
        `/FollowingRelationShip/get-subscribers?UserId=${userId}`
      );

      return data.data;

      // return data.data
    } catch (error) {}
  }
);
export const getFollowings: any = createAsyncThunk(
  "profileApi/getFollowings",
  async function (userId) {
    try {
      const { data } = await axiosRequest.get(
        `/FollowingRelationShip/get-subscriptions?UserId=${userId}`
      );
      return data.data;

      // return data.data
    } catch (error) {}
  }
);
