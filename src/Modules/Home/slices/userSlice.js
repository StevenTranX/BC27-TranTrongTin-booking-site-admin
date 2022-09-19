
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userAPI from '../../../apis/userAPI';

const initialState = {
  users: [],
  selectedUser : null,
};
export const getUsers = createAsyncThunk(
    'UserManagement/getUser',
    async (_, { rejectWithValue }) => {
      try {
        const  {data}  = await userAPI.getUsers();
        return data.content
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.data.content);
      }
    }
  );
  const userSlice = createSlice({
    name: 'UserManagement/user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getUsers.fulfilled, (state, action) => {
        console.log(action.payload);
        state.users = action.payload;
        state.isLoading = false;
      });

  }
  });
  export default userSlice.reducer;