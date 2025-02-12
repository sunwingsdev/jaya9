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
import banner from "../../assets/jaya9Banner.jpg";
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
import tab2Img from "../../assets/cricket.png";
import tab3Img from "../../assets/live.png";
import tab4Img from "../../assets/seven.png";
import tab5Img from "../../assets/table.png";
import tab6Img from "../../assets/sports.png";
import tab7Img from "../../assets/fishing.png";
import tab8Img from "../../assets/lottery.png";
import tab9Img from "../../assets/crash.png";

// import img1A from "./assets/img1A.jpg";
// import img1B from "./assets/img1B.jpg";
// import img1C from "./assets/img1C.jpg";

import img2A from "../../assets/betswiz_avatar.png";

import img3A from "../../assets/evo_avatar.png";
import img3B from "../../assets/pp_avatar.png";
import img3C from "../../assets/sexy_v2_avatar.png";

import img4A from "../../assets/jili_avatar.png";
import img4B from "../../assets/tito_avatar.png";
import img4C from "../../assets/pp_avatar.png";
import img4D from "../../assets/pg_avatar.png";
import img4E from "../../assets/smart_avatar.png";
import img4F from "../../assets/spg_avatar.png";
import img4G from "../../assets/fc_avatar.png";
import img4H from "../../assets/jdb_avatar.png";
import img4I from "../../assets/rt_avatar.png";

import img5A from "../../assets/spribe_avatar.png";
import img5B from "../../assets/jili_avatar.png";
import img5C from "../../assets/tito_avatar.png";
import img5D from "../../assets/km_avatar.png";
import img5E from "../../assets/rt_avatar.png";

import img6A from "../../assets/ibc_avatar.png";

import img7A from "../../assets/jili_avatar.png";
import img7B from "../../assets/tito_avatar.png";
import img7C from "../../assets/spg_avatar.png";

import img8A from "../../assets/crash new spribe.webp";
import img8B from "../../assets/crashmenulogo2.webp";
import img8C from "../../assets/crashmenulogo3.webp";
import img8D from "../../assets/crashmenulogo4.webp";
import img8E from "../../assets/crashmenulogo5.webp";
import img8F from "../../assets/crashmenulogo6.webp";


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
const tabsData = [
  {
    id: 1,
    label: "হট গেমস",
    tabImage: hotlogo,
    contentImages: [home1, home2, home3, home4, home5, home6, home7, home8],
  },
  {
    id: 2,
    label: "ক্রিকেট",
    tabImage: tab2Img,
    contentImages: [img2A],
    contentImageName: ["Betswizz"],
  },
  {
    id: 3,
    label: "ক্যাসিনো",
    tabImage: tab3Img,
    contentImages: [img3A, img3B, img3C ],
    contentImageName: ["Evo", "Pragmatic", "AE Casino"],
  },
  {
    id: 4,
    label: "স্লট গেম",
    tabImage: tab4Img,
    contentImages: [img4A, img4B, img4C,img4D,img4E,img4F,img4G,img4H,img4I],
    contentImageName: ["JILI", "TITO", "Pragmatic", "PG", "Smart Soft","Spade",'FC','JDB',"Red Tiger"],
  },
  {
    id: 5,
    label: "টেবিল খেলা ",
    tabImage: tab5Img,
    contentImages: [img5A, img5B,img5C,img5D,img5E],
    contentImageName:['Spribe','JILI','TITO','KingMidas','Red Tiger']
  },
  {
    id: 6,
    label:'এসবি',
    tabImage: tab6Img,
    contentImages: [img6A],
    contentImageName:['IBC']
  },
  {
    id: 7,
    label:'মাছ ধরা',
    tabImage: tab7Img,
    contentImages: [img7A, img7B,img7C],
    contentImageName:['JILI',"TITO","Spade"]
  },
  {
    id: 8,
    label:'লটারি',
    tabImage: tab8Img,
    contentImages: [img5A],
    contentImageName:['Spribe']
  },
  {
    id: 9,
    label:'ক্র্যাশ',
    tabImage: tab9Img,
    contentImages: [img8A,img8B,img8C,img8D,img8E,img8F],
    contentImageName:['Spribe','JILI','TITO',"Aviatrix","KingMidas",'SmartSoft']
  },
];

const Home = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const imagesLarger = [
    imageone,
    imagetwo,
    imagethree,
    imagefour,
    imagesix,
    imageseven,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(1);

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

      <div className="  flex justify-evenly bg-common-blue overflow-hidden  py-2  relative ">
        <div className=" w-5/6   text-white overflow-hidden  ">
          <span className="w-full absolute top-1 left-0 md:left-8 lg:left-12 text-common-orange text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="28"
              fill="currentColor"
            >
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm6.29-3c-.52 0-1.02-.2-1.41-.59-.78-.78-.78-2.05 0-2.83.39-.39.89-.59 1.41-.59s1.02.2 1.41.59c.78.78.78 2.05 0 2.83-.39.39-.89.59-1.41.59zM12 16c-2.76 0-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2c0 2.76-2.24 5-5 5zm5.3-4.71c-.39-.39-.39-1.02 0-1.41 1.17-1.17 1.17-3.07 0-4.24-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0 1.95 1.95 1.95 5.12 0 7.07-.39.39-1.02.39-1.41-.01z" />
            </svg>
          </span>

          <div className="w-full text-sm  ">
            <div className=" marquee block ">
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
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl lg:hidden mx-auto p-4">
        {/* Tabs Section */}
        <ul className="flex flex-row justify-start items-center overflow-x-auto border-b  pb-2">
          {tabsData.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer p-2 border flex-shrink-0 rounded-md ${
                activeTab === tab.id
                  ? "border-common-orange "
                  : "hover:border-common-orange "
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex flex-col text-black  px-2 items-center">
                <img
                  src={tab.tabImage}
                  alt={`Tab ${tab.id}`}
                  className="w-12 h-12 "
                />
                <span className="whitespace-nowrap">{tab.label}</span>
              </div>
            </li>
          ))}
        </ul>

        
        {/* Tab Content */}
        <div className="mt-4 grid grid-cols-3 md:grid-cols-4 gap-4">
          {tabsData
            .find((tab) => tab.id === activeTab)
            ?.contentImages.map((img, index) => {
              const tab = tabsData.find((tab) => tab.id === activeTab);
              const imageName = tab?.contentImageName?.[index] || "";
              return (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={img}
                    alt={`Content ${index}`}
                    className="w-full md:w-auto h-auto object-cover rounded-md shadow-md"
                  />
                  <h3 className="text-common-orange">{imageName}</h3>
                </div>
              );
            })}
        </div>
      </div>

      {/* <div>
        <ul className="flex flex-row bg-white text-white whitespace-nowrap overflow-x-auto shadow-2xl lg:hidden gap-x-6">
          <li className="flex flex-col py-3 px-4 bg-common-orange items-center gap-1  shadow-md">
            <img src={hotlogo} alt="Hot Games" className="w-8 h-auto" />
            <span className="text-sm font-medium text-white">হট গেমস</span>
          </li>
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
      </div> */}

      <div className="w-full mx-auto max-w-[370px] md:max-w-2xl   lg:max-w-6xl ">
        <div className="  ">
          <h3>রেফারেল প্রোগ্রাম</h3>
          <img src={banner} alt="" className="w-full  " />
        </div>
        <div className=" mt-12 mx-auto max-w-[300px] md:max-w-none lg:max-w-none  ">
          <div className="overflow-x-auto  pb-6 pt-8 ">
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
                  <div className="absolute -top-9 left-2 px-4 py-2   bg-opacity-60 rounded-md">
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
    </div>
  );
};

export default Home;
