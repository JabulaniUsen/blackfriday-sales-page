import { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './assets/logo.png';
import banner from './assets/banner.jpg';
import webdesign from './assets/webdesign.jpg';
import wrap from './assets/wrap.jpg';
import socials from './assets/soocial.jpg';
import graphics from './assets/graphics.png';
import print from './assets/print.jpg';
import { BiSolidGift, BiXCircle } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaInstagram, FaSnapchat } from 'react-icons/fa';


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  const handleWhitelistSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      toast.success("Joined the wait list successfully!");
      setEmail(""); 
      setTimeout(() => setShowPopup(false), 1000);
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
          <button className='getstarted'>
            <a href="http://www.tbcreations.com" target="_blank" rel="noopener noreferrer">Get Started</a>
          </button>
        </div>
        <img className="banner" src={banner} alt="" />
      </header>

      {/* Services Section */}
<section className="services">
  <div className="container">
    <h2>Our Services</h2>
    <div className="services-grid">
      <div className="service-card">
        <img src={webdesign} alt="Web Design" className="service-image" />
        <h3>Web Design</h3>
        <p>Captivating and responsive designs that stand out.</p>
      </div>
      <div className="service-card">
        <img src={graphics} alt="Graphic Design" className="service-image" />
        <h3>Graphic Design</h3>
        <p>Captivate your audience with unique and beautiful graphic designs for your social media.</p>
      </div>
      <div className="service-card">
        <img src={print} alt="Large Format Printing" className="service-image" />
        <h3>Large Format Printing</h3>
        <p>High-quality, eye-catching prints for banners, posters, and more.</p>
      </div>
      <div className="service-card">
        <img src={wrap} alt="Vehicle Wrapping" className="service-image" />
        <h3>Vehicle Wrapping</h3>
        <p>Professional vehicle wraps to showcase your brand on the go.</p>
      </div>
      <div className="service-card">
        <img src={socials} alt="Social Media Management" className="service-image" />
        <h3>Social Media Management</h3>
        <p>Grow your online presence with expert social media strategies.</p>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="cta">
        <h2>Take Advantage of These Limited-Time Offers!</h2>
        <p>Contact us now to transform your online presence.</p>
        <button>
          <a href="http://www.tbcreations.com" target="_blank" rel="noopener noreferrer">Get Started Today!</a>
        </button>
      </section>

      {/* Schedule Call Section */}
      <section className="schedule-call">
        <div className="container">
          <h2>Schedule a Free Consultation</h2>
          <p>Let’s discuss how we can help you achieve your goals.</p>
          <iframe src="https://calendly.com/designer-tb-creations/one-on-one" title="Schedule a call"></iframe>
        </div>
      </section>



      {/* Newsletter Subscription */}
      <section className="newsletter">
        <div className="container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest updates, tips, and exclusive deals straight to your inbox!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" aria-label="Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Tbcreations. All Rights Reserved.</p>
        <div className="social-links">
          <a href="http://facebook.com/tbcreations" target="_blank" rel="noopener noreferrer">
            <i className="icon"><FaFacebook /></i>
          </a>
          <a href="http://twitter.com/tbcreations" target="_blank" rel="noopener noreferrer">
            <i className="icon"><FaTwitter /></i>
          </a>
          <a href="http://instagram.com/tbcreations" target="_blank" rel="noopener noreferrer">
            <i className="icon"><FaInstagram /></i>
          </a>
          <a href="https://www.snapchat.com/add/tbcreations" target="_blank" rel="noopener noreferrer">
            <i className="icon"><FaSnapchat /></i>
          </a>
        </div>
      </footer>


      {/* Bouncing Icon */}
      <motion.div
        className="bouncing-icon"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        onClick={() => setShowPopup(true)}
      >
        <BiSolidGift />
      </motion.div>

      {/* Popup */}
      {showPopup && (
        <motion.div
          className="popup"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <BiXCircle className='closePopup' onClick={() => {setShowPopup(false)}}/>
          <h3>Join the Wait list</h3>
          <p>Be the first to access our exclusive deals and updates!</p>
          <form onSubmit={handleWhitelistSubmit}>
            <input
              type="email"
              className='whiteListInput'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email Address"
              required
            />
            <button type="submit">Join</button>
          </form>
        </motion.div>
      )}

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default App;
