import { useState, useEffect } from "react";
import image1 from "../../assets/newimage1.webp";
import image2 from "../../assets/new image-2.webp";
import newimage2 from '../../assets/promotiontab2logo1.jpg';
import newimage3 from '../../assets/Promotion image-2.webp';
import image3 from "../../assets/new image-3.webp";
import newimage4 from '../../assets/promotion image 4.webp';
import image4 from "../../assets/new image-4.webp";
import image5 from "../../assets/new image-5.webp";
import image6 from "../../assets/promotion image-6.webp";
import newimage6 from '../../assets/Promotion new image-6.webp';
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/tab1logo8.jpg";
import image9 from "../../assets/tab1logo9.jpg";
import image10 from "../../assets/tab1logo10.jpg";
import image11 from "../../assets/tab1logo11.jpg";

import image12 from "../../assets/tab1logo12.jpg";
import image13 from "../../assets/tab1logo13.jpg";
import image14 from "../../assets/tab1logo14.jpg";
import image15 from "../../assets/tab1logo15.jpg";
import image16 from "../../assets/tab1logo16.jpg";
import image17 from "../../assets/tab1logo17.jpg";
import image18 from "../../assets/tab1logo18.jpg";
import tab2logo1 from '../../assets/promotiontab2logo1.jpg';

const tabData = [
  {
    id: 1,
    label: "সব",
    data: [
      {
        image: image1,
        title: "দৈনিক গিভঅ্যাওয়ে BPL ২০২৪-২০২৫",
        description: "প্রতিদিন ৯৯ জন সদস্যের জন্য একটি BPL গিভঅ্যাওয়ে পান !!!",
        date: "2024-12-24 02:21:30 to 2025-02-08 14:59:59",
        countdown: "6 D 1 H এ শেষ হবে",
        details: true,
        apply: true,
      },
      {
        image: newimage3,
        title: "সুপার লিমিটেড অফার ৩৫০% স্বাগতম বোনাস",
        description: "এখনই নিন টিটো ৩৫০% বোনাস, সীমিত অফার",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: newimage4,
        title: "JAYA9 চমৎকার রেফারেল প্রোগ্রাম",
        description: "৳৯,৯৯,৯৯,৯৯৯ পর্যন্ত ২০% ডিপোজিট কমিশন",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: newimage2 ,
        title: "বিশেষ সীমাহীন আমানত বোনাস +৩%",
        description: "জমা করুন এবং প্রতিটি জমার সাথে পান +৩% সীমাহীন বোনাস !!!",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image:  image4,
        title: "টুর্নামেন্ট স্লট Jili x Tito ৳৯,৯৯,৯৯৯",
        description: "টুর্নামেন্টে অংশগ্রহণ করুন এবং সমস্ত পুরস্কার জিতে নিন ৳৯,৯৯,৯৯৯",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
     
      {
        image: newimage6,
        title: "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০",
        description: "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: image6,
        title: "সাপ্তাহিক লাকি ড্র আইফোন ১৬ প্রো ম্যাক্স",
        description: "এখনই তুলে নিন, মিস করবেন না",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: image8,
        title: "স্লট 100% স্বাগতম বোনাস ৳18,000 পর্যন্ত",
        description: "৳18,000 পর্যন্ত ওয়েলকাম বোনাস পান",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: image9,
        title: "লাইভ ক্যাসিনো 50% স্বাগতম বোনাস",
        description: "৳20,000 পর্যন্ত স্বাগতম বোনাস পান",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: image10,
        title: "স্লট 10% আনলিমিটেড ডিপোজিট বোনাস",
        description: "সীমাহীন বোনাস দাবি উপভোগ করুন এবং প্রতিবার জমা করার সময় স্লটের জন্য ৳10",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: image11,
        title: "লাইভ ক্যাসিনো 5% আনলিমিটেড ডিপোজিট বোনাস",
        description: "সীমাহীন বোনাস দাবি উপভোগ করুন এবং প্রতিবার জমা করার সময় লাইভ ক্যাসি",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: image12,
        title: "20% সাপ্তাহিক রিলোড বোনাস ৳25,000 পর্যন্ত",
        description: "আপনার সমস্ত প্রিয় স্লট গেমগুলির জন্য সপ্তাহের প্রথম জমাতে ৳25,000 পর্যন্ত বোনা",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: image13,
        title: "লাইভ ক্যাসিনো 20% সাপ্তাহিক রিলোড বোনাস",
        description: "সপ্তাহের প্রথম জমাতে প্রতি সপ্তাহে ৳25,000 পর্যন্ত বোনাস উপভোগ করুন!",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: image14,
        title: "স্পোর্ট 20% সাপ্তাহিক রিলোড বোনাস",
        description: "স্পোর্টসবুকের জন্য আপনার সপ্তাহের প্রথম জমাতে প্রতি সপ্তাহে ৳25,000 পর্যন্ত ",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: image15,
        title: "JAYA র‍্যাঙ্কিং",
        description: "ননস্টপ পুরস্কার এবং পুরস্কারের জন্য প্রস্তুত হন",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: image16,
        title: "লাইভ ক্যাসিনো ৫% সাপ্তাহিক ক্যাশব্যাক",
        description: "শুধুমাত্র 3x টার্নওভার সহ 60,000 পর্যন্ত লাইভ ক্যাসিনোর জন্য ৫% সাপ্তাহিক ক্যাশ",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: image17,
        title: "স্পোর্ট ৫% সাপ্তাহিক ক্যাশব্যাক",
        description: "স্পোর্টসবুকের জন্য ৫% সাপ্তাহিক ক্যাশব্যাক উপভোগ করুন মাত্র 3x টার্নওভার সহ ৳60",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
      {
        image: image18,
        title: "স্লট 5% সাপ্তাহিক ক্যাশব্যাক",
        description: "মাত্র 3x টার্নওভার সহ ৳60,000 পর্যন্ত স্লটের জন্য 5% সাপ্তাহিক ক্যাশব্যাক উপভোগ ",
        date: "2023-09-08 20:57:03 to 2025-12-31 23:59:59",
        countdown: "332 D 10 H এ শেষ হবে",
        details: true,
        apply: false,
      },
    ],
  },
  {
    id: 2,
    label: "খেলাধুলা",
    data: [
      {
        image: tab2logo1,
        title: "বিশেষ সীমাহীন আমানত বোনাস +৩%",
        description: "জমা করুন এবং প্রতিটি জমার সাথে পান +৩% সীমাহীন বোনাস !!!",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "2 D 8 H",
        details: true,
        apply: true,
      },
      {
        image:newimage6,
        title: "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০",
        description: "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "7 D 12 H",
        details: false,
        apply: true,
      },
      {
        image: image14,
        title: "স্পোর্ট 20% সাপ্তাহিক রিলোড বোনাস",
        description: "স্পোর্টসবুকের জন্য আপনার সপ্তাহের প্রথম জমাতে প্রতি সপ্তাহে ৳25,000 পর্যন্ত বো",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "7 D 12 H",
        details: false,
        apply: true,
      },
      {
        image: image17,
        title: "স্পোর্ট ৫% সাপ্তাহিক ক্যাশব্যাক",
        description: "স্পোর্টসবুকের জন্য ৫% সাপ্তাহিক ক্যাশব্যাক উপভোগ করুন মাত্র 3x টার্নওভার সহ ৳",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "7 D 12 H",
        details: false,
        apply: true,
      },
    ],
  },
  {
    id: 3,
    label: "লাইভ ক্যাসিনো",
    data: [
      {
        image: newimage6,
        title: "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০",
        description: "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "5 D 3 H",
        details: true,
        apply: false,
      },
      {
        image: image9,
        title: "লাইভ ক্যাসিনো 50% স্বাগতম বোনাস",
        description: "৳20,000 পর্যন্ত স্বাগতম বোনাস পান",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "5 D 3 H",
        details: true,
        apply: false,
      },
      {
        image: image11,
        title: "লাইভ ক্যাসিনো 5% আনলিমিটেড ডিপোজিট বোনাস",
        description: "সীমাহীন বোনাস দাবি উপভোগ করুন এবং প্রতিবার জমা করার সময় লাইভ ক্যাসিনো",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "5 D 3 H",
        details: true,
        apply: false,
      },
      {
        image: image13,
        title: "লাইভ ক্যাসিনো 20% সাপ্তাহিক রিলোড বোনাস",
        description: "সপ্তাহের প্রথম জমাতে প্রতি সপ্তাহে ৳25,000 পর্যন্ত বোনাস উপভোগ করুন!",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "5 D 3 H",
        details: true,
        apply: false,
      },
      {
        image: image16,
        title: "লাইভ ক্যাসিনো ৫% সাপ্তাহিক ক্যাশব্যাক",
        description: "শুধুমাত্র 3x টার্নওভার সহ 60,000 পর্যন্ত লাইভ ক্যাসিনোর জন্য ৫% সাপ্তাহিক ক্যাশব্যা",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "5 D 3 H",
        details: true,
        apply: false,
      },
    ],
  },
  {
    id: 4,
    label: "স্লট",
    data: [
      {
        image: newimage2,
        title: "সুপার লিমিটেড অফার ৩৫০% স্বাগতম বোনাস",
        description: "এখনই নিন টিটো ৩৫০% বোনাস, সীমিত অফার",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "332 D 6 H এ শেষ হবে",
        details: false,
        apply: true,
      },
      {
        image: image4,
        title: "টুর্নামেন্ট স্লট Jili x Tito ৳৯,৯৯,৯৯৯",
        description: "টুর্নামেন্টে অংশগ্রহণ করুন এবং সমস্ত পুরস্কার জিতে নিন ৳৯,৯৯,৯৯৯",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "332 D 6 H এ শেষ হবে",
        details: false,
        apply: true,
      },
      {
        image: newimage6,
        title: "বিনামূল্যে জন্মদিন বোনাস ৳২,০০০",
        description: "আপনার বিশেষ দিনটিকে একটি বড় জয়ে পরিণত করুন",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "2158 D 6 H এ শেষ হবে",
        details: false,
        apply: true,
      },
      {
        image: image8,
        title: "স্লট 100% স্বাগতম বোনাস ৳18,000 পর্যন্ত",
        description: "৳18,000 পর্যন্ত ওয়েলকাম বোনাস পান",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "332 D 6 H এ শেষ হবে",
        details: false,
        apply: true,
      },
      {
        image: image10,
        title: "স্লট 10% আনলিমিটেড ডিপোজিট বোনাস",
        description: "সীমাহীন বোনাস দাবি উপভোগ করুন এবং প্রতিবার জমা করার সময় স্লটের জন্য ",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "332 D 6 H এ শেষ হবে",
        details: false,
        apply: true,
      },
      {
        image: image12,
        title: "20% সাপ্তাহিক রিলোড বোনাস ৳25,000 পর্যন্ত",
        description: "আপনার সমস্ত প্রিয় স্লট গেমগুলির জন্য সপ্তাহের প্রথম জমাতে ৳25,000 পর্যন্ত বোনা",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "332 D 6 H এ শেষ হবে",
        details: false,
        apply: true,
      },
      {
        image: image16,
        title: "স্লট 5% সাপ্তাহিক ক্যাশব্যাক",
        description: "মাত্র 3x টার্নওভার সহ ৳60,000 পর্যন্ত স্লটের জন্য 5% সাপ্তাহিক ক্যাশব্যাক উপভো",
        date:'2023-09-08 20:57:03 to 2025-12-31 23:59:59',
        countdown: "332 D 6 H এ শেষ হবে",
        details: false,
        apply: true,
      },
    ],
  },
  { id: 5, label: "টেবিল গেম", data: [] },
  { id: 6, label: " লটারি", data: [] },
  { id: 7, label: "VIP", data: [] },
  { id: 8, label: "ক্র্যাশ", data: [] },
];

const Promotion = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const selectedTab = tabData.find((tab) => tab.id === activeTab);
    setPromotions(selectedTab?.data || []);
  }, [activeTab]);

  return (
    <div className="w-full py-4">
  {/* Tabs */}
  <div className="flex w-full overflow-x-auto whitespace-nowrap gap-2 sm:gap-4 lg:gap-6 justify-start lg:justify-center bg-gray-200 py-2 mb-4">
  {tabData.map((tab) => (
    <button
      key={tab.id}
      className={`min-w-max py-1 text-sm font-semibold transition-all ${
        activeTab === tab.id
          ? "bg-common-blue text-white shadow-lg px-3 py-1" // Blue background for active tab
          : "bg-gray-200" // Gray background for inactive tabs
      } 
      ${activeTab === tab.id ? "rounded-md" : ""} // Rounded corners for active tab
      sm:px-4 lg:px-6`} // Adjust padding on larger screens
      onClick={() => setActiveTab(tab.id)}
    >
      {tab.label}
    </button>
  ))}
</div>





  {/* Cards */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2  py-1 px-4 lg:px-16">
    {promotions.length > 0 ? (
      promotions.map((item, index) => (
        <div key={index} className="relative bg-gray-200 shadow-lg rounded-xl">
          <img src={item.image} alt="promotion" className="w-full h-38 lg:h-60" />
          <div className="pl-2 space-y-2">
            <h2 className="mt-2 text-lg font-bold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
            <div className="hidden lg:flex flex-row gap-2 items-center">
              <svg width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#ffffff" stroke="#333" strokeWidth="2" />
                <line x1="32" y1="32" x2="32" y2="16" stroke="#333" strokeWidth="3" strokeLinecap="round" />
                <line x1="32" y1="32" x2="44" y2="32" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                <circle cx="32" cy="32" r="3" fill="#333" />
              </svg>
              <p className="text-xs text-gray-600">{item.date}</p>
            </div>

            <div className="absolute lg:bottom-20 right-2 bg-common-blue text-white px-2 py-1 text-xs rounded">
              {item.countdown}
            </div>

            <div className="mt-4 flex gap-2">
              {item.details && (
                <button
                  style={{
                    background:
                      "linear-gradient(90deg, #fbc103 0%, #f79604 15%, #f79604 30%, #fbc103 55%, #fbc103)",
                  }}
                  className="text-white text-xs px-3 py-1 rounded"
                >
                  বিস্তারিত
                </button>
              )}
              {item.apply && (
                <button
                  style={{
                    background:
                      "linear-gradient(90deg, #fbc103 0%, #f79604 15%, #f79604 30%, #fbc103 55%, #fbc103)",
                  }}
                  className="text-white text-xs px-3 py-1 rounded"
                >
                  আবেদন
                </button>
              )}
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="flex justify-center">
        <p className="text-gray-600 lg:pl-60">অনুগ্রহ করে সাথেই থাকুন। নতুন প্রচার আপনার পথে আসছে।</p>
      </div>
    )}
  </div>
</div>

  );
};

export default Promotion;
