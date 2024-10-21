import React from 'react';
import { Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Booking System Dashboard</h1>
          </div>
          <div className="flex items-center">
            <button className="p-1 mr-4 text-gray-400 hover:text-gray-600">
              <Bell size={20} />
            </button>
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <User size={20} className="mr-2" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;