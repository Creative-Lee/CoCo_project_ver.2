import React , { memo, useEffect, } from 'react';
import { useHistory } from 'react-router';
import {Col} from 'react-bootstrap';


function Product({filterdData,i,targetProduct }){
  let history = useHistory();
  // ---------이것은 실험용이오----------
  // const target = {
  //   shoes :    <Col className="product" md='3' onClick={ ()=> { history.push(`/coco124/detail/${filterdData.id}`)} }>      
  //               <div className="product__img-wrap">        
  //                 <img className="product__img" src={process.env.PUBLIC_URL + `/assets/${targetProduct}/${targetProduct}${i + 1}.jpg`} alt="product"/>
  //               </div> 
  //               <div className="product__text-wrap">
  //                 <p className="product__text--brand">{filterdData.brand}</p>
  //                 <h1 className="product__text--title">{filterdData.title}</h1> 
  //                 <p className="product__text--price">{filterdData.price}￦</p>
  //               </div>
  //               </Col>,
  //   clothes : <Col className="product" md='3' onClick={ ()=> { history.push(`/coco124/detail/${filterdData.id}`)} }>      
  //               <div className="product__img-wrap">        
  //                 <img className="product__img" src={process.env.PUBLIC_URL + `/assets/${targetProduct}/${targetProduct}${i + 1}.jpg`} alt="product"/>
  //               </div> 
  //               <div className="product__text-wrap">
  //                 <p className="product__text--brand">{filterdData.brand}</p>
  //                 <h1 className="product__text--title">{filterdData.title}</h1> 
  //                 <p className="product__text--price">{filterdData.price}￦</p>
  //               </div>
  //               </Col>
  // }
  return(
    
    <Col className="product" md='3' onClick={ ()=> { history.push(`/coco124/detail/${filterdData.id}`)} }>      
      <div className="product__img-wrap">        
        <img className="product__img" src={process.env.PUBLIC_URL + `/assets/${targetProduct}/${targetProduct}${i + 1}.jpg`} alt="product"/>
      </div> 
      <div className="product__text-wrap">
        <p className="product__text--brand">{filterdData.brand}</p>
        <h1 className="product__text--title">{filterdData.title}</h1> 
        <p className="product__text--price">{filterdData.price}￦</p>
      </div>
    </Col>

    // ---------이것은 실험용이오----------
    // <>
    //   {target[targetProduct]}
    // </>
    
  )
}

export default Product