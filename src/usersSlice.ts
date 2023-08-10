import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: ["1", "2", "3"],
    reducers: {
        addUser: (state, action) => {
            return [...state, action.payload]
        },
        removeUser: (state, action) => {
            return state = [...state.filter((item) => item !== action.payload)]
        },
    }
});

export const { addUser, removeUser } = usersSlice.actions
export default usersSlice.reducer;