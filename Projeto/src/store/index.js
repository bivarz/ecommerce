// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore } from 'redux';

import reducer from './modules/bag/reducer';

const store = createStore(reducer);

export default store;
