import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MovieManagement from './Modules/Home/components/MovieManagement';
import Content from './Modules/Home/components/MovieManagement/components/Content';
import EditMovie from './Modules/Home/components/MovieManagement/components/Content/EditMovie';
import AddMovie from './Modules/Home/components/MovieManagement/components/Content/AddMovie';
import UserManagement from './Modules/Home/components/UserManagement/UserManagement';
import Login from './Modules/Authentication/Components/Login/Login';
import Register from './Modules/Authentication/Components/Register/Register';
import AddUser from './Modules/Home/components/UserManagement/components/Content/AddUser';
import EditUser from './Modules/Home/components/UserManagement/components/Content/EditUser';
import UserContent from './Modules/Home/components/UserManagement/components/Content/UserContent';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChange = (value) => {
    setSelectedDate(value);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<MovieManagement />}>
          <Route index element={<Content />} />
          <Route path="/admin/addMovie" element={<AddMovie />} />
          <Route path="/admin/updateMovie/:movieID" element={<EditMovie />} />
        </Route>
        <Route path="/admin/user" element={<UserManagement />}>
          <Route index element={<UserContent />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="updateUser/:userID" element={<EditUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
