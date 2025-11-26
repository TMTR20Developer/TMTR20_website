import { motion } from 'framer-motion';
import { useInView } from './useInView';
import './Leadership.css';

const Leadership = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const principles = [
    {
      title: 'Clarity',
      description: 'Understand the future before acting in the present'
    },
    {
      title: 'Precision',
      description: 'Make fewer moves, executed with absolute intent'
    },
    {
      title: 'Legacy',
      description: 'Build systems designed to endure'
    }
  ];

  return (
    <section id="leadership" className="leadership" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Philosophy</span>
          <h2 className="section-title">Leadership</h2>
        </motion.div>

        <motion.div
          className="leadership-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="leadership-text">
            TMTR20 is guided by a leadership philosophy rooted in clarity, discipline, and forward vision.
            We believe in building institutions that outlive individuals — structures that will continue to shape tomorrow's landscape.
          </p>

          <blockquote className="leadership-quote">
            Think beyond the present. Execute beyond expectation.
          </blockquote>

          <p className="leadership-text">
            Leadership at TMTR20 is about direction, not titles. Impact, not noise. Legacy, not trends.
            We do not chase rapid expansion or noisy growth. We focus on structural value, strategic positioning, and long-term institutional strength.
          </p>

          <p className="leadership-text">
            TMTR20 is guided by individuals who understand that tomorrow is not predicted — it is engineered.
          </p>
        </motion.div>

        <motion.div
          className="principles-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {principles.map((principle, index) => (
            <div key={index} className="principle-card">
              <div className="principle-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-description">{principle.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
