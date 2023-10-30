import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

/* IMAGES */
import secondProjectImage from '../../assets/images/Project_image2.png';
import thirdProjectImage from '../../assets/images/Project_image3.png';
import fourthProjectImage from '../../assets/images/Project_image4.png';
import fifthProjectImage from '../../assets/images/Project_image5.png';
import { useContext } from 'react';
import { DarkModeContext, ThemeContext } from '../../Context/Context';

const MainProjects = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const styles = useContext(DarkModeContext);
  return (
    <div className="main-projects">
      <h2 style={{ color: isDarkTheme ? styles.general.color : '' }}>Our Projects</h2>
      <div className="projects-top">
        <div className="first-image-background">
          <div className="image-description">
            <h2>Sample Project</h2>
            <button>
              VIEW MORE
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <img src={secondProjectImage} alt="project_image" />
      </div>
      <div className="projects-bottom">
        <img src={thirdProjectImage} alt="project_image" />
        <img src={fourthProjectImage} alt="project_image" />
        <img src={fifthProjectImage} alt="project_image" />
      </div>
      <div className="projects-button">
        <button
          style={{
            color: isDarkTheme ? styles.button.color : '',
            backgroundColor: isDarkTheme ? styles.button.backgroundColor : '',
          }}
        >
          VIEW PROJECTS
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default MainProjects;
