/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

// Inline styles to replace Tailwind classes
const styles = {
  section: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '4rem 1rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem',

    Color: 'white',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#111',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem',
    display: 'inline-block',
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
    borderRadius: '50%',
    padding: '0.75rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#f3f4f6',
  },
  cardDescription: {
    color: '#9ca3af',
  },
};

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)' }}
      style={styles.card}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        style={styles.icon}
      >
        {feature.icon}
      </motion.div>
      <h3 style={styles.cardTitle}>{feature.title}</h3>
      <p style={styles.cardDescription}>{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      title: 'End-to-End Message Encryption',
      icon: '🔒',
      description:
        'Your conversations are protected with powerful encryption, ensuring only you and the recipient can read the messages—no one else.',
    },
    {
      title: 'Self-Destructing Messages',
      icon: '💣',
      description:
        "Messages are automatically deleted after they are delivered, leaving no trace behind. You're in control of the conversation's lifespan.",
    },
    {
      title: 'Custom Security Number',
      icon: '🛡️',
      description:
        'Create a security number (your username) that can be anything you choose. No phone numbers or real names needed, ensuring complete anonymity.',
    },
    {
      title: 'Message Expiry Date',
      icon: '⏳',
      description:
        'Set an expiry date on each message, and it will automatically delete after a specified time. Perfect for time-sensitive chats.',
    },
    {
      title: '100% Anonymity',
      icon: '🕵️',
      description:
        'We collect zero personal data. No need for phone numbers, names, email addresses, or message logs. You stay completely anonymous.',
    },
    {
      title: 'No Data Tracking',
      icon: '🚫',
      description:
        "Unlike other apps, BlackChat doesn't track, store, or share your information. Your privacy and security are our top priorities.",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.title}
        >
          Key Features
        </motion.h2>
        <div style={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
