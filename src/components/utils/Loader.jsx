import { useContext, useEffect } from 'react';
import loaderGif from '../../assets/images/loader.gif';

import './Loader.css';
import { LoaderContext } from '../../Context/Context';

const Loader = () => {
  const loadingTime = 2000;

  const { setIsLoading } = useContext(LoaderContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);
  });

  return (
    <div className="loader">
      <img src={loaderGif} alt="loader" />
    </div>
  );
};

export default Loader;
