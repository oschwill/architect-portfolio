import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import Loader from './components/utils/Loader';

import { LoaderContext, ThemeContext, DarkModeContext } from './Context/Context';
import Gallery from './pages/Gallery';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const darkModusStyles = {
    general: {
      backgroundColor: '#333',
      color: 'white',
      opacity: 1,
    },
    button: {
      backgroundColor: 'white',
      color: 'black',
    },
    form: {
      backgroundColor: 'white',
    },
    border: {
      borderTop: '1px solid white',
    },
  };

  return (
    <>
      {isLoading ? (
        <LoaderContext.Provider value={{ setIsLoading }}>
          <Loader />
        </LoaderContext.Provider>
      ) : (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
          <DarkModeContext.Provider value={darkModusStyles}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </BrowserRouter>
          </DarkModeContext.Provider>
        </ThemeContext.Provider>
      )}
    </>
  );
}

export default App;
