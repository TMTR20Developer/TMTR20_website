import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              TMTR<span className="gold">20</span>
            </div>
            <p className="footer-tagline">Building Tomorrow, Today.</p>
          </div>

          <div className="footer-legal">
            <p className="copyright">
              &copy; {currentYear} TMTR20. All rights reserved.
            </p>
            <p className="footer-note">
              A closed corporate holding company focused on building long-term infrastructure across technology, media, and real estate.
            </p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-small">
            Designed with precision. Built for legacy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
