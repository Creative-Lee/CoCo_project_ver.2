import React, { useEffect } from 'react';
import { Nav,Container,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function BottomNav({navSelect , navWheelStyle , setTargetCategory }){
  
    const bottomNav = {
    community : <Navbar id="bottom-navbar">
                  <Container id="bottom-navbar__container">
                    <Nav id="bottom-navbar__nav" className="me-auto" defaultActiveKey="1" variant="pills">
                      <Nav.Link eventKey="1" as={Link} to="/coco124">홈</Nav.Link>
                      <Nav.Link eventKey="2" as={Link} to="/coco124/following">팔로잉</Nav.Link>
                      <Nav.Link eventKey="3" as={Link} to="/coco124/picture">사진</Nav.Link>
                      <Nav.Link eventKey="4" as={Link} to="/coco124/event">Summer Event🔥</Nav.Link>              
                      </Nav>          
                  </Container>
                </Navbar>,

    clothes :  <Navbar id="bottom-navbar">
                <Container id="bottom-navbar__container">
                  <Nav id="bottom-navbar__nav" className="me-auto" variant="pills">
                    <Nav.Link eventKey="1" as={Link} to="/coco124/clothes/new"
                    onClick={()=>{setTargetCategory("new")}}>NEW~10%
                    </Nav.Link>
                    <Nav.Link eventKey="2" as={Link} to="/coco124/clothes/cityboy"
                    onClick={()=>{setTargetCategory("cityboy")}}>시티보이
                    </Nav.Link>
                    <Nav.Link eventKey="3" as={Link} to="/coco124/clothes/amekaji"
                    onClick={()=>{setTargetCategory("amekaji")}}>아메카지
                    </Nav.Link>
                    <Nav.Link eventKey="4" as={Link} to="/coco124/clothes/street"
                    onClick={()=>{setTargetCategory("street")}}>스트릿
                    </Nav.Link>              
                    <Nav.Link eventKey="5" as={Link} to="/coco124/clothes/minimal"
                    onClick={()=>{setTargetCategory("minimal")}}>미니멀
                    </Nav.Link>              
                    <Nav.Link eventKey="6" as={Link} to="/coco124/clothes/summer"
                    onClick={()=>{setTargetCategory("summer")}}>hot summer🔥
                    </Nav.Link>              
                  </Nav>          
                </Container>
              </Navbar>,

    shoes : <Navbar id="bottom-navbar">
              <Container id="bottom-navbar__container">
                <Nav id="bottom-navbar__nav" className="me-auto" variant="pills">
                  <Nav.Link eventKey="1" as={Link} to="/coco124/shoes/new"
                  onClick={()=>{setTargetCategory("new")}}>NEW~10%
                  </Nav.Link>
                  <Nav.Link eventKey="2" as={Link} to="/coco124/shoes/sneakers"
                  onClick={()=>{setTargetCategory("sneakers")}}>스니커즈
                  </Nav.Link>
                  <Nav.Link eventKey="3" as={Link} to="/coco124/shoes/loafer"
                  onClick={()=>{setTargetCategory("loafer")}}>로퍼
                  </Nav.Link>
                  <Nav.Link eventKey="4" as={Link} to="/coco124/shoes/oxford"
                  onClick={()=>{setTargetCategory("oxford")}}>옥스퍼드
                  </Nav.Link>              
                </Nav>          
              </Container>
            </Navbar>
}
  return(
    <div className="bottom-navbar--wrap" style={navWheelStyle == true ? {top : "-50px"} : null }>
      {bottomNav[navSelect]}
    </div>
  )
}
export default BottomNav;