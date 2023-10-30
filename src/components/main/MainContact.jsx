import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

/* images */
import contactImage from '../../assets/images/contact_image.jpeg';
import { useContext } from 'react';
import { DarkModeContext, ThemeContext } from '../../Context/Context';

const MainContact = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const styles = useContext(DarkModeContext);
  return (
    <div className="main-contact">
      <h2 style={{ color: isDarkTheme ? styles.general.color : '' }}>Contact Us</h2>
      <div className="contact-body">
        <div className="form">
          <div className="name">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              style={{ backgroundColor: isDarkTheme ? styles.form.backgroundColor : '' }}
            />
          </div>
          <div className="phone">
            <label htmlFor="phone"></label>
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              style={{ backgroundColor: isDarkTheme ? styles.form.backgroundColor : '' }}
            />
            <h4>*</h4>
          </div>
          <div className="email">
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              placeholder="E-mail"
              style={{ backgroundColor: isDarkTheme ? styles.form.backgroundColor : '' }}
            />
            <h4>*</h4>
          </div>
          <div className="interest">
            <label htmlFor="interest"></label>
            <input
              type="text"
              id="interest"
              placeholder="Interested In"
              style={{ backgroundColor: isDarkTheme ? styles.form.backgroundColor : '' }}
            />
          </div>
          <div className="message">
            <label htmlFor="message"></label>
            <textarea
              name="messsage"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              style={{ backgroundColor: isDarkTheme ? styles.form.backgroundColor : '' }}
            ></textarea>
            <h4>*</h4>
          </div>
          <button
            style={{
              color: isDarkTheme ? styles.button.color : '',
              backgroundColor: isDarkTheme ? styles.button.backgroundColor : '',
            }}
          >
            SEND EMAIL
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="contact-background">
          <img src={contactImage} alt="contactImage" />
        </div>
      </div>
    </div>
  );
};

export default MainContact;
