import React from 'react';
import MovieManagement from '../components/MovieManagement';
import Register from '../../Authentication/Components/Register';
import Login from '../../Authentication/Components/Login';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
const Home = () => {
  return (
    <div>
      <MovieManagement />
    </div>
  );
};

export default Home;
