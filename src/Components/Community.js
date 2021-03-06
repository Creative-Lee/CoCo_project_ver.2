import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function Community({setTopNavActiveTap, setBottomNavActiveTap}){

  const {community_category_param} = useParams();

  const category = {
    following : 
      <>
        <span>나는 팔로잉!</span>
      </>,
    
    picture : 
      <>
        <span>나는 사진!</span>
      </>,

    event : 
      <>
        <span>나는 Summer Event!</span>
      </>,
  }

  useEffect(()=>{
    setTopNavActiveTap('community');
    setBottomNavActiveTap(community_category_param);
  })

  return(
    <div>
      <h4>객체에 컴포넌트 넣고 뽑아쓰기!</h4>
      {
        category[community_category_param]
      }
    </div>
  )
}