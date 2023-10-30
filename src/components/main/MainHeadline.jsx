import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

/* IMAGES */
import headlineImage from '../../assets/images/headline_image.jpeg';
import { useContext } from 'react';
import { DarkModeContext, ThemeContext } from '../../Context/Context';

const MainHeadline = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const styles = useContext(DarkModeContext);

  return (
    <div className="headline">
      <div className="headline-left">
        <h1>
          <span
            className="headline-light"
            style={{ color: isDarkTheme ? styles.general.color : '' }}
          >
            PROJECT
          </span>
          <span className="headline-fat" style={{ color: isDarkTheme ? styles.general.color : '' }}>
            {' '}
            Lorum
          </span>
        </h1>
      </div>
      <div className="headline-right">
        <img src={headlineImage} alt="" />
        <button>
          VIEW PROJECT
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default MainHeadline;
