import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import cartQuan from './cartQuan';
import alertClose from './close';

const rootReducer = combineReducers({
  counter,
  todos,
  cartQuan,
  alertClose
});

export default rootReducer;