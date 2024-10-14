import { motion } from 'framer-motion';

// Inline styles for a consistent dark theme
const styles = {
  section: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '3rem 1rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  description: {
    textAlign: 'center',
    color: '#9ca3af',
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '1.125rem',
  },
  encryptionEffect: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
  },
  encryptionBox: {
    width: '300px',
    height: '100px',
    borderRadius: '0.5rem',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    overflow: 'hidden',
  },
  encryptionText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
};

const SecurityBreakdown = () => {
  return (
    <section id="security" style={styles.section}>
      <h2 style={styles.title}>Security Breakdown</h2>
      <p style={styles.description}>
        BlackChat uses state-of-the-art encryption algorithms to ensure your
        messages are 100% private.
      </p>
      <div style={styles.encryptionEffect}>
        <motion.div
          style={styles.encryptionBox}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <div style={styles.encryptionText}>Encrypted</div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityBreakdown;
