import { useState } from 'react';
import { motion } from 'framer-motion';
import { BiImageAlt } from 'react-icons/bi';
import print1 from '../assets/print1.jpg'
import print2 from '../assets/print2.jpg'
import print3 from '../assets/print3.jpg'
import print4 from '../assets/print4.jpg'
import print5 from '../assets/print5.jpg'
import print6 from '../assets/print6.jpg'
import print7 from '../assets/print7.jpg'
import print8 from '../assets/print8.jpg'

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

  const [selectedImage, setSelectedImage] = useState(null);

  const openPreview = (image) => {
    setSelectedImage(image);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container dark-theme">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => openPreview(image)}
          >
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="overlay">
              <BiImageAlt size={40} color="white" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <motion.div
          className="image-preview-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="modal-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <button className="close-preview" onClick={closePreview}>
              &times;
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
