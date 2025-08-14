import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import AdminOverview from './AdminOverview';
import AdminUsers from './AdminUsers';
import AdminServices from './AdminServices';
import AdminOrders from './AdminOrders';
import AdminPayments from './AdminPayments';
import AdminMessages from './AdminMessages';
import AdminSettings from './AdminSettings';
import {
  FaTachometerAlt,
  FaUsers,
  FaBriefcase,
  FaShoppingCart,
  FaCreditCard,
  FaComments,
  FaCog,
} from 'react-icons/fa';

const AdminDashboard = () => {
  const navItems = [
    {
      label: 'Dashboard',
      path: '/admin/dashboard',
      icon: FaTachometerAlt,
    },
    {
      label: 'Users',
      path: '/admin/users',
      icon: FaUsers,
    },
    {
      label: 'Services',
      path: '/admin/services',
      icon: FaBriefcase,
    },
    {
      label: 'Orders',
      path: '/admin/orders',
      icon: FaShoppingCart,
    },
    {
      label: 'Payments',
      path: '/admin/payments',
      icon: FaCreditCard,
    },
    {
      label: 'Messages',
      path: '/admin/messages',
      icon: FaComments,
    },
    {
      label: 'Settings',
      path: '/admin/settings',
      icon: FaCog,
    },
  ];

  const routes = [
    {
      path: 'dashboard',
      element: <AdminOverview />,
    },
    {
      path: 'users',
      element: <AdminUsers />,
    },
    {
      path: 'services',
      element: <AdminServices />,
    },
    {
      path: 'orders',
      element: <AdminOrders />,
    },
    {
      path: 'payments',
      element: <AdminPayments />,
    },
    {
      path: 'messages',
      element: <AdminMessages />,
    },
    {
      path: 'settings',
      element: <AdminSettings />,
    },
  ];

  return (
    <DashboardLayout navItems={navItems} routes={routes} />
  );
};

export default AdminDashboard; 