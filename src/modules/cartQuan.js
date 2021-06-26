/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.

const ADD_DATA = 'cartQuan/ADD_DATA';
const INCREASE = 'cartQuan/INCREASE';
const DECREASE = 'cartQuan/DECREASE';



/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.


export const addData = data => ({ type : ADD_DATA , data : data }) 
export const increase = i => ({ type : INCREASE , i });
export const decrease = i => ({ type : DECREASE , i });



/* 초기 상태 선언 */

const initState = [
    {
        id: 0,
        name: 'shoes',
        price: 120000,
        quan: 2,
    },
    {
        id: 1,
        name: 'pants',
        price: 110000,
        quan: 3,
    },
    {
        id: 2,
        name: 'shirt',
        price: 100000,
        quan: 4,
    }
];


/* 리듀서 선언 */   
// 리듀서는 export default 로 내보내주세요.

export default function cartQuan(state = initState, action) {
    let copyState = [...state];
    switch (action.type) {
        case ADD_DATA:
            copyState.push(action.data);
            return copyState;

        case INCREASE:
            copyState[action.i].quan ++ ;
            return copyState; 

        case DECREASE:
            if(copyState[action.i].quan === 0){
                return state;
            }
            else {
                copyState[action.i].quan --  ;
                return copyState;
            };

        default : 
        return state;
    } 
}