import { motion } from 'framer-motion';
import { useInView } from './useInView';
import './Subsidiaries.css';

const Subsidiaries = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const subsidiaries = [
    {
      name: 'TMTR20 Software',
      description: 'Technology & systems engineering',
      focus: 'Building scalable software solutions and infrastructure for tomorrow\'s digital landscape.',
      link: '#'
    },
    {
      name: 'Refnotica',
      description: 'Digital brand strategy and market positioning',
      focus: 'Strategic brand development and positioning for companies ready to lead their markets.',
      link: '#'
    },
    {
      name: 'Setshaba Property Group',
      description: 'Real estate development and property systems',
      focus: 'Developing sustainable real estate solutions that shape communities and create lasting value.',
      link: '#'
    }
  ];

  return (
    <section id="subsidiaries" className="subsidiaries" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title">Subsidiaries</h2>
          <p className="section-subtitle">
            Each TMTR20 subsidiary operates independently while remaining connected through a shared purpose:
            to create scalable, future-aligned value.
          </p>
        </motion.div>

        <div className="subsidiaries-grid">
          {subsidiaries.map((subsidiary, index) => (
            <motion.div
              key={index}
              className="subsidiary-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="subsidiary-header">
                <div className="subsidiary-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="subsidiary-name">{subsidiary.name}</h3>
                <p className="subsidiary-description">{subsidiary.description}</p>
              </div>

              <p className="subsidiary-focus">{subsidiary.focus}</p>

              <a
                href={subsidiary.link}
                className="subsidiary-link"
                onClick={(e) => e.preventDefault()}
              >
                <span>Explore</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 10H16M16 10L10 4M16 10L10 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subsidiaries;
