import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import { faJava, faPython, faAws, faReact, faGit } from '@fortawesome/free-brands-svg-icons';
import photo from '../media/photo.jpg';
import azure from '../media/azure.png';
import etl from '../media/etl.png';
import gcloud from '../media/gcloud.png';
import spark from '../media/spark.png';
import springboot from '../media/springboot.png';
import kubectl from '../media/Kubernetes.png';
import mongodb from '../media/mongodb.png';
import mysql from '../media/mysql.png';
import docker from '../media/docker.png';

const Intro = () => {
  return (
    <section id="intro" className="h-screen flex items-center bg-gray-900 text-white px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto flex flex-col lg:flex-row items-center"
      >
        {/* Photo + Connect + Social Media Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start mt-8 lg:mt-12 lg:ml-4 order-1 lg:order-1">
          <img
            src={photo}
            alt="Kunj Pathak"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto p-4 shadow-2xl lg:shadow-3xl rounded-2xl border border-gray-500 bg-gray-800 mb-4"
          />
          {/* Social Media Handles */}
          <div className="text-center">
            <p className="text-base md:text-lg mb-4">🔗 Connect with me!</p>
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/kunjpathak12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/KunjPathak12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:kn743706@dal.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left lg:pr-4 lg:pl-4 mb-6 lg:mb-0 lg:mr-4 order-2 lg:order-2 mt-8 lg:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hi, I'm Kunj!</h1>
          <p className="text-base md:text-lg mb-3">
            currently pursuing <b>🎓Master’s degree in Applied Computer Science at Dalhousie University in Halifax, Canada</b> 🇨🇦. My professional journey includes diverse internship experiences where I have developed a robust skill set in <b>Data Engineering and Software Development</b>. These roles have allowed me to tackle complex projects, collaborate effectively with teams, and enhance my problem-solving capabilities.
          </p>
          <p className="text-base md:text-lg mb-6">
            I aim to apply my gained Skills effectively to Contribute to meaningful and Innovative Projects.
          </p>
          <p className="text-base md:text-lg mb-6 flex items-center">
            The Technologies I love to work with
            <FontAwesomeIcon icon={faCode} className="text-gray-400 ml-2" />&nbsp;:
          </p>
          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start space-x-4 mb-6">
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <FontAwesomeIcon icon={faJava} size="2x" className="text-gray-400 hover:text-gray-200" />
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Java
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <div className="w-8 h-8">
                <img src={springboot} alt="Spring Boot" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
              </div>
              <span className="absolute bottom-[-40px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Spring Boot
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <div className="w-8 h-8">
                <img src={mysql} alt="MySQL" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
              </div>
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                MySQL
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <div className="w-8 h-8">
                <img src={mongodb} alt="Mongo DB" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
              </div>
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                MongoDB
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <FontAwesomeIcon icon={faReact} size="2x" className="text-gray-400 hover:text-gray-200" />
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                ReactJS
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <FontAwesomeIcon icon={faPython} size="2x" className="text-gray-400 hover:text-gray-200" />
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Python
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <div className="w-8 h-8">
                <img src={spark} alt="Apache Spark" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
              </div>
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                PySpark
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <div className="w-8 h-8">
                <img src={etl} alt="E.T.L" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
              </div>
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                E.T.L
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <FontAwesomeIcon icon={faAws} size="2x" className="text-gray-400 hover:text-gray-200" />
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                AWS
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <div className="w-8 h-8">
                <img src={azure} alt="Azure Cloud" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
              </div>
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Azure
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <div className="w-8 h-8">
                <img src={gcloud} alt="gCloud" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
              </div>
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                gCloud
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <div className="w-8 h-8">
                <img src={docker} alt="Docker" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
              </div>
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Docker
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <div className="w-8 h-8">
                <img src={kubectl} alt="Kubernetes" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
              </div>
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Kubernetes
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <FontAwesomeIcon icon={faGit} size="2x" className="text-gray-400 hover:text-gray-200" />
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Git
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
