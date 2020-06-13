import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
        <Header />

        <GlobalStyle />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
