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
import dbt from '../media/dbt.png';
import resume from '../media/resume.pdf'

const Intro = () => {
  return (
    <section id="intro" className="bg-gray-900 text-white py-32 px-4 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Photo + Connect + Social Media Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <img
            src={photo}
            alt="Kunj Pathak"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-sm lg:ml-24 h-auto p-4 shadow-2xl rounded-2xl border border-gray-500 bg-gray-800"
          />
          {/* Social Media Handles */}
          <div className="text-center lg:text-left mt-4 lg:ml-48">
            <p className="text-lg md:text-lg mb-4">🔗 Connect with Me!</p>
            <div className="flex justify-center lg:justify-start space-x-6 ">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/kunjpathak12/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                <div className="text-sm mt-2 text-center">LinkedIn</div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:kn743706@dal.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                <div className="text-sm mt-2 text-center">Email</div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/KunjPathak12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" />
                <div className="text-sm mt-2 text-center">Github</div>
              </motion.a>
              
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 lg:pl-4 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hi, I'm Kunj!</h1>
          <p className="text-base md:text-lg mb-3">
            I am currently a <b>Data Engineer Co-op at QuadReal Property Group, one of Canada’s leading real estate investment firms</b>, where I design and optimize scalable data pipelines and automate workflows to manage critical financial data, that drives business insights.
            Further, I am pursuing <b>🎓 Master’s in Applied Computer Science at Dalhousie University</b> Canada 🇨🇦.
          </p>
          <p className="text-base md:text-lg mb-3">
            My journey has helped me build a strong foundation in <b>Software Development and Data Engineering</b>, solving real-world data challenges and collaborating with cross-functional teams on impactful projects.
          </p>
          <p className="text-base md:text-lg mb-6 flex items-center justify-center lg:justify-start">
            The technologies I love working with
            <FontAwesomeIcon icon={faCode} className="text-gray-400 ml-2" />&nbsp;:
          </p>


          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
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
                <img src={mongodb} alt="MongoDB" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
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
                <img src={dbt} alt="dbt" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
              </div>
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                dbt
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="relative group">
              <div className="w-8 h-8">
                <img src={etl} alt="ETL" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
              </div>
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                ETL
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
                <img src={gcloud} alt="Google Cloud" className="w-full h-full object-cover rounded-full border border-gray-500 group-hover:opacity-80" />
              </div>
              <span className="absolute bottom-[-20px] left-0 w-full text-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                GCP
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
          <div className="text-center pt-6 lg:pt-16">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-800 text-white px-6 py-2 rounded text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            My Resume
          </a>
        </div>
        </div>
      </div>
      
    </section>
  );
};

export default Intro;