import React,{useState , useEffect, useRef , useCallback} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { Map ,fromJS ,toJS, set, setIn, get, getIn, update, updateIn, mergeDeep} from 'immutable';

import {Form, Button, Container, Row, Col} from 'react-bootstrap'

export default function SignUp({signUpEmail, jjongLogo2}){
  
  const inputRefList = useRef({});

  const [everyInputList, setEveryInputList] = useState({
    localEmail: '',
    domainEmail: '',
    password : '',
    passwordCheck : '',
  })
  
  const [everyInputErrorList ,setEveryInputErrorList] = useState(fromJS({
    localEmail : {
      emptyError : false
    },
    domainEmail : {
      emptyError : false,
    },
    password : {
      emptyError : false,
      shortError : false,
    },
    passwordCheck : {
      emptyError : false,
      notMatchError : false,
    }
  }))

  const [focusedInput, setFocusedInput] = useState('localEmail')
  
  const errorStyleHandler = (inputName) => {
    const eachInputErrorValueList = Object.values(everyInputErrorList.getIn([inputName]).toJS())
    const isIncludeError = eachInputErrorValueList.includes(true)
    
    const targetForm = inputRefList.current[inputName]  
      
    if(isIncludeError) {
      targetForm.classList.add('errored')
    }
    else {
      targetForm.classList.remove('errored')
    }
  }

  const emptyErrorHandler = (inputState , inputName) => {
    let changedList
    const isEmptyInput = inputState === ''

    if(isEmptyInput) {
      changedList = everyInputErrorList.setIn([inputName,'emptyError'], true) 
      setEveryInputErrorList(beforeList => beforeList.mergeDeep(changedList))
    }
    else{
      changedList = everyInputErrorList.setIn([inputName,'emptyError'], false)
      setEveryInputErrorList(beforeList => beforeList.mergeDeep(changedList)) 
    }
  }  

  const shortErrorHandler = () => {
    let changedList
    const isShortInput = everyInputList.password.length  < 6

    if(isShortInput){
      changedList = everyInputErrorList.setIn(['password','shortError'], true)
      setEveryInputErrorList((beforeList) => beforeList.mergeDeep(changedList)) 
    }
    else{
      changedList = everyInputErrorList.setIn(['password','shortError'], false)
      setEveryInputErrorList((beforeList) => beforeList.mergeDeep(changedList)) 
    }    
  } 

  const notMatchErrorHandler = () => {
    let changedList
    const isNotMatchInput = everyInputList.passwordCheck !== everyInputList.password

    if(isNotMatchInput){
      changedList = everyInputErrorList.setIn(['passwordCheck','notMatchError'], true)
      setEveryInputErrorList((beforeList) => beforeList.mergeDeep(changedList)) 
    }
    else{
      changedList = everyInputErrorList.setIn(['passwordCheck','notMatchError'], false)
      setEveryInputErrorList((beforeList) => beforeList.mergeDeep(changedList)) 
    } 
  }

  const [isMounted, setIsMounted] = useState(false)

  useEffect(()=>{
    if(isMounted){
      errorStyleHandler(focusedInput) 
    }    
    setIsMounted(true)
    
  },[everyInputErrorList])

  useEffect(()=>{
    if(isMounted){
      emptyErrorHandler(everyInputList[focusedInput], focusedInput)   
      console.log('앰티 이펙트')  
    }    
  },[everyInputList,everyInputList.password,everyInputList.passwordCheck])

  useEffect(()=>{
    if(isMounted){
      shortErrorHandler()
      console.log('쇼츠 이펙트')  
    }    
  },[everyInputList.password])
  
  useEffect(()=>{
    if(isMounted){
      notMatchErrorHandler()
      console.log('낫매치 이펙트')  
    }    
  },[everyInputList.passwordCheck])

  
  const [checkedBoxIdList, setCheckedBoxIdList] = useState([])
  
  const onCheckedAllAgreeCheckBox = (isChecked) => { 
    let idList = [];

    if(isChecked){
      checkboxDataList.forEach(dataList => idList.push(dataList.id))
      setCheckedBoxIdList(idList)
    }
    else{
      setCheckedBoxIdList([]);
    }
  }
  const allAgreeCheckBoxHandler = ()=> {
    let isEachCheckboxAllChecked = checkedBoxIdList.length === checkboxDataList.length
    return isEachCheckboxAllChecked
  }
  const onCheckedEachCheckBox = (isChecked, list) => {
    if(isChecked){
      setCheckedBoxIdList([...checkedBoxIdList, list.id])
    }
    else{
      setCheckedBoxIdList(checkedBoxIdList.filter(checkedBoxId => checkedBoxId !== list.id))
    }
  }
  const eachCheckboxHandler = list =>{
    let isIdListIncludeId = checkedBoxIdList.includes(list.id)
    
    return isIdListIncludeId
  }

  const checkboxDataList = [
    { id: 1 , label: '선량한 시민입니다.' , span : '(필수)'},
    { id: 2 , label: '개인정보수집 및 이용동의', span : '(필수)'},
    { id: 3 , label: '이벤트, 프로모션 알림 메일 및 SMS 수신', span : '(선택)'}
  ]

  return (        
    <Container id="sign-up__container">
      <Link to='/CoCo_project_ver.2' >
        <div className='sign-up__logo-wrap'>
          <img className='sign-up__logo' src={jjongLogo2} alt="logo"/>
        </div>      
      </Link>
      <div className='sign-up__title'>
        <h1>회원가입</h1>  
      </div>    
      <Form className="sign-up__form-container">
        <Form.Group className='form__email'
          ref={ref => {
          inputRefList.current.localEmail = ref
          inputRefList.current.domainEmail = ref}}>
          <Form.Label className='form__label'>이메일</Form.Label>
          <div className="form__email-input">
            <span className="email-input__local">
              <Form.Control type="email" placeholder="이메일" name="localEmail"       
                onChange={e => {                   
                  setEveryInputList({...everyInputList , [e.target.name] : e.target.value})
                }}
                onFocus={e => {
                  setFocusedInput(e.target.name)
                }}
                onBlur={e => {
                  emptyErrorHandler(everyInputList[e.target.name], e.target.name);
                }}
              />  
            </span>
            <span className='email-input__separator'>@</span>

            <span className='email-input__domain'>
              <Form.Select type="email" defaultValue='선택해주세요' name="domainEmail" 
              onChange={e => {
                setEveryInputList(beforeList=> ({...beforeList , [e.target.name] : e.target.value}))
              }}
              onFocus={e => {
                setFocusedInput(e.target.name)
              }}
              onBlur={e => {
                emptyErrorHandler(everyInputList[e.target.name], e.target.name)
              }}>
                <option value="선택해주세요" disabled>선택해주세요</option>
                <option value="naver.com">naver.com</option>  
                <option value="daum.net">daum.net</option>
                <option value="gmail.com">gmail.com</option>
                <option value="직접 입력">직접 입력</option>
              </Form.Select>  
            </span>
          </div>
          {
            (everyInputErrorList.getIn(['localEmail', 'emptyError']) || everyInputErrorList.getIn(['domainEmail', 'emptyError'])) && (
            <div className='input-error-div'>
              필수 입력 항목입니다.
            </div>) 
          }         
        </Form.Group>
      
        <Form.Group className='form__password' ref={ref => inputRefList.current.password = ref}>
          <Form.Label className='form__label'>비밀번호</Form.Label>
          <p className="form__password-rule">6자 이상의 비밀번호를 입력해주세요.</p>
            <Form.Control className="form__password-input" type="password" placeholder="비밀번호" name="password" 
              onChange={e => {
                setEveryInputList(beforeList => ({...beforeList , [e.target.name] : e.target.value}))
              }}          
              onFocus={e => {
                setFocusedInput(e.target.name)
              }}             
              onBlur={e => {
                emptyErrorHandler(everyInputList[e.target.name], e.target.name)
              }}
            />
            {
              everyInputErrorList.getIn(['password', 'emptyError']) && (
              <div className='input-error-div'>
                필수 입력 항목입니다.
              </div>) 
            }
            {
              everyInputErrorList.getIn(['password', 'shortError']) && (
              <div className='input-error-div'>
                비밀번호는 최소 6자리 이상이여야 합니다.
              </div>) 
            }
        </Form.Group>

        <Form.Group className='form__password-check' ref={ref => inputRefList.current.passwordCheck = ref}>
          <Form.Label className='form__label'>비밀번호 확인</Form.Label>
          <Form.Control className="form__password-check-input" type="password" placeholder="비밀번호 확인" name="passwordCheck" 
            onChange={e => {
              setEveryInputList(beforeList => ({...beforeList , [e.target.name] : e.target.value}))
            }} 
            onFocus={e => {
              setFocusedInput(e.target.name)
            }}
            onBlur={e => {
              emptyErrorHandler(everyInputList[e.target.name], e.target.name)
            }} 
            />
          {
            everyInputErrorList.getIn(['passwordCheck', 'emptyError']) && (
            <div className='input-error-div'>
              확인을 위해 비밀번호를 한 번 더 입력해주세요.
            </div>) 
          }
          {
            everyInputErrorList.getIn(['passwordCheck', 'notMatchError']) && (
              <div className='input-error-div'>
              비밀번호가 일치하지 않습니다.
            </div>) 
          }
        </Form.Group>

        <Form.Group className='form__TOS'>
          <Form.Label className='form__label'>약관 동의</Form.Label>
          <div className='form__TOS-checkbox'>   
            <Form.Check className='TOS-checkbox__all' >
              <div className='checkbox-input-container'>
                <Form.Check.Input type="checkbox" id="TOS_all" className="checkbox-input"
                onChange={e => onCheckedAllAgreeCheckBox(e.target.checked)}
                checked={allAgreeCheckBoxHandler()}
                />                
              </div>
              <div>
                <Form.Check.Label htmlFor="TOS_all" className="checkbox-label" >전체동의</Form.Check.Label>
              </div>
            </Form.Check>
            {
            checkboxDataList.map((list, index )=> {
              return (
                <Form.Check className={`TOS-checkbox__${list.id}`} key={index}>
                <div className='checkbox-input-container'> 
                  <Form.Check.Input type="checkbox" id={`TOS_${list.id}`} className="checkbox-input" 
                  onChange={e => onCheckedEachCheckBox(e.target.checked, list)}
                  checked={eachCheckboxHandler(list)}
                  />
                </div>
                <div>
                  <Form.Check.Label htmlFor={`TOS_${list.id}`} className="checkbox-label" >{list.label}</Form.Check.Label><span> {list.span}</span>
                </div>
                </Form.Check>
              )         
            })
            }   
          </div>
        </Form.Group>

        <Button className="sign-up__button" onClick={()=>{ signUpEmail(`${inputLocalEmail}@${inputDomainEmail}`, inputPassword)}}>
          회원가입하기
        </Button>      
      </Form>  
  </Container> 
  )
}