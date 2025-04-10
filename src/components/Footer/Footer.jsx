import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import { companyName } from "../../utils/products";
import { companyAddress } from "../../utils/products";
import { emailAddress } from "../../utils/products";
import { phoneNumber } from "../../utils/products";
import { facebookLink } from "../../utils/products";
import { instagramLink } from "../../utils/products";
import { tiktokLink } from "../../utils/products";
import { linkedInLink } from "../../utils/products";
import { twitterLink } from "../../utils/products";
import { whatsappLink } from "../../utils/products";
import {
  FaShoppingBag,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <FaShoppingBag size={30} />
              <h1>{companyName}</h1>
            </div>
            <p>
              {companyName} offers stylish and high-quality fashion for every occasion. 
              Your go-to destination for trendy, affordable, and elegant outfits, 
              ensuring you look and feel your best with confidence and sophistication.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Subscribe</h2>
            <p>Get the latest updates and offers.</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>{companyAddress}</li>
              <li>
                Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
              </li>
              <li>
                Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </li>
            </ul>
            <div className="social-icons">
              <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={20} />
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
                <FaTiktok size={20} />
              </a>
              <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={20} />
              </a>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
