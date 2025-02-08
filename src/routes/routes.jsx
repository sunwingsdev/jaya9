import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Cricket from '../components/Cricket/Cricket';
import Home from '../components/Home/Home';
import LiveCasino from '../components/LiveCasino/LiveCasino';
import SlotGames from '../components/SlotGames/SlotGames';
import Sports from '../components/Sports/Sports';
import Lottery from '../components/Lottery/Lottery';
import Crash from '../components/Crash/Crash';
import Promotion from '../components/Promotion/Promotion';
import MachDhora from '../components/MachDhoa/MachDhora';
import TableGames from '../components/TableGames/TableGames';
import Nibondon from '../components/Nibondon/Nibondon';
import Jayatable from '../components/Jayatable/Jayatable';
import Amanot from '../components/Amanot/Amanot';
import Jachaikoron from '../components/Jachaikorin/Jachaikoron';
import Information from '../components/Information/Information';
import Baji from '../components/Baji/Baji';
import Turnover from '../components/Turnover/Turnover';
import Sthanantor from '../components/Sthanantor/Sthanantor';
import Bonus from '../components/Bonus/Bonus';
import Lenden from '../components/Lenden/Lenden';
import DabiVoutcher from '../components/DabiVoutcher/DabiVoutcher';
import Puroskar from '../components/Puroskar/Puroskar';
import PasswordChange from '../components/PasswordChange/PasswordChange';
import BankDetails from '../components/BankDetails/BankDetails';
import Inbox from '../components/Inbox/Inbox';
import Refference from '../components/Refference/Refference';
import ReferelBonus from '../components/ReferelBonus/ReferelBonus';
import FooterTab from '../components/FooterTab/FooterTab';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      
      { path: '/', element: <Home /> },
      { path: '/cricket', element: <Cricket /> },
      { path: '/livecasino', element: <LiveCasino /> },
      { path: '/slotgames', element: <SlotGames /> },
      { path: '/tablegames', element: <TableGames /> },
      { path: '/sports', element: <Sports /> },
      { path: '/machdhora', element: <MachDhora /> },
      { path: '/lottery', element: <Lottery /> },
      { path: '/crash', element: <Crash /> },
      { path: '/promotion', element: <Promotion /> },
      { path: '/jayarank', element: <Jayatable /> },
      { path: '/nibondon', element: <Nibondon /> },
      { path: '/promotion', element: <Promotion /> },
      { path: '/amanot', element: <Amanot /> },
      { path: '/jachaikoron', element: <Jachaikoron /> },
      { path: '/baji', element: <Baji /> },
      { path: '/turnover', element: <Turnover /> },
      { path: '/sthanantor', element: <Sthanantor /> },
      { path: '/bonus', element: <Bonus /> },
      { path: '/lenden', element: <Lenden /> },
      { path: '/dabivoutcher', element: <DabiVoutcher /> },
      { path: '/puroskar', element: <Puroskar /> },
      { path: '/passwordchange', element: <PasswordChange /> },
      { path: '/bankdetails', element: <BankDetails /> },
      { path: '/inbox', element: <Inbox /> },
      { path: '/refference', element: <Refference /> },
      { path: '/refferelbonus', element: <ReferelBonus /> },
      { path: '/footertab', element: <FooterTab /> },
      


    ],
  },

  {
    path: '/information',
    element: <Information />,
  },
]);

export default router;
