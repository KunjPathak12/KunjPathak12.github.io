import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import dbrkc from '../media/dbrksc.png';

const certificates = [
  {
    name: "Databricks Academy Certificate",
    certificateLink: "https://drive.google.com/file/d/1Lxx3FoUt5tSiNtojqJ8gDbnNp9__CMSD/view?usp=sharing",
    previewLink: "https://drive.google.com/file/d/1Lxx3FoUt5tSiNtojqJ8gDbnNp9__CMSD/view?usp=sharing",
  },
  {
    name: "Python Language",
    certificateLink: "https://courses.learncodeonline.in/learn/certificate/1573142-12062",
    previewLink: "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/12062/1573142_12062.png",
  },
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
    return dbrkc; // Return the fallback image on error
  }
};

const Certificates = () => {
  const [screenshotUrls, setScreenshotUrls] = useState({});

  useEffect(() => {
    const fetchScreenshots = async () => {
      const urls = {};
      try {
        await Promise.all(
          certificates.map(async (certificate) => {
            const cacheKey = `screenshot_${certificate.previewLink}`;
            const cachedImage = localStorage.getItem(cacheKey);
            if (cachedImage) {
              urls[certificate.previewLink] = cachedImage;
            } else {
              const imageUrl = await fetchScreenshot(certificate.previewLink);
              localStorage.setItem(cacheKey, imageUrl);
              urls[certificate.previewLink] = imageUrl;
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
    <section id="certifications" className="bg-gray-700 text-white py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Certificates</h2>
        </motion.div>
        <table className="min-w-full divide-y divide-gray-700 mx-auto">
          <tbody className="bg-gray-700 divide-y divide-gray-900">
            {certificates.map((certificate, index) => (
              <tr key={index} className="flex flex-col lg:flex-row items-center mb-12">
                <td className="w-full lg:w-1/2 px-4 py-2 text-center lg:text-left">
                  <h3 className="text-xl font-semibold">{certificate.name}</h3>
                </td>
                <td className="w-full lg:w-1/2 px-4 py-2 flex justify-center">
                  <a
                    href={certificate.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <div className="w-full max-w-xs h-auto lg:max-w-sm lg:h-40 overflow-hidden">
                      <img
                        src={screenshotUrls[certificate.previewLink] || dbrkc}
                        alt={certificate.name}
                        className="object-contain w-full h-full transition duration-500 hover:scale-105 rounded"
                      />
                    </div>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Certificates;
