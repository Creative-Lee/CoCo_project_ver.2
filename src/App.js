import './App.css';

import CartContainer from './containers/CartContainer'; // 대신 사용중
import DetailContainer from './containers/DetailContainer';// 대신 사용중

import productData from './productData'
import axios from 'axios';




import React, { useState , useContext } from 'react';

import { Link, Route, Switch, useHistory, }  from 'react-router-dom';
import { Navbar,Nav,Jumbotron,Button,Container,Row,Col} from 'react-bootstrap';


export let StockContext = React.createContext();

function App() {

  let [productData_ , setProductData_] = useState(productData)
  let [wait,setWait] = useState(false);

  let [stock,setStock] = useState([3,6,9]);
  let [buttonState,setButtonState] = useState(0);



  return (
    <div className="App">
      <header className="header">
      <div className="fix-nav-wrap">
      <Navbar className="fix-nav" bg="light" expand="md">
        <Navbar.Brand href="/">Fromcoco124th</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Nav.Link as='a' href="/detail/0"> Man</Nav.Link>
            <Nav.Link as={Link} to="/detail/1">Women</Nav.Link> 
            <Nav.Link>커뮤니티</Nav.Link>                
          </Nav>         
        </Navbar.Collapse>
      </Navbar>
      </div>

    <div className="child_nav-wrap">
      <Nav className="child_nav" defaultActiveKey="/" as="ul">
      <Nav.Item className="child_nav_li" as="li">
        <Nav.Link href="/">홈</Nav.Link>
      </Nav.Item>
      <Nav.Item className="child_nav_li" as="li">
        <Nav.Link eventKey="link-1">코디추천</Nav.Link>
      </Nav.Item>
      <Nav.Item className="child_nav_li" as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
    </header>


      <Switch> 
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

    
        <StockContext.Provider value={stock}>
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
              wait === true  
              ? <div className="wait"> 
                <p>로딩중입니댱</p> 
                </div>  
              :null 
            }     
            
        </Container>
        </StockContext.Provider>
      
      </Route>

      <Route path="/detail/:item_id">
          <StockContext.Provider value={stock}> 
            <DetailContainer productData_={productData_} setProductData_={setProductData_} stock={stock} setStock={setStock}/>
          </StockContext.Provider>
      </Route>

      <Route path='/cart'>
        <CartContainer/>
      </Route>
      
      </Switch>
    </div>
  );
  
} 

function Card(props){

  let history = useHistory();
  return(
    <Col className="item" md="3" onClick={ ()=> { history.push(`/detail/${props.productData_.id}`)} }>      
      <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="100%" />
      <h5>{props.productData_.title}</h5>
      <p>{props.productData_.content}</p>
      <p>{props.productData_.price}￦</p>
      <p>{props.productData_.stock}개 남았습니다!</p>
    </Col>
  )
}



export default App;
