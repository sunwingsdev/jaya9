import React from "react";

const Inbox = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-5xl bg-white lg:min-h-screen rounded-xl  m-10 ">
        <div className=" ">
        <div className="lg:hidden flex flex-row justify-center pb-3  items-center gap-3">
        <button className="bg-common-blue w-auto  hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
              ইনবক্স
            </button>

            <button className="bg-gray-200  w-auto   rounded-sm hover:bg-gray-400 px-10 text-sm py-1">
              বিজ্ঞপ্তি
            </button>
        </div>
         <div className="flex flex-row px-2 lg:px-0 items-center  justify-between">
         <h3 className="text-lg  px-10 lg:pb-3 lg:p-10">ইনবক্স বার্তা</h3>
          <span className="lg:hidden">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5  cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M4 6h16l-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6z" />
              </svg>
            </span>
         </div>
       

          <div className="lg:flex hidden flex-row p-5 gap-5  items-center md:justify-center lg:justify-end relative">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5  cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M4 6h16l-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6z" />
              </svg>
            </span>
            <button className="bg-common-blue w-full lg:w-auto hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
              ইনবক্স
            </button>

            <button className="bg-gray-200 w-full  lg:w-auto rounded-sm hover:bg-gray-400 px-10 text-sm py-1">
              বিজ্ঞপ্তি
            </button>
          </div>
        </div>
        <h3 className="text-center py-3 border-b border-gray-400">No Message</h3>
      </div>
    </div>
  );
};

export default Inbox;
