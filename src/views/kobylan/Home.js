import React, { useState, useEffect } from 'react';
import WelcomeMessage from './WelcomeMessage';
import Advertisement from './Advertisement'
import { Row, Col } from "reactstrap"

  
  const Home = () => {

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    //   });x

    return (
      
        <Row>
        
            <Col sm = "12" lg="12" md="12">
                <WelcomeMessage />
            </Col>
            <Col sm="12">
            <Advertisement />
            </Col>


        
      </Row>
    );
};

export default Home;