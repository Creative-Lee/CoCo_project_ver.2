import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';


import coconut from './img/coconut.jpg'
import banner1 from './img/직사각배너.jpg'
import banner2 from './img/정사각배너.jpg'
import 나이뽀 from './img/나이뽀.jpg'
import 까리 from './img/까리.jpg'
import 까리2 from './img/까리2.jpg'
import 마술사 from './img/마술사.jpg'
import 바프1 from './img/바프1.jpg'
import 바프2 from './img/바프2.jpg'
import 바프4 from './img/바프4.jpg'
import 바프5 from './img/바프5.jpg'
import 바프6 from './img/바프6.jpg'
import 바프7 from './img/바프7.jpg'
import 코코로고 from './img/코코 로고.png'

import CartContainer from './containers/CartContainer'; 
import DetailContainer from './containers/DetailContainer';

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

  useEffect(()=>{
    setTopBanner(true);
  },[])

  return (
    <div className="App">
      {
        topBanner === true &&
        <div className="top-banner">
          <CloseButton variant="top-banner" onClick={()=>{setTopBanner(false)}}/>
          <p className="top-banner__inner">🤑 Fromcoco 첫 구매라면 최대 10,000원 할인! 🤑</p>
          <p className="top-banner__inner-hidden">🤑 첫 구매라면 최대 10,000원 할인! 🤑</p>
        </div>
      }
    
      <header className="header">
      <Navbar id="top-navbar">
        <img src={coconut} alt="menu" className="top-navbar__hamburger" onClick={hiddenMenuOpen}></img>
        <Container id="top-navbar__container">
          <Navbar.Brand id="top-navbar__brand" as={Link} to="/coco124"><img src={코코로고} className="top-navbar__logo"/></Navbar.Brand>
            <Nav id="top-navbar__nav"  className="me-auto" >
              <Nav.Link as={Link} to="/coco124">community</Nav.Link>
              <Nav.Link as={Link} to="/coco124/clothes">clothes</Nav.Link>
              <Nav.Link as={Link} to="/coco124/shoes">shoes</Nav.Link>              
            </Nav>
            <input type="text"/>
        </Container>
        
      </Navbar> 
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
      <div className="main-content"> 
        <a className="main-content__link">
          <div className="main-content__img-wrap"> 3
            <img className="main-content__img" src={까리2} alt="big brother"/> 
          </div>

          <div className="main-content__text-wrap">
            <div className="main-content__text">
              <span className="main-content__text-01">무한매력의 코코상!</span>          
              <span className="main-content__text-02">Fromcoco 124th의 CEO 코코상 그의 성공비결을 취재하다</span>          
              <br/>
              <span className="main-content__text-03">__directed by Mr.Lee</span>  
            </div>
            <div className="main-content__text-more">
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

      
      <Route exact path="/coco124/shoes" basename="/coco124/shoes">       
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
    </div>
  );
  
} 

function Shoes(props){

  let history = useHistory();
  return(
    <Col className="product" md="4" onClick={ ()=> { history.push(`/coco124/shoes/detail/${props.productData_.id}`)} }>      
      <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="100%" />
      <h5>{props.productData_.title}</h5>
      <p>{props.productData_.content}</p>
      <p>{props.productData_.price}￦</p>
    </Col>
  )
}





export default App;
