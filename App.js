import React from 'react';
import NavBar from './components/navbar/navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './App.css'
import './index.css'
import Homepage from './pages/homepage';
import Loginpage from './pages/loginpage';
import Recipepage from './pages/recipepage';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  return (
    <Router>
    <NavBar/>
    
    <Routes>
    <Route exact path='/' element={<Homepage/>}/>
    <Route exact path='/login' element={<Loginpage/>}/>
    <Route exact path='/recipe' element={<Recipepage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
