import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

/* IMAGES */
import firstAboutImage from '../../assets/images/about_image1.jpeg';
import secondAboutImage from '../../assets/images/about_image2.jpeg';
import thirdAboutImage from '../../assets/images/about_image3.jpeg';
import { useContext } from 'react';
import { DarkModeContext, ThemeContext } from '../../Context/Context';

const MainAbout = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const styles = useContext(DarkModeContext);

  return (
    <div className="main-about">
      <div className="about-items">
        <img src={firstAboutImage} alt="about" />
        <img src={thirdAboutImage} alt="about" />
      </div>
      <div className="about-items">
        <img src={secondAboutImage} alt="about" />
      </div>
      <div className="about-items">
        <h2 style={{ color: isDarkTheme ? styles.general.color : '' }}>About</h2>
        <p
          style={{
            color: isDarkTheme ? styles.general.color : '',
            opacity: isDarkTheme ? '0.5' : '',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <button>
          VIEW PROJECT
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default MainAbout;
