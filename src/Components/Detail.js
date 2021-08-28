import React, { useState , useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';

import { Navbar,Nav,CloseButton,Button,Container,Row,Col,Offcanvas,Carousel} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

function Detail({ detailQuan, 
  onQuan_Initialize, onIncrease, onDecrease, onAddData,
  allData , setAllData ,
  targetProduct ,
}){

  const [tap,setTap] = useState("info")
  const [aniState,setAniState] = useState(false); 
  const [alertState,setAlertState] = useState(true);

  useEffect(()=>{
    let stockAlert = setTimeout(()=>{setAlertState(false)} , 2000);
    
		return ()=>{
      clearTimeout(stockAlert);
      onQuan_Initialize()
    }
  },[]);


    let history = useHistory();

    const { data_id } = useParams();
    let matchItems = allData[targetProduct].find( product => product.id == data_id)
    
    function question(){
        let result =  window.confirm("선택하신 상품이 장바구니에 담겼습니다.장바구니로 갈텨??")
        if(result){
            history.push('/coco124/cart')
        }       
    }
		
    return (
      <Container>
        <Row>        
          <Col md="6">
						<div>
              <img src={process.env.PUBLIC_URL + `/assets/${targetProduct}/${targetProduct}_${matchItems.id}.jpg`} width="100%" />
						</div>
          </Col>  
          <Col md="6">
						<div>
							<h4>{matchItems.title}</h4>
							<p>{matchItems.price}￦</p>
						</div>	

            <div>
              구매수량 : {detailQuan}  
              <input type="button" value="+" onClick={ onIncrease }/>
              <input type="button" value="-" onClick={ onDecrease }/>
            </div>

              <Button onClick={() => {
                  onAddData( {id: matchItems.id , name: matchItems.title , price: matchItems.price , quan: detailQuan});
                  question();        
              }}> 장바구니 </Button> 
              <Button onClick={() => { history.goBack() }} >목록으로</Button> 
              
              {
                alertState === true &&  
                (<div className="my-alert">
                    <p>낫 이너프 재고</p>
                </div>)
              }

            </Col>  
          </Row>

                <Nav className="mt-5" variant="tabs" defaultActiveKey="0">
                <Nav.Item>
                    <Nav.Link eventKey="0" onClick={() => { setTap("info"); setAniState(false) }}>상세정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="1" onClick={() => { setTap("review"); setAniState(false) }}>고객리뷰</Nav.Link>
                </Nav.Item>    
                <Nav.Item>
                    <Nav.Link eventKey="2" onClick={() => { setTap("question"); setAniState(false) }}>문의사항</Nav.Link>
                </Nav.Item>                  
                </Nav>

                <CSSTransition in={aniState} classNames="wow" timeout={500}>
                <TabContent 
                    tap={tap} setAniState={setAniState}
                />
                </CSSTransition>
        </Container> 
    )
}


function TabContent({tap , setAniState}){
    const tabUI = {
            info : <p>상세정보</p>,
            review : <p>고객리뷰</p>,
            question : <p>문의사항</p>
    }

    useEffect(()=>{
        setAniState(true)
    })

    return (
        <div>
            { tabUI[ tap ] }
        </div>
    )
    
}

export default Detail;

