import React, { useEffect } from 'react';
import { Nav,Container,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function BottomNav({ activeController,selectedNav ,setSelectedNav , navWheelStyle , targetCategory, setTargetCategory , setTargetProduct}){
  
  
    const bottomNav = {
    community : <Navbar id="bottom-navbar">
                  <Container id="bottom-navbar__container">
                    <Nav id="bottom-navbar__nav" className="me-auto" defaultActiveKey="1" variant="pills"
                      onClick={()=>{activeController()}}>
                      <Nav.Link id="bottom-navbar__nav-link-01" eventKey="1" as={Link} to="/coco124">홈</Nav.Link>
                      <Nav.Link id="bottom-navbar__nav-link-01" eventKey="2" as={Link} to="/coco124/following">팔로잉</Nav.Link>
                      <Nav.Link id="bottom-navbar__nav-link-01" eventKey="3" as={Link} to="/coco124/picture">사진</Nav.Link>
                      <Nav.Link id="bottom-navbar__nav-link-01" eventKey="4" as={Link} to="/coco124/event" >Summer Event🔥</Nav.Link>              
                    </Nav>          
                  </Container>
                </Navbar>,

    clothes :  <Navbar id="bottom-navbar">
                <Container id="bottom-navbar__container">
                  <Nav id="bottom-navbar__nav" className="me-auto" variant="pills"
                    onClick={()=>{activeController()}}>
                    <Nav.Link id="bottom-navbar__nav-link-02" eventKey="1" as={Link} to="/coco124/clothes/new"
                    onClick={()=>{                                                           
                      setTargetCategory("new")
                      setTargetProduct("clothes");                    
                      }}>NEW~10%
                    </Nav.Link>
                    <Nav.Link id="bottom-navbar__nav-link-02" eventKey="2" as={Link} to="/coco124/clothes/cityboy"
                    onClick={()=>{
                      setTargetCategory("cityboy")
                      setTargetProduct("clothes");
                      }}>시티보이
                    </Nav.Link>
                    <Nav.Link id="bottom-navbar__nav-link-02" eventKey="3" as={Link} to="/coco124/clothes/amekaji"
                    onClick={()=>{
                      setTargetCategory("amekaji")
                      setTargetProduct("clothes");
                      }}>아메카지
                    </Nav.Link>
                    <Nav.Link id="bottom-navbar__nav-link-02" eventKey="4" as={Link} to="/coco124/clothes/street"
                    onClick={()=>{
                      setTargetCategory("street")
                      setTargetProduct("clothes");
                      }}>스트릿
                    </Nav.Link>              
                    <Nav.Link id="bottom-navbar__nav-link-02" eventKey="5" as={Link} to="/coco124/clothes/minimal"
                    onClick={()=>{
                      setTargetCategory("minimal")
                      setTargetProduct("clothes");
                      }}>미니멀
                    </Nav.Link>              
                    <Nav.Link id="bottom-navbar__nav-link-02" eventKey="6" as={Link} to="/coco124/clothes/summer"
                    onClick={()=>{
                      setTargetCategory("summer")
                      setTargetProduct("clothes");
                      }}>hot summer🔥
                    </Nav.Link>              
                  </Nav>          
                </Container>
              </Navbar>,

    shoes : <Navbar id="bottom-navbar">
              <Container id="bottom-navbar__container">
                <Nav id="bottom-navbar__nav" className="me-auto" variant="pills"
                onClick={()=>{activeController()}}>
                  <Nav.Link id="bottom-navbar__nav-link-03" eventKey="1" as={Link} to="/coco124/shoes/new"
                    onClick={()=>{
                      setTargetCategory("new");
                      setTargetProduct("shoes")
                    }}>NEW~10%
                  </Nav.Link>
                  <Nav.Link id="bottom-navbar__nav-link-03" eventKey="2" as={Link} to="/coco124/shoes/sneakers"
                    onClick={()=>{
                      setTargetCategory("sneakers");
                      setTargetProduct("shoes")
                    }}>스니커즈
                  </Nav.Link>
                  <Nav.Link id="bottom-navbar__nav-link-03" eventKey="3" as={Link} to="/coco124/shoes/loafer"
                    onClick={()=>{
                      setTargetCategory("loafer");
                      setTargetProduct("shoes")
                    }}>로퍼
                  </Nav.Link>
                  <Nav.Link id="bottom-navbar__nav-link-03" eventKey="4" as={Link} to="/coco124/shoes/oxford"
                    onClick={()=>{
                      setTargetCategory("oxford");
                      setTargetProduct("shoes")
                    }}>옥스퍼드
                  </Nav.Link>              
                </Nav>          
              </Container>
            </Navbar>
}
  return(
    <div className="bottom-navbar--wrap" style={navWheelStyle == true ? {top : "-50px"} : null }>
      {bottomNav[selectedNav]}
    </div>
  )
}
export default BottomNav;