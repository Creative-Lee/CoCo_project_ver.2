import React, { useState , useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'
import '../Detail.scss';

let Box = styled.div`
    padding : 20px;
`;
let Title = styled.h4`
    font-size : 25px;
    color : ${ props => props.색상 }
`;



function Detail(props){

    let [alertState,setAlertState] = useState(true);
    let [inputData,setInputData] = useState();


    useEffect(()=>{
        let alertTimer = setTimeout(()=>{ setAlertState(false) } , 2000)         
        return ()=>{clearTimeout(alertTimer)}
    },[]);

    let history = useHistory();
    let { item_id } = useParams();

    let matchItems = props.items.find(x => x.item_id == item_id);

    return (
        <div className="container">
            <Box> 
                <Title className="red" >Detail</Title>
            </Box>
        
        <input onChange={(e)=> {setInputData(e.target.value)}} />
        {inputData}
        
            {
                alertState === true
                ?   (<div className="my-alert">
                        <p>낫 이너프 재고</p>
                    </div>)
                :   null
            }
        
            <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{matchItems.title}</h4>
                    <p>{matchItems.content}</p>
                    <p>{matchItems.price}￦</p>
                    <button className="btn btn-danger">주문하기</button> 
                    <button className="btn btn-danger" onClick={() =>{
                        history.goBack();
                    }} >뒤로가기
                    </button> 
                </div>
        </div> 
    )
}

export default Detail ;