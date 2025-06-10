'use client';

import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { useI18n } from "@/lib/i18n";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { locale } = useI18n();
  const isFarsi = locale === 'fa';

  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">
        <div
          className={`
            fixed top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto
            ${isFarsi ? 'right-0' : 'left-0'}
          `}
        >
          <Sidebar />
        </div>
        <div className={isFarsi ? 'lg:pr-[264px] w-full' : 'lg:pl-[264px] w-full'}>
          <div className="h-full max-w-screen-xl mx-auto">
            <Navbar />
            <main className="flex flex-col h-full px-4 py-4">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
