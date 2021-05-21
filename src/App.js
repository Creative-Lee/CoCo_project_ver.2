import './App.css';
import { Navbar,Nav,NavDropdown,Jumbotron,Button,Container,Row,Col} from 'react-bootstrap';


function App() {
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
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>         
        </Navbar.Collapse>
      </Navbar>
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
          <Col className="item" md="2">
            <img src="/assets/행님.jpg" width="100%" heigh />
            <h5>c</h5>
            <p>제품설명</p>
          </Col>
          <Col className="item" md="2">
            <img src="/assets/행님.jpg" width="100%" heigh />
            <h5>제품명</h5>
            <p>제품설명</p>
          </Col>
          <Col className="item" md="2">
            <img src="/assets/행님.jpg" width="100%" heigh />
            <h5>제품명</h5>
            <p>제품설명</p>
          </Col>
          <Col className="item" md="2">
            <img src="/assets/행님.jpg" width="100%" heigh />
            <h5>제품명</h5>
            <p>제품설명</p>
          </Col>
          <Col className="item" md="2">
            <img src="/assets/행님.jpg" width="100%" heigh />
            <h5>제품명</h5>
            <p>제품설명</p>
          </Col>
          <Col className="item" md="2">
            <img src="/assets/행님.jpg" width="100%" heigh />
            <h5>제품명</h5>
            <p>제품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
