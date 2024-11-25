import './index.css';

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Black Friday Mega Sale</h1>
        <p>Unleash Your Online Potential with Exclusive Deals!</p>
      </header>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Design</h3>
              <p>Captivating and responsive designs that stand out.</p>
            </div>
            <div className="service-card">
              <h3>Web Development</h3>
              <p>High-performance websites tailored to your needs.</p>
            </div>
            <div className="service-card">
              <h3>Web Hosting</h3>
              <p>Fast, reliable, and secure hosting solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Take Advantage of These Limited-Time Offers!</h2>
        <p>Contact us now to transform your online presence.</p>
        <button>Get Started Today!</button>
      </section>

      {/* Schedule Call Section */}
      <section className="schedule-call">
        <div className="container">
          <h2>Schedule a Free Consultation</h2>
          <p>Let’s discuss how we can help you achieve your goals.</p>
          <iframe
            src="https://calendly.com/your-calendly-link"
            title="Schedule a call"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;