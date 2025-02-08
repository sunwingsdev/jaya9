import React from 'react';
import lotterymenulogo from '../../assets/lotterymenulogo.jpg';
import lotteryimage from '../../assets/lottery.jpg';
import newicon from "../../assets/game-icon-new-mobile.svg";

;
const Lottery = () => {
    return (
        <div>
            <img src={lotteryimage} alt="" className='w-full h-32 md:h-auto lg:h-auto object-cover'/>
      <div className="flex flex-row items-center px-4 pt-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 105.293 14.707l4.387 4.387a1 1 0 001.414-1.414l-4.387-4.387A8 8 0 0010 2zm-6 8a6 6 0 1112 0 6 6 0 01-12 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <select className="shadow-2xl p-2 border border-black w-full outline-none max-w-4xl">
            <option value="" disabled selected>
              খেলা অনুসন্ধান করুন
            </option>
            <option value="exchange">exchange</option>
          </select>
        </div>
      </div>
      <div className="bg-common-blue mt-4  h-full p-2">
        <h3 className="bg-blue-800 shadow-3xl-blue flex items-center gap-2 p-3 rounded-lg">
          <div className="flex flex-row gap-1 lg:gap-4">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="betswiz"
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="betswiz" className="text-white font-medium">
                IBC
              </label>
            </div>
            
          </div>
        </h3>
      </div>
      <div className="px-6">
        <div className="relative md:w-5/12 lg:w-2/12   h-auto bg-cover bg-center group">
          <figure className="">
            <div className="relative ">
              <img src={lotterymenulogo } alt="" className="" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
            </div>

            <button
              
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
            whitespace-nowrap text-xs bg-custom-orange text-white rounded-sm px-4 py-2 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              এখন খেলুন
            </button>
            <div className="absolute top-0 right-0 flex items-center justify-center text-xs   transition-opacity duration-300">
                  <img src={newicon} alt="New Icon" className='w-8 h-auto' />
                </div>

            <h3 className="absolute  bottom-0 left-0 bg-exchange-color text-white font-bold w-full shadow-exchange-shadow  text-center ">
              IBC Sports
            </h3>
          </figure>
        </div>
      </div>
      
        </div>
    );
};

export default Lottery;