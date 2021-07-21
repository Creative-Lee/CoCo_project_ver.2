import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';


import coconut from './img/coconut.jpg'
import banner1 from './img/직사각배너.jpg'
import banner2 from './img/정사각배너.jpg'

import CartContainer from './containers/CartContainer'; 
import DetailContainer from './containers/DetailContainer';

import productData from './productData'
import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { Link, Route, Switch, useHistory, }  from 'react-router-dom';
import { Navbar,Nav,CloseButton,Button,Container,Row,Col,Offcanvas} from 'react-bootstrap';



function App() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
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
          <CloseButton variant="banner" onClick={()=>{setTopBanner(false)}}/>
          <p id="top-banner__inner">
            {/* <img src={coconut} alt="banner" className="top-banner__icon"></img> */}
            🤑 Fromcoco 첫 방문 기념 1만원 할인 혜택 🤑
          </p>
        </div>
      
      }
    
      <header className="header">
      <Navbar id="top-navbar">
        <img src={coconut} alt="menu" className="top-navbar__hamburger" onClick={handleShow}></img>
        <Container id="top-navbar__container">
          <Navbar.Brand id="top-navbar__brand" as={Link} to="/coco124">Fromcoco 124th</Navbar.Brand>
            <Nav id="top-navbar__nav"  className="me-auto" >
              <Nav.Link as={Link} to="/coco124/detail/0">men</Nav.Link>
              <Nav.Link as={Link} to="/coco124/detail/1">lady</Nav.Link>
              <Nav.Link as={Link} to="/coco124/detail/2">unisex</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </header>

    <Offcanvas id="hidden-menu" show={show} onHide={handleClose}>
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
      <Route exact path="/coco124" basename="/coco124">       
        <Container>
          <Row>
            {
              productData_.map((a,i)=>{
                return (<Card productData_={a} i={i} key={i}/>)
              })
            }
          </Row>

          {
            buttonState < 1 
            ?(<button className="btn btn-primary" onClick={()=>{
              setWait(true);
              setButtonState(buttonState+1);
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{ 
                setWait(false);
                setProductData_([...productData_ , ...result.data]);
                
              }) //성공시

              .catch(()=>{
                setWait(false);
                console.log('we fail')
              }) //실패시 
            }} >
              더보기</button>
            )
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

      <Route path="/coco124/detail/:item_id" basename="/coco124/detail/:item_id">
            <DetailContainer productData_={productData_} setProductData_={setProductData_}/>
      </Route>

      <Route path='/coco124/cart' basename="/coco124/cart">
        <CartContainer/>
      </Route>
      
      </Switch>
    </div>
  );
  
} 

function Card(props){

  let history = useHistory();
  return(
    <Col className="product" md="4" onClick={ ()=> { history.push(`/coco124/detail/${props.productData_.id}`)} }>      
      <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="100%" />
      <h5>{props.productData_.title}</h5>
      <p>{props.productData_.content}</p>
      <p>{props.productData_.price}￦</p>
    </Col>
  )
}





export default App;
