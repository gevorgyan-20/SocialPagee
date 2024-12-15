import { createAsyncThunk } from "@reduxjs/toolkit";
import UseRequest from "../../Hook/UseRequest";

const {get, post, deletee, put} = UseRequest()

export const fetchAllUsersData = createAsyncThunk("allUsersData/fetchAllUsersData", async() => {
    const result = await get("/userData");
    return result
});

export const postNewUserData = createAsyncThunk("allUsersData/postNewUserData", async(data) => {    
   const result = await post("/userData", data);
   return result;
});

export const fecthLoginData = createAsyncThunk("allUsersData/fecthLoginData", async() => {
    const result = await get("/loginData")
    return result
})

export const postLoginData = createAsyncThunk("allUsersData/postLoginData", async(data) => {
    const result = await post("/loginData", data)
    return result;
});

export const fetchLogOut = createAsyncThunk("allUsersData/fetchLogOut", async(id) => {
    const result = await deletee(`http://localhost:3005/loginData/${id}`);
});

export const fecthAddFriend = createAsyncThunk("allUsersData/fecthAddFriend", async(info) => {
    const result = await put(`http://localhost:3005/userData/${info.id}`, info.data)
    return result;
});

export const fecthAcceptRequest = createAsyncThunk("allUsersData/fecthAcceptRequest", async (info) => {
  const result = await put(`http://localhost:3005/loginData/${info.id}`, info.data);
  return result;
});
