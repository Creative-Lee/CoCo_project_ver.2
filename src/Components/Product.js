import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Col} from 'react-bootstrap';

export default function Product({product}){

  const navigate = useNavigate();  
  const {product_param} = useParams()

  const ASSET_IMG_URL = `${process.env.IMG_URL}/assets/${product_param}/${product_param}_${product.id}.jpg`

  return(    
    <Col id="product" md='3' onClick={()=> { navigate(`/CoCo_project_ver.2/detail/${product.id}`)}}>      
      <div className="product__img-wrap">        
        <img className="product__img" src={ASSET_IMG_URL} alt="product"/>
      </div> 
      <div className="product__text-wrap">
        <p className="product__text--brand">{product.brand}</p>
        <h1 className="product__text--title">{product.title}</h1> 
        <p className="product__text--price">{product.price}￦</p>
      </div>
    </Col>

  )
}

