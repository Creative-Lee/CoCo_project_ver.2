import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Product from './Product';
import {Container, Row} from 'react-bootstrap'

export default function ProductList({
  clothesList, shoesList}){

  useEffect(()=>{
    console.log('Visit')
  },[])

  const {product_param, category_param} = useParams()
  
  const getJSXOfProductList = () => {
    switch(category_param){
      case "all" :
        return productList.all
      
      default :
        return productList.filterd
    }
  }

  const getTargetList = () => {
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
            getTargetList().map((product,index)=>{            
              return (<Product product={product} key={index}/>)
            })                 
          } 
        </Row>
      </Container>
    ,
    filterd :
      <Container>    
        <Row>
          {              
            getTargetList()
            .filter(product => product.category === category_param)
            .map((product,index)=>{                  
              return (<Product product={product} key={index}/>)
            })                 
          } 
        </Row>
      </Container>
  }

  return (
    getJSXOfProductList()
  )
}