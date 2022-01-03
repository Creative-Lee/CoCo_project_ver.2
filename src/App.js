import React, { useEffect, useState ,useMemo , lazy , Suspense } from 'react';
import { Link, Route, Switch, useHistory }  from 'react-router-dom';
import { Navbar,Nav,CloseButton,Button,Container,Row,Col,Offcanvas,Carousel} from 'react-bootstrap';

// import firebase from './firebase';

import TopNav from './Components/layout/TopNav';
import BottomNav from './Components/layout/BottomNav';
import Footer from './Components/layout/Footer';
import Product from './Components/Product';

import _allData from './Data/productData/allData.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';

import coconut from './img/coconut.jpg'
import 정사각배너 from './img/정사각배너16.9.jpg'
import 까리2 from './img/형님사진/까리2.jpg'
import 바프2 from './img/바프16.9/바프2.jpg'
import 바프4 from './img/바프16.9/바프4.jpg'
import 바프5 from './img/바프16.9/바프5.jpg'
import 바프6 from './img/바프16.9/바프6.jpg'
import 바프7 from './img/바프16.9/바프7.jpg'
import 쩡로고2 from './img/쩡로고2.png'
import 인스타로고 from './img/인스타로고.png'
import 장바구니 from './img/장바구니.png'
import 돋보기 from './img/돋보기.png'


import CartContainer from './containers/CartContainer';
import DetailContainer from './containers/DetailContainer';


function App() {
  const headerInlineStyle = {height : "80px", marginBottom: "80px" }
  const [hiddenMenuShow, setHiddenMenuShow] = useState(false);
  const hiddenMenuClose = () => setHiddenMenuShow(false);
  const hiddenMenuOpen = () => setHiddenMenuShow(true);
  
  const [topBanner,setTopBanner] = useState(false);

  const [moreDivStyle,setMoreDivStyle] = useState(false);
  const moreDivInlineStyle = {backgroundColor : "white" , color: "black"} 

  const [allData , setAllData] = useState(_allData)
   // 상품 전체 데이터

  const [targetProduct,setTargetProduct] = useState("clothes");
  // 타겟 상품군 /  "clothes" ,"shoes"    

  const [targetCategory,setTargetCategory] = useState("home"); 
  // 타겟 상품 카테고리

  const category = product => product.category === targetCategory;
  // 데이터 파일 내 상품의 카테고리와 타겟 카테고리 일치 비교 콜백함수

  const filterdProduct = allData[targetProduct].filter(category);   
  // 각 상품군의 배열에서 필터링된 배열이 담긴 변수 
  // 이 배열에 map()을 사용해서 Product 컴포넌트를 반복시킨다.

  const [topNavOpenTheme, setTopNavOpenTheme] = useState(false)
    // topNavOpenTheme에 따라 bottomNav 정해짐

  const [topNavActiveTheme,setTopNavActiveTheme] = useState("community"); 
  // topNavActiveTheme에 따라 bottomNav 정해짐 


  const initialScroll = () => {
    window.scrollTo({top: 0, behavior:'instant'})
  }

  const mouseOutHeader = () => {
    const isAwayFromTop = window.scrollY > 0  
    if(isAwayFromTop){
      setBottomNavState("hide");
    }
  }  

  const [bottomNavState,setBottomNavState] = useState("show");  
  const [mouseOnHeader,setMouseOnHeader] = useState(false);
  const [beforeScrollY,setBeforeScrollY] = useState(0)

  const scrollUpDown = () => {    
    const state = isScrollDown() ? "hide" : "show"
    setBottomNavState(state);  
  }

  const isScrollDown = () => {
    const afterScrollY = window.scrollY
    const isGoingDown = afterScrollY - beforeScrollY >= 0
    setBeforeScrollY(afterScrollY)  
    
    return isGoingDown && !mouseOnHeader
  }
  
  useEffect(() => {
    window.addEventListener("scroll",scrollUpDown)
    return () =>{
      window.removeEventListener("scroll", scrollUpDown)
    } 
  })


  useEffect(()=>{
    setTopBanner(true); 
  },[])   



  return (
    <div className="App" onScroll={scrollUpDown}>  
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
      style={bottomNavState == "hide" ? headerInlineStyle : null }
      onMouseOver={()=>{ setBottomNavState("show"); setMouseOnHeader(true);}}
      onMouseOut={()=>{ mouseOutHeader() ; setMouseOnHeader(false);}}
      onMouseLeave={()=>{ setTopNavOpenTheme(false)}}>
      <TopNav   
        bottomNavState={bottomNavState}    
        setBottomNavState={setBottomNavState}
        setTargetCategory={setTargetCategory} 
        setTargetProduct={setTargetProduct}         
        hiddenMenuOpen={hiddenMenuOpen} 
        topNavActiveTheme={topNavActiveTheme}
        setTopNavActiveTheme={setTopNavActiveTheme}
        coconut={coconut}     
        쩡로고2={쩡로고2}
        장바구니={장바구니}
        돋보기={돋보기}
        initialScroll={initialScroll}
        setTopNavOpenTheme={setTopNavOpenTheme}
        />
        
      <BottomNav        
        setTargetProduct={setTargetProduct}
        targetCategory={targetCategory}
        setTargetCategory={setTargetCategory} 
        bottomNavState={bottomNavState}
        setBottomNavState={setBottomNavState}
        topNavActiveTheme={topNavActiveTheme} 
        setTopNavActiveTheme={setTopNavActiveTheme}
        initialScroll={initialScroll}
        topNavOpenTheme={topNavOpenTheme}
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
                  <img className="main-content__img" src={까리2} alt="big brother"/> 
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
              src={바프2}
              alt="1th slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img 
              src={바프4}
              alt="2nd slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img 
              src={바프5}
              alt="3rd slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img 
              src={바프6}
              alt="4th slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img 
              src={바프7}
              alt="5th slide"
            />
            </Carousel.Item>
          </Carousel>
        <div className="mini">
          <div className="mini-banner__img-wrap">
            <img className="mini-banner__img" src={정사각배너}/>
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
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
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
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
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
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
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
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
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
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
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
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
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
                return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
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
          } */}

          {/* { 
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
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
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
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
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
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>


      <Route path="/CoCo_project_ver.2_build/detail/shoes/:data_id" basename="/CoCo_project_ver.2_build/shoes/detail/:data_id">
        <Suspense fallback={ <div>로딩중입니다~!</div> }>
          <DetailContainer 
            allData={allData} setAllData={setAllData} 
            targetProduct={targetProduct}
          />
        </Suspense>
      </Route>

      <Route path="/CoCo_project_ver.2_build/detail/clothes/:data_id" basename="/CoCo_project_ver.2_build/detail/clothes/:data_id">
        <Suspense fallback={ <div>로딩중입니다~!</div> }>
          <DetailContainer 
            allData={allData} setAllData={setAllData} 
            targetProduct={targetProduct}
          />
          </Suspense>
      </Route>  

      <Route path='/CoCo_project_ver.2_build/cart' basename="/CoCo_project_ver.2_build/cart">
        <Suspense fallback={ <div>로딩중입니다~!</div> }>
          <CartContainer/>
        </Suspense>
      </Route>
    </Switch>

      <Footer 인스타로고={인스타로고}/> 
        
    </div>
  );
  
} 

export default App;
