import React, {useState , useEffect} from "react";
import { Table,Container } from "react-bootstrap";

function Cart({cartQuan , onIncrease, onDecrease, onDeleteData }) {
  
  let [ discountAlert , setDiscountAlert ] = useState(false)

  useEffect(()=>{
    setDiscountAlert(true)
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

