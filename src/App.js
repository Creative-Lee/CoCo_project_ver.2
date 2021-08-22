import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import coconut from './img/coconut.jpg'
import 직사각배너 from './img/직사각배너.jpg'
import 정사각배너 from './img/정사각배너16.9.jpg'
import 나이뽀 from './img/형님사진/나이뽀.jpg'
import 까리 from './img/형님사진/까리.jpg'
import 까리2 from './img/형님사진/까리2.jpg'
import 마술사 from './img/형님사진/마술사.jpg'
import 바프2 from './img/바프16.9/바프2.jpg'
import 바프4 from './img/바프16.9/바프4.jpg'
import 바프5 from './img/바프16.9/바프5.jpg'
import 바프6 from './img/바프16.9/바프6.jpg'
import 바프7 from './img/바프16.9/바프7.jpg'
import 코코로고 from './img/코코 로고.png'
import 쩡로고1 from './img/쩡로고1.png'
import 쩡로고2 from './img/쩡로고2.png'
import 인스타로고 from './img/인스타로고.png'


import CartContainer from './containers/CartContainer'; 
import DetailContainer from './containers/DetailContainer';

import TopNav from './Components/layout/TopNav';
import BottomNav from './Components/layout/BottomNav';
import Footer from './Components/layout/Footer';

import Product from './Components/Product';
import _allData from './Data/productData/allData.js'


import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { Link, Route, Switch, useHistory, }  from 'react-router-dom';
import { Navbar,Nav,CloseButton,Button,Container,Row,Col,Offcanvas,Carousel} from 'react-bootstrap';



function App() {

  const [hiddenMenuShow, setHiddenMenuShow] = useState(false);
  const hiddenMenuClose = () => setHiddenMenuShow(false);
  const hiddenMenuOpen = () => setHiddenMenuShow(true);

  
  let [wait,setWait] = useState(false);
  let [buttonState,setButtonState] = useState(0);
  const [topBanner,setTopBanner] = useState(false);
  const [moreDivStyle,setMoreDivStyle] = useState(false);

  const [topNavTheme,setTopNavTheme] = useState("community");

  const [bottomNavState,setBottomNavState] = useState(false);

  const wheelUpDown = (e) => {
    const totalHeight = document.documentElement.scrollHeight
    const viewportHeight = document.documentElement.clientHeight
  
    if(e.deltaY > 0 && (totalHeight !== viewportHeight)){
      setBottomNavState(true);
    }
    else{
      setBottomNavState(false);
    }  
  }

  const mouseOverOut = ()=>{
    const heightFromTop = window.scrollY

    if(heightFromTop > 0){
      if(bottomNavState=== true){
        setBottomNavState(false);
      }
      else{
        setBottomNavState(true);
      }
    }   
  }

  

  const [allData , setAllData] = useState(_allData)
   // 상품 전체 데이터

  const [targetProduct,setTargetProduct] = useState("clothes");
  // 타겟 상품군 /  "clothes" ,"shoes"    
  // 이미지를 위해 만듬 ㅡㅡㅡ  원래는 allData. 다음에 넣고싶었음

  const [targetCategory,setTargetCategory] = useState(""); 
  // 타겟 상품 카테고리

  const category = product => product.category === targetCategory;
  // 데이터 파일 내 상품의 카테고리와 타겟 카테고리 일치 비교 콜백함수

  const filterdClothes = allData.clothes.filter(category);
  const filterdShoes = allData.shoes.filter(category);
  // 각 상품군의 배열에서 필터링된 데이터가 담긴 배열들 
  // 이 배열에 map()을 사용해서 Product 컴포넌트를 반복시킨다.
  

  
  function activeController(){
    const community = document.getElementById("top-navbar__nav-link-01")
    const clothes = document.getElementById("top-navbar__nav-link-02")
    const shoes = document.getElementById("top-navbar__nav-link-03")
    const childArray =  [...document.getElementById("bottom-navbar__nav").children]
    
    if(childArray[0].id === "bottom-navbar__nav-link-01"){
      if(community.classList.contains("active")){
        return;
      }      
      community.classList.add("active");
      clothes.classList.remove("active");
      shoes.classList.remove("active");
    }

    if(childArray[0].id === "bottom-navbar__nav-link-02"){
      if(clothes.classList.contains("active")){
        return;
      }
      clothes.classList.add("active");
      community.classList.remove("active");
      shoes.classList.remove("active");
    }

    if(childArray[0].id === "bottom-navbar__nav-link-03"){
      if(shoes.classList.contains("active")){
        return;
      }
      shoes.classList.add("active");
      clothes.classList.remove("active");
      community.classList.remove("active");
    }
  }
  


  useEffect(()=>{
    setTopBanner(true);    
  },[])
    

  return (
    <div className="App" onWheel={wheelUpDown}>  
      {/* # 최상단 배너 # */} 
      {
        topBanner === true &&
        <div className="top-banner">
          <CloseButton variant="top-banner" onClick={()=>{setTopBanner(false)}}/>
          <p className="top-banner__inner">🤑 Fromcoco 첫 구매라면 최대 10,000원 할인! 🤑</p>
          <p className="top-banner__inner-hidden">🤑 첫 구매라면 최대 10,000원 할인! 🤑</p>
        </div>
      } 

    <header className="header"
      onMouseOver={()=>{mouseOverOut()}}
      onMouseOut={()=>{mouseOverOut()}}>
      <TopNav
      activeController={activeController}
      setBottomNavState={setBottomNavState}
      setTargetCategory={setTargetCategory} 
      setTargetProduct={setTargetProduct} 
      bottomNavState={bottomNavState} 
      hiddenMenuOpen={hiddenMenuOpen} 
      setTopNavTheme={setTopNavTheme}
      coconut={coconut}     
      쩡로고2={쩡로고2}/>
      <BottomNav
      activeController={activeController} 
      setTargetProduct={setTargetProduct}
      targetCategory={targetCategory}
      setTargetCategory={setTargetCategory} 
      bottomNavState={bottomNavState}
      setBottomNavState={setBottomNavState}
      topNavTheme={topNavTheme} 
      setTopNavTheme={setTopNavTheme}
      />
    </header>

    <Offcanvas id="hidden-menu" show={hiddenMenuShow} onHide={hiddenMenuClose}>   {/* # 모바일네브 # */}

        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Fromcoco 124th</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <h1>여기에는 뭐든지 들어갑니다.</h1>
          <Nav id="hidden-menu__nav">
              <Nav.Link as={Link} to="/coco124/detail/0">men</Nav.Link>
              <Nav.Link as={Link} to="/coco124/detail/1">lady</Nav.Link>
              <Nav.Link as={Link} to="/coco124/detail/2">unisex</Nav.Link>
              <Nav.Link as={Link} to="/coco124/detail/2">unisex</Nav.Link>
              <Nav.Link as={Link} to="/coco124/detail/2">unisex</Nav.Link>
              <Nav.Link as={Link} to="/coco124/detail/2">unisex</Nav.Link>
          </Nav>
        </Offcanvas.Body>
    </Offcanvas>

  <Switch> 
  <Route exact path="/coco124" basename="/coco124"> {/*# 메인페이지 # */}

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
                  style={ moreDivStyle == true ? {backgroundColor : "white" , color: "black"} :null }>
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

    <Route exact path="/coco124/clothes/new" basename="/coco124/clothes/new">
      <Container>    
        <Row>
          {
            filterdClothes.map((a,i)=>{
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/coco124/clothes/cityboy" basename="/coco124/clothes/cityboy">
      <Container>    
        <Row>
          {
            filterdClothes.map((a,i)=>{
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/coco124/clothes/amekaji" basename="/coco124/clothes/amekaji">
      <Container>    
        <Row>
          {
            filterdClothes.map((a,i)=>{
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/coco124/clothes/street" basename="/coco124/clothes/street">
      <Container>    
        <Row>
          {
            filterdClothes.map((a,i)=>{
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/coco124/clothes/minimal" basename="/coco124/clothes/minimal">
      <Container>    
        <Row>
          {
            filterdClothes.map((a,i)=>{
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/coco124/clothes/summer" basename="/coco124/clothes/summer">
      <Container>    
        <Row>
          {
            filterdClothes.map((a,i)=>{
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>

    <Route exact path="/coco124/shoes/new" basename="/coco124/shoes/new">
        <Container>
          <Row>
            {
              filterdShoes.map((a,i)=>{
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
    <Route exact path="/coco124/shoes/sneakers" basename="/coco124/shoes/sneakers">
      <Container>    
        <Row>
          {
              filterdShoes.map((a,i)=>{
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/coco124/shoes/loafer" basename="/coco124/shoes/loafer">
      <Container>    
        <Row>
          {
              filterdShoes.map((a,i)=>{
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>
    <Route exact path="/coco124/shoes/oxford" basename="/coco124/shoes/oxford">
      <Container>    
        <Row>
          {
              filterdShoes.map((a,i)=>{
              return (<Product targetProduct={targetProduct} filterdData={a} i={i} key={i}/>)
            })  
          }
        </Row>
      </Container>
    </Route>


      <Route path="/coco124/detail/:data_id" basename="/coco124/detail/:data_id">
        <DetailContainer allData={allData} setAllData={setAllData}/>
      </Route>

      <Route path='/coco124/cart' basename="/coco124/cart">
        <CartContainer/>
      </Route>
    </Switch>

      <Footer 인스타로고={인스타로고}/> 
        
    </div>
  );
  
} 






export default App;
