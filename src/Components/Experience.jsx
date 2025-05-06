import React from 'react';
import { motion } from 'framer-motion';
import diggibyteLogo from '../media/dgb.png'; 
import imbuesoftLogo from '../media/imbuesoft.png';
import QuadrealLogo from '../media/QDR.png';

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-700 text-white py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Experience</h2>
        </motion.div>

        {/* Quadreal Property Group Limited */}

        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="lg:w-1/2 flex flex-col order-2 lg:order-1 lg:pr-4 mb-6 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-2">Intern, Data Engineer 🇨🇦</h2>
              <p className="text-lg text-gray-300">QuadReal Proper Group Limited</p>
              <p className="text-lg text-gray-300">Toronto, Canada</p>
              <p className="text-lg font-semibold mt-2 text-green-300">Jan 2025 – Present</p>
              <ul className="mt-4 list-disc list-inside">
                <li>Developed and maintained DBT models, enhancing data transformation efficiency, enforcing data governance standards, and enabling seamless collaboration across Data Engineering, Analytics, and Product teams.</li>
                <li>Engineered and automated Azure Data Factory (ADF) pipelines to efficiently ingest and transform large datasets into Azure SQL, reducing processing time and improving data accessibility for analytics teams.</li>
                <li>Designed and optimized scalable data pipelines to develop Financial Data Models, integrating structured and unstructured data from multiple sources, ensuring high data accuracy, consistency, and availability for business intelligence.</li>
              </ul>
              {/* <a href="https://drive.google.com/file/d/1DhzMCf3vUjoX2ypOIjAGwVloVRRgQvPx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline mt-4 font-bold">Experience Certificate</a> */}
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col order-1 lg:order-2 place-items-center lg:place-items-end lg:mb-0 mb-5">
            <div className="flex flex-col items-center">
              <img
                src={QuadrealLogo}
                alt="QuadReal Property Group Limited"
                className="w-full max-w-xs h-auto lg:max-w-sm lg:max-h-40"
              />
              <a href="https://www.quadreal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline mt-4 font-semibold">Visit Company Website</a>
            </div>
          </div>
        </div>

        {/* Diggibyte Technologies */}
        <div className="flex flex-col lg:flex-row items-center mb-12">
          <div className="lg:w-1/2 flex flex-col order-2 lg:order-1 lg:pr-4 mb-6 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-2">Data Engineer Intern 🇮🇳</h2>
              <p className="text-lg text-gray-300">Diggibyte Technologies Private Limited</p>
              <p className="text-lg text-gray-300">Bangalore, India</p>
              <p className="text-lg font-semibold mt-2 text-orange-400">Dec 2022 – April 2023</p>
              <ul className="mt-4 list-disc list-inside">
                <li>Applied data transformation using Spark/PySpark and DataFrames; exported results to Azure Blob and Data Lake Storage.</li>
                <li>Built and tested ETL pipelines with Databricks, Azure Data Factory, and Synapse Analytics.</li>
                <li>Developed and monitored Apache Airflow DAGs using Python and Bash.</li>
                <li>Led a Dockerized POC using DBT as an alternative to Databricks in collaboration with leadership.</li>
              </ul>
              <a href="https://drive.google.com/file/d/1DhzMCf3vUjoX2ypOIjAGwVloVRRgQvPx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline mt-4 font-bold">Experience Certificate</a>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col order-1 lg:order-2 place-items-center lg:place-items-end lg:mb-0 mb-5">
            <div className="flex flex-col items-center">
              <img
                src={diggibyteLogo}
                alt="Diggibyte Technologies"
                className="w-full max-w-xs h-auto lg:max-w-sm lg:max-h-40"
              />
              <a href="https://www.diggibyte.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline mt-4 font-semibold">Visit Company Website</a>
            </div>
          </div>
        </div>

        {/* Imbuesoft */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex flex-col order-2 lg:order-1 lg:pr-4 mb-6 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-2">Software Developer Intern 🇮🇳</h2>
              <p className="text-lg text-gray-300">Imbuesoft L.L.P, India (Remote)</p>
              <p className="text-lg font-semibold mt-2 text-orange-400">Jan 2022 – Apr 2022</p>
              <ul className="mt-4 list-disc list-inside">
                <li>Designed and implemented RESTful APIs in Spring Boot for critical modules including medicine catalog, order processing, and order history retrieval.</li>
                <li>Integrated Spring Security for authentication and role-based access control, enhancing application security and data integrity.</li>
                <li>Utilized JPA and Hibernate for efficient database interaction, enabling seamless CRUD operations and transactional consistency.</li>
                <li>Implemented JWT-based authentication and session management to secure endpoints and improve performance.</li>
                <li>Built responsive, modular UI components for authentication workflows using ReactJS, React Router, and SASS with SCSS architecture to ensure maintainability and scalability.</li>
                </ul>
              <a href="https://drive.google.com/file/d/1qS9ZU809MIQrSS4gxgEzZAENln-aKlvj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline mt-4 font-bold">Experience Certificate</a>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col order-1 lg:order-2 place-items-center lg:place-items-end lg:mb-0 mb-5">
            <div className="flex flex-col items-center">
              <img
                src={imbuesoftLogo}
                alt="Imbuesoft"
                className="w-full max-w-xs h-auto lg:max-w-sm lg:max-h-40"
              />
              <a href="https://www.imbuesoft.in/#/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline mt-4 font-semibold">Visit Company Website</a>
            </div>
          </div>
        </div>  

      </div>
    </section>
  );
};

export default Experience;
