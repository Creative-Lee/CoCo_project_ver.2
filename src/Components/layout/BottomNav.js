import React, { useEffect } from 'react';
import { Nav,Container,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function BottomNav({
  topNavOpenTheme,
  initialScroll,
  topNavActiveTheme,
  setTopNavActiveTheme,
  bottomNavState, 
  targetCategory,
  setTargetCategory,
  setTargetProduct}){

  const openOrActive = topNavOpenTheme || topNavActiveTheme
  const bottomNavInlineStyle = {transform: `translate(${0}px, ${-50}px)`}
  
  
    const bottomNav = {
    community : <Navbar id="bottom-navbar">
                  <Container id="bottom-navbar__container">
                    <Nav id="bottom-navbar__nav" className="me-auto" activeKey={targetCategory}
                      onClick={()=>{
                        setTopNavActiveTheme("community")
                        initialScroll()
                        }}
                      >
                      <Nav.Link id="bottom-navbar__nav-link--community" eventKey="home" as={Link} to="/CoCo_project_ver.2_build"
                        onClick={()=>{setTargetCategory("home")}}>홈
                      </Nav.Link>
                      <Nav.Link id="bottom-navbar__nav-link--community" eventKey="following" as={Link} to="/CoCo_project_ver.2_build/following"
                        onClick={()=>{setTargetCategory("following")}}>팔로잉
                      </Nav.Link>
                      <Nav.Link id="bottom-navbar__nav-link--community" eventKey="picture" as={Link} to="/CoCo_project_ver.2_build/picture" 
                        onClick={()=>{setTargetCategory("picture")}}>사진</Nav.Link>
                      <Nav.Link id="bottom-navbar__nav-link--community" eventKey="event" as={Link} to="/CoCo_project_ver.2_build/event" 
                        onClick={()=>{setTargetCategory("event")}}>Summer Event🔥
                      </Nav.Link>              
                    </Nav>          
                  </Container>
                </Navbar>,

    clothes :  <Navbar id="bottom-navbar">
                <Container id="bottom-navbar__container">
                  <Nav id="bottom-navbar__nav" className="me-auto"   activeKey={targetCategory}
                    onClick={()=>{
                      setTargetProduct("clothes");
                      setTopNavActiveTheme("clothes")
                      initialScroll()
                      }}>
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="new_clothes" as={Link} to="/CoCo_project_ver.2_build/clothes/new"
                    onClick={()=>{                                                           
                      setTargetCategory("new_clothes")
                                          
                      }}>NEW~10%
                    </Nav.Link>
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="cityboy" as={Link} to="/CoCo_project_ver.2_build/clothes/cityboy"
                    onClick={()=>{
                      setTargetCategory("cityboy")
                      
                      }}>시티보이
                    </Nav.Link>
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="amekaji" as={Link} to="/CoCo_project_ver.2_build/clothes/amekaji"
                    onClick={()=>{
                      setTargetCategory("amekaji")
                      
                      }}>아메카지
                    </Nav.Link>
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="street" as={Link} to="/CoCo_project_ver.2_build/clothes/street"
                    onClick={()=>{
                      setTargetCategory("street")
                      
                      }}>스트릿
                    </Nav.Link>              
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="minimal" as={Link} to="/CoCo_project_ver.2_build/clothes/minimal"
                    onClick={()=>{
                      setTargetCategory("minimal")
                      
                      }}>미니멀
                    </Nav.Link>              
                    <Nav.Link id="bottom-navbar__nav-link--clothes" eventKey="summer" as={Link} to="/CoCo_project_ver.2_build/clothes/summer"
                    onClick={()=>{
                      setTargetCategory("summer")
                      
                      }}>hot summer🔥
                    </Nav.Link>              
                  </Nav>          
                </Container>
              </Navbar>,

    shoes : <Navbar id="bottom-navbar">
              <Container id="bottom-navbar__container">
                <Nav id="bottom-navbar__nav" className="me-auto" activeKey={targetCategory}
                onClick={()=>{
                  setTargetProduct("shoes")
                  setTopNavActiveTheme("shoes")
                  initialScroll()
                  }}>
                <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="new_shoes" as={Link} to="/CoCo_project_ver.2_build/shoes/new"
                    onClick={()=>{
                      setTargetCategory("new_shoes");
                      
                    }}>NEW~10%
                  </Nav.Link>
                  <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="sneakers" as={Link} to="/CoCo_project_ver.2_build/shoes/sneakers"
                    onClick={()=>{
                      setTargetCategory("sneakers");
                      
                    }}>스니커즈
                  </Nav.Link>
                  <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="loafer" as={Link} to="/CoCo_project_ver.2_build/shoes/loafer"
                    onClick={()=>{
                      setTargetCategory("loafer");
                      
                    }}>로퍼
                  </Nav.Link>
                  <Nav.Link id="bottom-navbar__nav-link--shoes" eventKey="oxford" as={Link} to="/CoCo_project_ver.2_build/shoes/oxford"
                    onClick={()=>{
                      setTargetCategory("oxford");
                      
                    }}>옥스퍼드
                  </Nav.Link>              
                </Nav>          
              </Container>
            </Navbar>
}
  return(
    <div className="bottom-navbar__wrap" 
      style={bottomNavState == "hide" ? bottomNavInlineStyle : null } >
        
      {bottomNav[openOrActive]}
    </div>
  )
}
export default BottomNav;