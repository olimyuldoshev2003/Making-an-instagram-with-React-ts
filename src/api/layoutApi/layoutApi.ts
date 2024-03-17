import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

export const searchUsers: any = createAsyncThunk(
  "layoutApi",
  async function (searchValue: string) {
    try {
      const { data } = await axiosRequest.get(
        `${
          searchValue === ""
            ? `/User/get-users?pageSize=300`
            : `/User/get-users?pageSize=300?&UserName=${searchValue}`
        }`
      );

      return data.data;
    } catch (error) {}
  }
);