import React from 'react';
import Link from 'next/link';
import { Home, Users, Briefcase, Calendar, BarChart2 } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link href="/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Users className="inline-block mr-2" size={20} />
          User Management
        </Link>
        <Link href="/facilities" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Briefcase className="inline-block mr-2" size={20} />
          Facility Management
        </Link>
        <Link href="/bookings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <Calendar className="inline-block mr-2" size={20} />
          Booking Management
        </Link>
        <Link href="/analytics" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          <BarChart2 className="inline-block mr-2" size={20} />
          Analytics
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;