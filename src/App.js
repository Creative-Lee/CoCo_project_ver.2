import React, { useEffect, useState ,useMemo , lazy , Suspense } from 'react';
import { Link, Route, Switch, useHistory }  from 'react-router-dom';
import { Navbar,Nav,CloseButton,Button,Container,Row,Col,Offcanvas,Carousel} from 'react-bootstrap';

import {firestore, storage} from './firebase';
import {collection, getDocs} from 'firebase/firestore';


import TopNav from './Components/layout/TopNav';
import BottomNav from './Components/layout/BottomNav';
import Footer from './Components/layout/Footer';
import Product from './Components/Product';

import productData from './Data/productData/allData.js'

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


function App() {
  const headerInlineStyle = {height : "80px", marginBottom: "80px"}
  const [hiddenMenuShow, setHiddenMenuShow] = useState(false);
  const hiddenMenuClose = () => setHiddenMenuShow(false);
  const hiddenMenuOpen = () => setHiddenMenuShow(true);
  
  const [topBanner,setTopBanner] = useState(false);

  const [moreDivStyle,setMoreDivStyle] = useState(false);
  const moreDivInlineStyle = {backgroundColor : "white" , color: "black"} 

  const [allData , setAllData] = useState(productData)  

  const [topNavActiveTap,setTopNavActiveTap] = useState("community");
  const [topNavOpenTap, setTopNavOpenTap] = useState(false) 
  const [bottomNavActiveTap,setBottomNavActiveTap] = useState("home"); 

  const category = product => product.category === bottomNavActiveTap;
  // 데이터 파일 내 상품의 카테고리와 타겟 카테고리 일치 비교 콜백함수

  const filterdProduct = allData[topNavActiveTap].filter(category);   
  // 각 상품군의 배열에서 필터링된 배열이 담긴 변수 
  // 이 배열에 map()을 사용해서 Product 컴포넌트를 반복시킨다.

  /* BottomNav show, hide 관련 */
  const [isBottomNavShow,setIsBottomNavShow] = useState(true);  
  const [isMouseOnHeader,setIsMouseOnHeader] = useState(false);
  const [beforeScrollY,setBeforeScrollY] = useState(0)  

  const setBottomNavState = () => {    
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

  async function getClothes(firestore){
    const clothesCol = collection(firestore,'clothes')
    const clothesDoc = await getDocs(clothesCol) 
    const clothesList = clothesDoc.docs.map(doc => doc.data()) 
    console.log(clothesList)
    // .forEach((doc) => {
    //   console.log( doc.id , doc.data());
    // });
  }
    

  
  useEffect(() => {   
    window.addEventListener("scroll", setBottomNavState)
    return () =>{
      window.removeEventListener("scroll", setBottomNavState)
    } 
  })
  /* BottomNav show, hide 관련 */


  useEffect(()=>{
    setTopBanner(true); 
  },[]) 
  
  
  return (
    <div className="App">   
    <input type="button" onClick={()=>{getClothes(firestore)}}></input> 
      
      {/* # 최상단 배너 # */} 
      {
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
              <Nav.Link as={Link} to="/CoCo_project_ver.2_build/detail/0">men</Nav.Link>
              <Nav.Link as={Link} to="/CoCo_project_ver.2_build/detail/1">lady</Nav.Link>
              <Nav.Link as={Link} to="/CoCo_project_ver.2_build/detail/2">unisex</Nav.Link>
              <Nav.Link as={Link} to="/CoCo_project_ver.2_build/detail/2">unisex</Nav.Link>
              <Nav.Link as={Link} to="/CoCo_project_ver.2_build/detail/2">unisex</Nav.Link>
              <Nav.Link as={Link} to="/CoCo_project_ver.2_build/detail/2">unisex</Nav.Link>
          </Nav>
        </Offcanvas.Body>
    </Offcanvas>

  <Switch> 
  <Route exact path="/CoCo_project_ver.2_build" basename="/CoCo_project_ver.2_build"> {/*# 메인페이지 # */}

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
  </Route>

    <Route exact path="/CoCo_project_ver.2_build/clothes/new" basename="/CoCo_project_ver.2_build/clothes/new">
      <Container>    
        <Row>
          {
            filterdProduct.map((a,i)=>{
              return (<Product topNavActiveTap={topNavActiveTap} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/CoCo_project_ver.2_build/clothes/cityboy" basename="/CoCo_project_ver.2_build/clothes/cityboy">
      <Container>    
        <Row>
          {
            filterdProduct.map((a,i)=>{
              return (<Product topNavActiveTap={topNavActiveTap} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/CoCo_project_ver.2_build/clothes/amekaji" basename="/CoCo_project_ver.2_build/clothes/amekaji">
      <Container>    
        <Row>
          {
            filterdProduct.map((a,i)=>{
              return (<Product topNavActiveTap={topNavActiveTap} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/CoCo_project_ver.2_build/clothes/street" basename="/CoCo_project_ver.2_build/clothes/street">
      <Container>    
        <Row>
          {
            filterdProduct.map((a,i)=>{
              return (<Product topNavActiveTap={topNavActiveTap} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/CoCo_project_ver.2_build/clothes/minimal" basename="/CoCo_project_ver.2_build/clothes/minimal">
      <Container>    
        <Row>
          {
            filterdProduct.map((a,i)=>{
              return (<Product topNavActiveTap={topNavActiveTap} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/CoCo_project_ver.2_build/clothes/summer" basename="/CoCo_project_ver.2_build/clothes/summer">
      <Container>    
        <Row>
          {
            filterdProduct.map((a,i)=>{
              return (<Product topNavActiveTap={topNavActiveTap} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>

    <Route exact path="/CoCo_project_ver.2_build/shoes/new" basename="/CoCo_project_ver.2_build/shoes/new">
        <Container>
          <Row>
            {
              filterdProduct.map((a,i)=>{
                return (<Product topNavActiveTap={topNavActiveTap} filterdData={a} i={i} key={i}/>)
              })  
            }
          </Row>

          {/* {
            buttonState < 1 
            ? (<button className="btn btn-primary" onClick={()=>{
              setWait(true);
              setButtonState(buttonState+1);
              axios.get('https://codingapple1.github.io/shop/data2.json')

              //성공시
              .then((result)=>{ 
                setWait(false);
                setshoesData([...shoesData , ...result.data]);
              }) 
              
              //실패시
              .catch(()=>{
                setWait(false);                
              }) 
              
            }}>더보기</button> )

            :null          
          } 

          { 
            wait === true && 
            <div className="wait"> 
              <p>로딩중입니댱</p> 
            </div>  
          }  */}
        </Container>
      </Route>
    <Route exact path="/CoCo_project_ver.2_build/shoes/sneakers" basename="/CoCo_project_ver.2_build/shoes/sneakers">
      <Container>    
        <Row>
          {
              filterdProduct.map((a,i)=>{
              return (<Product topNavActiveTap={topNavActiveTap} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/CoCo_project_ver.2_build/shoes/loafer" basename="/CoCo_project_ver.2_build/shoes/loafer">
      <Container>    
        <Row>
          {
              filterdProduct.map((a,i)=>{
              return (<Product topNavActiveTap={topNavActiveTap} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/CoCo_project_ver.2_build/shoes/oxford" basename="/CoCo_project_ver.2_build/shoes/oxford">
      <Container>    
        <Row>
          {
              filterdProduct.map((a,i)=>{
              return (<Product topNavActiveTap={topNavActiveTap} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>


      <Route path="/CoCo_project_ver.2_build/detail/shoes/:data_id" basename="/CoCo_project_ver.2_build/shoes/detail/:data_id">
        <Suspense fallback={ <div>로딩중입니다~!</div> }>
          <DetailContainer 
            allData={allData} setAllData={setAllData} 
            topNavActiveTap={topNavActiveTap}
          />
        </Suspense>
      </Route>

      <Route path="/CoCo_project_ver.2_build/detail/clothes/:data_id" basename="/CoCo_project_ver.2_build/detail/clothes/:data_id">
        <Suspense fallback={ <div>로딩중입니다~!</div> }>
          <DetailContainer 
            allData={allData} setAllData={setAllData} 
            topNavActiveTap={topNavActiveTap}
          />
          </Suspense>
      </Route>  

      <Route path='/CoCo_project_ver.2_build/cart' basename="/CoCo_project_ver.2_build/cart">
        <Suspense fallback={ <div>로딩중입니다~!</div> }>
          <CartContainer/>
        </Suspense>
      </Route>
    </Switch>

      <Footer instaIcon={instaIcon}/> 
        
    </div>
  );
  
} 

export default App;
