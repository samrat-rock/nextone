// src/components/Header.js
import Link from 'next/link';
import React from 'react';
import { Button, Row, Col } from 'antd';

function Header() {
  return (
    <div>
      <header>
        <div>
          <h1>LOGO</h1>
        </div>
      </header>
      <nav>
        <Row justify="space-around" align="middle">
          <Col>
            <Link href="/">
              <Button type="primary">Home</Button>
            </Link>
          </Col>
          <Col>
            <Link href="/AboutUs">
              <Button type="primary">About US</Button>
            </Link>
          </Col>
        </Row>
      </nav>
    </div>
  );
}

export default Header;
