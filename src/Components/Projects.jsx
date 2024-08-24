import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const projects = [
  {
    title: "Event-Driven Streaming E.T.L",
    techStack: "Java, Spring Boot, Python, PySpark, AWS, Amazon Lambda, EC2, AWS Glue, S3, AWS EventBridge, AWS SNS, Polygon API, Parquet, Serverless Architecture",
    description: `Developed an advanced ETL (Extract, Transform, Load) solution tailored for Data Scientists and Stock Market Analysts, delivering up-to-date, actionable stock market data through live streaming Polygon Api. Focused on the transformation phase, the application seamlessly processes data from Polygon's live API, converting it into Parquet format for consistency and schema safety. Integrated user-specific stock data efficiently, handling updates and deletions dynamically. Leveraged AWS Glue for scalable, serverless ETL job execution and implemented an event-driven system with AWS EventBridge for automated workflows. AWS Lambda and EC2 provided scalable computing, while AWS SNS ensured timely notifications and file availability. This solution empowered users with precise data and streamlined access for effective trading strategy development.`,
    sourceCodeLink: "https://github.com/KunjPathak12/LiveStreaming_Cloud_ETL_AWS_Stocks_API",
    livePreview: false,
    livePreviewLink: "",
    tag: "Data Engineering & Cloud Computing", // Add a tag for the project
  },
  {
    title: "Tiffin Box WebApp",
    techStack: "Java, Lombok, Spring Boot, Spring-Security, Spring-Hibernate, Jpa-Repository, Spring-Boot-Starter-Mail, MongoDB, ReactJs, Tailwind CSS, Cloudinary, Axios",
    description: `Developed robust authentication and authorization features for the TiffinBox application using Spring Security, including role-based access control, JWT authentication, and secure session management. Designed and implemented both frontend and backend components, integrating user registration, login, and password recovery functionalities. Created and managed APIs for user profile updates and image uploads, while also establishing global error handling protocols. This work enhanced the overall security and user experience of the platform, showcasing advanced skills in Spring Security, full-stack development, and API integration.`,
    sourceCodeLink: "https://github.com/rajkp10/TiffinBox",
    livePreview: true,
    livePreviewLink: "https://tiffinbox-csci5709.netlify.app/",
    tag: "Full Stack Web Development", // Add a tag for the project
  },
  {
    title: "K8s MicroServices",
    techStack: "Java, Spring-Boot, Docker, Kubernetes, Microservice, Google Cloud Platform, CI/CD with Cloudbuild and Artifact-Registry , Google Kubernetes Engine, Terraform",
    description: `Engineered a Microservices Backend Deployment using Java, Spring Boot, Docker, and Kubernetes on Google Cloud Platform (GCP). Successfully orchestrated a scalable and resilient Kubernetes cluster with Google Kubernetes Engine (GKE), enhancing service reliability and scalability. Implemented a robust CI/CD pipeline utilizing Cloud Build and Artifact Registry for streamlined deployments and continuous integration, alongside automated infrastructure provisioning with Terraform. This project made me adept with the concepts of containerization, microservices architecture, and DevOps practices, driving significant improvements in my knowledge for deployment efficiency and system performance.`,
    sourceCodeLink: "https://github.com/KunjPathak12/Microservices_Kubernetes",
    livePreview: false,
    livePreviewLink: "",
    tag: "DevOps", // Add a tag for the project
  },
  {
    title: "Image Caption Generation",
    techStack: "Transformers, NLP, PyTorch, Encoder-Decoder-Model, CV",
    description: `Developed an image captioning system utilizing a pre-trained VisionEncoderDecoderModel that integrates a Vision Transformer (ViT) with a GPT-2 language model. Implemented the solution using the Hugging Face Transformers library, which involved extracting image features with ViTImageProcessor, tokenizing captions with AutoTokenizer, and managing tensor operations with PyTorch. The system processes images, generates captions, and demonstrated effective use of advanced machine learning techniques for image analysis and natural language processing. This project enhanced my skills in integrating machine learning models, image processing, and text generation technologies.`,
    sourceCodeLink: "https://github.com/KunjPathak12/captionGenration",
    livePreview: false,
    livePreviewLink: "",
    tag: "Generative AI", // Add a tag for the project
  },
  
  // Add more projects as needed
];

const fetchScreenshot = async (url) => {
  try {
    const response = await axios.get(
      `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`,
      { responseType: 'blob' }
    );
    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl;
  } catch (error) {
    console.error('Error fetching screenshot:', error);
    return '/assets/default-image.png'; // Fallback image
  }
};

const Projects = () => {
  const [screenshotUrls, setScreenshotUrls] = useState({});

  useEffect(() => {
    const fetchScreenshots = async () => {
      const urls = {};
      try {
        // Clear cache
        localStorage.clear();

        // Fetch screenshots for projects with live previews
        await Promise.all(
          projects
            .filter((project) => project.livePreview)
            .map(async (project) => {
              const cacheKey = `screenshot_${project.livePreviewLink}`;
              const cachedImage = localStorage.getItem(cacheKey);
              if (cachedImage) {
                urls[project.livePreviewLink] = cachedImage;
              } else {
                const imageUrl = await fetchScreenshot(project.livePreviewLink);
                localStorage.setItem(cacheKey, imageUrl);
                urls[project.livePreviewLink] = imageUrl;
              }
            })
        );

        // Fetch screenshots for projects without live previews (source code links)
        await Promise.all(
          projects
            .filter((project) => !project.livePreview)
            .map(async (project) => {
              const cacheKey = `screenshot_${project.sourceCodeLink}`;
              const cachedImage = localStorage.getItem(cacheKey);
              if (cachedImage) {
                urls[project.sourceCodeLink] = cachedImage;
              } else {
                const imageUrl = await fetchScreenshot(project.sourceCodeLink);
                localStorage.setItem(cacheKey, imageUrl);
                urls[project.sourceCodeLink] = imageUrl;
              }
            })
        );

        setScreenshotUrls(urls);
      } catch (error) {
        console.error('Error fetching screenshots:', error);
      }
    };

    fetchScreenshots();
  }, []);

  return (
    <section id="projects" className="bg-gray-900 text-white py-12 px-4 lg:px-8">
      <div className="container mx-auto">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Projects</h2>
        </motion.div>
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center mb-12">
            <div className="lg:w-1/2 flex flex-col items-center mb-6 lg:mb-0">
              <a
                href={project.livePreview ? project.livePreviewLink : project.sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full max-w-xs h-auto lg:max-w-sm lg:max-h-40 cursor-pointer flex justify-center">
                  <img
                    src={screenshotUrls[project.livePreviewLink || project.sourceCodeLink] || '/assets/default-image.png'}
                    alt={project.title}
                    className="object-fill object-center w-full h-full transition duration-500 hover:scale-105"
                  />
                </div>
              </a>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:pl-4">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                {project.tag && (
                  <span className="ml-3 text-sm font-semibold bg-blue-600 text-white px-2 py-1 rounded transition duration-300 hover:scale-105 cursor-pointer">
                    {project.tag}
                  </span>
                )}
              </div>
              <p className="text-base text-green-300 text-center lg:text-left">{project.techStack}</p>
              <p className="text-base mt-2 text-center lg:text-left">{project.description}</p>
              <a
                href={project.sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-blue-300 mt-4 text-center hover:text-blue-500 lg:text-left"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
         <div className="text-center mt-8">
          <a
            href="https://github.com/KunjPathak12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-6 py-2 rounded text-lg font-semibold hover:bg-orange-800 transition duration-300"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
