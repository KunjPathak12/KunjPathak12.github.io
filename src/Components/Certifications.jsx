// src/Components/Certifications.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Add your certifications details here */}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
