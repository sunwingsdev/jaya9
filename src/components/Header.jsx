import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import Jayalogo from "../assets/logo3.png";
import homelogo from "../assets/home.png";
import cricketlogo from "../assets/cricket.png";
import livecasinologo from "../assets/live.png";
import slotlogo from "../assets/seven.png";
import tablegamelogo from "../assets/table.png";
import sportslogo from "../assets/sports.png";
import fishinglogo from "../assets/fishing.png";
import lotterylogo from "../assets/lottery.png";
import crashlogo from "../assets/crash.png";
import promotionlogo from "../assets/promo.png";
import jayaranklogo from "../assets/jaya.png";
import toolbarhomelogo from "../assets/toolbar-icon-home.svg";
import toolbarpromotionlogo from "../assets/toolbar-icon-promotion.svg";
import toolbardepositlogo from "../assets/toolbar-icon-deposit.svg";
import toolbarprofile from "../assets/toolbar-icon-profile.svg";

import Bdlogo from "../assets/BD.png";
import Cricketlogo from "../assets/cricketmenu.webp";
import livecasinologo1 from "../assets/livecasino1.webp";
import livecasinologo2 from "../assets/laivecasino2.webp";
import livecasinologo3 from "../assets/livecasino3.webp";
import slotlogo1 from "../assets/slotlogo1.webp";
import slotlogo2 from "../assets/slotlogo2.webp";
import slotlogo3 from "../assets/slotlogo3.webp";
import slotlogo4 from "../assets/slotlogo4.webp";
import slotlogo5 from "../assets/slotlogo5.webp";
import slotlogo6 from "../assets/slotlogo6.webp";
import slotlogo7 from "../assets/slotlogo7.webp";
import slotlogo8 from "../assets/slotlogo8.webp";
import slotlogo9 from "../assets/slotlogo9.webp";
import tablelogo1 from "../assets/slotlotterylogo.webp";
import tablelogo2 from "../assets/tablelogo2.webp";
import tablelogo3 from "../assets/tablelogo3.webp";
import tablelogo4 from "../assets/tablelogo4.webp";
import tableelogo5 from "../assets/tablelogo5.webp";
import sportsmenulogo from "../assets/sportsmenulogo.webp";
import crashmenulogo1 from "../assets/crash new spribe.webp";

import crashmenulogo2 from "../assets/crashmenulogo2.webp";
import crashmenulogo3 from "../assets/crashmenulogo3.webp";
import crashmenulogo4 from "../assets/crashmenulogo4.webp";
import crashmenulogo5 from "../assets/crashmenulogo5.webp";
import crashmenulogo6 from "../assets/crashmenulogo6.webp";
import betswizicon from "../assets/cricketmenuicon.png";
import newicon from "../assets/new_icon.png";
import { Link } from "react-router-dom";
import ProbesKorun from "./Probeskorunmodal/ProbesKorun";
import BDTModal from "./BDTModal/BDTModal";

const menuItems = [
  { name: "বাড়ি", path: "/", icon: homelogo },
  { name: "ক্রিকেট", path: "/cricket", icon: cricketlogo },
  { name: "লাইভ ক্যাসিনো", path: "/livecasino", icon: livecasinologo },
  { name: "স্লট গেম", path: "slotgames", icon: slotlogo },
  { name: "টেবিল গেম", path: "/tablegames", icon: tablegamelogo },
  { name: "স্পোর্টস", path: "/sports", icon: sportslogo },
  { name: "মাছ ধরা", path: "/machdhora", icon: fishinglogo },
  { name: "লটারি", path: "/lottery", icon: lotterylogo },
  { name: "ক্র্যাশ", path: "/crash", icon: crashlogo },
  { name: "প্রমোশন", path: "/promotion", icon: promotionlogo },
  {
    name: " Jaya Rank",
    path: "/jayarank",
    icon: jayaranklogo,
    extra: (
      <span className="px-1 py-1 bg-green-600 rounded-lg text-white font-bold text-xs">
        New
      </span>
    ),
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [amount, setAmount] = useState(0); // Initial wallet amount
  const [isReloading, setIsReloading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    if (amount === 0) {
      setAmount(20); // Set to 20 on first click
      setIsReloading(true); // Start reloading animation
    } else {
      setAmount(0); // Reset to 0 on second click
      setIsReloading(false); // Stop reloading animation
    }
  };

  const toggleOpenLanguage = () => {
    setIsOpenLanguage(true);
  };

  const toggleCloseLanguage = () => {
    setIsOpenLanguage(false);
  };

  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="sticky  top-0 bg-white shadow-md font-sans   z-40">
      <nav className="flex    bg-common-blue justify-center lg:justify-around items-center   py-2">
        <img src={Jayalogo} alt="" className="h-8 lg:h-12  " />

        <ul className="hidden lg:flex space-x-2 items-center text-white font-sans text-sm">
          <div className="flex flex-row gap-2 items-center">
            <h3 className=" text-lg">প্রধান ওয়ালেট</h3>
            <span className="text-lg">
              ট {amount !== null ? amount.toFixed(2) : "*.*"}
            </span>

            <button onClick={handleClick}>
              <svg
                className={`transition-transform duration-300 ${
                  isHovered ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  stroke={isHovered ? "#f56908" : "#f56908"}
                  strokeWidth="1.5"
                  d="M12 4V1l-4 4 4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H6c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7z"
                />
              </svg>
            </button>
          </div>
          <button
              onClick={() => setIsOpenModal(true)}
              className="border border-white px-4 py-2 hover:border-orange-500 outline-none rounded-sm text-white"
            >
              প্রবেশ করুন
            </button>
            <ProbesKorun
              isOpenModal={isOpenModal}
              handleClose={() => setIsOpenModal(false)}
            />
             <Link to="/nibondon">
            <button className="bg-common-orange  px-8  py-2 rounded-sm">
              নিবন্ধন
            </button>
          </Link>
          <Link to="/amanot">
            <button className="px-4 bg-custom-orange py-1  text-lg rounded-sm">
              আমানত
            </button>
          </Link>
          <Link to="/information">
            <button className="px-4 py-1 hover:border border-common-orange rounded-lg transition-all duration-300 ease-out text-lg">
              প্রোফাইল
            </button>
          </Link>
          <Link to="">
            <button className="px-4 py-1 hover:border border-common-orange rounded-lg text-lg">
              প্রস্থান
            </button>
          </Link>
          <div>
            <span
              className="font-semibold text-lg flex items-center gap-0.5 hover:border border-common-orange px-2 py-1 rounded-lg cursor-pointer"
              onClick={toggleOpenLanguage}
            >
              <span>
                <img src={Bdlogo} alt="BD Logo" className="h-3" />
              </span>
              ট BDT Bengali
            </span>

            <BDTModal
              isOpenLanguage={isOpenLanguage}
              toggleCloseLanguage={toggleCloseLanguage}
            />
          </div>
        </ul>

        <div className="fixed p-2 bg-toolbarbackground text-sm  bottom-0 grid grid-cols-4 lg:hidden left-0 w-full  text-white">
          
          <Link to="/">
          <div className=" flex flex-col gap-1 items-center  ">
            <img src={toolbarhomelogo} alt="" className="w-5 h-auto" />
            <button>বাড়ি</button>
          </div>
          </Link>
          <Link to='/promotion'>
          <div className=" flex flex-col gap-1 items-center  ">
            <img src={toolbarpromotionlogo} alt="" className="w-5 h-auto" />
            <button>প্রমোশন</button>
          </div>
          </Link>

          <Link to='/amanot'>
          <div className="  flex flex-col gap-1 items-center  text-white">
            <img src={toolbardepositlogo} alt="" className="w-5 h-auto" />
            <button>আমানত</button>
          </div>
          </Link>

          <Link to='/information' >
          <div className="   flex flex-col gap-1 items-center  text-white">
           <img src={toolbarprofile} alt="" className="w-5 h-auto" />
            <button>প্রোফাইল</button>
          </div>
          </Link>
        </div>
      </nav>
      <nav className="bg-common-orange text-white">
        {/* Large Screen Navbar */}
        <ul className="hidden  lg:flex text-sm justify-center items-center  whitespace-nowrap ">
          <Link to="/downloadmobileapp" className="">
            <li
              className={`border-r p-2 border-white border-opacity-20 transition ${
                location.pathname === "/downloadmobileapp"
                  ? "border-b-2 border-yellow-300"
                  : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                width="24"
                height="24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-download"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="M17 10l-5 5-5-5"></path>
                <path d="M12 15V3"></path>
              </svg>
            </li>
          </Link>

          <Link to="/" className="  ">
            <li className="p-2 transition border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2) border-r-[rgba(255,255,255,0.2)]]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="white"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </li>
          </Link>

          <Link
            to="/cricket"
            className="text-white hover:text-gray-300 transition"
          >
            <li
              className={`relative inline-block ${
                location.pathname === "/cricket"
                  ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
                  : "border-r-[rgba(255,255,255,0.2)]" //
              } `}
            >
              <div className="group relative border-r border-white p-2 border-opacity-20">
                ক্রিকেট
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="inline ml-2"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <div
                  className="absolute -left-[241px]  mt-1 w-screen max-w-[99vw] bg-white text-black p-2 rounded-md shadow-xl
        opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
        group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 z-10"
                >
                  <ul className="grid grid-cols-3 px-48 gap-1   ">
                    <li>
                      <div>
                        <img
                          src={Cricketlogo}
                          alt="Cricket Logo"
                          className="w-2/4 rounded-md border-black hover:border"
                        />
                        <div className="flex pt-2 w-2/4 flex-row items-center justify-center">
                          <h3 className="font-bold">Betswiz</h3>
                          <img src={betswizicon} alt="" className="w-5 h-5" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>

          <Link
            to="/livecasino"
            className="text-white hover:text-gray-300 transition"
          >
            <li
              className={`relative inline-block ${
                location.pathname === "/livecasino"
                  ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
                  : "border-r-[rgba(255,255,255,0.2)]" //
              } `}
            >
              <div className="group relative border-r border-white p-2 border-opacity-20">
                লাইভ ক্যাসিনো
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="inline ml-2"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <div
                  className="absolute -left-[331px]  mt-1 w-screen max-w-[99vw] bg-white text-black p-2 rounded-md shadow-xl
        opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
        group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
                >
                  <ul className="flex w-3/5 gap-2 px-48  ">
                    <li>
                      <img
                        src={livecasinologo1}
                        alt="Cricket Logo"
                        className="w-full  rounded-md border-black hover:border"
                      />
                      <div className="flex pt-2 w-full flex-row items-center justify-center">
                        <h3 className="font-bold">Evolution Gaming</h3>
                        <img src={betswizicon} alt="" className="w-5 h-5" />
                      </div>
                    </li>
                    <li>
                      <img
                        src={livecasinologo2}
                        alt="Cricket Logo"
                        className="w-full rounded-md border-black hover:border"
                      />
                      <div className="flex pt-2 w-full flex-row items-center justify-center">
                        <h3 className="font-bold">Pragmatic play</h3>
                        <img src={betswizicon} alt="" className="w-5 h-5" />
                      </div>
                    </li>

                    <li>
                      <img
                        src={livecasinologo3}
                        alt="Cricket Logo"
                        className="w-full rounded-md border-black hover:border"
                      />
                      <div className="flex pt-2 w-full flex-row items-center justify-center">
                        <h3 className="font-bold">AE Casino</h3>
                        <img src={betswizicon} alt="" className="w-5 h-5" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>

          <Link
            to="/slotgames"
            className="text-white hover:text-gray-300 transition"
          >
            <li
              className={`relative inline-block ${
                location.pathname === "/slotgames"
                  ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
                  : "border-r-[rgba(255,255,255,0.2)]"
              }`}
            >
              <div className="group relative border-r border-white p-2 border-opacity-20">
                স্লট গেম
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline ml-2"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <div
                  className="absolute -left-[480px] mt-1 w-screen max-w-[100vw] bg-white text-black p-2 rounded-md shadow-xl
        opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
        group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
                >
                  <ul className="grid grid-cols-6 w-3/4 gap-4 pl-48">
                    {[
                      { src: slotlogo1, title: "JILI", icon: betswizicon },
                      { src: slotlogo2, title: "TITO", icon: betswizicon },
                      {
                        src: slotlogo3,
                        title: "Pragmatic Play",
                        icon: betswizicon,
                      },
                      { src: slotlogo4, title: "PG SOFT", icon: betswizicon },
                      { src: slotlogo5, title: "Smart Soft", icon: null },
                      { src: slotlogo6, title: "Spade Gaming", icon: null },
                      { src: slotlogo7, title: "Fa Chai", icon: null },
                      { src: slotlogo8, title: "JDB", icon: null },
                      { src: slotlogo9, title: "Red Tiger", icon: null },
                    ].map((item, index) => (
                      <li key={index} className="flex flex-col items-center">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-[130px] object-cover rounded-md border hover:border-black"
                        />
                        <div className="flex pt-2 w-full flex-row items-center justify-center">
                          <h3 className="font-bold">{item.title}</h3>
                          {item.icon && (
                            <img
                              src={item.icon}
                              alt=""
                              className="w-5 h-5 ml-2"
                            />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </Link>

          <Link
            to="/tablegames"
            className="text-white hover:text-gray-300 transition"
          >
            <li
              className={`relative inline-block ${
                location.pathname === "/tablegames"
                  ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
                  : "border-r-[rgba(255,255,255,0.2)]" //
              } `}
            >
              <div className="group relative border-r border-white p-2 border-opacity-20">
                টেবিল গেম
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="inline ml-2"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <div
                  className="absolute -left-[561px]  mt-1 w-screen max-w-[99vw] bg-white text-black p-2 rounded-md shadow-xl
        opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
        group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
                >
                  <ul className="grid grid-cols-5 w-3/4 px-48 gap-2   ">
                    <li>
                      <img
                        src={tablelogo1}
                        alt="Cricket Logo"
                        className="w-full  rounded-md border-black hover:border"
                      />
                      <div className="flex pt-2 w-full flex-row items-center justify-center">
                        <h3 className="font-bold">Spribe</h3>
                        <img src={newicon} alt="" className="w-5 h-5" />
                      </div>
                    </li>
                    <li>
                      <img
                        src={tablelogo2}
                        alt="Cricket Logo"
                        className="w-full rounded-md border-black hover:border"
                      />
                      <div className="flex pt-2 w-full flex-row items-center justify-center">
                        <h3 className="font-bold">JILI</h3>
                        <img src={betswizicon} alt="" className="w-5 h-5" />
                      </div>
                    </li>
                    <li>
                      <img
                        src={tablelogo3}
                        alt="Cricket Logo"
                        className="w-full rounded-md border-black hover:border"
                      />
                      <div className="flex pt-2 w-full flex-row items-center justify-center">
                        <h3 className="font-bold">TITO</h3>
                        <img src={betswizicon} alt="" className="w-5 h-5" />
                      </div>
                    </li>
                    <li>
                      <img
                        src={tablelogo4}
                        alt="Cricket Logo"
                        className="w-full rounded-md border-black hover:border"
                      />
                      <div className="flex pt-2 w-full flex-row items-center justify-center">
                        <h3 className="font-bold">King Midas</h3>
                      </div>
                    </li>
                    <li>
                      <img
                        src={tableelogo5}
                        alt="Cricket Logo"
                        className="w-full rounded-md border-black hover:border"
                      />
                      <div className="flex pt-2 w-full flex-row items-center justify-center">
                        <h3 className="font-bold">Red Tiger</h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>

          <Link
            to="/sports"
            className="text-white hover:text-gray-300 transition"
          >
            <li
              className={`relative inline-block ${
                location.pathname === "/sports"
                  ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
                  : "border-r-[rgba(255,255,255,0.2)]" //
              } `}
            >
              <div className="group relative border-r border-white p-2 border-opacity-20">
                স্পোর্টস
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline ml-2"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <div className="relative group">
                  <div
                    className="absolute -left-[680px] mt-1 w-screen max-w-[99vw] bg-white text-black p-2 rounded-md shadow-xl
        opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
        group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
                  >
                    <ul className="grid grid-cols-3 px-48 gap-1">
                      <li>
                        <img
                          src={sportsmenulogo}
                          alt="Cricket Logo"
                          className="w-2/4 rounded-md border-black hover:border"
                        />
                        <div className="flex pt-2 w-1/3 flex-row items-center justify-center">
                          <h3 className="font-bold">IBC Sports</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </Link>

          <Link
            to="/machdhora"
            className="text-white hover:text-gray-300 transition"
          >
            <li
              className={`relative inline-block ${
                location.pathname === "/machdhora"
                  ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
                  : "border-r-[rgba(255,255,255,0.2)]" //
              } `}
            >
              <div className="group relative border-r border-white p-2 border-opacity-20">
                মাছ ধরা
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="inline ml-2"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <div
                  className="absolute -left-[763px]  mt-1 w-screen max-w-[99vw] bg-white text-black p-2 rounded-md shadow-xl
        opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
        group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
                >
                  <ul className="grid grid-cols-6 w-11/12 gap-2 px-48   ">
                    <li>
                      <img
                        src={slotlogo1}
                        alt="Cricket Logo"
                        className="w-full  rounded-md border-black hover:border"
                      />
                      <div className="flex pt-2 w-full flex-row items-center justify-center">
                        <h3 className="font-bold">JILI</h3>
                        <img src={betswizicon} alt="" className="w-5 h-5" />
                      </div>
                    </li>
                    <li>
                      <img
                        src={slotlogo2}
                        alt="Cricket Logo"
                        className="w-full rounded-md border-black hover:border"
                      />
                      <div className="flex pt-2 w-full flex-row items-center justify-center">
                        <h3 className="font-bold">TITO</h3>
                        <img src={betswizicon} alt="" className="w-5 h-5" />
                      </div>
                    </li>
                    <li>
                      <img
                        src={slotlogo6}
                        alt="Cricket Logo"
                        className="w-full rounded-md border-black hover:border"
                      />
                      <div className="flex pt-2 w-full flex-row items-center justify-center">
                        <h3 className="font-bold">SPG</h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>

          <Link
            to="/lottery"
            className="text-white hover:text-gray-300 transition"
          >
            <li
              className={`relative inline-block ${
                location.pathname === "/lottery"
                  ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
                  : "border-r-[rgba(255,255,255,0.2)]" //
              } `}
            >
              <div className="group relative border-r border-white p-2 border-opacity-20">
                লটারি
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="inline ml-2"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <div
                  className="absolute -left-[855px]  mt-1 w-screen max-w-[99vw] bg-white text-black p-2 rounded-md shadow-xl
        opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
        group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
                >
                  <ul className="grid grid-cols-5 w-4/5 px-48 gap-2   ">
                    <li>
                      <img
                        src={tablelogo1}
                        alt="Cricket Logo"
                        className="w-full  rounded-md border-black hover:border"
                      />
                      <div className="flex pt-2 w-full flex-row items-center justify-center">
                        <h3 className="font-bold">SPRIBE Keno</h3>
                        <img src={newicon} alt="" className="w-5 h-5" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </Link>

          <Link to="/crash" className="text-white hover:text-gray-300 ">
            <li
              className={`relative inline-block ${
                location.pathname === "/crash"
                  ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
                  : "border-r-[rgba(255,255,255,0.2)]"
              }`}
            >
              <div className="group relative border-r border-white p-2 border-opacity-20">
                ক্র্যাশ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline ml-2"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                {/* Dropdown Container */}
                <div
                  className="absolute -left-[935px] mt-1 w-screen max-w-[99vw] bg-white text-black p-2 rounded-md shadow-xl
      opacity-0 invisible transform scale-y-0 origin-top transition-all duration-700 ease-out
      group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
                >
                 


                 
                  <ul className="grid grid-cols-6 gap-4 px-48">
                    {[
                      { src: crashmenulogo1, title: "SPRIBE", icon: newicon },
                      { src: crashmenulogo2, title: "JILI", icon: betswizicon },
                      { src: crashmenulogo3, title: "TITO", icon: betswizicon },
                      { src: crashmenulogo4, title: "Aviatrix", icon: null },
                      { src: slotlogo3, title: "Pragmatic Play", icon: null },
                      { src: crashmenulogo5, title: "King Midus", icon: null },
                      { src: crashmenulogo6, title: "Smart Soft", icon: null },
                    ].map((item, index) => (
                      <li key={index} className="flex flex-col items-center">
                       
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full  object-cover rounded-md border hover:border-black"
                        />
                        <div className="flex pt-2 w-full flex-row items-center justify-center">
                          <h3 className="font-bold">{item.title}</h3>
                          {item.icon && (
                            <img
                              src={item.icon}
                              alt=""
                              className="w-5 h-5 ml-2"
                            />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </Link>

          <Link to="/promotion">
            <li className={` text-white hover:text-gray-300  p-2  ${
                location.pathname === "/promotion"
                  ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
                  : "border-r-[rgba(255,255,255,0.2)]"
              } `}>
              প্রমোশন
            </li>
          </Link>

          <Link to="/jayarank" className="">
            <li className={`font-semibold hover:text-gray-300 flex items-center  p-2 gap-1 ${
                location.pathname === "/jayarank"
                  ? "border-b-2 border-yellow-300 border-r-[rgba(255,255,255,0.2)]"
                  : "border-r-[rgba(255,255,255,0.2)]"
              }   `}>
              Jaya Rank
              <span className="px-1 py-1 bg-green-600 rounded-lg font-bold text-xs">
                New
              </span>
            </li>
          </Link>
        </ul>
        {/* <div className="fixed  bottom-0 flex lg:hidden left-0 w-full bg-black text-white">
          <span className="font-semibold bg-gray-200 flex items-center justify-center w-1/3 py-5 cursor-pointer">
            <img src={Bdlogo} alt="" className="h-6" />
            <span
              className="text-black text-center text-sm
            "
              onClick={toggleOpenLanguage}
            >
              English <br /> Bengali
            </span>
          </span>

          <button
            onClick={() => setIsOpenModal(true)}
            className="border bg-common-blue outline-none w-1/3 py-5"
          >
            প্রবেশ করুন
          </button>

          <Link
            to="/nibondon"
            className="bg-common-orange w-1/3 py-5 flex items-center justify-center text-white"
          >
            নিবন্ধন
          </Link>
        </div> */}
        {/* <BDTModal
          isOpenLanguage={isOpenLanguage}
          toggleCloseLanguage={toggleCloseLanguage}
        />
        <ProbesKorun
          isOpenModal={isOpenModal}
          handleClose={() => setIsOpenModal(false)}
        /> */}

        {/* Small & Medium Screen - Menu Button */}
        <div className="lg:hidden absolute top-0 left-0 flex items-center  px-4 py-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill="white"
            >
              <path
                d="M3 6h18M3 12h18m-18 6h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Menu (Small & Medium Screen) */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-full overflow-y-auto pb-4 w-3/5  text-black bg-white  shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            ✖
          </button>
          <div className="bg-bg-jaya9-logo-color    py-3">
            <img src={Jayalogo} alt="" className="h-8 lg:h-12   " />
          </div>
          <ul className="flex flex-col  gap-y-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path || "#"}
                onClick={() => setIsOpen(false)}
              >
                <li className="flex items-center space-x-2 text-center">
                  <img src={item.icon} alt={item.name} className="w-8 h-auto" />
                  <span className="text-lg font-medium">{item.name}</span>
                  {item.extra && (
                    <div className="text-sm">{item.extra}</div>
                  )}{" "}
                </li>
                <div className="mt-1 text-xs text-center">{item.logo}</div>{" "}
              </Link>
            ))}
            <li className="flex  gap-x-2" onClick={toggleOpenLanguage}>
              <img src={Bdlogo} alt="Language" className="w-8 h-auto" />
              ভাষা
            </li>
          </ul>
        </div>
        <BDTModal
          isOpenLanguage={isOpenLanguage}
          toggleCloseLanguage={toggleCloseLanguage}
        />
      </nav>
    </header>
  );
};

export default Header;
