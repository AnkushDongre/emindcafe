import React from "react";
import { Nav, NavLink } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import {FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaLinkedin, FaTumblrSquare} from "react-icons/fa";
import "../assets/css/footer.css";

const Footer = () => {
    const facebook = "https://facebook.com";
    return(
        <>
        <footer className="bg-dark text-light pt-3" id="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h2>eMind Cafe</h2>
            <p>
              A/11, Shraddha Residency, <br/>
              Bitiset Agrawal layout,<br />
              Near Badere photo stdio,<br/>
              P.O, Gandhi Nagar, Akola<br/>
              Maharashtra 444001, IN<br/><br/>
              <strong>Phone:</strong><a className="text-light text-decoration-none" href="tel: +91-9403876207"> +91 9403876207</a><br/>
              <strong>Email:</strong><a className="text-light text-decoration-none" href="mailto: example@example.com"> example@example.com</a><br/>
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h3>Useful Links</h3>
                
               
                <LinkContainer to="/"><NavLink>Home</NavLink></LinkContainer>
                <LinkContainer to="/about"><NavLink>About us</NavLink></LinkContainer>
                <LinkContainer to="/services"><NavLink>Services</NavLink></LinkContainer>
                <LinkContainer to="/Terms"><NavLink>Terms of service</NavLink></LinkContainer>
                <LinkContainer to="/prevacy"><NavLink>Prevacy policy</NavLink></LinkContainer>
            
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h3>Our Services</h3>
           
                <LinkContainer to="/"><NavLink>Home</NavLink></LinkContainer>
                <LinkContainer to="/about"><NavLink>About us</NavLink></LinkContainer>
                <LinkContainer to="/services"><NavLink>Services</NavLink></LinkContainer>
                <LinkContainer to="/Terms"><NavLink>Terms of service</NavLink></LinkContainer>
                <LinkContainer to="/prevacy"><NavLink>Prevacy policy</NavLink></LinkContainer>
            
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" placeholder="example@example.com" name="email"/><input type="submit" value="Subscribe" />
            </form>
          </div>

        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; Copyright <strong><span>eMind Cafe</span></strong>. All Rights Reserved<br />
          &real; Designed and Developed <strong><span>Ankush Dongare</span></strong>.
        
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <Nav>
          <NavLink title="facebook" href={facebook}><FaFacebookSquare /></NavLink>
          <NavLink title="instagram" href={facebook}><FaInstagramSquare /></NavLink>
          <NavLink title="linkedin" href={facebook}><FaLinkedin/></NavLink>
          <NavLink title="tumbler" href={facebook}><FaTumblrSquare/></NavLink>
          <NavLink title="youtube" href={facebook}><FaYoutubeSquare/></NavLink>
          </Nav>
      </div>
    </div>
  </footer>
  </>
    );
}

export default Footer;