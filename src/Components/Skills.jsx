// src/Components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faC } from '@fortawesome/free-solid-svg-icons';
import { faJava, faPython, faAws, faReact, faGit, faHtml5, faCss3, faNode, faJs} from '@fortawesome/free-brands-svg-icons';
import azure from '../media/azure.png';
import gcloud from '../media/gcloud.png';
import mongodb from '../media/mongodb.png';
import mysql from '../media/mysql.png';
import docker from '../media/docker.png';
import kubectl from '../media/Kubernetes.png';
import springboot from '../media/springboot.png';
import spark from '../media/spark.png';
// import pyspark from '../media/pyspark.jpg';
import adf from '../media/adf.jpg';
import dbricks from '../media/dbricks.png'
// import etl from '../media/etl.png';
import glue from '../media/glue.png';
import airflow from '../media/airflow.png';
import security from '../media/springsec.png';
import tailwind from '../media/tailwind.png';
// import vite from '../media/vite.png';
import tform from '../media/tform.png';
import cicd from '../media/gcicd.png';
import cbuild from '../media/cbuild.png';
import jenkins from '../media/jenkins.png';
import gke from '../media/gke.png';
import hface from '../media/hface.png';
import skl from '../media/sklearn.png';
import pandas from '../media/pandas.png';
import mssql from '../media/mssql.png';
// import tfk from '../media/tfk.jpg';
import dbt from '../media/dbt.png';

const skills = {
  Languages: [
    { name: 'Java', icon: faJava },
    { name: 'Python', icon: faPython },
    { name: 'SQL', icon: faDatabase },
    { name: 'C', icon: faC },
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3 },
    { name: 'JavaScript', icon: faJs },
  ],
  "Backend Frameworks": [
    { name: 'Spring Boot', img:  springboot},
    { name: 'Spring Security', img:  security},
    { name: 'NodeJs', icon: faNode },
  ],
  Databases: [
    { name: 'MySQL', img: mysql },
    { name: 'MS SQL Server', img: mssql },
    { name: 'MongoDB', img: mongodb },
  ],

  "Cloud Technologies": [
    { name: 'AWS', icon: faAws },
    { name: 'Azure', img: azure },
    { name: 'gCloud', img: gcloud },
  ],

  "Data Engineering Tools": [
    { name: 'Apache Spark', img: spark},
    { name: 'Azure Data Factory', img: adf },
    { name: 'DBT', img: dbt},
    { name: 'Databricks', img: dbricks },
    { name: 'AWS Glue', img: glue},
    // { name: 'E.T.L. Process', img: etl},
    { name: 'Apache Airflow', img: airflow},
    { name: 'Pandas', img: pandas },
    { name: 'Scikit Learn', img: skl },
    { name: 'Transformers', img: hface },
  ],

  "DevOps & Version Control": [
    { name: 'Git', icon: faGit },
    { name: 'Docker', img: docker },
    { name: 'CloudBuild CI/CD', img: cbuild },
    { name: 'Kubernetes', img: kubectl },
    { name: 'G.K.E', img: gke },
    { name: 'Gitlab CI/CD', img: cicd },
    { name: 'Terraform', img: tform },
    { name: 'Jenkins', img: jenkins },
  ],
  "Frontend Frameworks": [
    { name: 'ReactJS', icon: faReact },
    // { name: 'ViteJs', img: vite },
    { name: 'Tailwind CSS', img: tailwind },

  ],
  // "Data Science & Modeling": [
  //   { name: 'Pandas', img: pandas },
  //   { name: 'Scikit Learn', img: skl },
  //   { name: 'Transformers', img: hface },
  //   { name: 'Tf.Keras', img: tfk },
  //   { name: 'Matplotlib', img: plt },
  // ],

  // "Version Control": [
    
  // ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Skills</h2>
        </motion.div>
        <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700 mx-auto">
          <tbody className="bg-gray-900 divide-y divide-gray-700">
            {Object.keys(skills).map(category => (
              <tr key={category} className="flex flex-col md:flex-row">
                <td className="w-full md:w-1/3 px-4 py-2 text-center text-lg font-medium text-gray-300 whitespace-nowrap">
                  <span className="font-semibold">{category}</span>
                </td>
                <td className="w-full md:w-2/3 px-4 py-2">
                  <div className="flex flex-wrap justify-center gap-4">
                    {skills[category].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center"
                      >
                        {skill.icon ? (
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={skill.icon}
                              size="3x"
                              className="text-gray-400 hover:text-gray-200"
                            />
                          </div>
                        ) : (
                          <img
                            src={skill.img}
                            alt={skill.name}
                            className="w-12 h-12 object-cover rounded-full border border-gray-500"
                          />
                        )}
                        <span className="text-xs mt-1 text-center">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </section>
  );
};

export default Skills;
