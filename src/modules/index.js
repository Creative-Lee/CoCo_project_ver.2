import { combineReducers } from 'redux';

import cartQuan from './cartQuan';
import alertClose from './close';

const rootReducer = combineReducers({
  cartQuan,
  alertClose
});

export default rootReducer;