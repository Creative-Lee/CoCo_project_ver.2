/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const INCREASE =  'detailQuan/INCREASE';
const DECREASE =  'detailQuan/DECREASE';
const QUAN_INITIALIZE = 'detailQuan/QUAN_INITIALIZE';  

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export를 사용해서 내보내주세요.
export const increase = () => ({ type : INCREASE });
export const decrease = () => ({ type : DECREASE });
export const quan_Initialize = () => ({ type : QUAN_INITIALIZE })

/* 초기 상태 선언 */
const initState = 1 
    
    /* 리듀서 선언 */   
// 리듀서는 export default 로 내보내주세요.
export default function detailQuan(state = initState, action){
  switch (action.type){        
    case INCREASE:        
      state++;
      return state

    case DECREASE:
      if( state === 1 ){
        return state
      }

      state--;
      return state
      
    case QUAN_INITIALIZE:
      state = 1;
      return state;
            
    default: 
      return state;
    } 
}