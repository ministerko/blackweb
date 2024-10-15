import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen bg-black text-white flex flex-col justify-center items-center py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold text-center mb-4"
      >
        Welcome to BlackChat
      </motion.h1>
      <p className="text-gray-400 mt-4 text-2xl text-center">
        A mobile chat app that lets you send secure, private messages anywhere
        in the world.
      </p>
      <motion.a
        href="#download"
        whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
        className="mt-8 bg-[#8b5cf6] text-black px-8 py-4 rounded-lg hover:bg-[#3b82f6] transition-all duration-300"
      >
        Download Now
      </motion.a>
    </section>
  );
};

export default Hero;
