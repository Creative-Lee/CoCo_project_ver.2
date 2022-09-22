import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';

function Cart({
  cartQuan,
  onIncrease,
  onDecrease,
  onDeleteData,
  setTopNavActiveTap,
  setBottomNavActiveTap,
}) {
  useEffect(() => {
    setTopNavActiveTap('none');
    setBottomNavActiveTap('none');
  }, []);

  return (
    <Container id="cart">
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
                <td>{a.price.toLocaleString()}</td>
                <td>{a.quan}</td>
                <td className="info__quantity-button-wrap">
                  <button
                    onClick={() => {
                      onIncrease(i);
                    }}
                  >
                    {' '}
                    +{' '}
                  </button>
                  <button
                    onClick={() => {
                      onDecrease(i);
                    }}
                  >
                    {' '}
                    -{' '}
                  </button>
                </td>
                <td>{(a.price * a.quan).toLocaleString()}</td>
                <td className="info__delete-button-wrap">
                  <button
                    onClick={() => {
                      onDeleteData(i);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
