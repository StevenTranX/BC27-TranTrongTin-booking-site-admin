import React from 'react';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import moment from 'moment';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
// SWITCH
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// redux
import { useDispatch } from 'react-redux';
import { addMovies } from '../../../../slices/movieListSlice';

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
const ContentForm = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const { register, control, handleSubmit, setValue } = useForm({
    defaultValue: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      ngayKhoiChieu: '',
      sapChieu: false,
      dangChieu: false,
      hot: false,
      hinhAnh: {},
    },
  });
  // const handleChangeDate = (event) => {

  // };
  const handleUpload = (event) => {
    const file = event.target.files[0];
    setValue('hinhAnh', file);
  };
  const onSubmit = (value) => {
    const formattedDate = moment(value.ngayKhoiChieu).format('DD/MM/YYYY');
    setValue('ngayKhoiChieu', formattedDate);

    dispatch(addMovies(value));
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Add Movie</h1>
        <TextField
          id="outlined-basic"
          label="Movie Name"
          variant="outlined"
          {...register('tenPhim')}
        />
        <TextField
          id="outlined-basic"
          label="Trailer"
          variant="outlined"
          {...register('trailer')}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          {...register('moTa')}
        />
        <Controller
          name="ngayKhoiChieu"
          defaultValue={date}
          control={control}
          render={({ field: { onChange, ...restField } }) => (
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                inputFormat="DD/MM/YYYY"
                label="Request Date"
                onChange={(event) => {
                  onChange(event);
                  // handleChangeDate(event);
                }}
                renderInput={(params) => <TextField {...params} />}
                {...restField}
              />
            </LocalizationProvider>
          )}
        />
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          label="is Showing"
          {...register('dangChieu')}
        />
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          label="about to Show"
          {...register('sapChieu')}
        />
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          label="Hot"
          {...register('hot')}
        />
        <Button variant="contained" component="label">
          Upload File
          <input
            type="file"
            hidden
            {...register('hinhAnh')}
            onChange={handleUpload}
          />
        </Button>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContentForm;
