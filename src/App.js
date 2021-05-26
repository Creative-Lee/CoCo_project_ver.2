import './App.css';
import { Navbar,Nav,Jumbotron,Button,Container,Row,Col} from 'react-bootstrap';
import React, { useState } from 'react'
import data from './data';

import { Link, Route, Switch }  from 'react-router-dom';


function App() {

  let [items,setItems] = useState( data )

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Fromcoco124th</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Men's</Nav.Link>
            <Nav.Link href="#link">Women's</Nav.Link>
            <Nav.Link href="#link">이벤트</Nav.Link>
            <Nav.Link href="#link">고객센터</Nav.Link>       
          </Nav>         
        </Navbar.Collapse>
      </Navbar>

      
      <Route exact path="/">
        <Jumbotron className="jumbotron">
        <h1>고덕점 & 온라인몰 OPEN 기념 이벤트!</h1>
        <p>
          고객님들의 성원에 힘입어 프롬코코가 고덕에도 오픈했습니다!!😍😍😍😍 <br />
          코코상이 쏜다! 
          지금 회원가입 시 제한없이 사용 가능한 3000point 지급 !           
        </p>
        <p>
          <Button variant="primary">more event..</Button>
        </p>
        </Jumbotron>
    
        <Container>
          <Row>
            {
              items.map((a,i)=>{
                return <Card items={a} i={i} key={i}/> 
              })
            }
          </Row>
        </Container>
      </Route>


      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 
      </Route>

    </div>
  );
  
} 

function Card(props){
  return(
  <Col className="item" md="3">
    <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="100%" />
    <h5>{props.items.title}</h5>
    <p>{props.items.price}￦</p>
  </Col>
  )
}


export default App;
