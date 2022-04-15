import React,{useState, useEffect} from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

export default function Home({
  setTopNavActiveTap,setBottomNavActiveTap,
  discountBanner, brother2, profile2, profile4, profile5, profile6, profile7
  }){

  const [moreDivStyle,setMoreDivStyle] = useState(false);
  const moreDivInlineStyle = {backgroundColor : "white" , color: "black"}   

  useEffect(()=>{
    setTopNavActiveTap('community')
    setBottomNavActiveTap('home')
  })

  return(
    <article id="main">
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
          <div className="mini-banner">
            <div className="mini-banner__img-wrap">
              <img className="mini-banner__img" src={discountBanner}/>
            </div>
          </div>
          </Col>
        </Row>
        </Container>
      </article>   
  )
}