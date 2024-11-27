import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import print1 from '../assets/print1.jpg';
import print2 from '../assets/print2.jpg';
import print3 from '../assets/print3.jpg';
import print4 from '../assets/print4.jpg';
import print5 from '../assets/print5.jpg';
import print6 from '../assets/print6.jpg';
import print7 from '../assets/print7.jpg';
import print8 from '../assets/print8.jpg';

const Gallery = () => {
  const images = [
    { src: print2, alt: 'Gallery Image 2' },
    { src: print3, alt: 'Gallery Image 3' },
    { src: print7, alt: 'Gallery Image 7' },
    { src: print6, alt: 'Gallery Image 6' },
    { src: print4, alt: 'Gallery Image 4' },
    { src: print8, alt: 'Gallery Image 8' },
    { src: print5, alt: 'Gallery Image 5' },
    { src: print1, alt: 'Gallery Image 1' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="gallery-container">
      <h2>Our Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="gallery-item" style={{ padding: '0 10px' }}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
