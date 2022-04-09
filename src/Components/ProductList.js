import React, {useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom'
import Product from './Product';
import {Container, Row} from 'react-bootstrap'

export default function ProductList({
  clothesList, shoesList, setTopNavActiveTap, setBottomNavActiveTap}){

  const {product_param, category_param} = useParams()
  const location = useLocation()

  const getProductComponent = () => {
    switch(category_param){
      case "all" :
        return productList.all
      
      default :
        return productList.sorted
    }
  }

  const getTargetProductList = () => {
    switch(product_param){
      case 'clothes' :
        return clothesList
      
      case 'shoes' :
        return shoesList
    }
  }

  const productList = {
    all :
      <Container>    
        <Row>
          {              
            getTargetProductList()
            .map((eachProduct,index)=>{            
              return (<Product eachProduct={eachProduct} key={index}/>)
            })                 
          } 
        </Row>
      </Container>
    ,
    sorted :
      <Container>    
        <Row>
          {              
            getTargetProductList()
            .filter(eachProduct => eachProduct.category === category_param)
            .map((eachProduct,index)=>{                  
              return (<Product eachProduct={eachProduct} key={index}/>)
            })                 
          } 
        </Row>
      </Container>
  }

  useEffect(()=>{
    setTopNavActiveTap(product_param)
    setBottomNavActiveTap(category_param)
  },[location])

  return (
    getProductComponent()
  )
}