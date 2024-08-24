// src/Components/Awards.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Awards = () => {
  return (
    <section id="awards" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Awards</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Add your awards details here */}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
