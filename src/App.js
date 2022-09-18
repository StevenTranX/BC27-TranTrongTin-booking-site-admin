import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MovieManagement from './Modules/Home/components/MovieManagement';
import Content from './Modules/Home/components/MovieManagement/components/Content';
import EditMovie from './Modules/Home/components/MovieManagement/components/Content/EditMovie';
import AddMovie from './Modules/Home/components/MovieManagement/components/Content/AddMovie';

import Login from './Modules/Authentication/Components/Login/Login';
import Register from './Modules/Authentication/Components/Register/Register';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChange = (value) => {
    setSelectedDate(value);
  };
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path="/admin" element={<MovieManagement />}>
          <Route index element={<Content />} />
          <Route path="admin/addMovie" element={<AddMovie />} />
          <Route path="admin/updateMovie/:movieID" element={<EditMovie />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
