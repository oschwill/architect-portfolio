/* IMAGES */
import galleryImageOne from '../assets/images/galery/gallery-image1.png';
import galleryImageTwo from '../assets/images/galery/gallery-image2.png';
import galleryImageThree from '../assets/images/galery/gallery-image3.png';
import galleryImageFour from '../assets/images/galery/gallery-image4.png';
import galleryImageFive from '../assets/images/galery/gallery-image5.png';
import galleryImageSix from '../assets/images/galery/gallery-image6.png';
import galleryImageSeven from '../assets/images/galery/gallery-image7.png';
import galleryImageEight from '../assets/images/galery/gallery-image8.png';
import galleryImageNine from '../assets/images/galery/gallery-image9.png';
import galleryImageTen from '../assets/images/galery/gallery-image10.png';

/* CSS */
import './Gallery.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useContext } from 'react';
import { DarkModeContext, ThemeContext } from '../Context/Context';

const Gallery = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const styles = useContext(DarkModeContext);

  const imageArr = [
    galleryImageOne,
    galleryImageTwo,
    galleryImageThree,
    galleryImageFour,
    galleryImageFive,
    galleryImageSix,
    galleryImageSeven,
    galleryImageEight,
    galleryImageNine,
    galleryImageTen,
  ];

  return (
    <>
      <Header />
      <main style={{ backgroundColor: isDarkTheme ? styles.general.backgroundColor : '' }}>
        <h2 className="gallery-headline">
          <span className="gallery-thin" style={{ color: isDarkTheme ? styles.general.color : '' }}>
            {' '}
            Photo
          </span>{' '}
          <span className="gallery-fat" style={{ color: isDarkTheme ? styles.general.color : '' }}>
            Gallery
          </span>
        </h2>
        <div className="gallery" style={{ borderTop: isDarkTheme ? styles.border.borderTop : '' }}>
          {imageArr.map((img) => {
            return (
              <div className="gallery-item" key={crypto.randomUUID()}>
                <img src={img} alt="gallery item" />
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
