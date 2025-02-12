import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ContactButton from '../Contact/Contact';
import SmallDeviceModal from '../SmallDeviceModal/SmallDeviceModal';

const Layout = () => {
  const [isModal, setIsModal] = useState(true);
  return (
    <div className="App">
      <SmallDeviceModal isModal={isModal} setIsModal={setIsModal} ></SmallDeviceModal>
      <Header isModal={isModal}/>
      <main>
        <Outlet />
      </main>
      <Footer />
      <ContactButton></ContactButton>
    </div>
  );
};

export default Layout;
