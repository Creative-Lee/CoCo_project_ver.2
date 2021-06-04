import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';

function Detail(props){

    let history = useHistory();
    let { item_id } = useParams();

    let matchItems = props.items.find(function(itemsData){
        if(itemsData.item_id == item_id){
        return true;
        }    
    });

    return (
        <div className="container">
            <div className="row">
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
            </div>
        </div> 
    )
}

export default Detail ;