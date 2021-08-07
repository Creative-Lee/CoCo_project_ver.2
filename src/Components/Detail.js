import React, { useState , useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';





function Detail({ detailQuan, 
  onQuan_Initialize, onIncrease, onDecrease, onAddData,
  shoesData 
}){

  const [tap,setTap] = useState("info")
  const [aniState,setAniState] = useState(false); 
  const [alertState,setAlertState] = useState(true);

  useEffect(()=>{
    let stockAlert = setTimeout(()=>{setAlertState(false)} , 2000);
    
		return ()=>{
      clearTimeout(stockAlert);
      onQuan_Initialize()
    }
  },[]);

    let history = useHistory();

    const { item_id } = useParams();
    let matchItems = shoesData.find((shoesData)=>{
        return shoesData.id == item_id
    })
    
    function question(){
        let result =  window.confirm("선택하신 상품이 장바구니에 담겼습니다.장바구니로 갈텨??")
        if(result){
            history.push('/coco124/cart')
        }       
    }

    return (
        <div className="container"> 
          <div className="row">        
            <div className="col-md-6">
                <img src={process.env.PUBLIC_URL + `/assets/shoe/shoe${matchItems.id + 1}.jpg`} width="100%" />
            </div>  
            <div className="col-md-6">
              <h4 className="pt-5">{matchItems.title}</h4>
              <p>{matchItems.content}</p>
              <p>{matchItems.price}￦</p>

              <div>
                  구매수량 : {detailQuan}  
                  <input type="button" value="+" onClick={ onIncrease }/>
                  <input type="button" value="-" onClick={ onDecrease }/>
              </div>

              <button className="btn btn-danger" onClick={() => {
                  onAddData( {id: matchItems.id , name: matchItems.title , price: matchItems.price , quan: detailQuan});
                  question();        
              }}> 장바구니 
              </button> 
              <button className="btn btn-danger" onClick={() => { history.goBack() }} >목록으로</button> 
              
              {
                alertState === true &&  
                (<div className="my-alert">
                    <p>낫 이너프 재고</p>
                </div>)
              }

              </div>  
          </div>

                <Nav className="mt-5" variant="tabs" defaultActiveKey="0">
                <Nav.Item>
                    <Nav.Link eventKey="0" onClick={() => { setTap("info"); setAniState(false) }}>상세정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="1" onClick={() => { setTap("review"); setAniState(false) }}>고객리뷰</Nav.Link>
                </Nav.Item>    
                <Nav.Item>
                    <Nav.Link eventKey="2" onClick={() => { setTap("question"); setAniState(false) }}>문의사항</Nav.Link>
                </Nav.Item>                  
                </Nav>

                <CSSTransition in={aniState} classNames="wow" timeout={500}>
                <TabContent 
                    tap={tap} setAniState={setAniState}
                />
                </CSSTransition>
        </div> 
    )
}


function TabContent({tap , setAniState}){
    const tabUI = {
            info : <p>상세정보</p>,
            review : <p>고객리뷰</p>,
            question : <p>문의사항</p>
    }

    useEffect(()=>{
        setAniState(true)
    })

    return (
        <div>
            { tabUI[ tap ] }
        </div>
    )
    
}

export default Detail;

