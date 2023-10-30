import { useContext } from 'react';
import { DarkModeContext, ThemeContext } from '../../Context/Context';

const MainFocus = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const styles = useContext(DarkModeContext);
  return (
    <div className="main-focus">
      <div className="focus-item">
        <h2 style={{ color: isDarkTheme ? styles.general.color : '' }}>
          Main Focus/Mission Statement
        </h2>
      </div>
      <div className="focus-item">
        <h2
          style={{
            color: isDarkTheme ? styles.general.color : '',
            opacity: isDarkTheme ? styles.general.opacity : '',
          }}
        >
          1
        </h2>
        <p
          style={{
            color: isDarkTheme ? styles.general.color : '',
            opacity: isDarkTheme ? styles.general.opacity : '',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et
          facilisis placerat.
        </p>
      </div>
      <div className="focus-item">
        <h2
          style={{
            color: isDarkTheme ? styles.general.color : '',
            opacity: isDarkTheme ? styles.general.opacity : '',
          }}
        >
          2
        </h2>
        <p
          style={{
            color: isDarkTheme ? styles.general.color : '',
            opacity: isDarkTheme ? styles.general.opacity : '',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et
          facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
        </p>
      </div>
    </div>
  );
};

export default MainFocus;
