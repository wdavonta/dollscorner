import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import DollsCorner from './components/DollsCorner';
import Parentstips from './components/ParentTips'
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return <About />;
        case 'Dolls Corner':
        return <DollsCorner />;
      case 'Parent Tips':
        return <Parentstips />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />

    }
  }


  return (
    <div>
    <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

    <main>
      {
        // Render the component returned by 'renderPage()'
        // YOUR CODE HERE
        <div>{renderPage(currentPage)}</div>
        //
      }
    </main>
    <Footer />
  </div>
);
}

export default App;
