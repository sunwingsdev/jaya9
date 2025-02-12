import React from "react";
import grahoklogo from "../assets/grahoklogo.svg";
import mullologo from "../assets/mullologo.svg";
import certificatiologo from "../assets/gaming_Casino_Analyzer.svg";
import certification2 from "../assets/certificatio2.svg";
import communitylogo1 from "../assets/communitylogo1.png";
import communitylogo2 from "../assets/communitylogo2.png";
import gaminglogo from "../assets/gaming.webp";
import jayalogo from "../assets/logo3.png";
import { Link, useLocation } from "react-router-dom";
import CricketBattingFooter from "./CricketBattingFooter/CricketBattingFooter";
import Jaya9FooterText from "./Jaya9FooterText/Jaya9FooterText";
import Jaya9PlayFooter from "./Jaya9PlayFooter/Jaya9PlayFooter";
import TableGames from "./TableGames/TableGames";
import BangladeshSeraCasino from "./BangladeshSeraCasiono/BangladeshSeraCasino";
import IbcSports from "./IbcSports/IbcSports";
import BissostoSeraFooter from "./BissostoSeraFooter/BissostoSeraFooter";
import Jaya9LotteryFooter from "./Jaya9LotteryFooter/Jaya9LotteryFooter";
import BangladeshCricketBonus from "./BangladeshCricketBonus/BangladeshCricketBonus";
import LiveCasino from "./LiveCasino/LiveCasino";
import LiveCasinoBangladeshFooter from "./LiveCasinoBangladesh/LiveCasinoBangladeshFooter";
const footerItems = [
  {
    title: "মুল্য পরিশোধ পদ্ধতি",
    logos: [mullologo],
  },
  {
    title: "গ্রাহক সমর্থন",
    logos: [grahoklogo],
    extraText: "এখন চ্যাট",
  },
  {
    title: "সার্টিফিকেশন",
    logos: [certificatiologo, certification2],
  },
  {
    title: "কমিউনিটি ওয়েবসাইট",
    logos: [communitylogo1, communitylogo2],
  },
  {
    title: "গেমিং লাইসেন্স",
    logos: [gaminglogo],
  },
];
const Footer = () => {
  const location = useLocation();

  const footerComponents = {
    "/cricket": <CricketBattingFooter />,
    "/": <Jaya9FooterText />,
    "/livecasino": <LiveCasinoBangladeshFooter />,
    "/slotgames": <Jaya9PlayFooter />,
    "/tablegames": <BangladeshSeraCasino />,
    "/sports": <IbcSports />,
    "/machdhora": <BissostoSeraFooter />,
    "/lottery": <Jaya9LotteryFooter />,
    "/crash": <BissostoSeraFooter />,
    "/promotion": <BangladeshCricketBonus />,
    "/amanot": <BissostoSeraFooter />,
    "/jayarank": <BissostoSeraFooter />,
    "/nibondon": <BissostoSeraFooter />,
    "/baji": <BissostoSeraFooter />,
    "/turnover": <BissostoSeraFooter />,
    "/sthanantor": <BissostoSeraFooter />,
    "/bonus": <BissostoSeraFooter />,
    "/lenden": <BissostoSeraFooter />,
    "/dabivoutcher": <BissostoSeraFooter />,
    "/puroskar": <BissostoSeraFooter />,
    "/jachaikoron": <BissostoSeraFooter />,
    "/passwordchange": <BissostoSeraFooter />,
    "/bankdetails": <BissostoSeraFooter />,
    "/inbox": <BissostoSeraFooter />,
    "/refference": <BissostoSeraFooter />,
    "/refferelbonus": <BissostoSeraFooter />,
    "/footertab": <BissostoSeraFooter />,
  };
  return (
    <div className="bg-informationBackground min-h-screen     py-3">
     <div className="mx-auto max-w-7xl">
     <div className="grid grid-cols-2 lg:grid-cols-5 px-8 items-center justify-items-center gap-4 font-medium font-serif">
        {footerItems.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <h3 className="whitespace-nowrap text-xs lg:text-md ">
              {item.title}
            </h3>
            <div className="flex flex-row gap-2 items-center">
              {item.logos.map((logo, i) => (
                <img key={i} src={logo} alt="" className="w-8 h-8" />
              ))}
              {item.extraText && (
                <p className="text-common-orange text-xs">{item.extraText}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className=" px-8 py-4 text-center">
        {footerComponents[location.pathname] || null}
      </div>
      <div className="flex flex-col pb-20 md:flex-row lg:px-8 space-y-2 lg:flex-row   items-center  md:justify-between lg:items-center justify-between">
        <div>
          <img src={jayalogo} alt="" className="h-12" />
        </div>
        <div className="space-y-4   lg:pb-6 text-left lg:text-center justify-center">
          <p className="text-common-blue   whitespace-nowrap text-sm flex lg:flex-wrap justify-center gap-2 lg:gap-4">
            <Link to="/footertab#tab1">
              <span className="underline pb-1 cursor-pointer hover:text-common-blue transition">
                দায়িত্বশীল গেমিং
              </span>
            </Link>

            <Link to="/footertab#tab4">
              <span className="underline pb-1 cursor-pointer hover:text-common-blue transition">
                শর্তাবলী
              </span>
            </Link>
            <Link to="/footertab#tab2">
              <span className="underline pb-1 cursor-pointer hover:text-common-blue transition">
                আমাদের সম্পর্কে
              </span>
            </Link>
          </p>
          <p className="text-gray-600   font-bold text-xs">
            কপিরাইট © 2025 [ব্র্যান্ড]। সমস্ত অধিকার সংরক্ষিত।
          </p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Footer;
