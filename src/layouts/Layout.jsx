import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileBottomBar from '../components/MobileBottomBar';
import DesktopWhatsAppButton from '../components/DesktopWhatsAppButton';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pb-14 md:pb-0">
        <Outlet />
      </main>
      <Footer />

      {/* Sticky Bottom Navigation Bar (Mobile Only) */}
      <MobileBottomBar />

      {/* Floating WhatsApp Button (Desktop Only) */}
      <DesktopWhatsAppButton />
    </div>
  );
};

export default Layout;
