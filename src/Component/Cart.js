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
                                <tr key={i}>
                                    <td>{ a.name }</td>
                                    <td>{ a.price }</td>
                                    <td>{ a.quan }</td>
                                    <td>
                                        <button onClick={ ()=>{ props.dispatch({ type : '수량증가' }) } }>+</button>
                                        <button onClick={ ()=>{ props.dispatch({ type : '수량감소' }) } }>-</button>
                                    </td>  
                                    <td></td>
                                </tr>
                        )  
                    })
                }
                </tbody>
            </Table>
    )
}


//redux
function store데이터를_props로_변환해주는_함수(store에_만든state){
    return {
        cartProduct : store에_만든state // store에_만든state를 cartProduct라는 이름으로 props 해서 쓸래요
    }
};

export default connect(store데이터를_props로_변환해주는_함수)(Cart)
//redux
