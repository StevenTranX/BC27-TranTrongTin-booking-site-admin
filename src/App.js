import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Login from './Modules/Authentication/Components/Login/Login';
import Register from './Modules/Authentication/Components/Register/Register';

import { useState } from 'react';
import MovieManagement from './Modules/Home/components/MovieManagement';
import Content from './Modules/Home/components/MovieManagement/components/Content';
import ContentForm from './Modules/Home/components/MovieManagement/components/Content/ContentForm';
function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChange = (value) => {
    setSelectedDate(value);
  };
  return (
    <>
      <Routes>
        <Route path = "/" element = {<MovieManagement/>}>
            <Route path="index" element={<Content />} />
            <Route path="admin/addMovie" element={<ContentForm />} />
        </Route>
       
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
