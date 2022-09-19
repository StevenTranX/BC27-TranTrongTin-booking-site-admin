import React, { useEffect } from 'react';

import { TextField } from '@mui/material';

import { Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
// SWITCH
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// redux
import { useDispatch } from 'react-redux';
import { addUser } from '../../../../slices/userSlice';
import { useNavigate } from 'react-router-dom';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, control, handleSubmit, setValue } = useForm({
    defaultValue: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      maLoaiNguoiDung: '',
      hoTen: '',
      maNhom: 'GP01',
    },
  });

  const onSubmit = async (value) => {
    console.log(value);
    await dispatch(addUser({ ...value, maNhom: 'GP01' }));
    navigate('/admin/user');
  };
  const handleSelect = (evt) => {
    setUserType(evt.target.value);
    setValue('maLoaiNguoiDung', evt.target.value);
  };
  const [userType, setUserType] = useState('');

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper variant="outlined">
          <h1
            style={{
              fontWeight: 500,
              fontSize: '30px',
              textAlign: 'center',
              color: 'darkblue',
            }}
          >
            Add User
          </h1>
          <Grid container spacing={2} sx={{ margin: 2 }}>
            <Grid item xs={12} md={2.5} sx={{ marginBottom: '10px' }}>
              <TextField
                xs={{ width: '200px' }}
                color="secondary"
                id="outlined-basic"
                label="Username"
                variant="outlined"
                {...register('taiKhoan')}
              />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <TextField
                type="password"
                color="secondary"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                {...register('matKhau')}
              />{' '}
            </Grid>
            <Grid item xs={12} md={2.5}>
              <TextField
                type="email"
                color="secondary"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register('email')}
              />{' '}
            </Grid>
            <Grid item xs={12} md={2.5}>
              <TextField
                type="number"
                color="secondary"
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                {...register('soDt')}
              />
            </Grid>
            <Grid>
              <Box
                sx={{ minWidth: 120, marginTop: '24px', marginLeft: '16px' }}
              >
                <FormControl sx={{ width: '200px' }}>
                  <InputLabel id="demo-simple-select-label">
                    User Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="User Type"
                    value={userType}
                    {...register('maLoaiNguoiDung')}
                    onChange={handleSelect}
                  >
                    <MenuItem value="khachHang">Customer</MenuItem>
                    <MenuItem value="quanTri">Administrator</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={10} md={2.5}>
              <TextField
                sx={{ marginLeft: '30px', marginTop: '8px' }}
                color="secondary"
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                {...register('hoTen')}
              />
            </Grid>
          </Grid>
          <Button
            sx={{
              width: '150px',
              mx: 4,
              height: '50px',
              marginTop: '20px',
              marginRight: '50px',
            }}
            color="success"
            type="submit"
            variant="contained"
          >
            Add User
          </Button>
        </Paper>
      </form>
    </div>
  );
};

export default AddUser;
