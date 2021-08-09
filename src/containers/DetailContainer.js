import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Detail from '../Components/Detail'
import { increase , decrease , quan_Initialize  } from '../modules/detailQuan';
import { addData } from '../modules/cartQuan'

function DetailContainer({allData , setAllData }){
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const detailQuan  = useSelector( state =>  state.detailQuan ) 

    // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  
    // 각 액션들을 디스패치하는 함수들을 만드세요
  
  const onQuan_Initialize = () => dispatch(quan_Initialize());
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  const onAddData = (data) => dispatch(addData(data)); // cartQuan에서 가져옴

    
  return (
    <Detail   
    detailQuan={detailQuan}

    onQuan_Initialize={onQuan_Initialize}
    onIncrease={onIncrease}
    onDecrease={onDecrease}

    onAddData={onAddData} // cartQuan에서 가져옴

    allData={allData}
    setAllData={setAllData}   
  
    /> 
  )
}
export default DetailContainer;
