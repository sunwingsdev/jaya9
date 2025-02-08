import React from "react";
import { useState } from "react";
import tableimage from "../../assets/table.jpg";
import ttlog1 from "../../assets/stlogo1.png";
import ttlog2 from "../../assets/stlogo2.png";
import ttlog3 from "../../assets/stlogo3.jpg";
import ttlog4 from "../../assets/stlogo4.jpg";
import ttlog5 from "../../assets/stlogo5.jpg";
import ttlog6 from "../../assets/stlogo6.png";
import ttlog7 from "../../assets/stlogo7.png";
import ttlog8 from "../../assets/stlogo8.png";
import ttlog9 from "../../assets/stlogo9.jpg";
import ttlog10 from "../../assets/stlogo10.jpg";
import ttlog11 from "../../assets/ttlogo11.png";
import ttlog12 from "../../assets/ttlogo12.png";
import ttlog13 from "../../assets/ttlogo13.png";
import ttlog14 from "../../assets/ttlogo14.jpg";
import ttlog15 from "../../assets/ttlogo15.png";
import ttlog16 from "../../assets/ttlogo16.png";
import ttlog17 from "../../assets/ttlogo17.jpg";
import ttlog18 from "../../assets/lllogo18 (2).webp";
import ttlog19 from "../../assets/ttlogo19.jpg";
import ttlog20 from "../../assets/lllogo20.webp";

import hoticon from "../../assets/game-icon-hot-mobile.svg";
import newicon from "../../assets/game-icon-new-mobile.svg";

const images = [
  { src: ttlog1, alt: "Image 1", title: "Super Ace Deluxe" },
  { src: ttlog2, alt: "Image 2", title: "Gates of Olympus 1000" },
  { src: ttlog3, alt: "Image 3", title: "Detective Girl" },
  { src: ttlog4, alt: "Image 4", title: "Crazy777" },
  { src: ttlog5, alt: "Image 5", title: "Super Ace" },
  { src: ttlog6, alt: "Image 17", title: "SAFARI HEAT-MULTIPLY" },
  { src: ttlog7, alt: "Image 17", title: "Sweet Bonanza" },
  { src: ttlog8, alt: "Image 19", title: "গোল্ডেন বালির বই" },
  { src: ttlog9, alt: "Image 19", title: "ক্যান্ডি স্টার™" },
  { src: ttlog10, alt: "Image 19", title: "Sweet Bonanza" },
];

const itemsPerPage = 10; // Number of images per page
const totalPages = Math.ceil(images.length / itemsPerPage);

const TableGames = () => {
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
      <img src={tableimage} alt="" className="w-full h-32 md:h-auto lg:h-auto object-cover" />
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
          <div className="flex flex-row gap-1 lg:gap-4">
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
                TITO
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
                RT
              </label>
            </div>
          </div>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 pt-3">
  {currentImages.map((image, index) => (
    <div
      key={index}
      className="relative w-full h-[160px] bg-cover bg-center group"
    >
      <figure className="relative">
        {/* Image */}
        <div className="relative">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-40 object-cover rounded-md"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
        </div>

        {/* Play Button */}
        <button
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
            whitespace-nowrap text-xs bg-custom-orange text-white rounded-sm px-4 py-2 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          এখন খেলুন
        </button>

        {/* Title */}
        <h3 className="absolute bottom-0 left-0 w-full bg-exchange-color text-white font-bold shadow-exchange-shadow 
          text-xs sm:text-sm md:text-base lg:text-lg text-center max-h-12 overflow-hidden truncate px-2 py-1 leading-tight">
          {image.title}
        </h3>

        {/* Badge (Hot or New) */}
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

export default TableGames;
