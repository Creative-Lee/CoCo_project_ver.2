import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'

import {Form, Button, Container, Row, Col} from 'react-bootstrap'

export default function SignUp({signUpEmail, jjongLogo2}){
  
  const [inputEmail, setInputEmail] = useState('') 
  const [inputEmailDomain, setInputEmailDomain] = useState('') 
  const [inputPassword, setInputPassword] = useState('') 
  const [inputPasswordAgain, setInputPasswordAgain] = useState('') 

  

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
          <Form.Label className='form__lable'>이메일</Form.Label>
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
          <Form.Label className='form__lable'>비밀번호</Form.Label>
          <p className="form__password-rule">6자 이상의 비밀번호를 입력해주세요.</p>
          <Form.Control className="form__password-input" type="password" placeholder="비밀번호" 
            onChange={e => setInputPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className='form__password-check'>
          <Form.Label className='form__lable'>비밀번호 확인</Form.Label>
          <Form.Control className="form__password-check-input" type="password" placeholder="비밀번호 확인" 
            onChange={e => setInputPasswordAgain(e.target.value)} />
        </Form.Group>

        <Form.Group className='form__TOS'>
          <Form.Label className='form__lable'>약관 동의</Form.Label>
          <div className='form__TOS-checkbox'>            
            <Form.Check className='TOS-checkbox__all'>
              <div>
                <Form.Check.Input type="checkbox"  />
              </div>
              <div>
                <Form.Check.Label className="checkbox-lable">전체동의</Form.Check.Label>
              </div>
            </Form.Check>

            <Form.Check className='TOS-checkbox__1'>
              <div> 
                <Form.Check.Input type="checkbox"  />
              </div>
              <div>
                <Form.Check.Label className="checkbox-lable">선량한 시민입니다. </Form.Check.Label><span> (필수)</span>
              </div>
            </Form.Check>

            <Form.Check className='TOS-checkbox__2'>
            <div>
              <Form.Check.Input type="checkbox" />
            </div>
            <div>
              <Form.Check.Label className="checkbox-lable">개인정보수집 및 이용동의 </Form.Check.Label><span> (필수)</span>
            </div>
            </Form.Check>

            <Form.Check className='TOS-checkbox__3'>
              <div>
                <Form.Check.Input type="checkbox" />
              </div>
              <div>
                <Form.Check.Label className="checkbox-lable">이벤트, 프로모션 알림 메일 및 SMS 수신 </Form.Check.Label><span> (선택)</span>
              </div>
            </Form.Check>
          </div>
        </Form.Group>

        <Button className="sign-up__button" onClick={()=>{ signUpEmail(`${inputEmail}@${inputEmailDomain}`, inputPassword)}}>
          회원가입하기
        </Button>      
      </Form>  
  </Container> 
  )
}