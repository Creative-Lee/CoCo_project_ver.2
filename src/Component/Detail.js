import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'

let 박스 = styled.div`
    padding : 20px;
`;
let 타이틀 = styled.h4`
    font-size : 25px;
    color : ${ props => props.색상 }
`;



function Detail(props){

    let history = useHistory();
    let { item_id } = useParams();

    let matchItems = props.items.find(x => x.item_id == item_id);

    return (
        <div className="container">
            <박스> 
                <타이틀 색상="blue">Detail</타이틀>
            </박스>
            <box className="row">
                    <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{matchItems.title}</h4>
                    <p>{matchItems.content}</p>
                    <p>{matchItems.price}￦</p>
                    <button className="btn btn-danger">주문하기</button> 
                    <button className="btn btn-danger" onClick={() =>{
                        history.goBack();
                    }} >뒤로가기</button> 
                </div>
            </box>
        </div> 
    )
}

export default Detail ;