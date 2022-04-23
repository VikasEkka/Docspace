import './App.css';
import React from 'react';
import Login from './components/authentication/Login';
import Logout from './components/authentication/logoutButton';

function App() {
  return (
    <div>
    <Login/>
    <Logout/>
    </div>
  );
}

export default App;
