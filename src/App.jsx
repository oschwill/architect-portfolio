import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import Loader from './components/utils/Loader';

import { LoaderContext, ThemeContext } from './Context/Context';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <>
      {isLoading ? (
        <LoaderContext.Provider value={{ setIsLoading }}>
          <Loader />
        </LoaderContext.Provider>
      ) : (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      )}
    </>
  );
}

export default App;
