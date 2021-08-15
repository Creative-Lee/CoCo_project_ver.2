import React, { useEffect } from 'react';
import { Nav,Container,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function TopNav({
  setNavWheelStyle,
  hiddenMenuOpen,
  setSelectedNav,
  setTargetProduct,
  setTargetCategory, 
  coconut,쩡로고2}){
  

  const currentHeight = window.scrollY
  
return (
    <div className="top-navbar--wrap"
      onMouseOver={()=>{setNavWheelStyle(false)}}
      onMouseOut={()=>{currentHeight === 0 ? setNavWheelStyle(false) : setNavWheelStyle(true)}}
    >
      <Navbar id="top-navbar">
        <img src={coconut} alt="menu" className="top-navbar__hamburger" onClick={hiddenMenuOpen}></img>
        <Container id="top-navbar__container">
          <Navbar.Brand id="top-navbar__brand" href="/coco124">
            <img src={쩡로고2} className="top-navbar__logo"/>
          </Navbar.Brand>
          <Nav id="top-navbar__nav" className="me-auto" defaultActiveKey="1" variant="pills">
            <Nav.Link eventKey="1" as={Link} to="/coco124"
              onClick={()=>{setSelectedNav("community"); setNavWheelStyle(false)  }}
              onMouseOver={()=>{setSelectedNav("community")}}>
                community
            </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/coco124/clothes/new"
              onClick={()=>{setSelectedNav("clothes"); setTargetProduct("clothes") ; {setTargetCategory("new")}; setNavWheelStyle(false)}}
              onMouseOver={()=>{setSelectedNav("clothes")}}>
                clothes
            </Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/coco124/shoes/new"
              onClick={()=>{setSelectedNav("shoes"); setTargetProduct("shoes") ; {setTargetCategory("new")}; setNavWheelStyle(false)}}
              onMouseOver={()=>{setSelectedNav("shoes")}}>
                shoes
            </Nav.Link>              
          </Nav>          
        </Container>
      </Navbar>
    </div>
  )
}

export default TopNav;