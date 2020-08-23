import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import { Navbar, Nav , NavDropdown } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import CardDeck from 'react-bootstrap/CardDeck'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
    const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };
  
    return (
<Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
  <Navbar.Brand href="#home">
     <h1>Coding School</h1>
    </Navbar.Brand>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"> </Nav>
    <Nav> <a href="#home" class="colour__twitter"><i class="fab fa-twitter-square header__icon"></i></a> <a href="#features" class="colour__facebook"><i class="fab fa-facebook-square header__icon"></i></a> <a href="#pricing" class="colour__line"><i class="fab fa-line header__icon"></i></a> </Nav>
  </Navbar.Collapse>
</Navbar>
        
     
    );
  }

export default Header;
