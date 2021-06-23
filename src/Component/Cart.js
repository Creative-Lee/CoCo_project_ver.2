import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <Table responsive="md">
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>수량변경</th>
            <th>총금액</th>
          </tr>
        </thead>
        <tbody>
          {props.cartProduct.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.name}</td>
                <td>{a.price}</td>
                <td>{a.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량증가" });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량감소" });
                    }}
                  >
                    -
                  </button>
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {
        props.alertState === true
        ? (<div className="my-alert2">
          <p>지금 바로사면 20%할인해드림 개꿀 !</p>
          <button onClick={ () => { props.dispatch({ type : '닫기버튼클릭' }) }} >닫기</button>
        </div>)
        : null
      }
    </div>
  );
}

//redux
function store데이터를_props로_변환해주는_함수(store안에_모든_state) {
  return {
    cartProduct: store안에_모든_state.reducer, // store안에 모든 state에서 reducer1번에 해당하는 state를 cartProduct라는 이름으로 props 해서 쓸래요
    alertState: store안에_모든_state.reducer2,
  };
}

export default connect(store데이터를_props로_변환해주는_함수)(Cart);
//redux
