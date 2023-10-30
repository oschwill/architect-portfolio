import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/header_logo.svg';
import darkModeLogo from '../../assets/images/header_logo_darkmode.svg';
import moon from '../../assets/images/moon.svg';
import sun from '../../assets/images/sun.svg';

/* CSS */
import './Header.css';
import { useContext } from 'react';
import { DarkModeContext, ThemeContext } from '../../Context/Context';

const Header = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const styles = useContext(DarkModeContext);

  const handleSetTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <header style={{ backgroundColor: isDarkTheme ? styles.general.backgroundColor : '' }}>
      <div className="logo">
        <img src={isDarkTheme ? darkModeLogo : logo} alt="logo" />
      </div>
      <nav className="nav">
        <NavLink
          to="/"
          style={{
            color: isDarkTheme ? styles.general.color : '',
          }}
          className={({ isActive }) => (isActive ? (isDarkTheme ? 'darkActive' : 'active') : '')}
        >
          MAIN
        </NavLink>
        <NavLink
          to="/gallery"
          style={{ color: isDarkTheme ? styles.general.color : '' }}
          className={({ isActive }) => (isActive ? (isDarkTheme ? 'darkActive' : 'active') : '')}
        >
          GALLERY
        </NavLink>
        <NavLink
          to="/projects"
          style={{ color: isDarkTheme ? styles.general.color : '' }}
          className={({ isActive }) => (isActive ? (isDarkTheme ? 'darkActive' : 'active') : '')}
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/certification"
          style={{ color: isDarkTheme ? styles.general.color : '' }}
          className={({ isActive }) => (isActive ? (isDarkTheme ? 'darkActive' : 'active') : '')}
        >
          CERTIFICATION
        </NavLink>
        <NavLink
          to="/contacts"
          style={{ color: isDarkTheme ? styles.general.color : '' }}
          className={({ isActive }) => (isActive ? (isDarkTheme ? 'darkActive' : 'active') : '')}
        >
          CONTACTS
        </NavLink>
        <img src={isDarkTheme ? sun : moon} alt="icon" onClick={handleSetTheme} />
      </nav>
    </header>
  );
};

export default Header;
