import { combineReducers } from 'redux';

import cartQuan from './cartQuan';
import alertClose from './close';
import detailQuan from './detailQuan';

const rootReducer = combineReducers({
  cartQuan,
  alertClose,
  detailQuan
});

export default rootReducer;