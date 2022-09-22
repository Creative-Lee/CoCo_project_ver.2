import { combineReducers } from 'redux';

import cartQuan from './cartQuan';
import detailQuan from './detailQuan';

const rootReducer = combineReducers({
  cartQuan,  
  detailQuan
});

export default rootReducer;