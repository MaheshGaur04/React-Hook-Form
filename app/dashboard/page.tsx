'use client';

import ProtectedRoute from '../../components/ProtectedRoute';
import { useAuth } from '../../context/AuthContext';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 space-y-6 text-center">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 font-bold rounded-full flex items-center justify-center mx-auto text-2xl">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome, {user?.name}!</h1>
            <p className="text-gray-500 text-sm mt-1">{user?.email}</p>
          </div>

          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
            ✓ You have successfully accessed a protected route!
          </div>

          <button
            onClick={logout}
            className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-md hover:bg-red-700 transition cursor-pointer"
          >
            Log Out
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}