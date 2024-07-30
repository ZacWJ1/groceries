import React from 'react';
import NavBar from './components/navbar/navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import './index.css'
import Homepage from './pages/homepage';



function App() {
  
  return (
    <Router>
    <NavBar/>
    <Homepage/>
    </Router>
  );
}

export default App;
