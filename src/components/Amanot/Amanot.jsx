import { useState, useEffect } from "react";
import bkashlogo from "../../assets/bkashlogo.svg";
import nagadlogo from "../../assets/nagadlogo.svg";
import rocketlogo from "../../assets/rocketlogo.svg";
import upailogo from "../../assets/upaylogo.svg";
import bajilogo from "../../assets/bajipay.jpeg";
import likeicon from "../../assets/icon-recommond (1).svg";
import fastlogo from "../../assets/fastpay.png";
import warninglogo from "../../assets/warning.svg";
import { Link } from "react-router-dom";

const Amanot = () => {
  const [activeTab, setActiveTab] = useState("deposit");
  const [selectedMethod, setSelectedMethod] = useState("bKash");

  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState({
    name: "Bajipay",
    amounts: [500, 1000, 2000],
  });
  const [selectedAmount, setSelectedAmount] = useState(500); // Default to the first amount in the selected channel
  const [selectedBonus, setSelectedBonus] = useState("");

  const paymentMethods = [
    {
      name: "bKash",
      logo: bkashlogo,
      percentage: "+ 3.0 %",
      absolutelogo: likeicon,
    },
    {
      name: "NAGAD",
      logo: nagadlogo,
      percentage: "+ 3.0 %",
      absolutelogo: likeicon,
    },
    {
      name: "Rocket",
      logo: rocketlogo,
      percentage: "+ 3.0 %",
      absolutelogo: likeicon,
    },
    {
      name: "Upai",
      logo: upailogo,
      percentage: "+ 3.0 %",
      absolutelogo: likeicon,
    },
  ];

  const channelsData = {
    bKash: [
      {
        name: "Bajipay",
        logo: bajilogo,
        amounts: [200, 500, 1000, 2000, 10000, 20000],
      },
      { name: "Speedpay", amounts: [200, 500, 1000, 2000, 10000, 20000] },
    ],
    NAGAD: [
      {
        name: "Bajipay",
        logo: bajilogo,
        amounts: [200, 500, 1000, 2000, 10000, 20000],
      },
      {
        name: "Paybangla",
        logo: bajilogo,
        amounts: [500, 1000, 2000, 10000, 20000],
      },

      { name: "Speedpay", amounts: [200, 500, 1000, 2000, 10000, 20000] },
    ],
    Rocket: [
      { name: "Bajipay", amounts: [200, 500, 1000, 2000, 10000, 20000] },
    ],
    Upai: [
      {
        name: "",
        logo: fastlogo,
        amounts: [200, 500, 1000, 2000, 10000, 20000],
      },
    ],
  };

  const bonusOptions = [
    "TITO 350% WELCOME OFFER - 350.00%",
    "স্লট 100% স্বাগতম বোনাস ৳18,000 পর্যন্ত - 100.00%",
    "লাইভ ক্যাসিনো 50% স্বাগতম বোনাস - 50.00%",
    "স্লট 10% আনলিমিটেড ডিপোজিট বোনাস - 10.00%",
  ]; // Example bonus options

  const [balance, setBalance] = useState(Math.floor(Math.random() * 1000)); // Initial Balance
  const [loading, setLoading] = useState(false);

  const reloadBalance = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setBalance(Math.floor(Math.random() * 1000)); // Generate new random balance
      setLoading(false); // Stop loading
    }, 1500); // Simulate a delay (1.5s)
  };

  // Set the default selected channel and amount when selectedMethod changes
  useEffect(() => {
    const defaultChannel = channelsData[selectedMethod]?.[0] || {};
    setSelectedChannel(defaultChannel);
    setSelectedAmount(defaultChannel.amounts ? defaultChannel.amounts[0] : "");
  }, [selectedMethod]);

  return (
    <div>
      <div className="bg-common-blue">
        <div className="flex justify-center w-full mx-auto max-w-3xl p-4">
          <button
            className={`w-full px-4 py-2 text-sm text-white font-semibold ${
              activeTab === "deposit" ? "bg-common-orange" : "bg-uttoloncolor"
            }`}
            onClick={() => setActiveTab("deposit")}
          >
            আমানত
          </button>
          <button
            className={`w-full px-4 py-2 text-sm text-white font-semibold ${
              activeTab === "withdraw" ? "bg-common-orange" : "bg-uttoloncolor"
            }`}
            onClick={() => setActiveTab("withdraw")}
          >
            উত্তোলন
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto  ">
        {activeTab === "deposit" && (
          <div className="p-4 rounded-b-md ">
            <div className="bg-amanotcardcolor p-3 relative">
              <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
                মূল্য পরিশোধ পদ্ধতি
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className={`relative shadow-md p-1 rounded-lg cursor-pointer transition-all ${
                      selectedMethod === method.name
                        ? "bg-common-blue text-white"
                        : "bg-gray-200 "
                    }`}
                    onClick={() => {
                      setSelectedMethod(method.name);
                      setSelectedChannel(null);
                      setSelectedAmount(""); // Reset the amount on method change
                      setSelectedBonus(""); // Reset bonus when changing method
                    }}
                  >
                    {/* Absolute Positioned Text */}
                    <span className="absolute -top-2 -right-2 bg-common-orange text-white text-xs px-1  rounded-md">
                      {method.percentage}
                    </span>
                    {/* <span className="absolute top-4 left-0 bg-common-orange text-white text-xs px-1  rounded-md">
                      {method.absolutelogo}
                    </span> */}

                    <img
                      src={method.logo}
                      alt={method.name}
                      className="h-6 mx-auto mb-2"
                    />
                    <h4 className="text-center text-md font-semibold">
                      {method.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {selectedMethod && (
              <>
                <div className="bg-amanotcardcolor p-3 mt-2">
                  <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
                    আমানত চ্যানেল
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4 items-center bg-amanotcardcolor">
                    {channelsData[selectedMethod]?.map((channel, index) => (
                      <div
                        key={index}
                        className={`shadow-md p-2 rounded-lg cursor-pointer transition-all ${
                          selectedChannel?.name === channel.name
                            ? "bg-common-blue text-white"
                            : "bg-gray-200 "
                        }`}
                        onClick={() => {
                          setSelectedChannel(channel);
                          setSelectedAmount(channel.amounts[0]); // Default first amount
                        }}
                      >
                        <div className="flex flex-row items-center justify-center">
                          {channel.logo && (
                            <img
                              src={channel.logo}
                              alt={channel.name}
                              className="h-6 mx-auto"
                            />
                          )}
                          <h4 className="text-center text-md font-semibold">
                            {channel.name}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {selectedChannel && (
              <>
                <div className="bg-amanotcardcolor p-3 mt-2">
                  <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
                    পরিমাণ
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
                    {selectedChannel.amounts.map((amount) => (
                      <div
                        key={amount}
                        className={`shadow-md p-2 rounded-lg cursor-pointer transition-all ${
                          selectedAmount === amount
                            ? "bg-common-blue text-white"
                            : "bg-gray-200 "
                        }`}
                        onClick={() => {
                          setSelectedAmount(amount);
                          console.log("Selected Amount:", amount); // Console log added
                        }}
                      >
                        <h4 className="text-center text-sm font-semibold">
                          ৳ {amount}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4 p-3 border-b border-black bg-amanotcardcolor flex flex-row items-center ">
                  <label className=" text-2xl mb-2 h-auto text-green-700 font-medium">
                    {" "}
                    ৳
                  </label>
                  <input
                    type="number"
                    value={selectedAmount || ""}
                    className="w-full px-1 py-1 bg-amanotcardcolor  rounded-md text-sm"
                  />
                </div>

                {/* Bonus Select Field */}
                <div className="mb-4 p-3 bg-amanotcardcolor mt-2">
                  <label className="block text-lg font-semibold mb-3 py-2 border-b border-black">
                    আমানত বোনাস
                  </label>
                  <select
                    value={selectedBonus}
                    onChange={(e) => setSelectedBonus(e.target.value)}
                    className="w-full lg:w-1/3 h-full px-3 py-1 border-2 border-black   ro text-lg font-semibold"
                  >
                    <option value="">No Bonus</option>
                    {bonusOptions.map((bonus) => (
                      <option key={bonus} value={bonus}>
                        ৳ {bonus}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <button
              className="w-full bg-common-blue text-white py-2 rounded-md"
              disabled={!selectedChannel || !selectedAmount}
              onClick={() => setModalOpen(true)}
            >
              আমানত
            </button>
          </div>
        )}

        {modalOpen && (
          <div
            className="fixed inset-0 z-50 px-3 lg:px-0 overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center items-center "
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setModalOpen(false); // Modal বন্ধ হবে যদি বাহিরের জায়গায় ক্লিক করা হয়
              }
            }}
          >
            <div className="bg-white max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-y-auto rounded-lg shadow-lg relative">
              <div className="flex flex-col w-full border-b pt-6 space-y-4 justify-center items-center">
                <img src={bkashlogo} alt="" className="w-16 h-aut0" />

                <p className="text-common-blue">সময়সীমা 05:05</p>
              </div>
              <div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-2 text-gray-500 absolute top-0 right-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="py-8 space-y-5 border-b font-semibold">
                <h3 className="text-center">ট্রান্সফার হলে স্ক্রিনশট রাখুন</h3>
                <div className="flex flex-col px-2 lg:px-0 lg:flex-row lg:justify-center gap-2">
                  <h3 className="w-1/2 md:text-left text-right whitespace-nowrap">ডিপোজিট পরিমাণ :</h3>
                  <input
                    type="text" 
                    name=""
                    id=""
                    placeholder="৳ 200.00"
                    className=" bg-gray-200 shadow-2xl outline-none placeholder:text-sm placeholder:font-bold  placeholder:text-center"
                    disabled
                  />
                </div>
                <div className="flex flex-col px-2 lg:px-0 lg:flex-row gap-2 lg:justify-center">
                  <h3 className="w-1/2 md:text-left text-right whitespace-nowrap">বিকাশ এজেন্ট নাম্বার :</h3>
                  <input
                    type="tel"
                    name=""
                    id=""
                    placeholder="01966678975"
                    className="readonly bg-gray-200 outline-none placeholder:text-sm shadow-2xl placeholder:font-bold placeholder:text-center"
                    disabled
                  />
                </div>
              </div>

              <div className="py-8 space-y-5 border-b font-semibold">
                <div className="flex flex-col px-2 lg:px-0 lg:flex-row gap-2 lg:justify-center">
                  <h3 className="w-1/2 md:text-left text-right whitespace-nowrap">ক্যাশ আউট ফ্রম :</h3>
                  <select className="bg-gray-200 shadow-2xl  text-gray-400 font-semibold text-sm text-center px-11 py-1 rounded-md outline-blue-400 ">
                    <option value="01966678975">01966678975</option>
                  </select>
                </div>
                <div className="flex flex-col px-2 lg:px-0 lg:flex-row gap-2 lg:justify-center">
                  <h3 className="w-1/2 md:text-left text-right whitespace-nowrap">ট্রানসাকশান আইডি :</h3>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder=" ট্রানসাকশান আইডি এখানে বাধ্যতামূলক"
                    className=" bg-gray-200 outline-blue-400  shadow-2xl placeholder:font-bold placeholder:text-center placeholder:text-xs "
                  />
                </div>
                <div className="text-center">
                  <button className="bg-blue-400 px-12 py-2  rounded-lg text-white">
                    নিশ্চিত করুন
                  </button>
                </div>
                <div className="mx-auto w-full max-w-xs">
                  <div className=" px-2 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full flex items-center gap-2 px-4 py-2 border border-black bg-gray-100 text-sm font-medium text-black"
                    >
                      {/* Down Arrow SVG */}
                      <svg
                        className={`h-5 w-5 transition-all duration-1000 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      কিভাবে ডিপোজিট করবেন?
                    </button>
                    {isOpen && (
                      <div className="p-4 border-t border-gray-300 max-h-48 overflow-y-auto">
                        <p className="text-gray-800 text-sm leading-relaxed">
                          1. আপনার বিকাশ ওয়ালেট নম্বর লিখুন <br />
                          2. বিকাশ অ্যাপ দিয়ে পেমেন্ট করুন। আপনার বিকাশ অ্যাপ
                          খুলুন, ক্যাশ-আউট নির্বাচন করুন এবং প্রদত্ত বিকাশ
                          এজেন্ট নম্বরে ডিপোজিট পরিমাণ পাঠান।
                          <br />
                          3. বিকাশ ট্রানসাকশান আইডি লিখুন। আপনার বিকাশ ক্যাশ-আউট
                          ট্রানসাকশান থেকে ট্রানসাকশান আইডি লিখুন। <br />
                          4. আপনার ডিপোজিট নিশ্চিত করুন। সম্পন্ন হলে আপনার
                          ডিপোজিট পরিমাণ আপনার ক্রেডিট ব্যালেন্সে যোগ করা হবে।
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-row items-center pt-4 justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="black"
                    className="w-6 h-6 text-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12V8a4 4 0 10-8 0v4m-2 0a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2H6z"
                    />
                  </svg>

                  <h3>আপনি একটি সুরক্ষিত সাইটে আছেন</h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "withdraw" && (
          <div className="px-4 rounded-b-md">
            <div className="bg-common-blue px-3 py-2 flex-col space-y-4">
              <div className="flex flex-row items-center">
                <h3 className="text-white">প্রধান ওয়ালেট</h3>
                <button onClick={reloadBalance} className="ml-2">
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
              </div>

              <div className="text-white flex items-center justify-end">
                <span className="pb-2 pr-1 text-4xl">৳</span>
                <span className="text-2xl">
                  {loading ? "..." : balance.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4 mb-2 bg-amanotcardcolor p-3">
              <img src={warninglogo} alt="" className="w-8 h-auto" />
              <h3>Phone number is not verified.</h3>
              <Link to="/jachaikoron">
                <p className="text-common-orange underline  text-sm">
                  যাচাই করুন
                </p>
              </Link>
            </div>
            <div className="bg-amanotcardcolor p-3 relative">
              <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
                মূল্য উত্তোলন পদ্ধতি
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className={`relative shadow-md p-1 rounded-lg cursor-pointer transition-all ${
                      selectedMethod === method.name
                        ? "bg-common-blue text-white"
                        : "bg-gray-200 "
                    }`}
                    onClick={() => {
                      setSelectedMethod(method.name);
                      setSelectedChannel(null);
                      setSelectedAmount(""); // Reset amount on method change
                      setSelectedBonus(""); // Reset bonus
                    }}
                  >
                    {/* Absolute Positioned Text */}
                    <span className="absolute -top-2 -right-2 bg-common-orange text-white text-xs px-1 rounded-md">
                      {method.percentage}
                    </span>
                    <img
                      src={method.logo}
                      alt={method.name}
                      className="h-6 mx-auto mb-2"
                    />
                    <h4 className="text-center text-md font-semibold">
                      {method.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* {selectedMethod && (
      <div className="bg-amanotcardcolor p-3 mt-2">
        <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
          উত্তোলন চ্যানেল
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4 items-center">
          {channelsData[selectedMethod]?.map((channel, index) => (
            <div
              key={index}
              className={`shadow-md p-2 rounded-lg cursor-pointer transition-all ${
                selectedChannel?.name === channel.name
                  ? "bg-common-blue text-white"
                  : "bg-gray-200 "
              }`}
              onClick={() => {
                setSelectedChannel(channel);
                setSelectedAmount(channel.amounts[0]); // Default first amount
              }}
            >
              <div className="flex flex-row items-center justify-center">
                {channel.logo && (
                  <img
                    src={channel.logo}
                    alt={channel.name}
                    className="h-6 mx-auto"
                  />
                )}
                <h4 className="text-center text-md font-semibold">
                  {channel.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    )} */}

            {selectedChannel && (
              <>
                <div className="bg-amanotcardcolor p-3 mt-2">
                  <h3 className="text-lg font-semibold mb-3 py-2 border-b border-black">
                    পরিমাণ
                  </h3>
                  {/* <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
            {selectedChannel.amounts.map((amount) => (
              <div
                key={amount}
                className={`shadow-md p-2 rounded-lg cursor-pointer transition-all ${
                  selectedAmount === amount
                    ? "bg-common-blue text-white"
                    : "bg-gray-200 "
                }`}
                onClick={() => {
                  setSelectedAmount(amount);
                  console.log("Selected Amount:", amount); // Console log added
                }}
              >
                <h4 className="text-center text-sm font-semibold">
                  ৳ {amount}
                </h4>
              </div>
            ))}
          </div> */}
                </div>

                <div className="mb-4 p-3  bg-amanotcardcolor flex flex-row items-center ">
                  <label className=" text-2xl mb-2 h-auto text-green-700 font-medium">
                    {" "}
                    ৳
                  </label>
                  <input
                    type="number"
                    // value={selectedAmount || ""}
                    placeholder="ন্যূনতম ৳ 500.00 - সর্বোচ্চ ৳ 25,000.00"
                    className="w-full px-1 py-1 bg-amanotcardcolor outline-none  rounded-md text-sm"
                  />
                </div>

                <div className="bg-amanotcardcolor p-3">
                  <h3 className="text-lg  font-semibold mb-1 border-b border-black">
                    মোবাইল নম্বর
                  </h3>
                  <div className="w-fit pl-4 pr-20 py-2 bg-gray-200 text-gray-500 border border-gray-500 font-semibold rounded-md text-center cursor-pointer">
                    017XXXXXXXX
                  </div>
                </div>
              </>
            )}

            <button
              className="w-full bg-common-red text-white py-2 rounded-md"
              disabled={!selectedChannel || !selectedAmount}
            >
              উত্তোলন
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Amanot;
