import React from "react";
import refferencebanner from "../../assets/referral_banner2.jpg";
import referelpeopleimg from "../../assets/referral-people.svg";
import referelinfologo from "../../assets/referral-info.svg";
import downloadlogo from "../../assets/download.png";

const Refference = () => {
  return (
    <div className="bg-informationBackground min-h-screen ">
      <div className="mx-auto  bg-white max-w-7xl ">
        <div className="relative">
          <img src={refferencebanner} alt="" />
          <div className="lg:flex hidden flex-row p-5 absolute -bottom-5 -right-5 gap-5  items-center md:justify-center lg:justify-end ">
            <button className="bg-common-orange w-full lg:w-auto hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
              সারসংক্ষেপ
            </button>
            <button className="bg-gray-200 text-black w-full lg:w-auto hover:bg-blue-900 rounded-sm  text-sm px-10 py-1">
              Referral Report
            </button>

            <button className="bg-gray-200 w-full  lg:w-auto rounded-sm hover:bg-gray-400 px-10 text-sm py-1">
              Redeem History
            </button>
          </div>
        </div>
        <div className="flex px-4 py-4 flex-col lg:justify-around lg:space-x-3 items-center lg:flex-row lg:items-baseline gap-3">
          <div>
            <div>
              <h3 className="text-gray-600 text-sm">Today Commission</h3>
              <button className="bg-common-blue w-full max-w-xs hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
                ৳ NaN
              </button>
            </div>
            <div>
              <h3 className="text-gray-600 text-sm">This month Commission</h3>
              <button className="bg-common-blue w-full max-w-xs hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
                ৳ NaN
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <h3 className="text-gray-600 text-center lg:text-left text-sm">
                রেফারেল স্তর
              </h3>
              <div className="flex flex-row gap-2">
                <button className="bg-common-blue w-full max-w-xs hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
                  Total
                </button>
                <button className="bg-common-blue w-full max-w-xs hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
                  NaN
                </button>
              </div>
            </div>
            <div>
              <div className=" flex flex-col space-y-2 items-center ">
                <img src={referelpeopleimg} alt="" className="text-center" />
                <h3 className="bg-common-blue w-full max-w-xs hover:bg-blue-900 rounded-sm text-white text-sm px-20 py-1">
                  rohanch9
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <div className=" flex flex-col space-y-2 items-center ">
                <div className="flex flex-row relative ">
                  <img src={referelpeopleimg} alt="" className="text-center" />
                  <img
                    src={referelinfologo}
                    alt=""
                    className="absolute bottom-0 left-28"
                  />
                </div>
                <h3 className="bg-common-blue w-full max-w-xs hover:bg-blue-900 rounded-sm text-white text-sm px-20 py-1">
                  rohanch9
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <div className=" flex flex-col space-y-2 items-center ">
                <div className="flex flex-row relative ">
                  <img src={referelpeopleimg} alt="" className="text-center" />
                  <img
                    src={referelinfologo}
                    alt=""
                    className="absolute bottom-0 left-28"
                  />
                </div>
                <h3 className="bg-common-blue w-full max-w-xs hover:bg-blue-900 rounded-sm text-white text-sm px-20 py-1">
                  rohanch9
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
              <div className=" flex flex-col space-y-2 items-center ">
                <div className="flex flex-row relative ">
                  <img src={referelpeopleimg} alt="" className="text-center" />
                  <img
                    src={referelinfologo}
                    alt=""
                    className="absolute bottom-0 left-28"
                  />
                </div>
                <h3 className="bg-common-blue w-full max-w-xs hover:bg-blue-900 rounded-sm text-white text-sm px-20 py-1">
                  rohanch9
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col  lg:pb-0 lg:flex-row">
            <div className="bg-common-blue p-10 space-y-2 flex flex-col items-center">
              <h3 className="text-white">Commission To Redeem</h3>
              <input type="text" name="" id="" placeholder="৳" />
              <button className="bg-common-orange w-full max-w-xs  rounded-sm text-white text-sm px-10 py-1">
                Redeem
              </button>
            </div>
            <div className="bg-gray-300">
              <div className="p-10 px-16">
                <div className="grid grid-cols-2 text-md font-bold lg:text-sm gap-x-12 lg:gap-4">
                  <h3 className=" text-gray-600">Id:</h3>
                  <h3 className="text-sm text-gray-600">2134670</h3>
                  <p className="text-sm text-gray-600 whitespace-nowrap">রেফারেল কোড:</p>
                  <p className="text-sm text-gray-600">GMG3AD3904</p>
                </div>
                <div className="relative pt-6">
                  <div className="flex flex-col items-center gap-y-2">
                  <img src={downloadlogo} alt="" />
                  <button className="bg-common-orange w-full max-w-xs   text-white text-sm px-16 py-1 whitespace-nowrap rounded-md">
                    এখন শেয়ার
                  </button>
                  </div>
                  <span className="absolute bottom-1 left-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refference;
