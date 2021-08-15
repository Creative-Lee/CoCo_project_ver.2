import React, { useEffect } from 'react';
import { Nav,Container,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function TopNav({setNavWheelStyle, hiddenMenuOpen,setNavSelect,setTargetProduct,setTargetCategory , coconut,코코로고,쩡로고1,쩡로고2}){
  
return (
    <div className="top-navbar--wrap">
      <Navbar id="top-navbar">
        <img src={coconut} alt="menu" className="top-navbar__hamburger" onClick={hiddenMenuOpen}></img>
        <Container id="top-navbar__container">
          <Navbar.Brand id="top-navbar__brand" href="/coco124">
            <img src={쩡로고2} className="top-navbar__logo"/>
          </Navbar.Brand>
          <Nav id="top-navbar__nav" className="me-auto" defaultActiveKey="1" variant="pills">
            <Nav.Link eventKey="1" as={Link} to="/coco124"
              onClick={()=>{setNavSelect("community"); setNavWheelStyle(false)  }}>community</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/coco124/clothes/new"
              onClick={()=>{setNavSelect("clothes"); setTargetProduct("clothes") ; {setTargetCategory("new")}; setNavWheelStyle(false)}}>clothes
              </Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/coco124/shoes/new"
              onClick={()=>{setNavSelect("shoes"); setTargetProduct("shoes") ; {setTargetCategory("new")}; setNavWheelStyle(false)}}>shoes
              </Nav.Link>              
          </Nav>          
        </Container>
      </Navbar>
    </div>
  )
}

export default TopNav;