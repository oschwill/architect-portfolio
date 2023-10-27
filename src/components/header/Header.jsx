import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/header_logo.svg';
import moon from '../../assets/images/moon.svg';
import sun from '../../assets/images/sun.svg';

/* CSS */
import './Header.css';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/Context';

const Header = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const handleSetTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="nav">
        <NavLink to="/">MAIN</NavLink>
        <NavLink to="/gallery">GALLERY</NavLink>
        <NavLink to="/">PROJECTS</NavLink>
        <NavLink to="/">CERTIFICATION</NavLink>
        <NavLink to="/">CONTACTS</NavLink>
        <img src={isDarkTheme ? sun : moon} alt="icon" onClick={handleSetTheme} />
      </nav>
    </header>
  );
};

export default Header;
