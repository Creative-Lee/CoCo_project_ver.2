import React, { useState , useEffect , useContext} from 'react'
import { useHistory, useParams } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components'

import { connect } from 'react-redux';



import {StockContext} from '../App'

import { addData } from '../modules/cartQuan'
import { increase , decrease , initialize  } from '../modules/detailQuan'


let Box = styled.div`
    padding : 20px;
`;
let Title = styled.h4`
    font-size : 25px;
    color : ${ props => props.색상 }
`;



function Detail(props){

    let stock = useContext(StockContext) ;

    let [tap,setTap] = useState(0)
    let [aniState,setAniState] = useState(false); 
    let [alertState,setAlertState] = useState(true);


    useEffect(()=>{
        let stockAlert = setTimeout(()=>{
            setAlertState(false); } , 2000);

        return ()=>{
            clearTimeout(stockAlert);
            props.dispatch( initialize() ) 
        }
    },[]);

    let history = useHistory();

    let { item_id } = useParams();
    let matchItems = props.productData_.find((productData_)=>{
        return productData_.id == item_id
    })
    
    function question(){
        let result =  window.confirm("선택하신 상품이 장바구니에 담겼습니다.장바구니로 갈텨??")
        if(result){
            history.push('/cart')
        }       
    }

    function stockChange(){
        let copyStock = [...props.stock];
        copyStock[props.productData_.id] = copyStock[props.productData_.id] -1
        props.setStock(copyStock);
    }

    return (
        <div className="container">
            <Box> 
                <Title className="red" >Detail</Title>
            </Box>
        
            {
                alertState === true
                ?   (<div className="my-alert">
                        <p>낫 이너프 재고</p>
                    </div>)
                :   null
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
                        구매수량 : {props.detailInner}  
                        <input type="button" value="+" onClick={()=>{ 
                            props.dispatch( increase() ) 
                            }}/>
                        <input type="button" value="-" onClick={()=>{
                            props.dispatch( decrease() )
                            }}/>
                    </div>

                    <button className="btn btn-danger" onClick={() => {
                        props.dispatch( addData( {id: matchItems.id , name: matchItems.title , price: matchItems.price , quan: props.detailInner}) ) ;
                        question();        
                    }}> 장바구니 </button> 
                
                
                    <button className="btn btn-danger" onClick={() => { history.goBack() }} >뒤로가기 </button> 
                </div>

                <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={() => { setTap(0); setAniState(false) }}>상세정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => { setTap(1); setAniState(false) }}>고객리뷰</Nav.Link>
                </Nav.Item>    
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={() => { setTap(2); setAniState(false) }}>문의사항</Nav.Link>
                </Nav.Item>                  
                </Nav>

                <CSSTransition in={aniState} classNames="wow" timeout={500}>
                <TabContent tap={tap} setAniState={setAniState} />
                </CSSTransition>

        </div> 
    )
}


function TabContent(props){
    useEffect(()=>{
        props.setAniState(true)
    })

    if (props.tap === 0){
        return (
            <div>상세정보 좌라락</div>
        )
    }
    else if (props.tap === 1){
        return (
            <div>고객리뷰 좌라락</div>
        )
    }
    else if (props.tap === 2){
        return (
            <div>문의사항 좌라락</div>
        ) 
    }
}


function store데이터를_props로_변환해주는_함수(store안에_모든_state) {
    return {
        cartInner: store안에_모든_state.cartQuan, // store안에 모든 state에서 reducer1번에 해당하는 state를 cartProduct라는 이름으로 props 해서 쓸래요
        alertState: store안에_모든_state.alertClose,
        detailInner: store안에_모든_state.detailQuan
    };
}
export default connect(store데이터를_props로_변환해주는_함수)(Detail);

