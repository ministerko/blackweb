import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: 'Download the App',
      description:
        'Grab BlackChat from the app store. It’s quick, easy, and you’ll be up and running in no time.',
    },
    {
      step: 2,
      title: 'Stay Anonymous',
      description:
        'No personal data needed. Create a custom username, and you’re ready to go—no strings attached.',
    },
    {
      step: 3,
      title: 'Start Messaging',
      description:
        'Dive into private conversations. Just chat, chill, and let BlackChat handle the security.',
    },
  ];

  return (
    <section className="bg-black text-white py-12">
      <h2 className="text-5xl text-center mb-10 font-bold text-[#FFF]">
        How BlackChat Works
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="text-center p-8 bg-gray-900 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-6xl mb-4 font-bold text-[#FFF]">{`Step ${step.step}`}</div>
            <h3 className="text-3xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-blue-500 to-purple-500"></div>
    </section>
  );
};

export default HowItWorks;
