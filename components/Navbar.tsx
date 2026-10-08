'use client';

import { Search, Bell, Download, RefreshCw, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [toast, setToast] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-gray-800">Dashboard Overview</h1>
      </div>

      {/* Center Search Input */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 w-72">
        <Search size={18} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search metrics, reports..."
          className="bg-transparent text-sm w-full focus:outline-none text-gray-700"
        />
      </div>

      {/* Action Controls & Notifications */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => showNotification('Data refreshed successfully!')}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer transition hidden sm:flex"
          title="Refresh Data"
        >
          <RefreshCw size={18} />
        </button>

        <button
          onClick={() => showNotification('Downloading CSV report...')}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer transition"
        >
          <Download size={14} />
          <span className="hidden sm:inline">Export</span>
        </button>

        <div className="relative">
          <button
            onClick={() => showNotification('You have 2 unread notifications')}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer relative"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Toast Popup */}
      {toast && (
        <div className="fixed bottom-5 right-5 bg-gray-900 text-white text-sm px-4 py-2.5 rounded-lg shadow-xl z-50 animate-bounce">
          {toast}
        </div>
      )}
    </header>
  );
}