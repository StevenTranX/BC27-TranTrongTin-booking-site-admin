import React, { useEffect } from "react";
import { TextField } from "@mui/material";

import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
// SWITCH
import Button from "@mui/material/Button";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getUserData, updateUser } from "../../../../slices/userSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditUser = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { selectedUser } = useSelector((state) => state.user);
  console.log(selectedUser);

  const [userType, setUserType] = useState(selectedUser?.maLoaiNguoiDung);
  const [userNumber, setUserNumber] = useState(selectedUser?.soDT)
  const { register, control, handleSubmit, reset, setValue } = useForm({
    
    defaultValue: {
      taiKhoan: "",
      matKhau: "",
      email: "",
    //   soDt: "",
      maLoaiNguoiDung: "",
      hoTen: "",
      maNhom: "GP01",
    },
  });
  useEffect(() => {
    dispatch(getUserData(params.userID));
  }, []);

  useEffect(() => {
    setUserType(selectedUser?.maLoaiNguoiDung);
  }, [selectedUser?.maLoaiNguoiDung]);

  useEffect(() => {
    reset(selectedUser);
  }, [selectedUser]);
  
  useEffect(() => {
    setUserNumber(selectedUser?.soDT);
  }, [selectedUser?.soDT]);

  const handleSelect = (evt) => {
    setUserType(evt.target.value);
    setValue("maLoaiNguoiDung", evt.target.value);
  };
  const onSubmit = async (value) => {
    console.log(value)
    try {
      await dispatch(updateUser(value)).unwrap();
      // navigate('/admin/user')
      
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper variant='outlined'>
          <h1
            style={{
              fontWeight: 500,
              fontSize: "30px",
              textAlign: "center",
              color: "darkblue",
            }}
          >
            Update User
          </h1>
          <Grid container spacing={2} sx={{ margin: 2 }}>
            <Grid item xs={12} md={2.5} sx={{ marginBottom: "10px" }}>
              <TextField
                disabled
                xs={{ width: "200px" }}
                color='secondary'
                id='outlined-basic'
                label='Username'
                variant='outlined'
                {...register("taiKhoan")}
              />
            </Grid>
            <Grid item xs={12} md={2.5}>
              <TextField
                type='password'
                color='secondary'
                id='outlined-basic'
                label='Password'
                variant='outlined'
                {...register("matKhau")}
              />{" "}
            </Grid>
            <Grid item xs={12} md={2.5}>
              <TextField
                type='email'
                color='secondary'
                id='outlined-basic'
                label='Email'
                variant='outlined'
                {...register("email")}
              />{" "}
            </Grid>
            <Grid item xs={12} md={2.5}>
              <TextField
                
                type='number'
                color='secondary'
                id='outlined-basic'
                label='Phone Number'
                variant='outlined'
                value={userNumber}
                {...register("soDt")}
              />
            </Grid>
            <Grid>
              <Box
                sx={{ minWidth: 120, marginTop: "24px", marginLeft: "16px" }}
              >
                <FormControl sx={{ width: "200px" }}>
                  <InputLabel id='demo-simple-select-label'>
                    User Type
                  </InputLabel>
                  <Select
                    label='User Type'
                    value={userType}
                    {...register("maLoaiNguoiDung")}
                    onChange={handleSelect}
                  >
                    <MenuItem value='KhachHang'>Customer</MenuItem>
                    <MenuItem value='QuanTri'>Administrator</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={10} md={2.5}>
              <TextField
                sx={{ marginLeft: "30px", marginTop: "8px" }}
                color='secondary'
                id='outlined-basic'
                label='Full Name'
                variant='outlined'
                {...register("hoTen")}
              />
            </Grid>
          </Grid>
          <Button
            sx={{
              width: "150px",
              mx: 4,
              height: "50px",
              marginTop: "20px",
              marginRight: "50px",
            }}
            color='success'
            type='submit'
            variant='contained'
          >
            Update User
          </Button>
        </Paper>
      </form>
    </div>
  );
};

export default EditUser;
