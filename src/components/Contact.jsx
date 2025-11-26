import { motion } from 'framer-motion';
import { useInView } from './useInView';
import './Contact.css';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const contactInfo = [
    {
      label: 'Email',
      value: 'info@tmtr20.com',
      link: 'mailto:info@tmtr20.com'
    },
    {
      label: 'Phone',
      value: '065 085 5004',
      link: 'tel:+27650855004'
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@tmtr20',
      link: 'https://instagram.com/tmtr20'
    },
    {
      name: 'Facebook',
      handle: 'TMTR20',
      link: 'https://facebook.com/tmtr20'
    },
    {
      name: 'YouTube',
      handle: 'TMTR20',
      link: 'https://youtube.com/@tmtr20'
    }
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            For strategic partnerships, investment inquiries, or access to the TMTR20 Private Network.
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-item">
                <span className="info-label">{info.label}</span>
                <a href={info.link} className="info-value">
                  {info.value}
                </a>
              </div>
            ))}
          </div>

          <div className="social-links">
            <h3 className="social-title">Connect With Us</h3>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-name">{social.name}</span>
                  <span className="social-handle">{social.handle}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 14L14 4M14 4H6M14 4V12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
