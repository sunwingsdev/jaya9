import React from "react";

const BankDetails = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-5xl bg-white lg:min-h-screen rounded-xl  m-10 shadow-2xl">
        <div className=" ">
            <div className="flex flex-row px-2 md:px-6 lg:px-0 justify-between">
            <h3 className="text-lg text-black font-semibold px-10 pb-3 lg:p-10">ব্যাংক বিবরণ</h3>
            <button className="bg-common-blue lg:hidden   lg:w-auto hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
                      যোগ করুন
                      </button>
            </div>
          <div className="px-10 hidden lg:table w-full">
            <div className="mt-2 hidden lg:table w-full">
              <table className="min-w-full border-collapse  border-gray-300">
                <thead className=" text-black text-sm">
                  <tr>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      ব্যাংক
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      ব্যাংক ধারকের নাম
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                    ব্যাংক একাউন্ট নম্বর
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap"></th>
                    <th className="border-b border-gray-300 px-4 py-2 whitespace-nowrap">
                      <button className="bg-common-blue   lg:w-auto hover:bg-blue-900 rounded-sm text-white text-sm px-10 py-1">
                      যোগ করুন
                      </button>
                    </th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="5" className=" whitespace-nowrap  px-4 py-2 text-center text-gray-400">
                      আপনি এখনও একটি ব্যাংক অ্যাকাউন্ট সংরক্ষণ করেন নি
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
