import React, { useState , useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components'



let Box = styled.div`
    padding : 20px;
`;
let Title = styled.h4`
    font-size : 25px;
    color : ${ props => props.색상 }
`;



function Detail({ detailQuan, 
    onQuan_Initialize, onIncrease, onDecrease, onAddData,
    productData_ , stock  
}){


    let [tap,setTap] = useState("info")
    let [aniState,setAniState] = useState(false); 
    let [alertState,setAlertState] = useState(true);


    useEffect(()=>{
        let stockAlert = setTimeout(()=>{
            setAlertState(false); } , 2000);

        return ()=>{
            clearTimeout(stockAlert);
            onQuan_Initialize()
        }
    },[]);

    let history = useHistory();

    let { item_id } = useParams();
    let matchItems = productData_.find((productData_)=>{
        return productData_.id == item_id
    })
    
    function question(){
        
        let result =  window.confirm("선택하신 상품이 장바구니에 담겼습니다.장바구니로 갈텨??")
        if(result){
            history.push('/cart')
        }       
    }

    return (
        <div className="container">
            <Box> 
                <Title className="red" >Detail</Title>
            </Box>
        
            {
                alertState === true &&  
                (<div className="my-alert">
                    <p>낫 이너프 재고</p>
                </div>)
            }
        
            <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${matchItems.id+1}.jpg`} width="100%" />
            </div>  
            
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{matchItems.title}</h4>
                    <p>{matchItems.content}</p>
                    <p>{matchItems.price}￦</p>
                    <p>현재 재고 {stock[matchItems.id]}개 남았습니다.</p>
                    
                    <div>
                        구매수량 : {detailQuan}  
                        <input type="button" value="+" onClick={ onIncrease }/>
                        <input type="button" value="-" onClick={ onDecrease }/>
                    </div>

                    <button className="btn btn-danger" onClick={() => {
                        onAddData( {id: matchItems.id , name: matchItems.title , price: matchItems.price , quan: detailQuan});
                        question();        
                    }}> 장바구니 </button> 
                
                
                    <button className="btn btn-danger" onClick={() => { history.goBack() }} >뒤로가기 </button> 
                </div>

                <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={() => { setTap("info"); setAniState(false) }}>상세정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => { setTap("review"); setAniState(false) }}>고객리뷰</Nav.Link>
                </Nav.Item>    
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={() => { setTap("question"); setAniState(false) }}>문의사항</Nav.Link>
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
    let tabUI = {
            info : <p>상품정보</p>,
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

