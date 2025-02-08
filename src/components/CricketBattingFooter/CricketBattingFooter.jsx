import React from "react";

const data = [
  {
    title: "ক্রিকেট বেটিং অ্যাপ ডাউনলোড করুন | সেরা অনলাইন ক্রিকেট এক্সচেঞ্জ | বাংলাদেশ ক্রিকেট বেটিং | ক্রিকেট ক্যাসিনো",
    content: "শীর্ষ বাংলাদেশ ক্রিকেট বেটিং সাইটে বাজি ধরুন 2022-23..."
  },
  {
    title: "আপনার বাজি রাখার জন্য বাংলাদেশের সেরা ক্রিকেট বেটিং সাইটগুলিতে যান",
    content: "আমাদের পেশাদাররা অত্যন্ত সুপারিশ ক্রিকেট ক্যাসিনো..."
  },
  {
    title: "আপনার ক্রিকেট বেটিং জার্নি শুরু করার সেরা উপায় কি?",
    content: "দ্য ক্রিকেট এক্সচেঞ্জ আপনাকে আপনার বেটিং যাত্রা শুরু করতে সাহায্য করে..."
  },
  {
    title: "বৈশিষ্ট্য",
    content: "ক্রিকেট এক্সচেঞ্জের জন্য মোবাইল বা ট্যাবলেট নিবন্ধন..."
  },
  {
    title: "যোগাযোগ করুণ",
    content: "https://www.jaya9.app/cricket/ ডাউনলোড করতে বাংলাদেশ ক্রিকেট বেটিং সফটওয়্যার..."
  },
  {
    title: "JAYA9 ক্যাসিনো 2023 | লাইভ ক্যাসিনো বাংলাদেশ | বাংলাদেশের সেরা ক্রিকেট ক্যাসিনো",
    content: ""
  }
];

const CricketBattingFooter = () => {
  return (
    <div className=" ">
      {data.map((item, index) => (
        <div key={index} className=" mb-6  text-left">
          <h3 className="text-2xl font-sans font-bold">{item.title}</h3>
          <p className="text-base font-sans">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CricketBattingFooter;
