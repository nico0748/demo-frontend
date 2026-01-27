import React from 'react';
import { Sidebar } from './Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar />
      {/* No overflow-auto here, because Container handles vertical flex */}
      <main className="flex-1 min-w-0 bg-white">
        {children}
      </main>
    </div>
  );
};
