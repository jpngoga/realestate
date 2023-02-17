import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  isLoggedIn: false,
  token: "",
  loading: false,
  userData: {},
  error: "",
};

export const authSlice = createSlice({
  name: "a",
  initialState,
  reducers: {
    initiateLoading: (state)=> {
      state.loading = true;
    },
    login: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    },
    token: (state, action) => {
      state.token = action.payload;
    },
    loginError: (state, action) => {
      state.error = action.payload;
      state.loading = false
    },
  },
});

export const loginUser = (data) => (dispatch) => {
  axios({
    method: "POST",
    url: 'https://odd-cyan-binturong-fez.cyclic.app/user/login',
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      dispatch(token(res.data.token));
      localStorage.setItem("token", res.data.token);
      dispatch(login(res.data.data));
      
      const user = res.data
      const navigate = useNavigate()

      if(user.role == "admin")
      navigate("/dashboard")
      else (navigate("/"))
    })
    .catch((err) => {
      console.log(err)
      dispatch(loginError(err.response.data.message));
    });
};

export const { login, token, loginError, initiateLoading } = authSlice.actions;
export default authSlice.reducer;


