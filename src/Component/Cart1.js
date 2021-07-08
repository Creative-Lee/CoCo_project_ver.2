import React, {useState} from "react";
import { Table } from "react-bootstrap";

import '../Detail.scss'

function Cart({cartQuan , onIncrease, onDecrease, onDeleteData}) {
  
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
          {cartQuan.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.price}</td>
                <td>{a.quan}</td>
                <td>
                  <button onClick={ ()=> { onIncrease(i) } } > + </button>
                  <button onClick={ ()=> { onDecrease(i) } } > - </button>
                </td>
                <td>{a.price * a.quan}</td>
                <td>
                  <button onClick={ ()=> { onDeleteData(i) } }> 삭제 </button>
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

export default Cart;

