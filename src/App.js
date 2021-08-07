import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import coconut from './img/coconut.jpg'
import 직사각배너 from './img/직사각배너.jpg'
import 정사각배너 from './img/정사각배너16.9.jpg'
import 나이뽀 from './img/형님사진/나이뽀.jpg'
import 까리 from './img/형님사진/까리.jpg'
import 까리2 from './img/형님사진/까리2.jpg'
import 마술사 from './img/형님사진/마술사.jpg'
import 바프2 from './img/바프16.9/바프2.jpg'
import 바프4 from './img/바프16.9/바프4.jpg'
import 바프5 from './img/바프16.9/바프5.jpg'
import 바프6 from './img/바프16.9/바프6.jpg'
import 바프7 from './img/바프16.9/바프7.jpg'
import 코코로고 from './img/코코 로고.png'
import 인스타로고 from './img/인스타로고.png'


import CartContainer from './containers/CartContainer'; 
import DetailContainer from './containers/DetailContainer';
import TopNav from './Components/layout/TopNav';
import BottomNav from './Components/layout/BottomNav';

import _shoesData from './Data/productData/shoesData/shoesData.js'
import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { Link, Route, Switch, useHistory, }  from 'react-router-dom';
import { Navbar,Nav,CloseButton,Button,Container,Row,Col,Offcanvas,Carousel} from 'react-bootstrap';



function App() {

  const [hiddenMenuShow, setHiddenMenuShow] = useState(false);

  const hiddenMenuClose = () => setHiddenMenuShow(false);
  const hiddenMenuOpen = () => setHiddenMenuShow(true);

  let [shoesData , setshoesData] = useState(_shoesData)
  let [wait,setWait] = useState(false);
  let [buttonState,setButtonState] = useState(0);
  const [topBanner,setTopBanner] = useState(false);
  const [moreStyle,setMoreStyle] = useState(false);
  const [navSelect,setNavSelect] = useState("community");

  const [navWheelStyle,setNavWheelStyle] = useState(false);

  const wheelUpDown = (e) => {
    if(e.deltaY > 0){
      setNavWheelStyle(true);
    }
    else{
      setNavWheelStyle(false);
    }
}

  useEffect(()=>{
    setTopBanner(true);
  },[])

  return (
    <div className="App" onWheel={wheelUpDown}>  
      {/* # 최상단 배너 # */} 
      {
        topBanner === true &&
        <div className="top-banner">
          <CloseButton variant="top-banner" onClick={()=>{setTopBanner(false)}}/>
          <p className="top-banner__inner">🤑 Fromcoco 첫 구매라면 최대 10,000원 할인! 🤑</p>
          <p className="top-banner__inner-hidden">🤑 첫 구매라면 최대 10,000원 할인! 🤑</p>
        </div>
      } 

    <header className="header">
      <TopNav navWheelStyle={navWheelStyle} hiddenMenuOpen={hiddenMenuOpen} setNavSelect={setNavSelect} coconut={coconut} 코코로고={코코로고}/>
      <BottomNav navWheelStyle={navWheelStyle} navSelect={navSelect}/>
    </header>

    <Offcanvas id="hidden-menu" show={hiddenMenuShow} onHide={hiddenMenuClose}>   {/* # 모바일네브 # */}

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

    <Switch> 
      <Route exact path="/coco124" basename="/coco124"> {/*# 메인페이지 # */}
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
            <div className="main-content__text-more"
              style={ moreStyle == true ? {backgroundColor : "white" , color: "black"} :null }>
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
      </Container>
    </div>
  </Route>

      <Route exact path="/coco124/shoes/new" basename="/coco124/shoes/new">
        <Container>
          <Row>
            {
              shoesData.map((a,i)=>{
                return (<Shoes shoesData={a} i={i} key={i}/>)
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
                setshoesData([...shoesData , ...result.data]);
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

      {/* <Route exact path="/coco124/clothes/new" basename="/coco124/clothes/new">
        <Container>
          <Row>
            {
              shoesData.map((a,i)=>{
                return (<Shoes shoesData={a} i={i} key={i}/>)
              })  
            }
          </Row>
        </Container>
      </Route> */}

      <Route path="/coco124/shoes/detail/:item_id" basename="/coco124/shoes/detail/:item_id">
            <DetailContainer shoesData={shoesData} setshoesData={setshoesData}/>
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
                  <div className="footer-inner__top-instar">
                      <div className="footer-inner__top-instar-01">주인장의 사생활이 궁금하다면👀</div>   
                      <a href="https://www.instagram.com/minsunki6613/" target="_blank">
                        <span>minsunki6613</span>{' '} <img src={인스타로고}/>
                      </a> 
                  </div>
                </div>
                <div className="footer-inner__mid">
                  <Nav as='ul' className="me-auto">
                    <Nav.Link as='li'><a href='/' target="_blank">브랜드 스토리</a></Nav.Link>
                    <Nav.Link as='li'><a href='/' target="_blank">이용약관</a></Nav.Link>
                    <Nav.Link as='li'><a href='/' target="_blank">채용정보</a></Nav.Link>              
                    <Nav.Link as='li'><a href='/' target="_blank">개인정보처리방침</a></Nav.Link>              
                    <Nav.Link as='li'><a href='/' target="_blank">코코상의 비밀</a></Nav.Link>              
                    <Nav.Link as='li'><a href='/' target="_blank">눌러보세요</a></Nav.Link>              
                    <Nav.Link as='li'><a href='/' target="_blank">으헤헤</a></Nav.Link>              
                    <Nav.Link as='li'><a href='/' target="_blank">비밀이지롱</a></Nav.Link>              
                  </Nav> 
                </div>
                <div className="footer-inner__bottom">
                  <Nav as='ul' className="me-auto">
                      <Nav as='li'>상호명: 프롬코코124번가</Nav>
                      <Nav as='li'>이메일(고객문의): fromcoco124@gmail.com</Nav>
                      <Nav as='li'>사업자등록번호: 000-11-2222222</Nav>              
                      <Nav as='li'>주소: 경기도 평택시 서재로 26-124</Nav>              
                      <Nav as='li'>대표이사: 민선기</Nav>              
                      <Nav as='li'>별명: 코코상</Nav>              
                      <Nav as='li'>특징: 근엄한 관종</Nav>              
                  </Nav>
                </div>
                <div className="footer-inner__woori">
                  <div className="footer-inner__woori-01">우리은행 채무지급보증 안내: 프롬코코 124번가는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결 할랑말랑 합니다. 안전거래는 나중에 보장해 드릴게유. </div>
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

function Shoes({shoesData,i}){
  let history = useHistory();
  return(
    <Col className="product" md='3' onClick={ ()=> { history.push(`/coco124/shoes/detail/${shoesData.id}`)} }>      
      <div className="product__img-wrap">        
        <img className="product__img" src={process.env.PUBLIC_URL + `/assets/shoe${i + 1}.jpg`} alt="Product"/>
      </div> 
      <div className="product__text-wrap">
        <h1 className="product__text--title">{shoesData.title}</h1> 
        <p className="product__text--price">{shoesData.price}￦</p>
      </div>
    </Col>
  )
}


export default App;
