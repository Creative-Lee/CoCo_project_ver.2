import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';


import coconut from './img/coconut.jpg'
import 직사각배너 from './img/직사각배너.jpg'
import 정사각배너 from './img/정사각배너16.9.jpg'
import 나이뽀 from './img/나이뽀.jpg'
import 까리 from './img/까리.jpg'
import 까리2 from './img/까리2.jpg'
import 마술사 from './img/마술사.jpg'
import 바프1 from './img/바프/바프1.jpg'
import 바프2 from './img/바프16.9/바프2.jpg'
import 바프4 from './img/바프16.9/바프4.jpg'
import 바프5 from './img/바프16.9/바프5.jpg'
import 바프6 from './img/바프16.9/바프6.jpg'
import 바프7 from './img/바프16.9/바프7.jpg'
import 코코로고 from './img/코코 로고.png'

import CartContainer from './containers/CartContainer'; 
import DetailContainer from './containers/DetailContainer';
import BottomNav from './Components/BottomNav';
import productData from './productData'
import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { Link, Route, Switch, useHistory, }  from 'react-router-dom';
import { Navbar,Nav,CloseButton,Button,Container,Row,Col,Offcanvas,Carousel} from 'react-bootstrap';



function App() {

  const [hiddenMenuShow, setHiddenMenuShow] = useState(false);

  const hiddenMenuClose = () => setHiddenMenuShow(false);
  const hiddenMenuOpen = () => setHiddenMenuShow(true);

  let [productData_ , setProductData_] = useState(productData)
  let [wait,setWait] = useState(false);
  let [buttonState,setButtonState] = useState(0);

  const [topBanner,setTopBanner] = useState(false);

  const [moreStyle,setMoreStyle] = useState(false);

  const [navNumber,setNavNumber] = useState("community");

  useEffect(()=>{
    setTopBanner(true);
  },[])

  return (
    <div className="App">
    {/* #================= 최상단 배너 ===================# */}
      {
        topBanner === true &&
        <div className="top-banner">
          <CloseButton variant="top-banner" onClick={()=>{setTopBanner(false)}}/>
          <p className="top-banner__inner">🤑 Fromcoco 첫 구매라면 최대 10,000원 할인! 🤑</p>
          <p className="top-banner__inner-hidden">🤑 첫 구매라면 최대 10,000원 할인! 🤑</p>
        </div>
      }
    {/* #================= 최상단 배너 ===================# */}

    <header className="header">
      <Navbar id="top-navbar">
        <img src={coconut} alt="menu" className="top-navbar__hamburger" onClick={hiddenMenuOpen}></img>
        <Container id="top-navbar__container">
          <Navbar.Brand id="top-navbar__brand" href="/coco124">
            <img src={코코로고} className="top-navbar__logo"/>
          </Navbar.Brand>
          <Nav id="top-navbar__nav" className="me-auto" defaultActiveKey="1" variant="pills">
            <Nav.Link eventKey="1" href="/coco124" onClick={()=>{setNavNumber("community")}}>community</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/coco124/clothes" onClick={()=>{setNavNumber("clothes")}} >clothes</Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/coco124/shoes/new" onClick={()=>{setNavNumber("shoes")}}>shoes</Nav.Link>              
          </Nav>          
        </Container>
      </Navbar>

    {/* #================= bottom nav ===================# */}
      <BottomNav navNumber={navNumber}/>
    {/* #================= bottom nav ===================# */}
    </header>



    {/* #================= 히든메뉴 ===================# */}
    <Offcanvas id="hidden-menu" show={hiddenMenuShow} onHide={hiddenMenuClose}>

        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Fromcoco 124th</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <h1>여기에는 뭐든지 들어갑니다.</h1>
          <Nav id="hidden-menu__nav">
              <Nav.Link as={Link} to="/coco124/detail/0">men</Nav.Link>
              <Nav.Link as={Link} to="/coco124/detail/1">lady</Nav.Link>
              <Nav.Link as={Link} to="/coco124/detail/2">unisex</Nav.Link>
              <Nav.Link as={Link} to="/coco124/detail/2">unisex</Nav.Link>
              <Nav.Link as={Link} to="/coco124/detail/2">unisex</Nav.Link>
              <Nav.Link as={Link} to="/coco124/detail/2">unisex</Nav.Link>
          </Nav>
        </Offcanvas.Body>
    </Offcanvas>
    {/* #================= 히든메뉴 ===================# */}
 

    <Switch> 
      <Route exact path="/coco124" basename="/coco124">     

    <div className="home-header">
    <Container>    
      <Row>
      <Col md="9">
      <div className="main-content" >
                                      
        <a className="main-content__link" href="https://www.instagram.com/minsunki6613/" target="_blank"> 
          <div className="main-content__img-wrap"
          onMouseOver={()=>{setMoreStyle(true)}}
          onMouseOut={()=>{setMoreStyle(false)}}>
            <img className="main-content__img" src={까리2} alt="big brother"/> 
          </div>

          <div className="main-content__text-wrap">
            <div className="main-content__text">
              <span className="main-content__text-01">무한매력의 코코상!</span>          
              <span className="main-content__text-02">CEO 코코상 그의 성공비결을 취재하다</span>          
              <br/>
              <span className="main-content__text-03">__directed by Mr.Lee</span>  
            </div>
            <div className="main-content__text-more" style={
              moreStyle == true 
              ? {backgroundColor : "white" , color: "black"}
              :null
            }>
              보러가기
            </div>
          </div>

        </a> 
      </div>
    </Col>

        <Col md="3">
        <Carousel className="right-carousel">           
          <Carousel.Item interval={2300} >
            <img 
              src={바프2}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={2300} >
            <img 
              src={바프4}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={2300} >
            <img 
              src={바프5}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={2300} >
            <img 
              src={바프6}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={2300} >
            <img 
              src={바프7}
              alt="First slide"
            />
            </Carousel.Item>
          </Carousel>
        <div className="mini">
          <div className="mini-banner__img-wrap">
            <img className="mini-banner__img" src={정사각배너}/>
          </div>
        </div>
        </Col>
      </Row>
      <Row>
        <Col md="3">1</Col>
        <Col md="3">2</Col>
        <Col md="3">3</Col>
        <Col md="3">4</Col>
      </Row>
      </Container>

    </div>
  </Route>

      
      <Route exact path="/coco124/shoes/new" basename="/coco124/shoes/new">       
        <Container>
          <Row>
            {
              productData_.map((a,i)=>{
                return (<Shoes productData_={a} i={i} key={i}/>)
              })
            }
          </Row>

          {
            buttonState < 1 
            ? (<button className="btn btn-primary" onClick={()=>{
              setWait(true);
              setButtonState(buttonState+1);
              axios.get('https://codingapple1.github.io/shop/data2.json')

              //성공시
              .then((result)=>{ 
                setWait(false);
                setProductData_([...productData_ , ...result.data]);
              }) 
              
              //실패시
              .catch(()=>{
                setWait(false);                
              }) 
              
            }}>더보기</button> )

            :null          
          }

          { 
            wait === true && 
            <div className="wait"> 
              <p>로딩중입니댱</p> 
            </div>  
          } 
        </Container>
      </Route>

      <Route path="/coco124/shoes/detail/:item_id" basename="/coco124/shoes/detail/:item_id">
            <DetailContainer productData_={productData_} setProductData_={setProductData_}/>
      </Route>

      <Route path='/coco124/cart' basename="/coco124/cart">
        <CartContainer/>
      </Route>
      
      </Switch>
      
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <div className="footer-inner">
                <div className="footer-inner__top">
                  <div className="footer-inner__top-customer">
                    <div className="footer-inner__top-customer-01">고객센터⚡</div>
                    <div className="footer-inner__top-customer-02">1577-1577</div>
                    <div className="footer-inner__top-customer-03">평일 09:00 ~ 18:00 (주말 & 공유일제외)</div>
                  </div>
                  <div className="footer-inner__top-number">
                    <div className="footer-inner__top-number-01">계좌번호 👇</div>
                    <div className="footer-inner__top-number-02">우리은행: 010-1234-5678</div>
                    <div className="footer-inner__top-number-03">예금주: 민선기</div>
                  </div>
                </div>
                <div className="footer-inner__mid">
                  <Nav as='ul' className="me-auto">
                    <Nav.Link as='li'><a href='/' target="_blank">브랜드 스토리</a></Nav.Link>
                    <Nav.Link as='li'><a href='/' target="_blank">이용약관</a></Nav.Link>
                    <Nav.Link as='li'><a href='/' target="_blank">채용정보</a></Nav.Link>              
                    <Nav.Link as='li'><a href='/' target="_blank">궁금하면</a></Nav.Link>              
                    <Nav.Link as='li'><a href='/' target="_blank">아무거나</a></Nav.Link>              
                    <Nav.Link as='li'><a href='/' target="_blank">눌러보세요</a></Nav.Link>              
                    <Nav.Link as='li'><a href='/' target="_blank">으헤헤</a></Nav.Link>              
                  </Nav>    
                </div>
                <div className="footer-inner__bottom">
                  <Nav as='ul' className="me-auto">
                      <Nav as='li'>상호명: 프롬코코124번가</Nav>
                      <Nav as='li'>이메일(고객문의): fromcoco124@gmail.com</Nav>
                      <Nav as='li'>사업자등록번호: 000-11-2222222</Nav>              
                      <Nav as='li'>주소: 경기도 평택시 서재로 26-124</Nav>              
                      <Nav as='li'>대표이사: 민선기</Nav>              
                  </Nav>
                </div>
                <div className="footer-inner__copyright">
                  <p>Copyright 2021. Fromcoco 124th, Co. Ltd. All rights reserved</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
  
} 

function Shoes(props){
  let history = useHistory();
  return(
    <Col className="product" md='3' onClick={ ()=> { history.push(`/coco124/shoes/detail/${props.productData_.id}`)} }>      
      <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="100%" />
      <h5>{props.productData_.title}</h5>
      <p>{props.productData_.content}</p>
      <p>{props.productData_.price}￦</p>
    </Col>
  )
}


export default App;
