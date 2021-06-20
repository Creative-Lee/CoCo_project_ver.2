import React, { useState , useEffect , useContext} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components'
import '../Detail.scss';
import {StockContext} from '../App'

import { CSSTransition } from 'react-transition-group';


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
        let alertTimer = setTimeout(()=>{ setAlertState(false) } , 2000)         
        return ()=>{clearTimeout(alertTimer)}
    },[]);

    let history = useHistory();

    let { item_id } = useParams();
    let matchItems = props.items.find((itemsData)=>{
        return itemsData.item_id == item_id
    })
    

    function stockChange(item_id){
        let copyStock = [...props.stock];
        copyStock[Number(item_id)] = copyStock[Number(item_id)] -1
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
            <img src={`https://codingapple1.github.io/shop/shoes${Number(item_id)+1}.jpg`} width="100%" />
            </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{matchItems.title}</h4>
                    <p>{matchItems.content}</p>
                    <p>{matchItems.price}￦</p>
                    <p>현재 재고 {stock[Number(item_id)]}개 남았습니다.</p>
                    
                    <button className="btn btn-danger" onClick={() => { stockChange(item_id) } }> 주문하기 </button> 
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

export default Detail ;