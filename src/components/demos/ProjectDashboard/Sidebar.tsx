import React from 'react';
import { LayoutDashboard, Users, Settings, FolderKanban, BarChart3, Bell, Search, PanelLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItemProp = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
};

const NavItem = ({ icon: Icon, label, active }: NavItemProp) => (
  <button
    className={cn(
      "flex items-center w-full px-3 py-2 text-sm transition-colors rounded-md group",
      active
        ? "bg-blue-50 text-blue-600 font-medium"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
    )}
  >
    <Icon className={cn("w-4 h-4 mr-3", active ? "text-blue-600" : "text-slate-400 group-hover:text-slate-500")} />
    {label}
  </button>
);

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-white border-r border-slate-200">
      {/* Header */}
      <div className="h-14 flex items-center px-4 border-b border-slate-100">
          <div className="font-semibold text-slate-800 flex items-center">
             <div className="w-5 h-5 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded mr-2 flex items-center justify-center text-[10px] text-white font-bold">P</div>
             Project Dash
          </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-3 py-4 space-y-6 overflow-y-auto">
        <div className="space-y-1">
            <NavItem icon={LayoutDashboard} label="Overview" active />
            <NavItem icon={FolderKanban} label="All Projects" />
            <NavItem icon={Users} label="Team Members" />
        </div>

        <div>
            <div className="px-3 mb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Workspace
            </div>
            <div className="space-y-1">
                <NavItem icon={PanelLeft} label="Views" />
                <NavItem icon={BarChart3} label="Analytics" />
                <NavItem icon={Settings} label="Configuration" />
            </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/50">
         <div className="flex items-center p-2 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 transition-all cursor-pointer">
             <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mr-3">
                 JD
             </div>
             <div className="overflow-hidden">
                 <div className="text-sm font-medium text-slate-700 truncate">John Doe</div>
                 <div className="text-xs text-slate-500 truncate">john@example.com</div>
             </div>
         </div>
      </div>
    </div>
  );
};
