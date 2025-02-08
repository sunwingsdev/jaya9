import React from "react";
import { useEffect, useState } from "react";
import image1 from "../../assets/newimage1.webp";
import image2 from "../../assets/new image-2.webp";
import image3 from "../../assets/new image-3.webp";
import image4 from "../../assets/new image-4.webp";
import image5 from "../../assets/new image-5.webp";
import image6 from "../../assets/new image-6.webp";

import imageone from "../../assets/image1.jpg";
import imagetwo from "../../assets/image2.jpg";
import imagethree from "../../assets/image3.jpg";
import imagefour from "../../assets/image4.jpg";
import imagesix from "../../assets/image6.jpg";
import imageseven from "../../assets/image7.jpg";
import banner from "../../assets/home banner.jpg";
import fieldimage from "../../assets/footballfield.webp";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import home4 from "../../assets/home4.png";
import home5 from "../../assets/home5.png";
import home6 from "../../assets/home6.png";
import home7 from "../../assets/home7.png";
import home8 from "../../assets/home8.png";
import hotlogo from "../../assets/Hot.svg";
import { Link } from "react-router-dom";

const bgImage = [fieldimage];

const data = [
  {
    id: 1,
    title: "AUSTRALIA TOUR OF SRILANKA,2025",
    description: "2025-01-29  10:30:00",
    extraInfo1: "Sri Lanka 2.56",
    extraInfo2: "Australia 1.99",
  },
  {
    id: 2,
    title: "BANGLADESH PREMIER LEAGUE, 2024-25",
    description: "2025-01-29 13:30:00",
    extraInfo1: "Rangpur Riders 1.51",
    extraInfo2: "Chittagong Kings 2.14",
  },
  {
    id: 3,
    title: "BANGLADESH PREMIER LEAGUE, 2024-25",
    description: "2025-01-29 18:30:00",
    extraInfo1: "Dhaka Capitals 2.26",
    extraInfo2: "Fortune Barishal 1.58",
  },
  {
    id: 4,
    title: "INTERNATIONAL LEAGUE T20, 2025",
    description: "2025-01-29 20:30:00",
    extraInfo1: "Desert Vipers 1.74",
    extraInfo2: "Gulf Giants 2.00",
  },
  {
    id: 5,
    title: "BANGLADESH WOMEN TOUR OF WEST INDIES, 2025",
    description: "2025-01-30 04:00:00",
    extraInfo1: "West Indies Women 1.29",
    extraInfo2: "Bangladesh Women 2.24",
  },
  {
    id: 6,
    title: "ENGLAND TOUR OF INDIA, 2025",
    description: "2025-01-31 19:30:00",
    extraInfo1: "India 1.55",
    extraInfo2: "England 2.52",
  },
];

const Home = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const imagesLarger = [imageone,imagetwo,imagethree,imagefour,imagesix,imageseven]
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="relative  w-full grid   lg:grid-cols-1 ">
          <img
            src={images[currentIndex]}
            alt=""
            className="w-full h-32 lg:hidden flex md:h-auto  "
          />
          <img
            src={imagesLarger[currentIndex]}
            alt=""
            className="w-full h-auto hidden lg:flex  "
          />

          <div className="absolute bottom-0 lg:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 w-1 lg:w-3 lg:h-3 rounded-full ${
                  currentIndex === index ? "bg-common-orange" : "bg-white"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-auto overflow-hidden bg-common-blue px-8 py-2 flex items-center">
        <div className="flex items-center space-x-4  text-white overflow-hidden">
          <div className="text-common-orange text-2xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="28"
              fill="currentColor"
            >
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm6.29-3c-.52 0-1.02-.2-1.41-.59-.78-.78-.78-2.05 0-2.83.39-.39.89-.59 1.41-.59s1.02.2 1.41.59c.78.78.78 2.05 0 2.83-.39.39-.89.59-1.41.59zM12 16c-2.76 0-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2c0 2.76-2.24 5-5 5zm5.3-4.71c-.39-.39-.39-1.02 0-1.41 1.17-1.17 1.17-3.07 0-4.24-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0 1.95 1.95 1.95 5.12 0 7.07-.39.39-1.02.39-1.41-.01z" />
            </svg>
          </div>
          <div className="w-full text-sm ">
            <marquee className="text-white block w-full">
              <span className="mx-4">
                WWW.JAYA9.APP এখন আমাদের অফিসিয়াল ওয়েবসাইট:
              </span>
              <span className="mx-4">
                WWW.JAYA9.APP আপনার বিশ্বস্ত প্ল্যাটফর্ম JAYA9
              </span>
              <span className="mx-4">
                Jaya9 এ স্বাগতম : বিশ্বস্ত ক্রিকেট এক্সচেঞ্জ এবং বেটিং
                প্ল্যাটফর্ম!
              </span>
            </marquee>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex flex-row bg-white text-white whitespace-nowrap overflow-x-auto shadow-2xl lg:hidden gap-x-6">
          <li className="flex flex-col py-3 px-4 bg-common-orange items-center gap-1  shadow-md">
            <img src={hotlogo} alt="Hot Games" className="w-8 h-auto" />
            <span className="text-sm font-medium text-white">হট গেমস</span>
          </li>

          {/* <li className="flex flex-col items-center gap-1">
            <Link to="/cricket" className="flex flex-col items-center">
              <span className="text-2xl">🏏</span>
              <span className="text-sm">ক্রিকেট</span>
            </Link>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-2xl">🎰</span>
            <span className="text-sm">লাইভ ক্যাসিনো</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-2xl">🎮</span>
            <span className="text-sm">স্লট গেম</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-2xl">♠️</span>
            <span className="text-sm">টেবিল গেম</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-2xl">⚽</span>
            <span className="text-sm">স্পোর্টস</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-2xl">🎣</span>
            <span className="text-sm">মাছ ধরা</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-2xl">🎟️</span>
            <span className="text-sm">লটারি</span>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-2xl">🚀</span>
            <span className="text-sm">ক্র্যাশ</span>
          </li> */}
        </ul>
      </div>
      <div className="grid grid-cols-3 md:grid-cols- lg:hidden gap-4 py-6 pl-6 pr-20">
        <img src={home1} alt="" className="w-full h-auto object-cover" />
        <img src={home2} alt="" className="w-full h-auto object-cover" />
        <img src={home3} alt="" className="w-full h-auto object-cover" />
        <img src={home4} alt="" className="w-full h-auto object-cover" />
        <img src={home5} alt="" className="w-full h-auto object-cover" />
        <img src={home6} alt="" className="w-full h-auto object-cover" />
        <img src={home7} alt="" className="w-full h-auto object-cover" />
        <img src={home8} alt="" className="w-full h-auto object-cover" />
      </div>

      <div className="lg:px-8">
        <h3>রেফারেল প্রোগ্রাম</h3>
        <img src={banner} alt="" className="w-full" />
      </div>
      <div className="lg:px-8 mt-12">
        <div className="overflow-x-auto px-6 pb-6 pt-8 ">
          <div className="flex space-x-6 w-full">
            {data.map((item, index) => (
              <div
                key={item.id}
                className="relative bg-cover bg-center text-white p-6 shadow-lg flex-shrink-0 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] snap-start"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  height: "250px",
                }}
              >
                <div className="absolute -top-9 left-2 px-4 py-2  bg-opacity-60 rounded-md">
                  {index < 4 ? (
                    <div className="flex space-x-2 flex-row">
                      <h3 className="font-bold text-black ">Live</h3>
                      <button className="bg-green-500 px-8  text-white text-sm rounded">
                        Now
                      </button>
                    </div>
                  ) : (
                    <h3 className="font-bold text-black">Pre-Match</h3>
                  )}
                </div>

                <div className="bg-opacity-50 p-4 font-bold h-full flex flex-col items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mb-2 text-center">{item.description}</p>
                  </div>
                  <div className="flex justify-between   space-x-24 text-sm opacity-80">
                    <p>{item.extraInfo1}</p>
                    <p>{item.extraInfo2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
