import React from "react";
import { useState } from "react";
import nibondonimage from "../../assets/bd-desktop-679a25600aae8.jpg";

const Nibondon = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the data to console for confirmation
    console.log("Form Data:", formData);
  };
  return (
    <div className=" mt-5 lg:px-40   ">
      <div className="flex flex-col  lg:flex-row gap-2 lg:border-4 border-common-blue p-8">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="lg:w-1/3 space-y-4">
          <div>
            <h3 className="text-common-orange hidden lg:flex text-center border-b border-common-orange">
              নিবন্ধন
            </h3>
          </div>
          <div>
            <h3 className="text-black">ব্যবহারকারীর নাম</h3>
            <input
              type="text"
              name="username"
              placeholder="এখানে পূরণ করুন"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className="text-black">গোপন নম্বর</h3>
            <input
              type="password"
              name="password"
              placeholder="এখানে পূরণ করুন"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3 className="text-black">পাসওয়ার্ড নিশ্চিত করুন</h3>
            <input
              type="password"
              name="confirmPassword"
              placeholder="এখানে পূরণ করুন"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-common-blue text-white px-6 py-2 rounded-md"
              >
                পরবর্তী
              </button>
            </div>
          </div>
        </form>

        {/* Image Section */}
        <div className="lg:w-2/3">
          <img
            src={nibondonimage} // You can replace this with your actual image URL
            alt=""
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => console.log("Image clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default Nibondon;
