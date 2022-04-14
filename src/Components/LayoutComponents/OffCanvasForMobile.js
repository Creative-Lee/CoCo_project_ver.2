import React from "react";
import {Offcanvas, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function OffCanvasForMobile({
  isOffCanvasShow, setIsOffCanvasShow
}){  

  return (
    <Offcanvas id="hidden-menu" show={isOffCanvasShow} onHide={()=>{setIsOffCanvasShow(false)}}>   {/* # 모바일네브 # */}
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Fromcoco 124th</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h1>여기에는 뭐든지 들어갑니다.</h1>
        <Nav id="hidden-menu__nav">
            <Nav.Link as={Link} to="/CoCo_project_ver.2/detail/0">men</Nav.Link>
            <Nav.Link as={Link} to="/CoCo_project_ver.2/detail/1">lady</Nav.Link>
            <Nav.Link as={Link} to="/CoCo_project_ver.2/detail/2">unisex</Nav.Link>
            <Nav.Link as={Link} to="/CoCo_project_ver.2/detail/2">unisex</Nav.Link>
            <Nav.Link as={Link} to="/CoCo_project_ver.2/detail/2">unisex</Nav.Link>
            <Nav.Link as={Link} to="/CoCo_project_ver.2/detail/2">unisex</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  )
}