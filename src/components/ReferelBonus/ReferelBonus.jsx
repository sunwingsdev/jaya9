import React from "react";

const ReferelBonus = () => {
  return (
    <div className="bg-informationBackground">
      <div className="mx-auto max-w-4xl lg:max-w-7xl">
        <div className="flex flex-col md:flex-row bg-white p-5 gap-3 border-b border-gray-400 items-center md:justify-center lg:justify-start relative">
          <button className="bg-common-blue w-full md:w-auto hover:bg-blue-900 rounded-sm text-white text-sm px-10 md:px-14 py-1">
            দাবী
          </button>
          <button className="bg-gray-200 w-full md:w-auto rounded-sm hover:bg-gray-400 px-8 md:px-10 text-sm py-1">
            Downline Report
          </button>
        </div>

        <div className="bg-white md:p-6 lg:p-10 mt-4">
          <div className="bg-informationBackground p-6 md:p-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-3">
            <div className="w-full md:w-auto">
              <h3 className="text-gray-600">সুপারিশ</h3>
              <input type="text" className="px-10 md:px-20 lg:px-32 py-2 rounded-lg w-full" />
            </div>
            <div className="relative md:pt-6">
              <button className="bg-common-orange w-full md:w-auto text-white text-sm px-10 md:px-12 py-1 rounded-md">
                লিংক কপি করুন
              </button>
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

          <div className="p-4">
            <div className="flex flex-row justify-between">
              <h3>মেয়াদ শেষ হওয়া তারিখ :</h3>
              <h3 className="font-bold">No Expired</h3>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
              <div className="bg-common-blue p-6 md:px-10 md:py-10 w-full md:w-2/3 space-y-3">
                {["Free Bonus ৳", "আমানত", "টার্নওভার"].map((label, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center md:space-x-3">
                    <h3 className="text-white text-sm w-full md:w-1/2">{label}</h3>
                    <input
                      type="text"
                      placeholder="0.00"
                      className="w-full md:w-auto placeholder:text-black placeholder:text-center px-2 py-1 rounded-md"
                    />
                  </div>
                ))}
              </div>

              <div className="bg-gray-300 w-full md:w-1/3 mt-4 md:mt-0">
                <div className="py-4 px-8 text-center">
                  <h3 className="text-sm font-bold text-gray-600">You Referral Status</h3>
                  <div className="flex flex-row justify-center space-x-6 pt-8">
                    {["Friend's Accepted", "Friend's Complete"].map((label, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <h3 className="text-3xl md:text-4xl text-gray-800 font-bold">0</h3>
                        <h3 className="text-xs text-gray-800">{label}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferelBonus;
