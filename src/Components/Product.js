import React from 'react';
import { useNavigate } from 'react-router';
import {Col} from 'react-bootstrap';

function Product({clothes,shoes,topNavActiveTap}){

  const navigate = useNavigate();
  
  const target = () => {
    return topNavActiveTap === 'clothes' ? clothes : shoes
  }

  const ASSET_IMG_URL = `${process.env.IMG_URL}/assets/${topNavActiveTap}/${topNavActiveTap}_${target().id}.jpg`
  

  return(    
    <Col className="product" md='3' onClick={()=> { navigate(`/CoCo_project_ver.2_build/detail/${target().id}`)} }>      
      <div className="product__img-wrap">        
        <img className="product__img" src={ASSET_IMG_URL} alt="product"/>
      </div> 
      <div className="product__text-wrap">
        <p className="product__text--brand">{target().brand}</p>
        <h1 className="product__text--title">{target().title}</h1> 
        <p className="product__text--price">{target().price}￦</p>
      </div>
    </Col>

  )
}

export default Product