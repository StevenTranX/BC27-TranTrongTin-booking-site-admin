import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userAPI from '../../../apis/userAPI';

const initialState = {
  users: [],
  selectedUser: null,
};
export const getUsers = createAsyncThunk(
  'UserManagement/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userAPI.getUsers();
      return data.content;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.content);
    }
  }
);
export const addUser = createAsyncThunk(
  'UserManagement/addUser',
  async (user, { rejectWithValue, dispatch }) => {
    try {
      await userAPI.addUser(user);
      console.log(user);
      dispatch(getUsers());
      alert('Add User SuccessFully');
    } catch (error) {
      alert('Add User Failed');
      console.log(error);
      return rejectWithValue(error.response.data.content);
    }
  }
);
export const getUserData = createAsyncThunk(
  'UserManagement/getUserData',
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await userAPI.getUserData(username);
      // alert(`Get UserData : ${username} successfully`)
      return data.content;
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.response.data.content);
    }
  }
);
export const updateUser = createAsyncThunk(
  'UserManagement/UpdateUser',
  async (user, { rejectWithValue, dispatch }) => {
    try {
      await userAPI.updateUser(user);
      dispatch(getUsers());
      alert('Update SuccessFully');
    } catch (error) {
      alert('Update Failed');
      rejectWithValue(error.response.data)
      console.log(error.response.data);
    }
  }
);
export const deleteUser = createAsyncThunk(
  'UserManagement/DeleteUser',
  async (value, { rejectWithValue, dispatch }) => {
    try {
      await userAPI.deleteUser(value);
      alert('Delete User SuccessFully');
      dispatch(getUsers());
    } catch (error) {
      alert(error.response.data.content);
      return rejectWithValue(error.response?.data.content);
    }
  }
);
const userSlice = createSlice({
  name: 'UserManagement/user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      console.log('payload' , action.payload);
      state.selectedUser = action.payload;
    });

  },
});

export default userSlice.reducer;
