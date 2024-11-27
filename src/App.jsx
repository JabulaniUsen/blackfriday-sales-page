import { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './assets/logo.png';
import webdesign from './assets/webdesign.jpg';
import wrap from './assets/wrap.jpg';
import socials from './assets/soocial.jpg';
import graphics from './assets/graphics.png';
import print from './assets/print.jpg';
import { BiSolidGift, BiXCircle } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaInstagram, FaSnapchat } from 'react-icons/fa';
import Gallery from './component/Gallery';
import boxes from './assets/boxes.png' 

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
          <button className="getstarted">
            <a href="http://www.tbcreations.com" target="_blank" rel="noopener noreferrer">
              View website
            </a>
          </button>
        </div>
        <div className="banner">
          <div className="hero-section">
            <div className="overlay"></div>
            <div className="content">
              <h1 className="hero-title">
                Exclusive Black Friday Offer for Your Business
              </h1>
              <p className="hero-subtitle">
                Join thousands of satisfied customers—Rochester’s top-rated graphics design agency with 10+ years of experience.
              </p>
              <div className="star-rating">
                <a
                  href="https://www.google.com/localservices/profile?g2lbs=AOHF13kScSWr64VgpmNfWQeyFDnfMkfgmRd993KS8GW1kebHD5QUdGyQRsEZ2mZgriPEIb18n_A-72Hv-UiOOs87QkPNC_6UzQ%3D%3D&hl=en-NG&gl=ng&cs=1&ssta=1&scp=ChdnY2lkOmNvbW1lcmNpYWxfcHJpbnRlchJAEhIJU7MUlgWz1okRHuYlQfwfAFoiElJvY2hlc3RlciwgTlksIFVTQSoUDVwLsRkVAKyv0R0SVcoZJdSuydEwABoWYmVzdCBncmFwaGljcyBkZXNpZ25lciImYmVzdCBncmFwaGljcyBkZXNpZ25lciBpbiBSb2NoZXN0ZXIgTnkqEkNvbW1lcmNpYWwgcHJpbnRlcg%3D%3D&spp=CgwvZy8xaGh4YzEwcmg6-AJXallRQUJBQkVBSVlBUmdDR0FRWUJTSW1ZbVZ6ZENCbmNtRndhR2xqY3lCa1pYTnBaMjVsY2lCcGJpQnliMk5vWlhOMFpYSWdibm1TQVJCdFlYSnJaWFJwYm1kZllXZGxibU41bWdFa1EyaGtSRk5WYUU1TlJ6bHVVekJXU2xFd1JtNVRWVTVOVG0xU1ZHUnViRUpTVWtGQ3FnR2lBUW9LTDIwdk1ERjRlVFZzWHdvSkwyMHZNREZqT1RjNUNna3ZiUzh3TWpGelpHY0tDUzl0THpBMU9YSmllUW9JTDIwdk1Ia3hjbVlRQVNvYUloWmlaWE4wSUdkeVlYQm9hV056SUdSbGMybG5ibVZ5S0FBeUh4QUJJaHRTRklKbDR2dk5FSFZyeW5ybzZSaUstOFVFYzhDSC1YY1g4dDB5S2hBQ0lpWmlaWE4wSUdkeVlYQm9hV056SUdSbGMybG5ibVZ5SUdsdUlISnZZMmhsYzNSbGNpQnVlUT09&src=2&q=TB+Creations,+LLC&sa=X&ved=2ahUKEwi-6rC61PuJAxWBWEEAHe-DMvsQkbkFegQIKRAD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="star">
                      &#9733;
                    </span>
                  ))}
                  <span className="rating-text">(4.9/5)</span>
                </a>
              </div>
              <button className="cta-button">
                <a href="#claim">CLAIM NOW</a>
              </button>
            </div>

            {/* Moving Box Images */}
            <motion.img
              src={boxes}
              alt="Box 1"
              className="moving-box"
              animate={{ x: [200, 500, -500, 300], y: [0, -100, 80, 100] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={boxes}
              alt="Box 2"
              className="moving-box"
              animate={{ x: [-200, 300, -400, 320], y: [-20, 20, -30, 0] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={boxes}
              alt="Box 3"
              className="moving-box"
              animate={{ x: [400, -80, 200, -400], y: [10, -100, 200, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="services">
  <div className="container">
    <h2>Our Services</h2>
    <div className="services-grid">
      <div className="service-card">
        <img src={webdesign} alt="Web Design" className="service-image" />
        <h3>Web Design</h3>
        <p>Your website will stand out with captivating and responsive designs that attract visitors and drive results.</p>
      </div>
      <div className="service-card">
        <img src={graphics} alt="Graphic Design" className="service-image" />
        <h3>Graphic Design</h3>
        <p>Your social media will shine with unique and beautiful graphic designs crafted to captivate your audience.</p>
      </div>
      <div className="service-card">
        <img src={print} alt="Large Format Printing" className="service-image" />
        <h3>Large Format Printing</h3>
        <p>Your banners, posters, and prints will grab attention with high-quality, vibrant visuals.</p>
      </div>
      <div className="service-card">
        <img src={wrap} alt="Vehicle Wrapping" className="service-image" />
        <h3>Vehicle Wrapping</h3>
        <p>Your brand will turn heads on the go with professional vehicle wraps that leave a lasting impression.</p>
      </div>
      <div className="service-card">
        <img src={socials} alt="Social Media Management" className="service-image" />
        <h3>Social Media Management</h3>
        <p>Your online presence will grow with expert strategies tailored to engage your audience and boost visibility.</p>
      </div>
    </div>
  </div>
</section>





      {/* Call to Action */}
      <section className="cta">
        <h2>Take Advantage of These Limited-Time Offers!</h2>
        <p>Contact us now to transform your online presence.</p>
        <button>
          <a href="#claim" >Get Started Today!</a>
        </button>
      </section>

      {/* Schedule Call Section */}
      <section className="schedule-call" id='claim'>
        <div className="container">
          <h2>Claim Offer now</h2>
          {/* <p>Let’s discuss how we can help you achieve your goals.</p> */}
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


      <div className="">
        <Gallery/>
      </div>

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
