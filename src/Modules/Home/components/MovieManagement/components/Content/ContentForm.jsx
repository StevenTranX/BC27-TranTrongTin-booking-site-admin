import React from 'react';
import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { useState } from 'react';
const ContentForm = () => {
  const [inputs, setInputs] = useState({
    maPhim: 0,
    tenPhim: '',
    trailer: '',
    moTa: '',
    maNhom: '',
    ngayKhoiChieu: false,
    sapChieu: false,
    dangChieu: false,
    hot: false,
  });
  return (
    <div>
      <form>
        <h1>Add Movie</h1>
        <TextField id="outlined-basic" label="Movie Name" variant="outlined" />
        <TextField id="outlined-basic" label="Trailer" variant="outlined" />
        <TextField id="outlined-basic" label="Description" variant="outlined" />
      </form>
    </div>
  );
};

export default ContentForm;
