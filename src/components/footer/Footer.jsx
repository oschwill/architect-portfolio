import { NavLink } from 'react-router-dom';

/* IMAGES */
import markerImage from '../../assets/images/marker.svg';
import phoneImage from '../../assets/images/phone.svg';
import emailImage from '../../assets/images/email.svg';
import facebookImage from '../../assets/images/facebook.svg';
import twitterImage from '../../assets/images/twitter.svg';
import linkedInImage from '../../assets/images/linkedIn.svg';
import pinImage from '../../assets/images/pininterest.svg';
import logo from '../../assets/images/logo_footer.png';

/* CSS */
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="content-item">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="content-item">
          <p>Information</p>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/">Projects</NavLink>
          <NavLink to="/">Certifications</NavLink>
          <NavLink to="/">Contacts</NavLink>
        </div>
        <div className="content-item">
          <p>Contacts</p>
          <div>
            <img src={markerImage} alt="marker" />
            <div>
              <p>1234 Sample Street</p>
              <p>Austin Texas 78704</p>
            </div>
          </div>
          <div>
            <img src={phoneImage} alt="phone" />
            <p>512 333 2222</p>
          </div>
          <div>
            <img src={emailImage} alt="email" />
            <p>sampleemail@gmail.com</p>
          </div>
        </div>
        <div className="content-item">
          <p>Social Media</p>
          <div>
            <img src={facebookImage} alt="facebook" />
            <img src={twitterImage} alt="twitter" />
            <img src={linkedInImage} alt="linkedIn" />
            <img src={pinImage} alt="pinInterest" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>@ 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
