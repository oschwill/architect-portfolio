import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/header/Header';
/* IMAGES */
import headlineImage from '../assets/images/headline_image.jpeg';

/* CSS */
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="headline">
          <div className="headline-left">
            <h1>
              <span>PROJECT</span>
              <strong> Lorum</strong>
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
      </main>
    </>
  );
};

export default Home;
