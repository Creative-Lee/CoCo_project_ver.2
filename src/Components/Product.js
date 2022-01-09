import React from 'react';
import { useHistory } from 'react-router';
import {Col} from 'react-bootstrap';

function Product({filterdData,targetProduct}){
    
  // const publicDirImg = () =>{
  //   const path = `/assets/${targetProduct}/${targetProduct}_${filterdData.id}.jpg`
  //   const homepage = `https://creative-lee.github.io/CoCo_project_ver.2_build`
  //   switch (process.env.NODE_ENV){
  //     case 'production' :
  //       return homepage+path      
  //     case 'development' :
  //       return path
  //   }
  // }

  const history = useHistory();
  const ASSET_IMG_URL = `${process.env.IMG_URL}/assets/${targetProduct}/${targetProduct}_${filterdData.id}.jpg`

  return(
    
    <Col className="product" md='3' onClick={ ()=> { history.push(`/CoCo_project_ver.2_build/detail/${targetProduct}/${filterdData.id}`)} }>      
      <div className="product__img-wrap">        
        <img className="product__img" src={ASSET_IMG_URL} alt="product"/>
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