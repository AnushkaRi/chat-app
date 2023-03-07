import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
