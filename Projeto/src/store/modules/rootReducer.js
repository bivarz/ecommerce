import { combineReducers } from 'redux';

import Bag from './bag';
import Favorites from './favorites';
import Search from './search';

export default combineReducers({
  Bag,
  Favorites,
  Search,
});
