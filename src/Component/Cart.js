import React, {useState} from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { increase , decrease , deleteData  } from '../modules/cartQuan';

import '../Detail.scss'

function Cart(props) {

  let [ discountAlert , setDiscountAlert ] = useState(true)

  return (
    <div>
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>수량변경</th>
            <th>총금액</th>
          </tr>
        </thead>
        <tbody>
          {props.cartInner.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.price}</td>
                <td>{a.quan}</td>
                <td>
                  <button onClick={ () => { props.dispatch( increase(i) ) }} > + </button>
                  <button onClick={ () => { props.dispatch( decrease(i) ) }} > - </button>
                </td>
                <td>{a.price * a.quan}</td>
                <td>
                  <button onClick={ () => { props.dispatch( deleteData(i) )}}> 삭제 </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {
        discountAlert === true &&
        (<div className="my-alert2">
        <p>지금 바로사면 20%할인해드림 개꿀 !</p>
        <button onClick={ () => { setDiscountAlert( false ) }} > 닫기 </button>
        </div>)
      }
    </div>
  );
}

//redux
function store데이터를_props로_변환해주는_함수(store안에_모든_state) {
  return {
    cartInner: store안에_모든_state.cartQuan, // store안에 모든 state에서 reducer1번에 해당하는 state를 cartProduct라는 이름으로 props 해서 쓸래요
    detailInner: store안에_모든_state.detailQuan
  };
}

export default connect(store데이터를_props로_변환해주는_함수)(Cart);
//redux
