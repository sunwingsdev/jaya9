import React from "react";
import cricketimage from "../../assets/cricket.jpg";
import betswiz from "../../assets/betswiz.jpg";
import hoticon from "../../assets/game-icon-hot-mobile.svg";

const Cricket = () => {
  return (
    <div className="">
      <div>
        <img src={cricketimage} alt="" className="w-full h-32 md:h-auto lg:h-auto object-cover" />
     <div>
       </div>
      <div className="flex flex-row items-center px-4  pt-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a8 8 0 105.293 14.707l4.387 4.387a1 1 0 001.414-1.414l-4.387-4.387A8 8 0 0010 2zm-6 8a6 6 0 1112 0 6 6 0 01-12 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <select
            name=""
            id=""
            placeholder=""
            className="shadow-2xl p-2 border border-black w-full outline-none max-w-4xl"
          >
            <option value="" disabled selected>
              খেলা অনুসন্ধান করুন
            </option>
            <option value="exchange">exchange</option>
          </select>
        </div>
      </div>

      <div className="bg-common-blue mt-4 h-full p-2">
        <h3 className="bg-blue-800  shadow-3xl-blue flex items-center gap-2 p-3 rounded-lg">
          <input
            type="checkbox"
            id="betswiz"
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor="betswiz" className="text-white font-medium">
            BETSWIZ
          </label>
        </h3>
      </div>

      <div className="px-6 ">
        <div className="relative md:w-5/12 lg:w-1/6   h-auto bg-cover bg-center group">
          <figure className="">
            <div className="relative ">
              <img src={betswiz} alt="" className="" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
            </div>

            <button
              // style={{
              //   background:
              //     "",
              // }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
            whitespace-nowrap text-xs bg-custom-orange text-white rounded-sm px-4 py-2 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              এখন খেলুন
            </button>

            <h3 className="absolute  bottom-0 left-0 bg-exchange-color text-white font-bold w-full shadow-exchange-shadow  text-center ">
              exchange
            </h3>
            <div className="absolute top-0 right-0 flex items-center justify-center text-xs rounded-lg p-2 transition-opacity duration-300">
                  <img src={hoticon} alt="Hot Icon" />
                </div>
          </figure>
        </div>
      </div>
      <div></div>
     </div>
    </div>
  );
};

export default Cricket;
