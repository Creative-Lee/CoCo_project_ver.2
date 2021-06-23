import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ReactDOM from 'react-dom';
import  {BrowserRouter}  from 'react-router-dom';
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
//Action types



let initState = [
  {
    id : 0 , 
    name : 'shoes' ,
    price : 120000,
    quan : 2
  },
  {
    id: 1 , 
    name : 'pants',
    price : 110000,
    quan : 3
  },
  {
    id: 2 , 
    name : 'shirt',
    price : 100000,
    quan : 4
  }
]

let initAlertState = true;



function reducer(state = initState , action){
  if( action.type === '수량증가'){
    let copyState = [...state];
    copyState[0].quan++;
    return copyState
  }

  else if( action.type === '수량감소' ){
    let copyState = [...state];
    
    if(copyState[0].quan === 0 ){
      return state
    }
    else{
      copyState[0].quan--;
      return copyState
    }
  }

  else {
    return state
  }
}

function reducer2(state = initAlertState , action){
  if( action.type  === '닫기버튼클릭' ){
    state = false;
    return state;
  }
  else{
    return state;
  }
}


const store = createStore(combineReducers({ reducer , reducer2 }));



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
