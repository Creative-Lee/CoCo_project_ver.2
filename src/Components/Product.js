import React from 'react';
import { useHistory } from 'react-router';
import {Col} from 'react-bootstrap';


function Product({filterdData,targetProduct }){
  let history = useHistory();

  return(
    
    <Col className="product" md='3' onClick={ ()=> { history.push(`/coco124/detail/${filterdData.id}`)} }>      
      <div className="product__img-wrap">        
        <img className="product__img" src={process.env.PUBLIC_URL + `/assets/${targetProduct}/${targetProduct}${filterdData.id + 1}.jpg`} alt="product"/>
      </div> 
      <div className="product__text-wrap">
        <p className="product__text--brand">{filterdData.brand}</p>
        <h1 className="product__text--title">{filterdData.title}</h1> 
        <p className="product__text--price">{filterdData.price}￦</p>
      </div>
    </Col>

  )
}

export default Product