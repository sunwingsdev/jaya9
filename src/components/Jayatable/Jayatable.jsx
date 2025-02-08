import { useState } from "react";
import coinlogo from "../../assets/deposit-bonus-coin.png";
import buttonlogo from "../../assets/vip-level-no2.png";
import bgimage from "../../assets/jayabg.jpeg";
import bgImage from "../../assets/footballfield.webp";
import { Link } from "react-router-dom";
import ProbesKorun from "../Probeskorunmodal/ProbesKorun";

const Jayatable = () => {
  const [page, setPage] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const itemsPerPage = 10;

  const levels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
  const rewards = ["বিনামূল্যে\n৳20", "বিনামূল্যে\n৳10", "বিনামূল্যে\n৳10", "বিনামূল্যে\n৳15", "বিনামূল্যে\n৳50", "বিনামূল্যে\n৳20", "বিনামূল্যে\n৳30", "বিনামূল্যে\n৳40", "বিনামূল্যে\n৳50", "বিনামূল্যে\n৳60", "বিনামূল্যে\n৳70", "বিনামূল্যে\n৳80", "বিনামূল্যে\n৳90", "বিনামূল্যে\n৳100", "বিনামূল্যে\n৳110", "বিনামূল্যে\n৳120", "বিনামূল্যে\n৳130", "বিনামূল্যে\n৳140", "বিনামূল্যে\n৳150", "বিনামূল্যে\n৳160"];
  const requirements = ["৳300", "৳800", "৳1300", "৳1800", "৳2300", "৳3100", "৳3900", "৳4700", "৳5500", "৳6300", "৳7100", "৳7900", "৳8700", "৳9500", "৳10300", "৳11100", "৳11900", "৳12700", "৳13500", "৳14300"];
  

  const totalPages = Math.ceil(levels.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div
      style={{ backgroundImage: `url(${bgimage})` }}
      className="bg-cover bg-center  "
    >
      <div className="px-4 pt-16 sm:px-8 md:px-16 lg:px-52  w-full">
        <div className="flex  py-8 rounded-xl text-white space-y-6 flex-col justify-center bg-jaya-bg-color items-center">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-sans font-bold text-center">
              Login / register now become JAYA9 VIP
            </h3>
            <p className="text-center font-sans font-bold">
              Get the Benefits Now
            </p>
          </div>
          <div className="px-5 flex flex-col sm:flex-row lg:gap-40 gap-4 justify-center w-full">
          <div className="flex items-center justify-center">
            <button
              onClick={() => setIsOpenModal(true)}
              className="border border-white px-4 py-2 hover:border-orange-500 outline-none rounded-sm text-white"
            >
              প্রবেশ করুন
            </button>

            <ProbesKorun
              isOpenModal={isOpenModal}
              handleClose={() => setIsOpenModal(false)}
            />
          </div>
            <Link to='/nibondon'>
            <button className="bg-common-orange px-8 py-2 rounded-sm w-full sm:w-auto mt-4 sm:mt-0">
              নিবন্ধন
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6 text-xs lg:text-md lg:p-16 ">
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              <tr className="text-center bg-zinc-800  ">
                <td className="text-white py-4 p-2">স্তর</td>
                {levels.slice(startIndex, endIndex).map((level, i) => (
                  <td key={i} className="p-2 py-4 relative">
                    <img
                      src={buttonlogo}
                      alt="Level"
                      className="mx-auto rounded-sm w-10 h-10"
                    />
                    <span className="absolute inset-0 flex items-center justify-center font-bold">
                      {level}
                    </span>
                  </td>
                ))}
              </tr>
              <tr className="text-center text-white bg-black opacity-80">
                <td className="p-2">পুরস্কার</td>
                {rewards.slice(startIndex, endIndex).map((reward, i) => (
                  <td key={i} className="p-2 py-5 whitespace-pre-line relative">
                    <img
                      src={coinlogo}
                      alt="Coin"
                      className="mx-auto w-8 h-8 mb-1"
                    />
                    {reward}
                  </td>
                ))}
              </tr>
              <tr className="text-center text-white bg-black opacity-80">
                <td className="border-t p-2">প্রয়োজনীয়তা</td>
                {requirements
                  .slice(startIndex, endIndex)
                  .map((requirement, i) => (
                    <td key={i} className="border-t p-2">
                      {requirement}
                    </td>
                  ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <div className="inline-flex bg-zinc-800 px-6 py-1 rounded">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 mx-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <span className="flex items-center">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`px-4 py-2 mx-1 text-white text-xs ${
                    page === i + 1 ? "bg-common-blue " : ""
                  }`}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-4 py-2 mx-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jayatable;
