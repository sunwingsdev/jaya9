import React from "react";

const DabiVoutcher = () => {
  return (
    <div className="bg-informationBackground">
      <div className="mx-auto max-w-3xl bg-white">
       <div>
       <div className="   justify-items-start items-center ">
          <div className="pl-16 py-5">
            <h3 className="text-lg text-left mb-5">দাবি ভাউচার</h3>
            <h3> Apply Vouche</h3>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter Voucher Code"
              className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-common-orange"
            />
            <button className="mt-5 block px-3 py-1 rounded-lg text-white bg-common-blue text-left">জমা দিন</button>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default DabiVoutcher;
