import { motion } from 'framer-motion';
import { useInView } from './useInView';
import './About.css';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Foundation</span>
          <h2 className="section-title">About TMTR20</h2>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="about-text">
            TMTR20 is a private holding company engineered to build systems that outlast trends and outpace markets.
            We operate with a long-term view, a controlled structure, and a precise philosophy:
          </p>

          <blockquote className="quote">
            Design tomorrow. Build it today.
          </blockquote>

          <p className="about-text">
            Our work spans technology, media, and real estate — sectors chosen for their ability to shape the foundations of society.
            We do not follow momentum. We create it.
          </p>

          <p className="about-text">
            TMTR20 exists to form an ecosystem of companies that move with intention, operate with discipline, and generate lasting impact.
            We build quietly. We build deliberately. We build for the future.
          </p>
        </motion.div>

        <motion.div
          className="values-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="value-card">
            <div className="value-icon">01</div>
            <h3 className="value-title">Vision-Driven</h3>
            <p className="value-description">
              We see beyond the present, identifying opportunities before they become obvious.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">02</div>
            <h3 className="value-title">Disciplined Execution</h3>
            <p className="value-description">
              Precision in planning, excellence in execution, and unwavering commitment to quality.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">03</div>
            <h3 className="value-title">Long-Term Focus</h3>
            <p className="value-description">
              Building institutions that endure, creating value that compounds across generations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
