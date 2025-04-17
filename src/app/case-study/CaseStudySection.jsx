"use client";
import { useEffect, useRef, useState } from "react";
import {
  FaBrain,
  FaChartBar,
  FaCloud,
  FaCode,
  FaDatabase,
  FaGlobe,
  FaLayerGroup,
  FaLock,
  FaMicrochip,
  FaRocket,
  FaServer,
  FaTimes,
  FaWifi,
} from "react-icons/fa";
import { GoZap } from "react-icons/go";
import { MdSmartphone } from "react-icons/md";

// Custom animation styles
const animationStyles = {
  fadeInDown: `
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translate(-50%, -20px);
      }
      to {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }
    .animate-fade-in-down {
      animation: fadeInDown 0.3s ease-out forwards;
    }
  `,
  customScrollbar: `
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    
    /* Add support for Firefox scrolling */
    .scrollable-content {
      scrollbar-width: thin;
      scrollbar-color: #888 #f1f1f1;
      scroll-behavior: smooth;
    }
    
    /* Ensure content is scrollable in all browsers */
    .modal-body {
      display: flex;
      flex-direction: column;
      max-height: 80vh;
      height: auto;
      overflow: hidden;
    }
  `,
};

// Component for individual case study cards
function CaseStudyCard({ study, getIcon, onClick }) {
  return (
    <div
      className="rounded-lg border shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onClick(study)}
    >
      <img
        className="w-full h-48 object-cover"
        src={study.imageUrl}
        alt={study.title}
      />
      <div className="p-4">
        <div className="flex items-center mb-2">
          {getIcon(study.icon)}
          <h3 className="ml-2 text-xl font-semibold">{study.title}</h3>
        </div>
        <p className="text-gray-600 line-clamp-2">{study.description}</p>
        <span className="mt-4 inline-block text-indigo-600 font-medium">
          {study.category}
        </span>
      </div>
    </div>
  );
}

// Modal component for detailed case study view
function CaseStudyModal({ study, isOpen, onClose, getIcon }) {
  if (!isOpen) return null;

  // Create a ref for the scrollable content
  const contentRef = useRef(null);

  // State to track if notification is visible
  const [showNotification, setShowNotification] = useState(false);

  // Function to handle the "Read Full Case Study" button click
  const handleReadFull = () => {
    // Show notification instead of navigating
    setShowNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  // Handle manual scroll events if mouse wheel events aren't working correctly
  const handleScroll = (e) => {
    const scrollContainer = contentRef.current;
    if (scrollContainer) {
      // Keep the event within the scrollable container
      e.stopPropagation();
    }
  };

  // Close modal when Escape key is pressed and set up scroll handling
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);

    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = "hidden";

    // Get current content element
    const contentElement = contentRef.current;

    if (!contentElement) {
      return () => {
        window.removeEventListener("keydown", handleEscKey);
        document.body.style.overflow = "";
      };
    }

    // Set focus to modal content for better scroll behavior
    contentElement.focus();

    // Ensure content is scrollable
    contentElement.scrollTop = 0;

    // Additional event listeners for scroll handling
    const preventDefaultScroll = (e) => {
      e.stopPropagation();
    };

    contentElement.addEventListener("wheel", preventDefaultScroll, {
      passive: false,
    });
    contentElement.addEventListener("touchmove", preventDefaultScroll, {
      passive: false,
    });

    return () => {
      contentElement.removeEventListener("wheel", preventDefaultScroll);
      contentElement.removeEventListener("touchmove", preventDefaultScroll);
      window.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Apply animation styles
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement("style");
    styleElement.innerHTML =
      animationStyles.fadeInDown + animationStyles.customScrollbar;
    document.head.appendChild(styleElement);

    // Cleanup function to remove the style element
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-3xl w-full modal-body"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Notification toast */}
        {showNotification && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in-down">
            Full case study for "{study.title}" would open in a real application
          </div>
        )}

        <div className="relative flex-shrink-0">
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src={study.imageUrl}
            alt={study.title}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <FaTimes className="text-gray-800" />
          </button>
        </div>

        <div
          ref={contentRef}
          className="p-6 overflow-y-auto flex-grow custom-scrollbar scrollable-content"
          style={{
            overscrollBehavior: "contain",
            WebkitOverflowScrolling: "touch", // Improve scrolling on iOS
            msOverflowStyle: "none", // Better scrolling on IE
          }}
          tabIndex={0} // Make the element focusable for better keyboard accessibility
          onScroll={handleScroll}
        >
          <div className="flex items-center mb-4">
            {getIcon(study.icon)}
            <h2 className="ml-3 text-2xl font-bold text-gray-900">
              {study.title}
            </h2>
          </div>

          <div className="mb-4">
            <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
              {study.category}
            </span>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg mb-4">{study.description}</p>

            <h3 className="text-xl font-semibold mb-2">Key Insights</h3>
            <ul className="list-disc pl-5 mb-6">
              <li className="mb-2">
                Implementation strategies and technologies used
              </li>
              <li className="mb-2">Challenges overcome during the project</li>
              <li className="mb-2">Measurable outcomes and business impact</li>
              <li className="mb-2">Lessons learned and best practices</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Technology Stack</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {["React", "Node.js", "TensorFlow", "AWS", "Docker"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <h3 className="text-xl font-semibold mb-2">Project Background</h3>
            <p className="text-gray-700 mb-6">
              This case study investigates how {study.title.toLowerCase()} has
              transformed the technological landscape in recent years. The
              project began as a response to industry demands for more efficient
              solutions in the {study.category} space. Our team of experts spent
              six months researching and developing innovative approaches to
              address the challenges faced by organizations in this domain.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Implementation Details
            </h3>
            <p className="text-gray-700 mb-6">
              The implementation of this technology required significant
              innovation in multiple areas. Teams worked across different
              domains to ensure seamless integration with existing systems while
              introducing revolutionary new capabilities. The development
              process followed an agile methodology with two-week sprints and
              regular stakeholder feedback to ensure alignment with business
              objectives.
            </p>

            <h3 className="text-xl font-semibold mb-2">Results and Impact</h3>
            <p className="text-gray-700 mb-6">
              After deployment, the solution demonstrated impressive results
              across key metrics:
            </p>
            <ul className="list-disc pl-5 mb-6">
              <li className="mb-2">40% increase in operational efficiency</li>
              <li className="mb-2">Reduction in manual processes by 65%</li>
              <li className="mb-2">
                Cost savings of approximately $1.2M annually
              </li>
              <li className="mb-2">
                Improved user satisfaction scores from 72% to 94%
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Future Directions</h3>
            <p className="text-gray-700 mb-6">
              Building on the success of this implementation, future
              developments will focus on:
            </p>
            <ol className="list-decimal pl-5 mb-6">
              <li className="mb-2">
                Expanding functionality to support additional use cases
              </li>
              <li className="mb-2">
                Integrating with emerging technologies like blockchain and
                quantum computing
              </li>
              <li className="mb-2">
                Developing open APIs to foster a broader ecosystem
              </li>
              <li className="mb-2">
                Creating a community of practice around these technologies
              </li>
            </ol>
          </div>
        </div>

        <div className="flex-shrink-0 p-4 border-t flex justify-end bg-gray-50 rounded-b-lg">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors mr-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function CaseStudySection() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Changed from 3 to 6
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/caseStudy.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCaseStudies(data);
      } catch (error) {
        console.error("Error fetching case studies:", error);
      }
    };

    fetchData();
  }, []);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(Math.min(visibleCount + 3, caseStudies.length));
      setIsLoading(false);
    }, 800);
  };

  const handleCardClick = (study) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Add a small delay before clearing the selected study to allow animation to complete
    setTimeout(() => {
      setSelectedStudy(null);
    }, 300);
  };

  // Function to get the icon component based on the icon name
  const getIcon = (iconName) => {
    const iconMap = {
      brain: <FaBrain className="w-10 h-10 text-indigo-600" />,
      globe: <FaGlobe className="w-10 h-10 text-indigo-600" />,
      cpu: <FaMicrochip className="w-10 h-10 text-indigo-600" />,
      layers: <FaLayerGroup className="w-10 h-10 text-indigo-600" />,
      server: <FaServer className="w-10 h-10 text-indigo-600" />,
      database: <FaDatabase className="w-10 h-10 text-indigo-600" />,
      lock: <FaLock className="w-10 h-10 text-indigo-600" />,
      cloud: <FaCloud className="w-10 h-10 text-indigo-600" />,
      smartphone: <MdSmartphone className="w-10 h-10 text-indigo-600" />,
      zap: <GoZap className="w-10 h-10 text-indigo-600" />,
      wifi: <FaWifi className="w-10 h-10 text-indigo-600" />,
      rocket: <FaRocket className="w-10 h-10 text-indigo-600" />,
      code: <FaCode className="w-10 h-10 text-indigo-600" />,
      "bar-chart": <FaChartBar className="w-10 h-10 text-indigo-600" />,
    };

    return (
      iconMap[iconName] || <FaGlobe className="w-10 h-10 text-indigo-600" />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Technology Case Studies 2025
          </h1>
          <p className="text-xl text-gray-600">
            Exploring cutting-edge technologies and future trends shaping the
            software industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.slice(0, visibleCount).map((study) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              getIcon={getIcon}
              onClick={handleCardClick}
            />
          ))}
        </div>

        {/* {visibleCount < caseStudies.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              disabled={isLoading}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                <span className="flex items-center">
                  Load More Case Studies
                </span>
              )}
            </button>
          </div>
        )} */}

        {visibleCount < caseStudies.length && (
          <div className="mt-12 text-center">
            <button onClick={loadMore} disabled={isLoading}>
              <a
                href="#_"
                className="box-border relative z-30 inline-flex items-center justify-center w-auto px-6 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-[#131c2a] rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
              >
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-hexagon"
                  >
                    <polygon points="6 3, 18 3, 23 12, 18 21, 6 21, 1 12"></polygon>
                  </svg>
                  {isLoading ? "Loading..." : " Load More Case Studies"}
                </span>
              </a>
            </button>
          </div>
        )}

        {selectedStudy && (
          <CaseStudyModal
            key={`modal-${selectedStudy.id}`}
            study={selectedStudy}
            isOpen={isModalOpen}
            onClose={closeModal}
            getIcon={getIcon}
          />
        )}
      </div>
    </div>
  );
}

export default CaseStudySection;
