import React, { useEffect } from 'react';
import { Nav,Container,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function BottomNav({
  topNavOpenTap,
  initialScroll,
  topNavActiveTap,
  setTopNavActiveTap,
  isBottomNavShow, 
  bottomNavActiveTap,
  setBottomNavActiveTap}){

  const openOrActiveTap = topNavOpenTap || topNavActiveTap
  const bottomNavInlineStyle = {transform: `translate(${0}px, ${-50}px)`}
  
  const bottomNav = {
    community : 
    <Navbar id="bottom-navbar">
      <Container id="bottom-navbar__container">
        <Nav id="bottom-navbar__nav" className="me-auto" activeKey={bottomNavActiveTap}
          onClick={()=>{
            setTopNavActiveTap("community")
            initialScroll()
            }}
          >
          <Nav.Link id="bottom-navbar__nav-link--community" eventKey="home" as={Link} to="/CoCo_project_ver.2_build"
            onClick={()=>{setBottomNavActiveTap("home")}}>홈
          </Nav.Link>
          <Nav.Link id="bottom-navbar__nav-link--community" eventKey="following" as={Link} to="/CoCo_project_ver.2_build/following"
            onClick={()=>{setBottomNavActiveTap("following")}}>팔로잉
          </Nav.Link>
          <Nav.Link id="bottom-navbar__nav-link--community" eventKey="picture" as={Link} to="/CoCo_project_ver.2_build/picture" 
            onClick={()=>{setBottomNavActiveTap("picture")}}>사진</Nav.Link>
          <Nav.Link id="bottom-navbar__nav-link--community" eventKey="event" as={Link} to="/CoCo_project_ver.2_build/event" 
            onClick={()=>{setBottomNavActiveTap("event")}}>Summer Event🔥
          </Nav.Link>              
        </Nav>          
      </Container>
    </Navbar>,

    clothes : 
      <Navbar id="bottom-navbar">
        <Container id="bottom-navbar__container">
          <Nav id="bottom-navbar__nav" className="me-auto" activeKey={bottomNavActiveTap}
            onClick={()=>{
              setTopNavActiveTap("clothes")
              initialScroll()
            }}>

            <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="all" as={Link} to="/CoCo_project_ver.2_build/clothes/all"
            onClick={()=>{
              setBottomNavActiveTap("all")              
              }}>ALL
            </Nav.Link>

            <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="cityboy" as={Link} to="/CoCo_project_ver.2_build/clothes/cityboy"
            onClick={()=>{
              setBottomNavActiveTap("cityboy")              
              }}>시티보이
            </Nav.Link>

            <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="amekaji" as={Link} to="/CoCo_project_ver.2_build/clothes/amekaji"
            onClick={()=>{
              setBottomNavActiveTap("amekaji")              
              }}>아메카지
            </Nav.Link>

            <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="street" as={Link} to="/CoCo_project_ver.2_build/clothes/street"
            onClick={()=>{
              setBottomNavActiveTap("street")              
              }}>스트릿
            </Nav.Link>  

            <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="minimal" as={Link} to="/CoCo_project_ver.2_build/clothes/minimal"
            onClick={()=>{
              setBottomNavActiveTap("minimal")              
              }}>미니멀
            </Nav.Link>  

            <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="new_clothes" as={Link} to="/CoCo_project_ver.2_build/clothes/new"
            onClick={()=>{                                                           
              setBottomNavActiveTap("new_clothes")                                  
              }}>NEW~10%🤙
            </Nav.Link>

          </Nav>          
        </Container>
      </Navbar>,

    shoes : 
      <Navbar id="bottom-navbar">
        <Container id="bottom-navbar__container">
          <Nav id="bottom-navbar__nav" className="me-auto" activeKey={bottomNavActiveTap}
          onClick={()=>{
            setTopNavActiveTap("shoes")
            initialScroll()
            }}>

            <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="all" as={Link} to="/CoCo_project_ver.2_build/shoes/all"
              onClick={()=>{
                setBottomNavActiveTap("all");                
              }}>ALL
            </Nav.Link>

            <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="sneakers" as={Link} to="/CoCo_project_ver.2_build/shoes/sneakers"
              onClick={()=>{
                setBottomNavActiveTap("sneakers");                
              }}>스니커즈
            </Nav.Link>

            <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="loafer" as={Link} to="/CoCo_project_ver.2_build/shoes/loafer"
              onClick={()=>{
                setBottomNavActiveTap("loafer");                
              }}>로퍼              
            </Nav.Link>

            <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="oxford" as={Link} to="/CoCo_project_ver.2_build/shoes/oxford"
              onClick={()=>{
                setBottomNavActiveTap("oxford");                
              }}>옥스퍼드
            </Nav.Link>     

            <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="new_shoes" as={Link} to="/CoCo_project_ver.2_build/shoes/new"
              onClick={()=>{
                setBottomNavActiveTap("new_shoes");                
              }}>NEW~10%🤙
            </Nav.Link>

          </Nav>          
        </Container>
      </Navbar>
  }
  return(
    <div className="bottom-navbar__wrap" style={isBottomNavShow == false ? bottomNavInlineStyle : null } >
      {bottomNav[openOrActiveTap]}
    </div>
  )
}
export default BottomNav;