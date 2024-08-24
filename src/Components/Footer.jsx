import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 relative">
      <div className="flex flex-col items-center">
        <div className="flex justify-center space-x-6 pb-4 pt-3">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/kunjpathak12/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 text-center"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
            <div className="text-sm mt-2">LinkedIn</div>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:kn743706@dal.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-center hover:text-gray-200"
          >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
            <div className="text-sm mt-2"><b>Contact Me</b></div>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/KunjPathak12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 text-center"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
            <div className="text-sm mt-2">GitHub</div>
          </motion.a>
        </div>
        <p className="text-lg md:text-lg mb-2 mt-4"><b>📍 Halifax, NS, Canada 🇨🇦</b></p>
      </div>
      <p className="text-center mt-4">&copy; {new Date().getFullYear()} Kunj Pathak. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
