import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import CloseProvider from './context/Close';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

function App() {
  return (
    <CloseProvider>
      <>
        <Router>
          <Routes />
          <Header />

          <GlobalStyle />
          <Footer />
        </Router>
      </>
    </CloseProvider>
  );
}

export default App;
