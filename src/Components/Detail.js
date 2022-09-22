import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Nav, Button, Container, Row, Col } from 'react-bootstrap';

export default function Detail({
  detailQuan,
  onQuan_Initialize,
  onIncrease,
  onDecrease,
  onAddData,
  topNavActiveTap,
  clothesList,
  shoesList,
  initialScroll,
}) {
  const navigate = useNavigate();
  const { product_id } = useParams();

  const [tap, setTap] = useState('info');
  const allProductList = [...clothesList, ...shoesList];

  const matchProduct = allProductList.find(
    (product) => product.id == product_id,
  );

  const cartQuestion = () => {
    const goCart = window.confirm(
      '선택하신 상품이 장바구니에 담겼습니다.장바구니로 이동할까요??',
    );
    if (goCart) {
      navigate('/CoCo_project_ver.2/cart');
    }
  };

  const MATCH_PRODUCT_IMG = `${process.env.IMG_URL}/assets/${topNavActiveTap}/${topNavActiveTap}_${matchProduct.id}.jpg`;
  const MATCH_PRODUCT_MAIN_IMG = `${process.env.IMG_URL}/assets/${topNavActiveTap}/${topNavActiveTap}_main_${matchProduct.id}.jpg`;

  // useEffect(()=>{
  //   localStorage.setItem("최근 본 상품",JSON.stringify({id:`${matchProduct.id}`}))
  //   initialScroll();

  //   return ()=>{
  //     onQuan_Initialize();
  //   }
  // },[])

  return (
    <Container id="detail">
      <Row>
        <Col md="6">
          <div>
            <img src={MATCH_PRODUCT_IMG} alt="product" width="100%" />
          </div>
        </Col>

        <Col md="6" className="detail-info">
          <div>
            <h4>{matchProduct.title}</h4>
            <p>{matchProduct.price.toLocaleString('ko-KR')}￦</p>
          </div>

          <div className="info__quantity-wrap">
            <div className="info__quantity">구매수량 : {detailQuan}</div>
            <div className="info__quantity-button-wrap">
              <button onClick={onIncrease}>+</button>
              <button onClick={onDecrease}>-</button>
            </div>
          </div>

          <Button
            className="cart-button"
            onClick={() => {
              onAddData({
                id: matchProduct.id,
                name: matchProduct.title,
                price: matchProduct.price,
                quan: detailQuan,
              });
              cartQuestion();
            }}
          >
            장바구니🛒
          </Button>
        </Col>
      </Row>

      <Row>
        <Nav className="mt-5" variant="tabs" defaultActiveKey="info">
          <Nav.Item>
            <Nav.Link
              eventKey="0"
              onClick={() => {
                setTap('info');
              }}
            >
              상세정보👀
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="1"
              onClick={() => {
                setTap('review');
              }}
            >
              고객리뷰👍
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="2"
              onClick={() => {
                setTap('qna');
              }}
            >
              문의사항🤷‍♀️
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>

      <Row>
        <TabContent tap={tap} MATCH_PRODUCT_MAIN_IMG={MATCH_PRODUCT_MAIN_IMG} />
      </Row>
    </Container>
  );
}

function TabContent({ tap, MATCH_PRODUCT_MAIN_IMG }) {
  const tabUI = {
    info: (
      <div>
        <h3>상세정보</h3>
        <span>놀라지 마세요 상상도 못한 정체</span>
        <div>
          <img src={MATCH_PRODUCT_MAIN_IMG} alt="product" width="100%" />
        </div>
      </div>
    ),

    review: <p>고객리뷰</p>,

    qna: <p>문의사항</p>,
  };

  return <div>{tabUI[tap]}</div>;
}
