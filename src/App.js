import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Home from './Modules/Home/pages/Home';
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
      </Routes>
    </>
  );
}

export default App;
