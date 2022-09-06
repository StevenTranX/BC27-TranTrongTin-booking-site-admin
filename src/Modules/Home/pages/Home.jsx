import React from 'react';
import MovieManagement from '../components/MovieManagement';
import Register from '../components/Register';
import Login from '../components/Login';

const Home = () => {
  return (
    <div>
      <MovieManagement />
      <Register />
      <Login />
    </div>
  );
};

export default Home;
