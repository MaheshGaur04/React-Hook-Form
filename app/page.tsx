'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MetricCards from '../components/MetricCards';
import OverviewCharts from '../components/OverviewCharts';
import DataTable from '../components/DataTable';

export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    // Check if user session exists in localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  // Loading spinner until session check completes
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium text-sm">Verifying session...</p>
        </div>
      </div>
    );
  }

  const tabs = ['Overview', 'Analytics', 'Reports', 'Notifications'];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Collapsible Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />

        <main className="p-6 space-y-6 overflow-y-auto">
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 space-x-6 text-sm font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 transition cursor-pointer ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-600 text-blue-600 font-bold'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          {activeTab === 'Overview' && (
            <div className="space-y-6">
              <MetricCards />
              <OverviewCharts />
              <DataTable />
            </div>
          )}

          {activeTab !== 'Overview' && (
            <div className="bg-white p-12 rounded-xl border border-gray-200 text-center space-y-2">
              <h2 className="text-lg font-bold text-gray-800">{activeTab} Section</h2>
              <p className="text-gray-500 text-sm">
                This tab is currently under preview mode. Switch back to <strong>Overview</strong> to view live metrics.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}