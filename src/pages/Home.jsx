// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/header/Header';

/* CSS */
import './Home.css';
import MainHeadline from '../components/main/MainHeadline';
import MainAbout from '../components/main/MainAbout';
import MainFocus from '../components/main/MainFocus';
import MainProjects from '../components/main/MainProjects';
import MainContact from '../components/main/MainContact';
import Footer from '../components/footer/Footer';
import { useContext } from 'react';
import { DarkModeContext, ThemeContext } from '../Context/Context';

const Home = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const styles = useContext(DarkModeContext);

  return (
    <>
      <Header />
      <main style={{ backgroundColor: isDarkTheme ? styles.general.backgroundColor : '' }}>
        <MainHeadline />
        <MainAbout />
        <MainFocus />
        <MainProjects />
        <MainContact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
