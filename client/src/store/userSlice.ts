import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: string;
}

const initialState: UserState = {
  user: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {},
    logOut: (state, action: PayloadAction<string>) => {},
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
