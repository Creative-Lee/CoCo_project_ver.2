import React from 'react';
import { useHistory } from 'react-router';
import {Col} from 'react-bootstrap';

function Product({clothes,topNavActiveTap}){

  const history = useHistory();
  const ASSET_IMG_URL = `${process.env.IMG_URL}/assets/${topNavActiveTap}/${topNavActiveTap}_${clothes.id}.jpg`

  return(
    
    <Col className="product" md='3' onClick={()=> { history.push(`/CoCo_project_ver.2_build/detail/${topNavActiveTap}/${clothes.id}`)} }>      
      <div className="product__img-wrap">        
        <img className="product__img" src={ASSET_IMG_URL} alt="product"/>
      </div> 
      <div className="product__text-wrap">
        <p className="product__text--brand">{clothes.brand}</p>
        <h1 className="product__text--title">{clothes.title}</h1> 
        <p className="product__text--price">{clothes.price}￦</p>
      </div>
    </Col>

  )
}

export default Product