import React, { useEffect } from 'react';
import { Nav,Container,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function BottomNav({openTopNav ,initialScroll,activeTopNav ,setActiveTopNav, bottomNavState ,setBottomNavState, setTargetCategory , setTargetProduct}){

  const openOrActive = openTopNav || activeTopNav
  
    const bottomNav = {
    community : <Navbar id="bottom-navbar">
                  <Container id="bottom-navbar__container">
                    <Nav id="bottom-navbar__nav" className="me-auto" defaultActiveKey={1}                      
                      onClick={()=>{
                        setActiveTopNav("community")
                        initialScroll()
                        }}
                      >
                      <Nav.Link id="bottom-navbar__nav-link--community" eventKey={1} as={Link} to="/coco124">홈</Nav.Link>
                      <Nav.Link id="bottom-navbar__nav-link--community" eventKey="2" as={Link} to="/coco124/following">팔로잉</Nav.Link>
                      <Nav.Link id="bottom-navbar__nav-link--community" eventKey="3" as={Link} to="/coco124/picture">사진</Nav.Link>
                      <Nav.Link id="bottom-navbar__nav-link--community" eventKey="4" as={Link} to="/coco124/event" >Summer Event🔥</Nav.Link>              
                    </Nav>          
                  </Container>
                </Navbar>,

    clothes :  <Navbar id="bottom-navbar">
                <Container id="bottom-navbar__container">
                  <Nav id="bottom-navbar__nav" className="me-auto"   
                    onClick={()=>{
                      setActiveTopNav("clothes")
                      initialScroll()
                      }}>
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="5" as={Link} to="/coco124/clothes/new"
                    onClick={()=>{                                                           
                      setTargetCategory("new")
                      setTargetProduct("clothes");                    
                      }}>NEW~10%
                    </Nav.Link>
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="6" as={Link} to="/coco124/clothes/cityboy"
                    onClick={()=>{
                      setTargetCategory("cityboy")
                      setTargetProduct("clothes");
                      }}>시티보이
                    </Nav.Link>
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="7" as={Link} to="/coco124/clothes/amekaji"
                    onClick={()=>{
                      setTargetCategory("amekaji")
                      setTargetProduct("clothes");
                      }}>아메카지
                    </Nav.Link>
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="8" as={Link} to="/coco124/clothes/street"
                    onClick={()=>{
                      setTargetCategory("street")
                      setTargetProduct("clothes");
                      }}>스트릿
                    </Nav.Link>              
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="9" as={Link} to="/coco124/clothes/minimal"
                    onClick={()=>{
                      setTargetCategory("minimal")
                      setTargetProduct("clothes");
                      }}>미니멀
                    </Nav.Link>              
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="10" as={Link} to="/coco124/clothes/summer"
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
                <Nav id="bottom-navbar__nav" className="me-auto" 
                onClick={()=>{
                  setActiveTopNav("shoes")
                  initialScroll()
                  }}>
                <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="11" as={Link} to="/coco124/shoes/new"
                    onClick={()=>{
                      setTargetCategory("new");
                      setTargetProduct("shoes")
                    }}>NEW~10%
                  </Nav.Link>
                  <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="12" as={Link} to="/coco124/shoes/sneakers"
                    onClick={()=>{
                      setTargetCategory("sneakers");
                      setTargetProduct("shoes")
                    }}>스니커즈
                  </Nav.Link>
                  <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="13" as={Link} to="/coco124/shoes/loafer"
                    onClick={()=>{
                      setTargetCategory("loafer");
                      setTargetProduct("shoes")
                    }}>로퍼
                  </Nav.Link>
                  <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="14" as={Link} to="/coco124/shoes/oxford"
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
        
      {bottomNav[openOrActive]}
    </div>
  )
}
export default BottomNav;