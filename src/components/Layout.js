import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Content from './Content';
import Header from './Header';

const Layout = () => {
return (
<>

<Header />
<Container fluid>
<Content />
</Container>
</>
);
}

export default Layout;