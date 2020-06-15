import { combineReducers } from 'redux';

import Bag from './bag/reducer';
import Favorites from './favorites/reducer';
import Search from './search/reducer';

export default combineReducers({
  Bag,
  Favorites,
  Search,
});
