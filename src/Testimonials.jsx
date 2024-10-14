import { motion } from 'framer-motion';
const testimonials = [
  {
    quote: 'BlackChat is the most secure messaging app I’ve ever used.',
    author: 'John Doe',
  },
  {
    quote: 'I love how easy it is to stay anonymous on BlackChat!',
    author: 'Jane Smith',
  },
  {
    quote: 'The encryption gives me peace of mind.',
    author: 'Michael Johnson',
  },
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Users Are Saying</h2>
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="opacity-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <blockquote className="text-lg italic text-gray-300">
                “{testimonial.quote}”
              </blockquote>
              <p className="mt-4 text-gray-400">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
