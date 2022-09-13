import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../../apis/authAPI";
const initialState = {
    user : JSON.parse(localStorage.getItem("user")) || null,
    isLoading : false, 
    error : false, 
}
export const login = createAsyncThunk(
    'authentication/login',
    async (value, {rejectWithValue}) => {
        try {
           const data =  await authAPI.login(value)
           localStorage.setItem('user' , JSON.stringify(data))
           return data
        } catch (error) {
           return rejectWithValue(error.data.message)
        }
    }
)
const authSlice = createSlice({
    name : 'authentication' ,
    initialState, 
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(login.fulfilled , (state, action) => {
            state.user = action.payload;
        }) 

        }
    })
export default authSlice.reducer;