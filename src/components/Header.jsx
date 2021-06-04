import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/header.css";

import Logo from '../assets/images/logo/emind-cafe-logo.jpg';
const Header = () => {
const [isScroll, setIsScroll] = useState(false);
  const hanndleScroll = () => {
    if (window.scrollY >= 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  window.addEventListener("scroll", hanndleScroll);
 
  // function handleClick(event) {
  //   event.preventDefault();
  //   console.log("clicked.");
  // }

    return(
        <header>
       <Navbar
         className={isScroll ? "navbar bg-dark" : "navbar bg-light"}
         collapseOnSelect
         expand="xl"
         variant={isScroll ? "dark" : "light"}
         fixed="top"
       >
         <Container>
         <LinkContainer to="/">
         <Navbar.Brand>
           eMindCafe
             {/* <img loading="lazy" width="120" height="120" src={Logo} alt="logo"  /> */}
           </Navbar.Brand>
         </LinkContainer>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="fs-4">
               <LinkContainer to="/">
               <Nav.Link>Home</Nav.Link>
               </LinkContainer>
               <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
               </LinkContainer>
               <LinkContainer to="/education">
               <Nav.Link>Education</Nav.Link>
               </LinkContainer>
               <LinkContainer to="/education">
               <Nav.Link>Experience</Nav.Link>
               </LinkContainer>
               <LinkContainer to="/appointment">
               <Nav.Link>Appointment</Nav.Link>
               </LinkContainer>
               <LinkContainer to="/project">
               <Nav.Link>Projects</Nav.Link>
               </LinkContainer>
               <LinkContainer to="/contact">
               <Nav.Link>Contact</Nav.Link>
               </LinkContainer>
             </Nav>
           </Navbar.Collapse>
           </Container>
       </Navbar>
     </header>
    );
}

export default Header;