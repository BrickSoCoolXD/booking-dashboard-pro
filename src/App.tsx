import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { Layout } from './components/Layout';
import Dashboard from './pages/index';
import UserManagement from './pages/users';
import FacilityManagement from './pages/facilities';
import BookingManagement from './pages/bookings';
import Analytics from './pages/analytics';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/facilities" element={<FacilityManagement />} />
          <Route path="/bookings" element={<BookingManagement />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Layout>
    </Router>
    <Toaster />
  </QueryClientProvider>
);

export default App;