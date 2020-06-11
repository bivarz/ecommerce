import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Bag from './pages/Bag';
import Favorites from './pages/Favorites';
import Products from './pages/Products';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/bag" component={Bag} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/products/:id" component={Products} />
    </Switch>
  );
}
