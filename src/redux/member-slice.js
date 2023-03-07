import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
  },
  reducers: {
    welcomeMember(state, action) {
      state.members = [...state.members, action.payload.member];
    },
    welcomeMembers(state, action) {
      state.members = [...state.members, ...action.payload.members];
    },
    discardMember(state, action) {
      state.members = state.members.filter((member) => member.id !== action.payload.member.id);
    },
  },
});

export const membersActions = membersSlice.actions;

export default membersSlice.reducer;
