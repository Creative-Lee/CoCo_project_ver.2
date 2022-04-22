import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { Map ,fromJS ,toJS, set, setIn, get, getIn} from 'immutable';

import {Form, Button, Container, Row, Col} from 'react-bootstrap'

export default function SignUp({signUpEmail, jjongLogo2}){
  
  const [inputLocalEmail, setInputLocalEmail] = useState('') 
  const [inputDomainEmail, setInputDomainEmail] = useState('') 
  const [inputPassword, setInputPassword] = useState('') 
  const [inputPasswordCheck, setInputPasswordCheck] = useState('') 

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

  const errorStyleHandler = (inputState, inputName) => {
    // const eachInputErrorList = Object.values(everyInputErrorList.getIn([input]).toJS())
    // const isIncludeError = eachInputErrorList.includes(true)

    const targetForm = document.getElementsByClassName(inputName)

    // console.log(targetForm)
    // console.log(everyInputErrorList.getIn([input]).toJS())
    // console.log(isIncludeError)  
    // 원하는게 아닌데 ......
    // 이건 인풋 엠티에만 한정됨
    // 나는 어떤 에러든 true 상태로 있으면 에러스타일 적용되길 바람
    // 근데 onBlur로 에러가상태가 true로 업데이트 되는 순간에는 true가 include가 아님...
    // 고로 2번 onBlur해야 원하는대로 동작함
    if(inputState) {
      targetForm[0].classList.remove('errored')
    }
    else {
      targetForm[0].classList.add('errored')
    }
  }

  const emptyErrorHandler = (inputState , inputName) => {
    let changedList
    if(inputState){
      changedList = everyInputErrorList.setIn([inputName,'emptyError'], false) 
      setEveryInputErrorList(changedList)
    }
    else{
      changedList = everyInputErrorList.setIn([inputName,'emptyError'], true) 
      setEveryInputErrorList(changedList) 
    }
  }


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
        <Form.Group className='form__email localEmail domainEmail'>
          <Form.Label className='form__label'>이메일</Form.Label>
          <div className="form__email-input">
            <span className="email-input__local">
              <Form.Control type="email" placeholder="이메일"
                onChange={e => setInputLocalEmail(e.target.value)}
                onBlur={e => {
                  emptyErrorHandler(inputLocalEmail, 'localEmail');
                  errorStyleHandler(inputLocalEmail,'localEmail')
                }}
              />  
            </span>
            <span className='email-input__separator'>@</span>

            <span className='email-input__domain'>
              <Form.Select type="email" defaultValue='선택해주세요' 
              onChange={e => {
                setInputDomainEmail(e.target.value);
                }}
              onBlur={e => {
                emptyErrorHandler(inputDomainEmail, 'domainEmail');
                errorStyleHandler(inputDomainEmail,'domainEmail')}}
              >
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
      
        <Form.Group className='form__password password'>
          <Form.Label className='form__label'>비밀번호</Form.Label>
          <p className="form__password-rule">6자 이상의 비밀번호를 입력해주세요.</p>
            <Form.Control className="form__password-input" type="password" placeholder="비밀번호" 
              onChange={e => setInputPassword(e.target.value)} 
              onBlur={e => {
                emptyErrorHandler(inputPassword, 'password');
                errorStyleHandler(inputPassword, 'password')}} 
            />
            {
              everyInputErrorList.getIn(['password', 'emptyError'])  && (
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

        <Form.Group className='form__password-check passwordCheck'>
          <Form.Label className='form__label'>비밀번호 확인</Form.Label>
          <Form.Control className="form__password-check-input" type="password" placeholder="비밀번호 확인" 
            onChange={e => setInputPasswordCheck(e.target.value)} 
            onBlur={e => {
              emptyErrorHandler(inputPasswordCheck, 'passwordCheck');
              errorStyleHandler(inputPasswordCheck, 'passwordCheck')}} 
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