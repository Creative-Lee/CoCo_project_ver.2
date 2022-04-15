import React, {useEffect} from 'react';
import {useParams, useLocation, useNavigate} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'

export default function ProductList({
  clothesList, shoesList, setTopNavActiveTap, setBottomNavActiveTap}){

  const location = useLocation()
  const navigate = useNavigate();
  const {product_param, category_param} = useParams()

  const Product = ({eachProduct}) => {
    const ASSET_IMG_URL = `${process.env.IMG_URL}/assets/${product_param}/${product_param}_${eachProduct.id}.jpg`

    return (
    <Col id="product" md='3' onClick={()=> { navigate(`/CoCo_project_ver.2/detail/${eachProduct.id}`)}}>      
    <div className="product__img-wrap">        
      <img className="product__img" src={ASSET_IMG_URL} alt="product"/>
    </div> 
    <div className="product__text-wrap">
      <p className="product__text--brand">{eachProduct.brand}</p>
      <h1 className="product__text--title">{eachProduct.title}</h1> 
      <p className="product__text--price">{eachProduct.price}￦</p>
    </div>
    </Col>
    )
  }  
  
  const getTargetProductList = () => {
    switch(product_param){
      case 'clothes' :
        return clothesList
      
      case 'shoes' :
        return shoesList
    }
  }
  
  const getProductComponent = () => {
    switch(category_param){
      case "all" :
        return productList.all
      
      default :
        return productList.sorted
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