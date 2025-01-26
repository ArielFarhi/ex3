import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import './app.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
