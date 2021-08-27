import React, { useEffect } from 'react';
import { Nav,Container,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function BottomNav({ activeController,topNavTheme ,setTopNavTheme, bottomNavState ,setBottomNavState, setTargetCategory , setTargetProduct}){

    const bottomNav = {
    community : <Navbar id="bottom-navbar">
                  <Container id="bottom-navbar__container">
                    <Nav id="bottom-navbar__nav" className="me-auto" defaultActiveKey="1" variant="pills"
                      onClick={()=>{
                        setTopNavTheme("community")
                        activeController()}}
                      >
                      <Nav.Link id="bottom-navbar__nav-link--community" eventKey="1" as={Link} to="/coco124">홈</Nav.Link>
                      <Nav.Link id="bottom-navbar__nav-link--community" eventKey="2" as={Link} to="/coco124/following">팔로잉</Nav.Link>
                      <Nav.Link id="bottom-navbar__nav-link--community" eventKey="3" as={Link} to="/coco124/picture">사진</Nav.Link>
                      <Nav.Link id="bottom-navbar__nav-link--community" eventKey="4" as={Link} to="/coco124/event" >Summer Event🔥</Nav.Link>              
                    </Nav>          
                  </Container>
                </Navbar>,

    clothes :  <Navbar id="bottom-navbar">
                <Container id="bottom-navbar__container">
                  <Nav id="bottom-navbar__nav" className="me-auto" variant="pills"
                    onClick={()=>{
                      setTopNavTheme("clothes")
                      activeController()}}>
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="1" as={Link} to="/coco124/clothes/new"
                    onClick={()=>{                                                           
                      setTargetCategory("new")
                      setTargetProduct("clothes");                    
                      }}>NEW~10%
                    </Nav.Link>
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="2" as={Link} to="/coco124/clothes/cityboy"
                    onClick={()=>{
                      setTargetCategory("cityboy")
                      setTargetProduct("clothes");
                      }}>시티보이
                    </Nav.Link>
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="3" as={Link} to="/coco124/clothes/amekaji"
                    onClick={()=>{
                      setTargetCategory("amekaji")
                      setTargetProduct("clothes");
                      }}>아메카지
                    </Nav.Link>
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="4" as={Link} to="/coco124/clothes/street"
                    onClick={()=>{
                      setTargetCategory("street")
                      setTargetProduct("clothes");
                      }}>스트릿
                    </Nav.Link>              
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="5" as={Link} to="/coco124/clothes/minimal"
                    onClick={()=>{
                      setTargetCategory("minimal")
                      setTargetProduct("clothes");
                      }}>미니멀
                    </Nav.Link>              
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="6" as={Link} to="/coco124/clothes/summer"
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
                onClick={()=>{
                  setTopNavTheme("shoes")
                  activeController()}}>
                <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="1" as={Link} to="/coco124/shoes/new"
                    onClick={()=>{
                      setTargetCategory("new");
                      setTargetProduct("shoes")
                    }}>NEW~10%
                  </Nav.Link>
                  <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="2" as={Link} to="/coco124/shoes/sneakers"
                    onClick={()=>{
                      setTargetCategory("sneakers");
                      setTargetProduct("shoes")
                    }}>스니커즈
                  </Nav.Link>
                  <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="3" as={Link} to="/coco124/shoes/loafer"
                    onClick={()=>{
                      setTargetCategory("loafer");
                      setTargetProduct("shoes")
                    }}>로퍼
                  </Nav.Link>
                  <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="4" as={Link} to="/coco124/shoes/oxford"
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
    <div className="bottom-navbar__wrap" 
      style={bottomNavState == "hide" ? {top : "-50px"} : null } >
      {bottomNav[topNavTheme]}
    </div>
  )
}
export default BottomNav;