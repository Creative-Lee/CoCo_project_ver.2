import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

export default function SignIn({signInEmail,jjongLogo2}){
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('') 
  const [inputPassword, setInputPassword] = useState('') 

  return (
    <Container id="sign-in__container">
      <Link to='/CoCo_project_ver.2' className='sign-in__logo-wrap'>
        <img className='sign-in__logo' src={jjongLogo2} alt="logo"/>
      </Link>   
      <Form className="sign-in__form-container">
        <Form.Group controlId="formBasicEmail">
          <Form.Control className="sign-in__form--email" type="email" placeholder="이메일" onChange={e => setInputEmail(e.target.value)} />             
        </Form.Group>            
        <Form.Group controlId="formBasicPassword">
          <Form.Control className="sign-in__form--password" type="password" placeholder="비밀번호" onChange={e => setInputPassword(e.target.value)} />
        </Form.Group>            
        <Button className="sign-in__button" onClick={()=>{ signInEmail(inputEmail, inputPassword)}}>
          로그인
        </Button>      
      </Form>
      <Link to='/CoCo_project_ver.2/auth/sign_up' className='sign-in__sign-up'>
        회원가입
      </Link>
    </Container> 
  )
}