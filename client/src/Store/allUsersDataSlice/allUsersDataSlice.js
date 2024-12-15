import { createSlice } from "@reduxjs/toolkit";
import { fecthAcceptRequest, fecthAddFriend, fecthLoginData, fetchAllUsersData, fetchLogOut, fetchRemoveFriendRequest, postLoginData, postNewUserData } from "./API";

const allUsersDataSlice = createSlice({
  name: "allUsersData",
  initialState: { usersData: [], logInData: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsersData.fulfilled, (state, { payload }) => {
      state.usersData = payload;
    });
    builder.addCase(postNewUserData.fulfilled, (state, { payload }) => {
      state.usersData = [...state.usersData, payload];
    });
    builder.addCase(fecthLoginData.fulfilled, (state, { payload }) => {
      state.logInData = payload[0] ? payload[0] : {};
    });
    builder
      .addCase(postLoginData.fulfilled, (state, { payload }) => {
        state.logInData = payload;
      })
      .addCase(fetchLogOut.fulfilled, (state, { payload }) => {
        state.logInData = {};
      })
      .addCase(fecthAddFriend.fulfilled, (state, { payload }) => {
        const num = state.usersData.findIndex((el) => el.id === payload.id);
        state.usersData[num] = payload;
      })
      .addCase(fecthAcceptRequest.fulfilled, (state, {payload}) => {
        state.logInData = payload
      });
  },
});

export const allUsersDataReducer = allUsersDataSlice.reducer;
export const selectAllUsersData = (state) => state.allUsersData;
