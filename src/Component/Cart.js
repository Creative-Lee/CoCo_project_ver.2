import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props){
    return (
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
                
                {
                    props.cartProduct.map((a,i)=>{
                        return(
                            <CartTd cartProduct={a}></CartTd>
                        )  
                    })
                }
                </tbody>
            </Table>
    )
}

function CartTd(props){
    return (
        <tr>
            <td>{ props.cartProduct.name }</td>
            <td>{ props.cartProduct.price }</td>
            <td>{ props.cartProduct.quan }</td>
            <td>{ 0 }</td>
            <td>{ 0 }</td>
        </tr>
    )
}

//redux
function cartProduct(cartProduct){
    return {
        cartProduct : cartProduct
    }
};
export default connect(cartProduct)(Cart)
//redux
