import React, {useState , useEffect} from "react";
import { Table,Container } from "react-bootstrap";

function Cart({cartQuan , onIncrease, onDecrease, onDeleteData,
setTopNavActiveTap, setBottomNavActiveTap}) {  

  useEffect(()=>{
    setTopNavActiveTap('none')
    setBottomNavActiveTap('none')
  },[])

  return (
    <div>
      <Container>
      <Table responsive="md">
        <thead>
          <tr>            
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>수량변경</th>
            <th>총금액</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartQuan.map((a, i) => {
            return (
              <tr key={i}>               
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
      </Container>
      <div>
        이곳은 최근본상품
      </div>
    </div>
  );
}

export default Cart;

