'use client';

import { useState } from 'react';

const initialData = [
  { id: 'ORD-001', customer: 'Liam Johnson', email: 'liam@example.com', amount: '₹250.00', status: 'Approved' },
  { id: 'ORD-002', customer: 'Olivia Smith', email: 'olivia@example.com', amount: '₹150.00', status: 'Pending' },
  { id: 'ORD-003', customer: 'Noah Williams', email: 'noah@example.com', amount: '₹350.00', status: 'Approved' },
  { id: 'ORD-004', customer: 'Emma Brown', email: 'emma@example.com', amount: '₹450.00', status: 'Declined' },
  { id: 'ORD-005', customer: 'Ava Davis', email: 'ava@example.com', amount: '₹550.00', status: 'Approved' },
];

export default function DataTable() {
  const [data, setData] = useState(initialData);
  const [sorted, setSorted] = useState(false);

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) =>
      sorted ? a.customer.localeCompare(b.customer) : b.customer.localeCompare(a.customer)
    );
    setData(sortedData);
    setSorted(!sorted);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
      <div className="p-5 flex items-center justify-between border-b border-gray-100">
        <div>
          <h3 className="text-base font-bold text-gray-800">Recent Transactions</h3>
          <p className="text-xs text-gray-500">Manage recent order payments and customer details</p>
        </div>
        <button
          onClick={handleSort}
          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-3 py-1.5 rounded-md cursor-pointer transition"
        >
          Sort by Name ({sorted ? 'Z-A' : 'A-Z'})
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500 border-b border-gray-100">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition">
                <td className="p-4 font-medium text-gray-900">{row.id}</td>
                <td className="p-4">
                  <div>
                    <p className="font-semibold text-gray-800">{row.customer}</p>
                    <p className="text-xs text-gray-400">{row.email}</p>
                  </div>
                </td>
                <td className="p-4 font-semibold text-gray-900">{row.amount}</td>
                <td className="p-4">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${
                      row.status === 'Approved'
                        ? 'bg-green-100 text-green-700'
                        : row.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span>Showing 1 to 5 of 24 entries</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded-md bg-white hover:bg-gray-100 cursor-pointer disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-3 py-1 border rounded-md bg-white hover:bg-gray-100 cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}