import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Home from './Modules/Home/pages/Home';
import Login from './Modules/Authentication/Components/Login/Login';
import Register from './Modules/Authentication/Components/Register/Register';
import Test from './Playground/Test/Test';
import { useState } from 'react';
function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChange = (value) => {
    setSelectedDate(value);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
