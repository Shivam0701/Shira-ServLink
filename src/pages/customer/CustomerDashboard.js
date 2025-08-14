import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import CustomerOverview from './CustomerOverview';
import CustomerServices from './CustomerServices';
import CustomerOrders from './CustomerOrders';
import CustomerPayments from './CustomerPayments';
import CustomerMessages from './CustomerMessages';
import CustomerSettings from './CustomerSettings';
import {
  FaTachometerAlt,
  FaSearch,
  FaShoppingCart,
  FaCreditCard,
  FaComments,
  FaCog,
} from 'react-icons/fa';

const CustomerDashboard = () => {
  const navItems = [
    {
      label: 'Dashboard',
      path: '/customer/dashboard',
      icon: FaTachometerAlt,
    },
    {
      label: 'Browse Services',
      path: '/customer/services',
      icon: FaSearch,
    },
    {
      label: 'My Orders',
      path: '/customer/orders',
      icon: FaShoppingCart,
    },
    {
      label: 'Payments',
      path: '/customer/payments',
      icon: FaCreditCard,
    },
    {
      label: 'Messages',
      path: '/customer/messages',
      icon: FaComments,
    },
    {
      label: 'Settings',
      path: '/customer/settings',
      icon: FaCog,
    },
  ];

  const routes = [
    {
      path: 'dashboard',
      element: <CustomerOverview />,
    },
    {
      path: 'services',
      element: <CustomerServices />,
    },
    {
      path: 'orders',
      element: <CustomerOrders />,
    },
    {
      path: 'payments',
      element: <CustomerPayments />,
    },
    {
      path: 'messages',
      element: <CustomerMessages />,
    },
    {
      path: 'settings',
      element: <CustomerSettings />,
    },
  ];

  return (
    <DashboardLayout navItems={navItems} routes={routes} />
  );
};

export default CustomerDashboard; 