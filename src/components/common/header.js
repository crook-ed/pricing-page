import React, { useState } from "react";
import "./navbar.css";
import logo from '../images/logo.svg'
import { Image, Row, Col, Button } from "antd";



const Navbar = () => {
  const [showMediaIcons] = useState(false);

  
  return (
    <>
      <nav className="main-nav" style={{zIndex: 1}}> 
        {/* 1st logo part  */}
        <div className="logo">
          <Image src={logo} preview={false} height={65}/>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li style={{marginRight: '35px'}}>
              <a to="/products">Products </a>
            </li>
            <li style={{marginRight: '35px'}}>
              <a to="/developer docs">Developer Docs</a>
            </li>
            <li style={{marginRight: '35px'}}>
              <a to="/blog">Blog</a>
            </li>
            <li style={{marginRight: '35px'}}>
              <a to="/status">Status</a>
            </li>
            <li style={{marginRight: '35px'}}>
              <a to={`/pricing`}>Pricing</a>
            </li>
          </ul>
        </div>

        {/* log in and request demo */}
        <div style={{marginTop: '20px'}}>
          <Row>
            <Col span={5}>
              <a style={{top: '16%', position: 'absolute', color: '#585858' , fontWeight:'500', fontSize:'16px'}}>Log in</a>
            </Col>
            <Col span={8}>
              <Button type="primary"  >Request Demo</Button>
            </Col>
          </Row>
        </div>
        
      </nav>

      
    </>
  );
};

export default Navbar;