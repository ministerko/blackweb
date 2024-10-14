// Inline styles for a cohesive dark theme
const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#9ca3af',
    padding: '3rem 1rem',
    textAlign: 'center',
    position: 'relative',
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  highlight: {
    color: '#8b5cf6',
  },
  noTracking: {
    marginTop: '1rem',
    fontSize: '0.875rem',
    color: '#f3f4f6',
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>
        © 2024 BlackChat |{' '}
        <a href="#privacy" style={styles.link} className="hover:text-white">
          Privacy Policy
        </a>{' '}
        |{' '}
        <a href="#terms" style={styles.link} className="hover:text-white">
          Terms of Service
        </a>
      </p>
      <p style={styles.noTracking}>No Data Tracking</p>
    </footer>
  );
};

export default Footer;
