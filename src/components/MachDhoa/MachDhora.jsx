import React from 'react';
import fishingimage from '../../assets/fishing.jpg'

const MachDhora = () => {
    return (
        <div>
             <div>
        <img src={fishingimage} alt="" className="w-full h-32 md:h-auto lg:h-auto object-cover" />
      </div>
      <div className="flex flex-row items-center px-4 pt-4">
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
                JILI
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="betswiz"
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="betswiz" className="text-white font-medium">
                TITO
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="betswiz"
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="betswiz" className="text-white font-medium">
                SPG
              </label>
            </div>
            
          </div>
        </h3>
      </div>
        </div>
    );
};

export default MachDhora;