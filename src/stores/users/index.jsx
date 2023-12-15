import { createSlice } from "@reduxjs/toolkit";


const usersSlicer = createSlice({
    name: "users",
    initialState: {
        user: "",
        activeUser: "",

    },
    reducers: {
        setActiveUser: (state, action) => {
            state.activeUser = action.payload

        },

    }


})

export const { setActiveUser } = usersSlicer.actions;
export default usersSlicer.reducer;