import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <Profile />

    </div>
  );
}




export default App;