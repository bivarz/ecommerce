import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

function App() {
  return (
    <Router>
      <Routes />
      <Header />

      <GlobalStyle />
      <Footer />
    </Router>
  );
}

export default App;
