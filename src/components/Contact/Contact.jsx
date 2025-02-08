import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import customaersupportlogo from '../../assets/customer-support.svg';
import whatsapplogo from '../../assets/whatsapp.png';
import livechat from '../../assets/live-chat (1).svg';
import chatlogo from '../../assets/chat-mobile.svg';
import jaya9logo from '../../assets/telegram.svg';
import messengerlogo from '../../assets/metaMessenger.png';

const ContactButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <div>
        {/* for pc screen */}
        <div className="fixed hidden right-0 top-[70%] transform -translate-y-1/2 z-50 lg:flex items-center">
      {/* Main Button (Hidden on Hover) */}
      {!isHovered && (
        <button
          onMouseEnter={() => setIsHovered(true)}
          className="bg-common-orange [writing-mode:vertical-lr] text-white rotate-180 px-4 py-6 rounded-r-lg shadow-lg transition"
        >
          যোগাযোগ করুন
        </button>
      )}

      {/* Hover Options (Table with Button) */}
      {isHovered && (
      <div onMouseLeave={() => setIsHovered(false)} className="shadow-lg rounded-lg flex">
      {/* Button inside Table */}
      <div className="bg-common-orange [writing-mode:vertical-lr] rotate-180 text-white py-10 px-4 rounded-md flex justify-center items-center">
    যোগাযোগ করুন
  </div>
    
      <div className="flex flex-row">
        <table className="w-full text-left border-collapse">
          <tbody>
           
            <tr className="bg-white flex items-center gap-2">
              <td className="p-2">
                <img src={customaersupportlogo} alt="" className="w-20 h-auto object-contain" />
              </td>
              <td className="py-1 font-bold">
                <a href="https://wa.me/your-whatsapp-number" className="text-lg transition">
                CUSTOMER <br /> SUPPORT
                </a>
              </td>
            </tr>
            <tr className="bg-common-orange flex items-center gap-2">
              <td className="p-2">
                <img src={livechat} alt="" className="w-8 h-auto object-contain" />
              </td>
              <td className="py-1 pr-5 text-white font-bold">
                <a href="https://wa.me/your-whatsapp-number" className="text-lg transition">
                  সরাসরি কথোপকথন
                </a>
              </td>
            </tr>
            <tr className="bg-whatsappcolor flex items-center gap-2">
              <td className="p-2">
                <img src={whatsapplogo} alt="" className="w-8 h-auto object-contain" />
              </td>
              <td className="py-1 text-white font-bold">
                <a href="https://wa.me/your-whatsapp-number" className="text-lg transition">
                  WhatsApp
                </a>
              </td>
            </tr>
            <tr className="bg-jaya-9-color flex items-center gap-2">
              <td className="p-2">
                <img src={jaya9logo} alt="" className="w-8 h-auto object-contain" />
              </td>
              <td className="py-1 text-white font-bold">
                <a href="mailto:your-email@example.com" className="text-lg transition">
                  Jaya9
                </a>
              </td>
            </tr>
            <tr className="bg-common-blue flex items-center gap-2">
              <td className="p-2">
                <img src={messengerlogo} alt="" className="w-8 h-auto object-contain" />
              </td>
              <td className="py-1 text-white font-bold">
                <a href="tel:+123456789" className="text-lg transition">
                  Messenger
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
     
      )}
    </div>
    {/* for mobile screen */}
        <div>
        <div className="fixed lg:hidden right-5 top-[70%] z-50 flex flex-col items-center">
  {/* Chat Button (Cross Button হলে একই জায়গায় থাকবে) */}
  <button
  className="w-12 h-12 rounded-full bg-common-orange flex justify-center items-center"
  onClick={() => setOpen(!open)}
>
  {!open ? (
    <img src={chatlogo} alt="Chat" className="w-20 h-auto" /> 
  ) : (
    <svg
      className="w-6 h-8 text-white"  // SVG বড় করা
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )}
</button>


  {/* Logos (WhatsApp, Telegram, Messenger) - উপরের দিকে দেখাবে */}
  {open && (
    <div className="absolute bottom-[100%] flex flex-col items-center space-y-2 mb-2">
      <div className="w-14 h-12 rounded-full  flex justify-center items-center">
        <img src={chatlogo} alt="WhatsApp" className="w-20 h-auto" />
      </div>
      <div className="w-12 h-12 rounded-full  flex justify-center items-center">
        <img src={whatsapplogo} alt="WhatsApp" className="w-20 h-auto" />
      </div>

      <div className="w-12 h-12 rounded-full bg-jaya-9-color  flex justify-center items-center">
        <img src={jaya9logo} alt="Telegram" className="w-10 h-auto" />
      </div>

      <div className="w-12 h-12 rounded-full  flex justify-center items-center">
        <img src={messengerlogo} alt="Messenger" className="w-20 h-auto" />
      </div>
    </div>
  )}
</div>



        </div>
    </div>
  );
};

export default ContactButton;
