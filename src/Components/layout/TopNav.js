import React, { useEffect , useState} from 'react';
import { Nav,Container,Navbar} from 'react-bootstrap';
import {useNavigate, Link} from 'react-router-dom'


function TopNav({  
  setIsBottomNavShow,
  hiddenMenuOpen,
  topNavActiveTap,
  setTopNavActiveTap,
  setBottomNavActiveTap, 
  coconut,jjongLogo2,cartIcon,searchIcon,
  initialScroll,
  setTopNavOpenTap,}){

  const navigate = useNavigate();  

  return (
    <div id="top-navbar--wrap">
      <Navbar className="top-navbar">
        <img src={coconut} alt="menu" className="top-navbar__hamburger" onClick={hiddenMenuOpen}></img>
        <Container className="top-navbar__container">
          <Navbar.Brand className="top-navbar__brand" href="/CoCo_project_ver.2_build">
            <img src={jjongLogo2} className="top-navbar__logo"/>
          </Navbar.Brand>
                    
          <Nav className="top-navbar__nav"  activeKey={topNavActiveTap} onClick={()=>{initialScroll()}}>
            <Nav.Link className="top-navbar__nav-link-01" eventKey="community" as={Link} to="/CoCo_project_ver.2_build"
              onClick={()=>{
                setTopNavActiveTap("community");
                setIsBottomNavShow(true)
                setBottomNavActiveTap("home")                
              }}
              onMouseOver={()=>{
                setTopNavOpenTap("community");
              }}
              >
                community
            </Nav.Link>

            <Nav.Link className="top-navbar__nav-link-02" eventKey="clothes" as={Link} to="/CoCo_project_ver.2_build/clothes/all"
              onClick={()=>{
                setTopNavActiveTap("clothes");                
                setBottomNavActiveTap("all");
                setIsBottomNavShow(true)                
              }}
              onMouseOver={()=>{
                setTopNavOpenTap("clothes")
              }}
              >
                clothes
            </Nav.Link>

            <Nav.Link className="top-navbar__nav-link-03" eventKey="shoes" as={Link} to="/CoCo_project_ver.2_build/shoes/all"
              onClick={()=>{
                setTopNavActiveTap("shoes");
                setBottomNavActiveTap("all");
                setIsBottomNavShow(true)
                
              }}
              onMouseOver={()=>{
                setTopNavOpenTap("shoes")
              }}
              >
                shoes
            </Nav.Link>              
          </Nav>
          <div className="top-navbar__etc">
            <div className="top-navbar__search--wrap">
              <input type="text" className="top-navbar__search" placeholder="코코 통합검색" />       
            <img className="top-navbar__search--icon" src={searchIcon} alt="searchIcon"></img>
            </div> 
          
            <div className="top-navbar__cart-wrap">
              <img src={cartIcon} alt="cartIcon" className="top-navbar__cart"
              onClick={()=> { navigate(`/CoCo_project_ver.2_build/cart`)}}/>   
            </div>            
            <Nav className="top-navbar__etc-nav">
              <Nav.Link as={Link} to="/CoCo_project_ver.2_build/login">
                로그인
              </Nav.Link>
              <Nav.Link as={Link} to="/CoCo_project_ver.2_build/signup">
                회원가입
              </Nav.Link>
              <Nav.Link as={Link} to="/CoCo_project_ver.2_build/cs">
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