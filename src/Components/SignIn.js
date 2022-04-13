import React,{useState} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

export default function SignIn({signInEmail}){

  const [inputEmail, setInputEmail] = useState('') 
  const [inputPassword, setInputPassword] = useState('') 

  return (    
    <Container>
      <Row>
        <Col></Col>

        <Col md="3">
          <h4>로그인</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={e => setInputEmail(e.target.value)} />             
            </Form.Group>            
            <div>              
            </div>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setInputPassword(e.target.value)} />
            </Form.Group>            
            <Button variant="primary" onClick={()=>{ signInEmail(inputEmail, inputPassword)}}>
              로그인
            </Button>
          </Form>
        </Col>
        
        <Col></Col>
      </Row>
    </Container> 
    
  )
}