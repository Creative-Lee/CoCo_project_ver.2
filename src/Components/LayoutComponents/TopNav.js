import React, { useEffect, useState } from 'react';
import { Nav, Container, Navbar, Dropdown, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

function TopNav({
  setIsBottomNavShow,
  setIsOffCanvasShow,
  topNavActiveTap,
  setTopNavActiveTap,
  setBottomNavActiveTap,
  coconut,
  jjongLogo2,
  cartIcon,
  searchIcon,
  initialScroll,
  setTopNavOpenTap,
  isAuthenticated,
  signOutAccount,
}) {
  const navigate = useNavigate();

  const authUi = {
    true: (
      <Nav className="top-navbar__etc-nav">
        <Dropdown>
          <Dropdown.Toggle
            style={{ background: 'white', color: 'gray', borderColor: 'white' }}
          >
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/CoCo_project_ver.2/mypage">
              마이페이지
            </Dropdown.Item>
            <Dropdown.Item
              as={Button}
              onClick={() => {
                signOutAccount();
              }}
            >
              로그아웃
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Link as={Link} to="/CoCo_project_ver.2/cs">
          고객센터
        </Nav.Link>
      </Nav>
    ),

    false: (
      <Nav className="top-navbar__etc-nav">
        <Nav.Link as={Link} to="/CoCo_project_ver.2/auth/sign_in">
          로그인
        </Nav.Link>
        <Nav.Link as={Link} to="/CoCo_project_ver.2/auth/sign_up">
          회원가입
        </Nav.Link>
        <Nav.Link as={Link} to="/CoCo_project_ver.2/cs">
          고객센터
        </Nav.Link>
      </Nav>
    ),
  };

  return (
    <div id="top-navbar--wrap">
      <Navbar className="top-navbar">
        <img
          src={coconut}
          alt="menu"
          className="top-navbar__hamburger"
          onClick={() => {
            setIsOffCanvasShow(true);
          }}
        ></img>
        <Container className="top-navbar__container">
          <Navbar.Brand
            className="top-navbar__brand"
            as={Link}
            to="/CoCo_project_ver.2"
          >
            <img src={jjongLogo2} className="top-navbar__logo" />
          </Navbar.Brand>

          <Nav
            className="top-navbar__nav"
            activeKey={topNavActiveTap}
            onClick={() => {
              initialScroll();
            }}
          >
            <Nav.Link
              className="top-navbar__nav-link-01"
              eventKey="community"
              as={Link}
              to="/CoCo_project_ver.2"
              onClick={() => {
                setTopNavActiveTap('community');
                setBottomNavActiveTap('home');
                setIsBottomNavShow(true);
              }}
              onMouseOver={() => {
                setTopNavOpenTap('community');
              }}
            >
              community
            </Nav.Link>

            <Nav.Link
              className="top-navbar__nav-link-02"
              eventKey="clothes"
              as={Link}
              to="/CoCo_project_ver.2/clothes/all"
              onClick={() => {
                setTopNavActiveTap('clothes');
                setBottomNavActiveTap('all');
                setIsBottomNavShow(true);
              }}
              onMouseOver={() => {
                setTopNavOpenTap('clothes');
              }}
            >
              clothes
            </Nav.Link>

            <Nav.Link
              className="top-navbar__nav-link-03"
              eventKey="shoes"
              as={Link}
              to="/CoCo_project_ver.2/shoes/all"
              onClick={() => {
                setTopNavActiveTap('shoes');
                setBottomNavActiveTap('all');
                setIsBottomNavShow(true);
              }}
              onMouseOver={() => {
                setTopNavOpenTap('shoes');
              }}
            >
              shoes
            </Nav.Link>
          </Nav>
          <div className="top-navbar__etc">
            <div className="top-navbar__search--wrap">
              <input
                type="text"
                className="top-navbar__search"
                placeholder="코코 통합검색"
              />
              <img
                className="top-navbar__search--icon"
                src={searchIcon}
                alt="searchIcon"
              ></img>
            </div>

            <div className="top-navbar__cart-wrap">
              <img
                src={cartIcon}
                alt="cartIcon"
                className="top-navbar__cart"
                onClick={() => {
                  navigate(`/CoCo_project_ver.2/cart`);
                }}
              />
            </div>

            {authUi[isAuthenticated]}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNav;
