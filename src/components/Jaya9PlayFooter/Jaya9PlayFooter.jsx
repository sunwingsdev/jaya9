import React from "react";

const data = [
  {
    title: "Jaya9 - প্লে এক্সক্লুসিভ অনলাইন ক্যাসিনো স্লট বাংলাদেশ",
    content: "jaya9 অনলাইন ক্যাসিনোতে, অনলাইন স্লট গেম বাংলাদেশ অনেক বৈচিত্রে উপলব্ধ। একটি নতুন শিরোনাম প্রতি একক গেম মুক্তি হয়..."
  },
  {
    title: "আমাদের গেমিং বর্ণনা দেখুন",
    content: "তবে কিছু খেলোয়াড়ের জন্য এটি বিভ্রান্তিকর হতে পারে, কারণ বেছে নেওয়ার জন্য অনেক স্লট রয়েছে..."
  },
  {
    title: "আমাদের ক্যাসিনোতে সবচেয়ে জনপ্রিয় স্লট মেশিন",
    content: "একটি বোতামে এক ক্লিকে, আমরা আপনাকে সব সেরা অনলাইন স্লট মেশিন দেখাব..."
  }
];

const Jaya9PlayFooter = () => {
  return (
    <div className="">
      {data.map((item, index) => (
        <div key={index} className=" mb-6 text-left">
          <h3 className="text-2xl font-sans font-bold">{item.title}</h3>
          <p className="text-base font-sans">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Jaya9PlayFooter;
