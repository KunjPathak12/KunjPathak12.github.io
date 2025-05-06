import React from 'react';
import { motion } from 'framer-motion';
import dalhousieLogo from '../media/dal-logo.png'; 
import gtuLogo from '../media/gtu.png';

const Education = () => {
  return (
    <section id="education" className="bg-gray-700 text-white py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">Education</h2>
        </motion.div>
        {/* Dalhousie University */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="flex flex-col items-center lg:hidden mb-6">
            <img
              src={dalhousieLogo}
              alt="Dalhousie University"
              className="w-full max-w-xs h-auto"
            />
            <p className="text-xl font-bold text-gray-300 mt-4 text-center">GPA: 4.0/4.3</p>
          </div>
          <div className="lg:w-1/2 flex flex-col lg:pr-4 mb-6 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-2">Dalhousie University 🇨🇦</h2>
              <p className="text-lg text-gray-200">Halifax, NS, Canada</p>
              <p className="text-lg font-semibold mt-2">Master of Applied Computer Science</p>
              <p className="text-green-300">Jan 2024 – May 2025</p>
              <p className="mt-4">As a Master’s student, I’ve deepened my expertise in modern software practices and technologies. I’ve developed strong skills in code quality, database design, and data science, and enhanced my knowledge of cloud technologies and DevOps through serverless architectures and microservices implementation. I am now well equipped to handle Full-Stack Roles with the expanded knowledge of Spring-Boot and React.</p>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-1/2 flex-col place-items-end">
            <div className="flex flex-col items-center">
              <img
                src={dalhousieLogo}
                alt="Dalhousie University"
                className="w-full max-w-xs h-auto lg:max-w-sm lg:max-h-40"
              />
              <p className="text-xl font-bold text-gray-300 mt-4 text-center">GPA: 4.0/4.3</p>
            </div>
          </div>
        </div>

        {/* Gujarat Technological University */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col items-center lg:hidden mb-6">
            <img
              src={gtuLogo}
              alt="Gujarat Technological University"
              className="w-full max-w-xs h-auto"
            />
            <p className="text-xl font-bold text-gray-300 mt-4 text-center">CGPA: 8.46/10</p>
          </div>
          <div className="lg:w-1/2 flex flex-col lg:pr-4 mb-6 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-2">Gujarat Technological University 🇮🇳</h2>
              <p className="text-lg text-gray-200">Gujarat, India</p>
              <p className="text-lg font-semibold mt-2">Bachelor of Computer Science and Engineering</p>
              <p className="text-orange-400">June 2018 – June 2022</p>
              <p className="mt-4">At GTU, I led a team to create a Smart Wearable for the visually impaired, gaining leadership and teamwork experience. I completed a data modeling project to forecast trends, strengthening my problem-solving skills. My coursework in software engineering, computer networks, and algorithms enhanced my technical abilities.</p>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-1/2 flex-col place-items-end">
            <div className="flex flex-col items-center">
              <img
                src={gtuLogo}
                alt="Gujarat Technological University"
                className="w-full max-w-xs h-auto lg:max-w-sm lg:max-h-40"
              />
              <p className="text-xl font-bold text-gray-300 mt-4 text-center">CGPA: 8.46/10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
