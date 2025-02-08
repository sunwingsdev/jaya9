import React, { useState } from "react";
import crashimage from "../../assets/crash_bd.png";
import crashgamelogo1 from "../../assets/crashgamelogo1.webp";
import crashgamelogo2 from "../../assets/crashgamelogo2.webp";
import crashgamelogo3 from "../../assets/crashmenulogo3.webp";
import crashgamelogo4 from "../../assets/crashmenulogo4.webp";
import crashgamelogo5 from "../../assets/crashmenulogo5.webp";
import crashgamelogo6 from "../../assets/crashmenulogo6.webp";

import hoticon from "../../assets/game-icon-hot-mobile.svg";
import newicon from "../../assets/game-icon-new-mobile.svg";

const images = [
  { src: crashgamelogo1, alt: "Image 1", title: "Jetx" },
  { src: crashgamelogo2, alt: "Image 1", title: "PlinkoX" },
  { src: crashgamelogo3, alt: "Image 1", title: "PlinkoX" },
  { src: crashgamelogo4, alt: "Image 1", title: "PlinkoX" },
  { src: crashgamelogo5, alt: "Image 1", title: "PlinkoX" },
  { src: crashgamelogo6, alt: "Image 1", title: "PlinkoX" },
];

const itemsPerPage = 10; // Number of images per page
const totalPages = Math.ceil(images.length / itemsPerPage);

const Crash = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div>
      <img src={crashimage} alt="" className="w-full h-32 md:h-auto lg:h-auto object-cover" />
      <div className="flex flex-row items-center px-4 pt-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 105.293 14.707l4.387 4.387a1 1 0 001.414-1.414l-4.387-4.387A8 8 0 0010 2zm-6 8a6 6 0 1112 0 6 6 0 01-12 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <select className="shadow-2xl p-2 border border-black w-full outline-none max-w-4xl">
            <option value="" disabled selected>
              খেলা অনুসন্ধান করুন
            </option>
            <option value="exchange">exchange</option>
          </select>
        </div>
      </div>
      <div className="bg-common-blue mt-4  h-full p-2">
        <h3 className="bg-blue-800 shadow-3xl-blue flex items-center gap-2 p-3 rounded-lg">
          <div className="flex flex-row overflow-x-auto gap-1 lg:gap-4">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="betswiz"
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="betswiz" className="text-white font-medium">
                SPRIBE
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="betswiz"
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="betswiz" className="text-white font-medium">
                JILI
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="betswiz"
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="betswiz" className="text-white font-medium">
                Tito
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="betswiz"
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="betswiz" className="text-white font-medium">
                Aviatrix
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="betswiz"
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="betswiz" className="text-white font-medium">
                PP
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="betswiz"
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="betswiz" className="text-white font-medium">
                KM
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="betswiz"
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="betswiz" className="text-white font-medium">
                SMART
              </label>
            </div>
          </div>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 pt-3">
  {currentImages.map((image, index) => (
    <div key={index} className="relative bg-cover bg-center group">
      <figure className="relative">
        {/* Image with Fixed Width & Height */}
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-40 object-cover rounded-md"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>

        {/* Play Button - Centered Properly */}
        <button
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
            whitespace-nowrap text-xs bg-custom-orange text-white rounded-sm px-4 py-2 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          এখন খেলুন
        </button>

        {/* Game Title */}
        <h3 className="absolute bottom-0 left-0 w-full bg-exchange-color text-white font-bold shadow-exchange-shadow 
          text-xs sm:text-sm md:text-base lg:text-lg text-center max-h-12 overflow-hidden truncate px-2 py-1 leading-tight">
          {image.title}
        </h3>

        {/* Hot or New Badge (Aligned Properly) */}
        <div className="absolute top-0 right-0 flex items-center justify-center text-xs rounded-lg ">
          <img src={index < 10 ? hoticon : newicon} alt="Badge Icon" className="w-8 h-auto" />
        </div>
      </figure>
    </div>
  ))}
</div>





      <div className="flex justify-center items-center my-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-white text-black font-bold border border-black rounded-md hover:bg-common-blue hover:text-white transition-all disabled:opacity-50"
        >
          Previous
        </button>

        <div className="flex items-center space-x-2 mx-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 text-black border border-gray-300 rounded-md 
                ${
                  currentPage === index + 1
                    ? "bg-common-blue text-white"
                    : "bg-white hover:bg-common-blue hover:text-white"
                } 
                transition-all`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-white font-bold text-black border border-black rounded-md hover:bg-common-blue hover:text-white transition-all disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Crash;
