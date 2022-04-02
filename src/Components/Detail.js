import React, { useState , useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';

import {Nav , Button, Container, Row, Col} from 'react-bootstrap';

export default function Detail({ detailQuan, 
  onQuan_Initialize, onIncrease, onDecrease, onAddData,
  topNavActiveTap, clothesList, shoesList }){

  const [tap,setTap] = useState("info")
  const allProductList = [...clothesList, ...shoesList]  

  let history = useHistory();
  const { product_id } = useParams();
  const matchProduct = allProductList.find(product => product.id == product_id)
  
  const cartQuestion = () => {
      const goCart =  window.confirm("선택하신 상품이 장바구니에 담겼습니다.장바구니로 이동할까요??")
      if(goCart){
        history.push('/CoCo_project_ver.2_build/cart')
      }       
  }  
	
  const MATCH_PRODUCT_IMG = `${process.env.IMG_URL}/assets/${topNavActiveTap}/${topNavActiveTap}_${matchProduct.id}.jpg`
  const MATCH_PRODUCT_MAIN_IMG = `${process.env.IMG_URL}/assets/${topNavActiveTap}/${topNavActiveTap}_main_${matchProduct.id}.jpg`

  useEffect(()=>{
    localStorage.setItem("최근본상품",JSON.stringify([{id:`${matchProduct.id}`},{}]));
  },[])

  useEffect(()=>{    
    return ()=>{
      onQuan_Initialize()
    }    
  },[])

  return (
    <Container>
      <Row>        
        <Col md="6">
					<div>
            <img src={MATCH_PRODUCT_IMG} alt='product' width="100%" />
					</div>
        </Col>  

        <Col md="6">
          <div>
            <h4>{matchProduct.title}</h4>
            <p>{matchProduct.price}￦</p>
          </div>	

          <div>
            구매수량 : {detailQuan}  
            <input type="button" value="+" onClick={ onIncrease }/>
            <input type="button" value="-" onClick={ onDecrease }/>
          </div>

          <Button onClick={() => {
              onAddData( {id: matchProduct.id , name: matchProduct.title , price: matchProduct.price , quan: detailQuan});
              cartQuestion();        
          }}> 장바구니🛒 </Button> 
          <Button>바로구매</Button> 
        </Col> 

      </Row>
      <Row>
        <Nav className="mt-5" variant="tabs" defaultActiveKey="info">
        <Nav.Item>
            <Nav.Link eventKey="0" onClick={() => { setTap("info")}}>상세정보👀</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="1" onClick={() => { setTap("review")}}>고객리뷰👍</Nav.Link>
        </Nav.Item>    
        <Nav.Item>
            <Nav.Link eventKey="2" onClick={() => { setTap("qna")}}>문의사항🤷‍♀️</Nav.Link>
        </Nav.Item>                  
        </Nav>   
      
      </Row>

      <Row>
        <TabContent tap={tap} MATCH_PRODUCT_MAIN_IMG={MATCH_PRODUCT_MAIN_IMG}/>
      </Row>
    </Container> 
  )
}

function TabContent({tap, MATCH_PRODUCT_MAIN_IMG}){
  const tabUI = {
    info : 
    <div>
      <h3>
        상세정보 
      </h3>
      <span>
        놀라지 마세요
        상상도 못한 정체
      </span>
      <div>
        <img src={MATCH_PRODUCT_MAIN_IMG} alt='product' width="100%" />
			</div>
      
    </div>,

    review : <p>고객리뷰</p>,

    qna : <p>문의사항</p>
  }    

  return (
    <div>
      { tabUI[ tap ] }
    </div>
  )    
}



