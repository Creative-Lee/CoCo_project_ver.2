import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'

import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import { set } from 'lodash';

export default function SignUp({signUpEmail, jjongLogo2}){
  
  const [inputEmail, setInputEmail] = useState('') 
  const [inputEmailDomain, setInputEmailDomain] = useState('') 
  const [inputPassword, setInputPassword] = useState('') 
  const [inputPasswordAgain, setInputPasswordAgain] = useState('') 


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
        <Form.Group className='form__email'>
          <Form.Label className='form__label'>이메일</Form.Label>
          <div className="form__email-input">
            <span className="email-input__local">
              <Form.Control type="email" placeholder="이메일"
                onChange={e => setInputEmail(e.target.value)} />
            </span>
            <span className='email-input__separator'>@</span>
            <span className='email-input__domain'>
              <Form.Select defaultValue='선택해주세요' 
              onChange={e => setInputEmailDomain(e.target.value)}>
                <option value="선택해주세요" disabled>선택해주세요</option>
                <option value="naver.com">naver.com</option>
                <option value="daum.net">daum.net</option>
                <option value="gmail.com">gmail.com</option>
                <option value="직접 입력">직접 입력</option>
              </Form.Select>  
            </span>
          </div>         
        </Form.Group>

        <Form.Group className='form__password'>
          <Form.Label className='form__label'>비밀번호</Form.Label>
          <p className="form__password-rule">6자 이상의 비밀번호를 입력해주세요.</p>
          <Form.Control className="form__password-input" type="password" placeholder="비밀번호" 
            onChange={e => setInputPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className='form__password-check'>
          <Form.Label className='form__label'>비밀번호 확인</Form.Label>
          <Form.Control className="form__password-check-input" type="password" placeholder="비밀번호 확인" 
            onChange={e => setInputPasswordAgain(e.target.value)} />
        </Form.Group>

        <Form.Group className='form__TOS'>
          <Form.Label className='form__label'>약관 동의</Form.Label>
          <div className='form__TOS-checkbox'>   
            <Form.Check className='TOS-checkbox__all' >
              <div className='checkbox-input-container'>
                <Form.Check.Input type="checkbox" className="checkbox-input"
                onChange={e => onCheckedAllAgreeCheckBox(e.target.checked)}
                checked={allAgreeCheckBoxHandler()}
                />
                
              </div>
              <div>
                <Form.Check.Label className="checkbox-label" >전체동의</Form.Check.Label>
              </div>
            </Form.Check>
            {
            checkboxDataList.map((list, index )=> {
              return (
                <Form.Check className={`TOS-checkbox__${list.id}`} key={index}>
                <div className='checkbox-input-container'> 
                  <Form.Check.Input type="checkbox" className="checkbox-input" 
                  onChange={e => onCheckedEachCheckBox(e.target.checked, list)}
                  checked={eachCheckboxHandler(list)}
                  />
                </div>
                <div>
                  <Form.Check.Label className="checkbox-label">{list.label}</Form.Check.Label><span> {list.span}</span>
                </div>
                </Form.Check>
              )         
            })
            }   
          </div>
        </Form.Group>

        <Button className="sign-up__button" onClick={()=>{ signUpEmail(`${inputEmail}@${inputEmailDomain}`, inputPassword)}}>
          회원가입하기
        </Button>      
      </Form>  
  </Container> 
  )
}