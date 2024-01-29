import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loginData: null
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginData: (state, action) => {
            state.loginData = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setLoginData } = loginSlice.actions;

export default loginSlice.reducer;
