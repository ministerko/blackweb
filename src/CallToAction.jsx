import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Protect Your Privacy?
      </h2>
      <motion.button
        whileHover={{ scale: 1.2 }}
        className="bg-purple-600 px-6 py-3 text-lg rounded-full hover:bg-purple-700 transition-all"
      >
        Get Started with blackChat
      </motion.button>
    </section>
  );
}
