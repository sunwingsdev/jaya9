import React from "react";

const data = [
  {
    title: "বাংলাদেশের সেরা ক্রিকেট ক্যাসিনো বোনাস 2022-2023: আপনার টাকা দ্বিগুণ করুন!",
    content: "Jaya9 চমত্কার অফার jaya9 প্রচার 4D লোটো, লাইভ ক্যাসিনো, স্লট এবং এস্পোর্টস বাজিতে ছাড়ের হার। প্রতি সপ্তাহে খেলোয়াড়দের জন্য নগদ ছাড় পাওয়া যায় যতক্ষণ তারা খেলে! প্রতিটি খেলোয়াড় একটি সাপ্তাহিক 7 দিনের সময়ের উপর ভিত্তি করে একটি নগদ ছাড় পাবেন."
  },
  {
    title: "সেরা পান ক্রিকেট ওয়েলকাম বোনাস অনলাইন ক্যাসিনো বাংলাদেশ 2023",
    content: "বাংলাদেশের অনলাইন ক্যাসিনোগুলিকে অবশ্যই অফার এবং প্রচারগুলি নিয়ে আসতে সক্ষম হতে হবে যা আরও নতুন ক্লায়েন্টদের আকর্ষণ করতে পারে এবং তাদের বিদ্যমানগুলিকে এই ধরনের তীব্র প্রতিযোগিতার মুখে রাখতে পারে। বিপণন তাজা এবং আকর্ষণীয় প্রচার তৈরিতে একটি মূল ভূমিকা পালন করে."
  },
  {
    title: "আমাদের ভিআইপি প্রচারগুলি উপভোগ করতে জয়া9 অনলাইন ক্যাসিনো ভিআইপি-তে যোগ দিন",
    content: "jaya9-এর ভিআইপি প্রোগ্রাম তার ভিআইপি সদস্যদের সবকিছুর সেরা অফার করে। সময়ে সময়ে, আমরা আমাদের ভিআইপি সদস্যদের নগদ ছাড়, রেফারেল এবং বোনাস অফার করব."
  }
];

const BangladeshCricketBonus = () => {
  return (
    <div className="">
      {data.map((item, index) => (
        <div key={index} className=" mb-6 text-left text-sm lg:text-md">
          <h3 className="text-2xl font-sans font-bold">{item.title}</h3>
          <p className="text-base font-sans">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BangladeshCricketBonus;
