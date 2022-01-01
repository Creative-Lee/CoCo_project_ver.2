import React, { useEffect , useState} from 'react';
import { Nav,Container,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';



function TopNav({  
  setBottomNavState,
  hiddenMenuOpen,
  topNavActiveTheme,
  setTopNavActiveTheme,
  setTargetProduct,
  setTargetCategory, 
  coconut,쩡로고2,장바구니,돋보기,
  initialScroll,
  setTopNavOpenTheme,}){

  const history = useHistory();  

  return (
    <div id="top-navbar--wrap">
      <Navbar className="top-navbar">
        <img src={coconut} alt="menu" className="top-navbar__hamburger" onClick={hiddenMenuOpen}></img>
        <Container className="top-navbar__container">
          <Navbar.Brand className="top-navbar__brand" href="/coco124">
            <img src={쩡로고2} className="top-navbar__logo"/>
          </Navbar.Brand>
          
          <Nav className="top-navbar__nav"  activeKey={topNavActiveTheme} 
          onClick={()=>{initialScroll()}}>
            <Nav.Link className="top-navbar__nav-link-01" eventKey="community" as={Link} to="/coco124"
              onClick={()=>{
                setTopNavActiveTheme("community");
                setBottomNavState("show")
                setTargetCategory("home")
              }}
              onMouseOver={()=>{
                setTopNavOpenTheme("community");
              }}
              >
                community
            </Nav.Link>

            <Nav.Link className="top-navbar__nav-link-02" eventKey="clothes" as={Link} to="/coco124/clothes/new"
              onClick={()=>{
                setTopNavActiveTheme("clothes");
                setTargetProduct("clothes");
                setTargetCategory("new_clothes");
                setBottomNavState("show")
                
              }}
              onMouseOver={()=>{
                setTopNavOpenTheme("clothes")
              }}
              >
                clothes
            </Nav.Link>

            <Nav.Link className="top-navbar__nav-link-03" eventKey="shoes" as={Link} to="/coco124/shoes/new"
              onClick={()=>{
                setTopNavActiveTheme("shoes");
                setTargetProduct("shoes");
                setTargetCategory("new_shoes");
                setBottomNavState("show")
                
              }}
              onMouseOver={()=>{
                setTopNavOpenTheme("shoes")
              }}
              >
                shoes
            </Nav.Link>              
          </Nav>
          <div className="top-navbar__etc">
            <div className="top-navbar__search--wrap">
              <input type="text"  className="top-navbar__search" placeholder="코코 통합검색" />       
            <img className="top-navbar__search--icon" src={돋보기} alt="돋보기"></img>
            </div> 
          
            <div className="top-navbar__cart-wrap">
              <img src={장바구니} alt="장바구니" className="top-navbar__cart"
              onClick={()=> { history.push(`/coco124/cart`)}}/>   
            </div>            
            <Nav className="top-navbar__etc-nav">
              <Nav.Link as={Link} to="/coco124/login">
                로그인
              </Nav.Link>
              <Nav.Link as={Link} to="/coco124/signup">
                회원가입
              </Nav.Link>
              <Nav.Link as={Link} to="/coco124/cs">
              고객센터
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopNav;