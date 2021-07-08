import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../Component/Cart1'
import { increase , decrease , deleteData} from '../modules/cartQuan';


function CartContainer(){
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const cartQuan  = useSelector( state =>  state.cartQuan) 
  

    // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();

    // 각 액션들을 디스패치하는 함수들을 만드세요
  
  const onDeleteData = (data) => dispatch(deleteData(data));
  const onIncrease = (i) => dispatch(increase(i));
  const onDecrease = (i) => dispatch(decrease(i));
    
  return (
    <Cart 
    cartQuan={cartQuan}
    onIncrease={onIncrease}
    onDecrease={onDecrease}
    onDeleteData={onDeleteData}
    /> 
  )
}
export default CartContainer;
