import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetActive = (id) => {
    window.history.pushState(null, null, `#${id}`);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section) => {
    if (window.innerWidth < 1024) {
      // Only close the menu on smaller screens
      setIsOpen(false);
    }
    scrollToSection(section);
  };

  const scrollToSection = (section) => {
    // Scroll to the section
    document.querySelector(`#${section}`).scrollIntoView({
      behavior: 'smooth',
    });
    handleSetActive(section);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer">
          <a
            href="#intro"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('intro');
            }}
          >
            Kunj Hiteshkumar Pathak
          </a>
        </h1>

        {/* Hamburger Icon for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row lg:space-x-4 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:translate-x-0 lg:flex lg:flex-row lg:space-x-4`}
          style={{ top: '4rem' }} // Ensures menu starts below the navbar on small screens
        >
          {['experience', 'skills', 'education', 'projects', 'certifications'].map((section) => (
            <li key={section} className="text-center lg:text-left lg:my-0 my-4">
              <Link
                to={section}
                smooth={true}
                duration={500}
                onSetActive={() => handleSetActive(section)}
                className="hover:text-gray-400 cursor-pointer block py-2 px-4"
                onClick={() => handleLinkClick(section)} // Add onClick handler here
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Fullscreen overlay menu for smaller screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 text-white flex flex-col items-center justify-center lg:hidden z-20"
          onClick={() => setIsOpen(false)}
          style={{ top: '4rem' }}
        >
          <ul className="space-y-6">
            {['experience', 'skills', 'education', 'projects', 'certifications'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  onSetActive={() => handleSetActive(section)}
                  className="hover:text-gray-400 cursor-pointer block text-2xl"
                  onClick={() => handleLinkClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
