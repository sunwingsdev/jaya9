import React from "react";

const data = [
  {
    title: "Jaya9-তে লটারি বিজয়ী হন- বিশ্বস্ত লটারি প্ল্যাটফর্ম",
    content: "অনলাইন লটারি বাংলাদেশ বাংলাদেশে এক ধরনের অনলাইন ক্যাসিনো বেটিং পাওয়া যায়। অনলাইন ক্যাসিনো উপভোগ করার জন্য এটি বিশ্বের সেরা লটারি গেমিং প্ল্যাটফর্ম।"
  },
  {
    title: "লটারি খেলার পদ্ধতি কি??",
    content: "লটারি খেলা খুব সহজ। যে কেউ অনলাইন ক্যাসিনো গেম খেলে লটারি গেম খেলতে পারে। লটারি খেলতে আপনাকে অবশ্যই লটারি প্লেয়ার হিসেবে নিবন্ধন করতে হবে এবং অর্থ জমা করতে হবে। তারপর টাকা জমা দিয়ে টিকিট কিনুন।"
  },
  {
    title: "Jaya9 এ লটারি খেলার সুবিধা কি কি?",
    content: "আপনি অনেক কারণে jaya9 অনলাইন ক্যাসিনোতে লটারি গেম খেলে থাকলে এটি সাহায্য করবে। এই লটারি গেম খেলার জন্য আমাদের কাছে কিছু সহজ গেমিং টিপস আছে। বিস্তারিত জানতে আমাদের ওয়েবসাইট দেখুন।"
  },
  {
    title: "আজকের সেরা লটারি গেম 2022-23 ব্যবহার করে দেখুন",
    content: "বাংলাদেশে জয়া9 ক্লাবের চেয়ে সামাজিক জুয়ার ক্লাব খেলার জন্য আর কোন ভালো জায়গা নেই! ইন-গেম ফ্রি এক্সট্রা আপনি লেভেল বাড়ার সাথে সাথে আরও মূল্যবান হয়ে ওঠে।"
  },
  {
    title: "অনলাইন লটারি জিতুন এটিকে সরিয়ে দিয়ে!",
    content: "সর্বদা উচ্চ স্তরের খেলোয়াড় আছে যারা লটারি গেম খেলে এবং দ্রুত অর্থ উপার্জন করে। নিঃসন্দেহে, লটারি ক্যাসিনো বাজারে সবচেয়ে বিখ্যাত গেমগুলির মধ্যে একটি। খেলোয়াড়দের সম্পদ বৃদ্ধির জন্য এটি একটি দ্রুত এবং কার্যকর উপায়।"
  }
];

const Jaya9LotteryFooter = () => {
  return (
    <div className="">
      {data.map((item, index) => (
        <div key={index} className="mb-6 text-left">
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <p className="text-base">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Jaya9LotteryFooter;
