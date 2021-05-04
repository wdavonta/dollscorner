import React from 'react';
import Navbar from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import DollsCorner from './components/DollsCorner';
import Parentstips from './components/ParentTips'
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {


  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/dollscorner' component={DollsCorner} />
          <Route path='/parenttips' component={Parentstips} />
          <Route path='/contact-us' component={Contact} />
          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
        <Footer />
      </Router>
    );
  }

export default App;
