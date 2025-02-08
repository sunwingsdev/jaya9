import React, { useState } from "react";
import AutoOpenModal from "../AutoModal/AutoModal";
import checkinlogo from "../../assets/reward-checkin.svg";
import iconluckyspin from "../../assets/icon-luckyspin.svg";
import coinEventslogo from "../../assets/coin-event.svg";

const Puroskar = () => {
  const [dateInput, setDateInput] = useState("");
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-5xl bg-white lg:min-h-screen rounded-xl  m-10 shadow-2xl">
        <div className=" ">
          <h3 className="text-lg px-10 pb-3 lg:p-10">পুরস্কার</h3>
          <div className="px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center gap-5">
              <div>
                <h3>Coin Rewards</h3>
              </div>
              <div className="flex flex-row items-center justify-center  w-full max-w-xs bg-gray-300 py-1 ">
                <img
                  src={coinEventslogo}
                  alt="Coin Event"
                  className="w-6 h-6"
                />
                <h3 className="text-sm ml-2">18</h3>
              </div>

              <div className="flex flex-col items-center">
                <img src={checkinlogo} alt="" className="w-10 h-auto" />
                <h3 className="whitespace-nowrap">Check-In</h3>
              </div>
              <div className="flex flex-col w-full whitespace-nowrap items-center">
                <img src={iconluckyspin} alt="" className="w-10 h-auto" />
                <h3>Lucky Wheel</h3>
              </div>
            </div>
            <div className="relative w-full my-8 lg:my-0 flex justify-end max-w-xs lg:max-w-sm">
              <input
                type="date"
                value={dateInput}
                onChange={(e) => {
                  setDateInput(e.target.value);
                  console.log("Selected Date:", e.target.value);
                }}
                className="p-2 pr-10 border text-black font-medium border-gray-300 rounded w-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-cross absolute top-0 right-24 lg:right-28"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-search absolute top-0 right-16 lg:right-20"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div className="mt-2 hidden lg:table w-full">
              <table className="min-w-full border-collapse  border-gray-300">
                <thead className="bg-gray-200 text-sm">
                  <tr>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      Transaction Date
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      লেনদেন নাম্বার
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      Balance Before
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      Balance After
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      পরিমাণ
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      Activity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-700">
                      2025-02-03 03:02:13
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-700">
                      REG173852293326A9ECD
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-700">
                      0.00
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-700">
                      18.00
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-700">
                      18.00
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2 text-center text-gray-700">
                      Register Coin
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-2 w-full text-xs lg:hidden">
              <div className="grid grid-cols-2 md:grid-cols-3   ">
                {/* Left Side - Headers */}
                <div className=" whitespace-nowrap text-xs font-semibold flex flex-col">
                  <div className=" px-4 py-2">
                    Transaction Date
                  </div>
                  <div className=" px-4 py-2">
                    লেনদেন নাম্বার
                  </div>
                  <div className=" px-4 py-2">
                    Balance Before
                  </div>
                  <div className=" px-4 py-2">
                    Balance After
                  </div>
                  <div className=" px-4 py-2">
                    পরিমাণ
                  </div>
                  <div className="px-4 py-2">Activity</div>
                </div>

                {/* Right Side - Data */}
                <div className="text-gray-700 whitespace-nowrap flex flex-col">
                  <div className=" px-4 py-2 text-left">
                    2025-02-03 03:02:13
                  </div>
                  <div className=" px-4 py-2 text-text-left">
                    REG173852293326A9ECD
                  </div>
                  <div className=" px-4 py-2 text-left">
                    0.00
                  </div>
                  <div className=" px-4 py-2 text-left">
                    18.00
                  </div>
                  <div className=" px-4 py-2 text-left">
                    18.00
                  </div>
                  <div className="px-4 py-2 text-left">Register Coin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <AutoOpenModal></AutoOpenModal>
        </div>
      </div>
    </div>
  );
};

export default Puroskar;
