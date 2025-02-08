import React, { useState } from "react";

const Sthanantor = () => {
  const [dateInput, setDateInput] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  return (
    <div className="bg-informationBackground">
      <div className="mx-auto   max-w-7xl">
        <div className=" bg-white">
          <div className="p-3">
            <button className="bg-common-blue   lg:w-auto hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
              স্থানান্তর
            </button>
          </div>
          <div className="relative w-full p-3 max-w-xs lg:max-w-sm">
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
              className="icon-cross absolute top-0 right-28 lg:right-28"
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
              className="icon-search absolute top-0 right-20 lg:right-20"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        <div className="mt-2">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="hidden lg:table w-full">
              <tr className="bg-table-gray text-sm">
              <th
            className="border border-gray-300 px-4 py-2 cursor-pointer flex items-center gap-2"
            onClick={() => setIsAscending(!isAscending)}
          >
                  Transaction Date
            {isAscending ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5l-7 7h14l-7-7z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19l7-7H5l7 7z"></path>
              </svg>
            )}
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  From Wallet
                </th>
                <th className="border border-gray-300 px-4 py-2">To Wallet</th>
                <th className="border border-gray-300 px-4 py-2">পরিমাণ</th>
                <th className="border border-gray-300 px-4 py-2">স্থিতি</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-4">
                  কোনো তথ্য নেই
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sthanantor;
