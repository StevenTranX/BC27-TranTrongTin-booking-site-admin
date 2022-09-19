import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAPI from '../../../apis/authAPI';
const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoading: false,
  error: false,
};
export const login = createAsyncThunk(
  'authentication/login',
  async (value, { rejectWithValue }) => {
    try {
      const data = await authAPI.login(value);
     
      if (data.data.content.maLoaiNguoiDung === 'QuanTri') {
        localStorage.setItem('user', JSON.stringify(data));
        alert ('Login successfully')
        
      } else {
        alert('Please login by administrator account')
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const register = createAsyncThunk(
  'authentication/register',
  async (value, { rejectWithValue }) => {
    try {
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      alert('Please login by administrator account')
    });
    
  },
});
export default authSlice.reducer;
