import React, { useState } from "react";
import icondeposit from "../../assets/icon-deposit.svg";
import iconwithdraw from "../../assets/icon-withdrawal.svg";
import bajilogo from "../../assets/baji.svg";
import transferlogo from "../../assets/transfer.svg";
import bonuslogo from "../../assets/bonus.svg";
import transactionlogo from "../../assets/transaction.svg";
import dabilogo from "../../assets/davi.svg";
import puroskarlogo from "../../assets/puroskar.svg";
import infologo from "../../assets/info.svg";
import passwordresetlogo from "../../assets/passwordreset.svg";
import bankdetailslogo from "../../assets/bankdetails.svg";
import inboxlogo from "../../assets/inbox.svg";
import referellogo from "../../assets/referral.svg";
import supportlogo from '../../assets/support.svg';
import whatsapplogo from '../../assets/whatsapp.svg';
import telegramlogo from '../../assets/telegramicon.svg';
import fblogo from '../../assets/fb.svg';
import downloadlogo from '../../assets/icon-downloadapk.png';
import logouticon from '../../assets/icon-logout.svg';

import memberBg from "../../assets/member-header-bg.png";
import {  Link, useNavigate } from "react-router-dom";

const Information = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(Math.floor(Math.random() * 1000)); // Initial Balance

  const [loading, setLoading] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  const reloadBalance = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setBalance(Math.floor(Math.random() * 1000)); // Generate new random balance
      setLoading(false); // Stop loading
    }, 1500); // Simulate a delay (1.5s)
  };

  const toggleBalanceVisibility = () => {
    setShowBalance((prev) => !prev); // Toggle show/hide
  };
  const data = [
    {
      title: "তহবিল",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: icondeposit,
          label: "আমানত",
          path:'/amanot',
          imgClass: "",
          labelClass: "text-black text-xs lg:text:md",
        },
        {
          imgSrc: iconwithdraw,
          label: "উত্তোলন",
          path:'/amanot',
          imgClass: "",
          labelClass: "text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "  ইতিহাস ",
      titleClass: "text-black",
      gridClass:
        "grid-cols-2 justify-items-center lg:justify-items-center    lg:grid-cols-5 ",
      sectionClass: "mt-2",
      items: [
        {
          imgSrc: bajilogo,
          label: "বাজি রেকর্ড",
          path:'/baji',
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: bajilogo,
          label: "টার্নওভার",
          path:'/turnover',
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: transferlogo,
          label: "স্থানান্তর রেকর্ড",
          path:'/sthanantor',
          imgClass: "",
          labelClass: " whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: bonuslogo,
          label: "বোনাস",
          path:'/bonus',
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: transactionlogo,
          label: "লেনদেন রেকর্ড",
          path:'/lenden',
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "ঘটনা",
      titleClass: "text-black",
      gridClass: " grid-cols-2 ",
      items: [
        {
          imgSrc: dabilogo,
          label: "দাবি ভাউচার",
          path:'/dabivoutcher',
          imgClass: "w-12",
          labelClass: "text-black text-xs lg:text:md",
        },
        {
          imgSrc: puroskarlogo,
          label: "পুরস্কার",
          path:'/puroskar',
          imgClass: "w-12 lg:w-auto",
          labelClass: "text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "  প্রোফাইল ",
      titleClass: "text-black",
      gridClass:
        "grid-cols-2 justify-items-center lg:justify-items-center    lg:grid-cols-6 ",
      sectionClass: "mt-2",
      items: [
        {
          imgSrc: infologo,
          label: "ব্যাক্তিগত তথ্য",
          path:'/jachaikoron',
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: passwordresetlogo,
          label: "পাসওয়ার্ড পরিবর্তন  করুন",
          path:'/passwordchange',
          imgClass: "",
          labelClass: " whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: bankdetailslogo,
          label: "ব্যাংক বিবরণ",
          path:'/bankdetails',
          imgClass: "",
          labelClass: " whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: inboxlogo,
          label: "ইনবক্স বার্তা",
          path:'/inbox',
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: referellogo,
          label: "সুপারিশ",
          path:'/refference',
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: referellogo,
          label: "Referral Bonus",
          path:'/refferelbonus',
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
      ],
    },
    {
      title: "  যোগাযোগ করুন ",
      titleClass: "text-black",
      gridClass:
        "grid-cols-2     lg:grid-cols-4 ",
      sectionClass: "mt-2",
      items: [
        {
          imgSrc: supportlogo,
          label: "24/7 সমর্থন",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: whatsapplogo,
          label: "হোয়াটসঅ্যাপ",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: telegramlogo ,
          label: "Telegram",
          imgClass: "w-10",
          labelClass: " whitespace-nowrap text-black text-xs lg:text:md",
        },
        {
          imgSrc: fblogo,
          label: "ফেসবুক",
          imgClass: "",
          labelClass: "whitespace-nowrap text-black text-xs lg:text:md",
        },
       
      ],
    },
    {
      title: "ডাউনলোড করুন",
      titleClass: "text-black",
      gridClass: " grid-cols-1 ",
      items: [
        {
          imgSrc: downloadlogo,
          label: "অ্যান্ড্রয়েড ডাউনলোড করুন",
          imgClass: "w-12",
          labelClass: "text-black text-xs lg:text:md",
        },
       
      ],
    },
    {
      title: "",
      titleClass: "",
      gridClass: " grid-cols-1 ",
      items: [
        {
          onClick: () => navigate(-1),
          imgSrc: logouticon,
          label: "প্রস্থান",
          imgClass: "w-10",
          labelClass: "text-black text-xs lg:text:md",
        },
       
      ],
    },
    
  ];

  return (
    <div className="bg-informationBackground min-h-screen pb-10 relative overflow-hidden ">
      <div className="mx-auto  lg:max-w-3xl min-h-screen   ">
       <span className="absolute -top-8  right-14 lg:right-1/4 translate-x-full ">
       <svg
          onClick={() => navigate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="auto"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-2 w-20 p-6 bg-informationBackground informationBackground  cursor-pointer rounded-full"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
       </span>

        {/* Round Shape with "R" */}
        <div
          className="flex items-center gap-4 p-4 min-h-[200px]  md:min-h-[200px] lg:min-h-[180px]"
          style={{ backgroundImage: `url(${memberBg})` }}
        >
          <div className="w-16 h-16 bg-black text-common-orange flex items-center justify-center text-3xl font-bold rounded-full">
            R
          </div>
          {/* Full Name */}
          <span className="text-white text-xl font-semibold">Rohan</span>
        </div>
        <div className="px-3 lg:px-0">
          <div className=" lg:px-0">
            <div className="bg-white  px-3 mt-2 py-2 flex justify-between flex-row ">
              <div className="flex flex-row items-center">
                <h3 className="text-common-orange">প্রধান ওয়ালেট</h3>
                <button onClick={reloadBalance} className="ml-2 pt-1">
                  {loading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" h-5 w-5 text-orange-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="23 4 23 10 17 10"></polyline>
                      <path d="M20.49 15a9 9 0 1 1 2.13-9" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f56908"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="23 4 23 10 17 10"></polyline>
                      <path d="M20.49 15a9 9 0 1 1 2.13-9" />
                    </svg>
                  )}
                </button>

                <button onClick={toggleBalanceVisibility} className="ml-2 ">
                  {showBalance ? (
                    // Eye icon (Visible)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5  text-gray-500"
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
                  ) : (
                    // Eye-off icon (Hidden)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5  text-gray-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f56908"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a17.33 17.33 0 0 1 2.31-3.81" />
                      <path d="M9.53 9.53A3 3 0 0 1 12 9c1.66 0 3 1.34 3 3a3 3 0 0 1-.53 1.71" />
                      <path d="M1 1l22 22" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="text-white flex flex-row items-center">
                <span className="pb-2 pr-1 text-2xl text-gray-400">৳</span>
                <span className="text-gray-400">
                  {loading ? "..." : showBalance ? balance.toFixed(2) : "****"}
                </span>
              </div>
            </div>
          </div>
          {/* <div className="mt-2 bg-white">
            <div>
              <h3 className=" font-semibold  p-3  border-b border-gray-400">
                তহবিল
              </h3>
              <div className="grid grid-cols-2 justify-items-start lg:justify-items-center p-2">
                <div className="flex flex-col items-center">
                  <img src={icondeposit} alt="" />
                  <h3>আমানত</h3>
                </div>
                <div className="flex flex-col items-center">
                  <img src={iconwithdraw} alt="" />
                  <h3>উত্তোলন</h3>
                </div>
              </div>
            </div>
          </div> */}
          
          <div className="  ">
            {data.map((section, index) => (
              <div className={` bg-white mt-2 ${section.sectionClass}`} key={index}>
                <h3
                  className={`font-semibold p-3 ${index !== data.length - 1 ? "border-b border-gray-400" : ""}   ${section.titleClass}`}
                >
                  {section.title}
                </h3>
                <div
                  className={`grid ${section.gridClass}  justify-items-center   p-2`}
                >
                  {section.items.map((item, i) => (

                   <Link to={item.path}>
                   
                    <div key={i} className={`flex ${index === data.length - 1 ? 'flex-row' : 'flex-col'}  items-center`}
                           onClick={item.onClick} >
                      <img
                        src={item.imgSrc}
                        alt={item.label}
                        className={item.imgClass}
                      />
                      <h3 className={item.labelClass}>{item.label}</h3>
                    </div>
                   </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
