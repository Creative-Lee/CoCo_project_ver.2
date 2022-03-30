import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Col,Nav} from 'react-bootstrap';

  function Footer({instaIcon}){

    return(
      <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer-inner">
              <div className="footer-inner__top">
                <div className="footer-inner__top-customer">
                  <div className="footer-inner__top-customer-01">고객센터⚡</div>
                  <div className="footer-inner__top-customer-02">1577-1577</div>
                  <div className="footer-inner__top-customer-03">평일 09:00 ~ 18:00 (주말 & 공유일제외)</div>
                </div>
                <div className="footer-inner__top-instar">
                    <div className="footer-inner__top-instar-01">주인장의 사생활이 궁금하다면👀</div>   
                    <a href="https://www.instagram.com/minsunki6613/" target="_blank">
                      <span>minsunki6613</span>{' '} <img src={instaIcon}/>
                    </a> 
                </div>
              </div>
              <div className="footer-inner__mid">
                <Nav as='ul' className="me-auto">
                  <Nav.Link as='li'><a href='/' target="_blank">브랜드 스토리</a></Nav.Link>
                  <Nav.Link as='li'><a href='/' target="_blank">이용약관</a></Nav.Link>
                  <Nav.Link as='li'><a href='/' target="_blank">채용정보</a></Nav.Link>              
                  <Nav.Link as='li'><a href='/' target="_blank">개인정보처리방침</a></Nav.Link>              
                  <Nav.Link as='li'><a href='/' target="_blank">코코상의 비밀</a></Nav.Link>              
                  <Nav.Link as='li'><a href='/' target="_blank">눌러보세요</a></Nav.Link>              
                  <Nav.Link as='li'><a href='/' target="_blank">으헤헤</a></Nav.Link>              
                  <Nav.Link as='li'><a href='/' target="_blank">비밀이지롱</a></Nav.Link>              
                </Nav> 
              </div>
              <div className="footer-inner__bottom">
                <Nav as='ul' className="me-auto">
                    <Nav as='li'>상호명: 프롬코코124번가</Nav>
                    <Nav as='li'>이메일(고객문의): fromcoco124@gmail.com</Nav>
                    <Nav as='li'>사업자등록번호: 000-11-2222222</Nav>              
                    <Nav as='li'>주소: 경기도 평택시 서재로 26-124</Nav>              
                    <Nav as='li'>대표이사: 민선기</Nav>              
                    <Nav as='li'>별명: 코코상</Nav>              
                    <Nav as='li'>특징: 근엄한 관종</Nav>              
                </Nav>
              </div>
              <div className="footer-inner__woori">
                <div className="footer-inner__woori-01">우리은행 채무지급보증 안내: 프롬코코 124번가는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결 할랑말랑 합니다. 안전거래는 나중에 보장해 드릴게유. </div>
              </div>

              <div className="footer-inner__copyright">
                <p>Copyright 2021. Fromcoco 124th, Co. Ltd. All rights reserved</p>                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    )
  }

export default Footer;