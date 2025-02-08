import React, { useState } from "react";

const PasswordChange = () => {
  const passwordData = [
    { id: 1, label: "বর্তমান গোপন নম্বর" },
    { id: 2, label: " গোপন নম্বর" },
    { id: 3, label: "নিশ্চিত কর নতুন গোপননম্বর" },
  ];
  const [passwords, setPasswords] = useState(
    passwordData.reduce((acc, item) => ({ ...acc, [item.id]: "" }), {})
  );

  const handlePasswordChange = (id, value) => {
    setPasswords((prev) => ({ ...prev, [id]: value }));
    console.log({ ...passwords, [id]: value }); // Console e updated data show korbe
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto  px-2 lg:px-0 lg:m-5   min-h-scren max-w-5xl">
        <div className=" bg-informationBackground">
          {passwordData.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center p-6 px-3 lg:px-0 md:px-6  lg:p-6 gap-1 lg:gap-4 md:gap-4 justify-start lg:justify-around"
            >
              <h3 className="lg:text-md text-sm w-1/3 text-left lg:text-right">
                {item.label}
              </h3>
              <input
                type="password"
                placeholder="এখানে পাসওয়ার্ড পূরণ করুন"
                className="bg-informationBackground  outline-none"
                value={passwords[item.id]}
                onChange={(e) => handlePasswordChange(item.id, e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f56908"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <button className="w-full p-2 text-white justify-items-center  bg-common-blue max-w-5xl">
            জমা দিন
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;
