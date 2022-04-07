import React, { useEffect, useState ,useMemo , lazy , Suspense } from 'react';
import { Link, Route,Routes }  from 'react-router-dom';
import { Navbar,Nav,CloseButton,Button,Container,Row,Col,Offcanvas,Carousel} from 'react-bootstrap';

import {firestore, storage} from './firebase';
import {collection, getDocs} from 'firebase/firestore';


import TopNav from './Components/layout/TopNav';
import BottomNav from './Components/layout/BottomNav';
import Footer from './Components/layout/Footer';
import Product from './Components/Product';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';

import coconut from './img/coconut.jpg'
import discountBanner from './img/discountBanner.jpg'
import brother2 from './img/brother/brother2.jpg'
import profile2 from './img/profile16.9/profile2.jpg'
import profile4 from './img/profile16.9/profile4.jpg'
import profile5 from './img/profile16.9/profile5.jpg'
import profile6 from './img/profile16.9/profile6.jpg'
import profile7 from './img/profile16.9/profile7.jpg'
import jjongLogo2 from './img/jjongLogo2.png'
import instaIcon from './img/instaIcon.png'
import cartIcon from './img/cartIcon.png'
import searchIcon from './img/searchIcon.png'

import CartContainer from './containers/CartContainer';
import DetailContainer from './containers/DetailContainer';
import ProductList from './Components/ProductList'

export default function App() {
  const headerInlineStyle = {height : "80px", marginBottom: "80px"}
  const [hiddenMenuShow, setHiddenMenuShow] = useState(false);
  const hiddenMenuClose = () => setHiddenMenuShow(false);
  const hiddenMenuOpen = () => setHiddenMenuShow(true);
  
  const [topBanner,setTopBanner] = useState(false);

  const [moreDivStyle,setMoreDivStyle] = useState(false);
  const moreDivInlineStyle = {backgroundColor : "white" , color: "black"} 

  const [topNavActiveTap,setTopNavActiveTap] = useState("community");
  const [topNavOpenTap, setTopNavOpenTap] = useState(false) 
  const [bottomNavActiveTap,setBottomNavActiveTap] = useState("home"); 

  /* BottomNav show, hide 관련 */
  const [isBottomNavShow,setIsBottomNavShow] = useState(true);  
  const [isMouseOnHeader,setIsMouseOnHeader] = useState(false);
  const [beforeScrollY,setBeforeScrollY] = useState(0)  

  const changeBottomNavState = () => {    
    if(isMouseOnHeader || !isScrollDown()){
      setIsBottomNavShow(true); 
    } 
    else{
      setIsBottomNavShow(false)
    }   
  }  
  
  const isScrollDown = () => {
    const afterScrollY = window.scrollY
    const _isScrollDown = afterScrollY - beforeScrollY >= 0
    
    setBeforeScrollY(afterScrollY)  
    
    return _isScrollDown
  }

  const hideBottomNav = () => {
    const isScrollTop = window.scrollY === 0  

    if(!isScrollTop){
      setIsBottomNavShow(false);
    }
  }  

  const initialScroll = () => {
    window.scrollTo({top: 0, behavior:'instant'})
  }

  const [clothesList, setClothesList] = useState([])
  const [shoesList, setShoesList] = useState([])  

  const getClothesList = async (firestore) => {
    const clothesCol = collection(firestore,'clothes')
    const clothesDoc = await getDocs(clothesCol)
    const clothesList = clothesDoc.docs.map(doc => doc.data())
        
    setClothesList([...clothesList])
  }  
    
  const getShoesList = async (firestore) => {
    const shoesCol = collection(firestore, 'shoes');
    const shoesDoc = await getDocs(shoesCol);
    const shoesList = shoesDoc.docs.map(doc => doc.data())
    
    setShoesList([...shoesList])
  }  
  
  useEffect(()=>{
    getClothesList(firestore);
    getShoesList(firestore);    
  },[]) 

  useEffect(() => {   
    window.addEventListener("scroll", changeBottomNavState)
    
    return () =>{
      window.removeEventListener("scroll", changeBottomNavState)
    } 
  })

  useEffect(()=>{
    setTopBanner(true); 
  },[]) 
  
  return (
    <div className="App">          
      {
        /* # 최상단 배너 # */
        topBanner === true &&
        <div className="top-banner">
          <CloseButton onClick={()=>{setTopBanner(false)}}/> 
          <p className="top-banner__inner">🤑 Fromcoco 첫 구매라면 최대 10,000원 할인! 🤑</p>
          <p className="top-banner__inner-hidden">🤑 첫 구매라면 최대 10,000원 할인! 🤑</p>
        </div>
      } 

    <header className="header"
      style={isBottomNavShow === false ? headerInlineStyle : null }
      onMouseOver={()=>{ setIsBottomNavShow(true); setIsMouseOnHeader(true);}}
      onMouseOut={()=>{ hideBottomNav() ; setIsMouseOnHeader(false);}}
      onMouseLeave={()=>{ setTopNavOpenTap(false)}}>
      <TopNav   
        isBottomNavShow={isBottomNavShow}    
        setIsBottomNavShow={setIsBottomNavShow}
        setBottomNavActiveTap={setBottomNavActiveTap} 
        hiddenMenuOpen={hiddenMenuOpen} 
        topNavActiveTap={topNavActiveTap}
        setTopNavActiveTap={setTopNavActiveTap}
        coconut={coconut}     
        jjongLogo2={jjongLogo2}
        cartIcon={cartIcon}
        searchIcon={searchIcon}
        initialScroll={initialScroll}
        setTopNavOpenTap={setTopNavOpenTap}
      />
        
      <BottomNav        
        bottomNavActiveTap={bottomNavActiveTap}
        setBottomNavActiveTap={setBottomNavActiveTap} 
        isBottomNavShow={isBottomNavShow}
        setIsBottomNavShow={setIsBottomNavShow}
        topNavActiveTap={topNavActiveTap} 
        setTopNavActiveTap={setTopNavActiveTap}
        initialScroll={initialScroll}
        topNavOpenTap={topNavOpenTap}
      />
        
    </header>

    <Offcanvas id="hidden-menu" show={hiddenMenuShow} onHide={hiddenMenuClose}>   {/* # 모바일네브 # */}

        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Fromcoco 124th</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <h1>여기에는 뭐든지 들어갑니다.</h1>
          <Nav id="hidden-menu__nav">
              <Nav.Link as={Link} to="/CoCo_project_ver.2/detail/0">men</Nav.Link>
              <Nav.Link as={Link} to="/CoCo_project_ver.2/detail/1">lady</Nav.Link>
              <Nav.Link as={Link} to="/CoCo_project_ver.2/detail/2">unisex</Nav.Link>
              <Nav.Link as={Link} to="/CoCo_project_ver.2/detail/2">unisex</Nav.Link>
              <Nav.Link as={Link} to="/CoCo_project_ver.2/detail/2">unisex</Nav.Link>
              <Nav.Link as={Link} to="/CoCo_project_ver.2/detail/2">unisex</Nav.Link>
          </Nav>
        </Offcanvas.Body>
    </Offcanvas>

  <Routes basename="CoCo_project_ver.2"> 
    
    <Route path="/CoCo_project_ver.2" element={
      <article className="home-header">
      <Container>    
        <Row>
          <Col md="9">
            <div className="main-content" >
              <a className="main-content__link" href="https://www.instagram.com/minsunki6613/" target="_blank"> 
                <div className="main-content__img-wrap"
                  onMouseOver={()=>{setMoreDivStyle(true)}}
                  onMouseOut={()=>{setMoreDivStyle(false)}}>
                    <img className="main-content__img" src={brother2} alt="big brother"/> 
                </div>
  
                <div className="main-content__text-wrap">
                  <div className="main-content__text">
                    <span className="main-content__text-01">무한매력의 코코상!</span>          
                    <span className="main-content__text-02">CEO 코코상 그의 성공비결을 취재하다</span>          
                    <br/>
                    <span className="main-content__text-03">__directed by Mr.Lee</span>  
                  </div>
                  <div className="main-content__text--more"
                    style={ moreDivStyle == true ? moreDivInlineStyle :null }>
                    보러가기
                  </div>
                </div>
              </a> 
            </div>
          </Col>
  
          <Col md="3">
          <Carousel className="right-carousel">           
            <Carousel.Item>
              <img 
                src={profile2}
                alt="1th slide"
              />
            </Carousel.Item>
  
            <Carousel.Item>
              <img 
                src={profile4}
                alt="2nd slide"
              />
            </Carousel.Item>
  
            <Carousel.Item>
              <img 
                src={profile5}
                alt="3rd slide"
              />
            </Carousel.Item>
  
            <Carousel.Item>
              <img 
                src={profile6}
                alt="4th slide"
              />
            </Carousel.Item>
  
            <Carousel.Item>
              <img 
                src={profile7}
                alt="5th slide"
              />
              </Carousel.Item>
            </Carousel>
          <div className="mini">
            <div className="mini-banner__img-wrap">
              <img className="mini-banner__img" src={discountBanner}/>
            </div>
          </div>
          </Col>
        </Row>
        </Container>
      </article>    
    }/>    
    

    <Route path="CoCo_project_ver.2/:product_param/:category_param" element={
      <ProductList clothesList={clothesList} shoesList={shoesList} topNavActiveTap={topNavActiveTap}/>
    }/>
    

    <Route path="CoCo_project_ver.2/detail/:product_id" element={
      <Suspense fallback={ <div>로딩중입니다~!</div> }>
      <DetailContainer 
        clothesList={clothesList} shoesList={shoesList} topNavActiveTap={topNavActiveTap}
        initialScroll={initialScroll}
      />
    </Suspense>
    }/>
    
    <Route path='CoCo_project_ver.2/cart' element={
      <Suspense fallback={ <div>로딩중입니다~!</div> }>
      <CartContainer/>
    </Suspense>
    }/>
    
  </Routes>

    <Footer instaIcon={instaIcon}/> 
  </div>
  );  
} 
