import React, { useState } from "react";
import infologo from "../../assets/personal-info.jpg";
import memberlogo from "../../assets/memberpic.svg";
import warninglogo from "../../assets/warning.svg";
// import ProfileUser from "../ProfileUser/ProfileUser";

const Jachaikoron = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddNumberOpen, setIsAddNumberOpen] = useState(false);
  const [isOtpOpen, setIsOtpOpen] = useState(false);

  const generateOtp = () => {
    const otp = Math.floor(1000 + Math.random() * 9000); // Generates a 6-digit OTP
    return otp.toString();
  };

  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(generateOtp());

  const handleChangeOtp = (e) => {
    setOtp(e.target.value);
  };
  const handleReload = () => {
    setGeneratedOtp(generateOtp());
    setOtp(""); // Optionally reset the input field
  };

  const [memberInfo, setMemberInfo] = useState({
    username: "রোহান",
    email: "rakibuhasanrakib@gmail.com",
    dob: "1995-05-12",
    mobile: "+880 ******8002",
    currency: "BDT",
    fullname: " রোহান  চৌধুরী",
  });

  const [formData, setFormData] = useState(memberInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMemberInfo(formData); // মূল স্টেট আপডেট হবে
    setIsEditOpen(false);
    console.log(formData); // মডাল বন্ধ হবে
  };
  return (
    <div className="mx-auto max-w-2xl lg:max-w-3xl px-4 lg:px-0 min-h-screen mt-12 relative ">
    {/* <ProfileUser username={memberInfo.username}/> */}
      <div className="relative">
        <img
          src={infologo}
          alt=""
          className="max-h-28 w-full md:max-h-32 rounded-2xl lg:max-h-32 "
        />
        <img
          src={memberlogo}
          alt=""
          className="w-20 h-auto absolute top-20 left-1/2 transform -translate-x-1/2"
        />
      </div>

      <div>
        <div className="lg:mt-12 bg-memberProfileColor mt-20  pt-8 shadow-lg rounded-lg ">
          {/* Member Information */}
          <div>
            <div className="flex justify-between hover:bg-gray-500 border-b border-black p-3 items-center mb-4">
              <div className="flex flex-col ">
                <h2 className="text-xl font-semibold">ব্যবহারকারীর নাম</h2>
                <p className="text-memberinfotextcolor font-bold">
                  {" "}
                  {memberInfo.username}
                </p>
              </div>
              <button
                onClick={() => setIsEditOpen(true)}
                className="text-memberinfotextcolor text-sm font-bold underline"
              >
                Edit Profile
              </button>
            </div>

            {/* Mobile Number */}
            <div className="border-b border-black hover:bg-gray-500 p-3">
              <h3 className="text-lg font-semibold">মোবাইল নম্বর</h3>
              <div className="flex justify-between gap-2  items-center">
                <p className="text-memberinfotextcolor font-bold">
                  {memberInfo.mobile}
                </p>
                <div className="flex flex-row items-center gap-2" 
                 onClick={() => setIsOtpOpen(true)}>
                  <button
                   
                    className="text-memberinfotextcolor text-sm font-bold underline"
                  >
                    Verify OTP
                  </button>
                  <img src={warninglogo} alt="" className="w-8 h-auto" />
                </div>
              </div>
              <button
                onClick={() => setIsAddNumberOpen(true)}
                className="mt-2 text-white bg-common-blue p-1 rounded-lg "
              >
                + Add Secondary Number
              </button>
            </div>

            {/* Email & Other Info */}
            <div className="mt-4 ">
              <p className="flex flex-col p-3 border-b hover:bg-gray-500 border-black">
                <strong>ইমেইল</strong>{" "}
                <span className="text-memberinfotextcolor font-bold">
                  {memberInfo.email}
                </span>
              </p>
              <p className="flex flex-col border-b hover:bg-gray-500 border-black p-3">
                <strong>জন্ম তারিখ</strong>{" "}
                <span
                  className="text-memberinfotextcolor
          font-bold"
                >
                  {memberInfo.dob}
                </span>
              </p>
              <p className="flex flex-col border-b hover:bg-gray-500 border-black p-3">
                <strong>মুদ্রা</strong>{" "}
                <span className="text-memberinfotextcolor font-bold">BDT</span>
              </p>
            </div>
          </div>
          {/* Edit Profile Modal */}
          {isEditOpen && (
            <div
              className="fixed inset-0 z-50 px-3 lg:px-0 bg-gray-800 bg-opacity-50 flex justify-center items-center "
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsEditOpen(false); // Modal বন্ধ হবে যদি বাহিরের জায়গায় ক্লিক করা হয়
                }
              }}
            >
              <div className="bg-white h-2/3 overflow-y-auto lg:h-auto  w-96 ">
                <div className="px-3 py-6 text-white font-semibold bg-common-blue flex flex-row items-center">
                  <h2 className="text-lg w-full ">Edit Profile</h2>
                  <button
                    onClick={() => setIsEditOpen(false)}
                    className="mt-2 text-gray-500 l"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className=" p-4 space-y-4  rounded-lg"
                >
                  <div>
                    <label className="block font-medium">ইমেইল</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-500 rounded"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">
                      ব্যবহারকারীর নাম
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full p-2 order border border-gray-500 rounded"
                    />
                  </div>
                  <div>
                    <label className="block font-medium">জন্ম তারিখ</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full p-2 order border border-gray-500 rounded"
                    />
                  </div>

                  <div>
                    <label className="block font-medium">মোবাইল নম্বর</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full p-2 order border border-gray-500 rounded"
                    />
                  </div>

                  <div>
                    <label className="block font-medium">পুরো নাম</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.fullname}
                      onChange={handleChange}
                      className="w-full p-2 order border border-gray-500 rounded"
                    />
                  </div>

                  {/* <div>
                    <label className="block font-medium">Verify OTP</label>
                    <input
                      type="text"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  </div> */}

                  {/* <div>
                    <label className="block font-medium">মুদ্রা</label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    >
                      <option value="BDT">BDT</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div> */}
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-common-blue whitespace-nowrap text-white px-4 py-2 rounded-lg lg:w-1/3 mt-2"
                  >
                    জমা দিন
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Add Secondary Number Modal */}
          {isAddNumberOpen && (
            <div
              className="fixed inset-0 z-50 px-3 lg:px-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsAddNumberOpen(false); // Modal বন্ধ হবে যদি বাহিরের জায়গায় ক্লিক করা হয়
                }
              }}
            >
              <div className="bg-white p rounded-lg w-96 shadow-lg">
                <div className="flex flex-row justify-between bg-common-blue p-4">
                  <h3 className=" text-lg text-white ">Verify Phone Number</h3>
                  <svg
                    onClick={() => setIsAddNumberOpen(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-2 text-gray-500 cursor-pointer"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div className="p-3">
                  <div className=" py-3">
                    <label className="block text-sm font-medium">
                      ভেরিফিকেশন কোড
                    </label>
                    <div className="flex flex-row items-center  space-x-4">
                      <input
                        type="tel"
                        name="otp"
                        value={otp}
                        onChange={handleChangeOtp}
                        maxLength="6"
                        className="w-full p-2 border border-gray-500 rounded"
                      />
                      <div className="flex flex-row-reverse font-bold bg-common-blue gap-2 px-2 py-2 items-center">
                        <svg
                          onClick={handleReload}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="auto"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="cursor-pointer pt-2"
                        >
                          <polyline points="23 4 23 10 17 10"></polyline>
                          <path d="M20.49 15a9 9 0 1 1 2.13-9" />
                        </svg>
                        <button className="   text-white rounded">
                          {generatedOtp}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        প্রথম ফোন নাম্বার
                      </label>
                      <input
                        type="tel"
                        name="otp"
                        maxLength=""
                        placeholder={memberInfo.mobile}
                        readOnly
                        className="w-full p-2 bg-gray-200 border outline-none border-gray-500 rounded"
                      />
                    </div>
                  </div>

                  <div className="flex py-2 gap-1 flex-row">
                    <button className=" px-2 text-white font-bold rounded-sm whitespace-nowrap text-sm bg-custom-orange">
                      OTP অনুরোধ করুন
                    </button>
                    <input
                      type="tel"
                      placeholder="এখানে পূরণ করুন"
                      className="w-2/3 p-2 border rounded mb-2 placeholder:text-xs lg:placeholder:text-md"
                    />
                  </div>

                  <button className="bg-gray-200 text-gray-400 px-4 py-2 rounded w-full mt-2">
                    জমা দিন
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Verify OTP Modal */}
          {isOtpOpen && (
            <div
            className="fixed inset-0 z-50 px-3 lg:px-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsOtpOpen(false); // Modal বন্ধ হবে যদি বাহিরের জায়গায় ক্লিক করা হয়
              }
            }}
          >
            <div className="bg-white  rounded-lg w-96 shadow-lg">
              <div className="flex flex-row justify-between bg-common-blue p-4">
                <h3 className=" text-lg text-white ">Verify Phone Number</h3>
                <svg
                  onClick={() => setIsOtpOpen(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-2 text-gray-500 cursor-pointer"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <div className="p-3">
                <div className=" py-3">
                  <label className="block text-sm font-medium">
                    ভেরিফিকেশন কোড
                  </label>
                  <div className="flex flex-row items-center  space-x-4">
                    <input
                      type="tel"
                      name="otp"
                      value={otp}
                      onChange={handleChangeOtp}
                      maxLength="6"
                      className="w-full p-2 border border-gray-500 rounded"
                    />
                    <div className="flex flex-row-reverse font-bold bg-common-blue gap-2 px-2 py-2 items-center">
                      <svg
                        onClick={handleReload}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cursor-pointer pt-2"
                      >
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1 2.13-9" />
                      </svg>
                      <button className="   text-white rounded">
                        {generatedOtp}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      প্রথম ফোন নাম্বার
                    </label>
                    <input
                      type="tel"
                      name="otp"
                      maxLength=""
                      placeholder={memberInfo.mobile}
                      readOnly
                      className="w-full p-2 bg-gray-200 border outline-none border-gray-500 rounded"
                    />
                  </div>
                </div>

                <div className="flex py-2 gap-1 flex-row">
                  <button className=" px-2 text-white font-bold rounded-sm whitespace-nowrap text-sm bg-custom-orange">
                    OTP অনুরোধ করুন
                  </button>
                  <input
                    type="tel"
                    placeholder="এখানে পূরণ করুন"
                    className="w-2/3 p-2 border rounded mb-2 placeholder:text-xs lg:placeholder:text-md"
                  />
                </div>

                <button className="bg-gray-200 text-gray-400 px-4 py-2 rounded w-full mt-2">
                  জমা দিন
                </button>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jachaikoron;
