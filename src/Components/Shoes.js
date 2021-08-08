import React from 'react';
import { useHistory } from 'react-router';
import {Col} from 'react-bootstrap';


function Shoes({filterdData,i}){
  let history = useHistory();
  
  return(
    <Col className="shoes" md='3' onClick={ ()=> { history.push(`/coco124/shoes/detail/${filterdData.id}`)} }>      
      <div className="shoes__img-wrap">        
        <img className="shoes__img" src={process.env.PUBLIC_URL + `/assets/shoe/shoe${i + 1}.jpg`} alt="shoes"/>
      </div> 
      <div className="shoes__text-wrap">
        <p className="shoes__text--brand">{filterdData.brand}</p>
        <h1 className="shoes__text--title">{filterdData.title}</h1> 
        <p className="shoes__text--price">{filterdData.price}￦</p>
      </div>
    </Col>
  )
}

export default Shoes;