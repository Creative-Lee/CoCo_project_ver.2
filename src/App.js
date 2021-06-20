import './App.css';
import data from './data';
import Detail from './Component/Detail';
import axios from 'axios';

import React, { useState , useContext } from 'react';

import { Link, Route, Switch }  from 'react-router-dom';
import { Navbar,Nav,Jumbotron,Button,Container,Row,Col} from 'react-bootstrap';


export let StockContext = React.createContext();

function App() {

  let [items,setItems] = useState( data );
  let [wait,setWait] = useState(false);

  let [stock,setStock] = useState([11,12,13])

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Fromcoco124th</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/detail/0">Men's</Nav.Link>
            <Nav.Link as={Link} to="/detail/1">Women's</Nav.Link> 
            <Nav.Link>이벤트</Nav.Link>
            <Nav.Link>고객센터</Nav.Link>       
          </Nav>         
        </Navbar.Collapse>
      </Navbar>

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
              items.map((a,i)=>{
                return (<Card items={a} i={i} key={i}/>)
              })
            }
          </Row>
      

          <button className="btn btn-primary" onClick={()=>{
            setWait(true);
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{ 
              setWait(false);
              setItems([...items, ...result.data]);
            }) //성공시

            .catch(()=>{
              setWait(false);
              console.log('we fail')
            }) //실패시 

          }} >더보기</button>

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
            <Detail items={items} stock={stock} setStock={setStock}/>
          </StockContext.Provider>
      </Route>
      
      </Switch>
    </div>
  );
  
} 

function Card(props){

  let stock = useContext(StockContext);

  return(
    <Col className="item" md="3">
      <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="100%" />
      <h5>{props.items.title}</h5>
      <p>{props.items.price}￦</p>
      <p>남은 수량: {stock[props.i]}</p>   
    </Col>
  )
}



export default App;
