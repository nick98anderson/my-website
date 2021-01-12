import React, {useContext} from "react";


import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion'
import Home from './components/pages/Home';
import About from "./components/pages/About";


function App() {
 
  return (
    <div className='app-container'>
    <Router>
      <Navbar/>

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
