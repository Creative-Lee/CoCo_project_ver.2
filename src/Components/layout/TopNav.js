import React, { useEffect , useState} from 'react';
import { Nav,Container,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



function TopNav({
  activeController,
  bottomNavState,
  setBottomNavState,
  hiddenMenuOpen,
  setActiveTopNav,
  setTargetProduct,
  setTargetCategory, 
  coconut,쩡로고2,
  initialScroll
 }){
    
  const [bottomNavDefaultActive,setBottomNavDefaultActive] = useState("1")


  return (
    <div className="top-navbar--wrap">
      <Navbar id="top-navbar">
        <img src={coconut} alt="menu" className="top-navbar__hamburger" onClick={hiddenMenuOpen}></img>
        <Container id="top-navbar__container">
          <Navbar.Brand id="top-navbar__brand" href="/coco124">
            <img src={쩡로고2} className="top-navbar__logo"/>
          </Navbar.Brand>
          <Nav id="top-navbar__nav" className="me-auto" defaultActiveKey="1" onClick={()=>{initialScroll()}}>
            <Nav.Link id="top-navbar__nav-link-01" eventKey="1" as={Link} to="/coco124"
              onClick={()=>{
                setActiveTopNav("community");
                setBottomNavState("show")
              }}
              onMouseOver={()=>{
                setActiveTopNav("community")
              }}>
                community
            </Nav.Link>

            <Nav.Link id="top-navbar__nav-link-02" eventKey="2" as={Link} to="/coco124/clothes/new"
              onClick={()=>{
                setActiveTopNav("clothes");
                setTargetProduct("clothes");
                setTargetCategory("new");
                setBottomNavState("show")
                
              }}
              onMouseOver={()=>{
                setActiveTopNav("clothes")
              }}>
                clothes
            </Nav.Link>

            <Nav.Link id="top-navbar__nav-link-03" eventKey="3" as={Link} to="/coco124/shoes/new"
              onClick={()=>{
                setActiveTopNav("shoes");
                setTargetProduct("shoes");
                setTargetCategory("new");
                setBottomNavState("show")
                
              }}
              onMouseOver={()=>{
                setActiveTopNav("shoes")
              }}>
                shoes
            </Nav.Link>              
          </Nav>          
        </Container>
      </Navbar>
    </div>
  )
}

export default TopNav;