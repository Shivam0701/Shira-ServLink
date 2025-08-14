import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import VendorOverview from './VendorOverview';
import VendorServices from './VendorServices';
import VendorOrders from './VendorOrders';
import VendorPayments from './VendorPayments';
import VendorMessages from './VendorMessages';
import VendorSettings from './VendorSettings';
import {
  FaTachometerAlt,
  FaBriefcase,
  FaShoppingCart,
  FaCreditCard,
  FaComments,
  FaCog,
} from 'react-icons/fa';

const VendorDashboard = () => {
  const navItems = [
    {
      label: 'Dashboard',
      path: '/vendor/dashboard',
      icon: FaTachometerAlt,
    },
    {
      label: 'My Services',
      path: '/vendor/services',
      icon: FaBriefcase,
    },
    {
      label: 'Orders',
      path: '/vendor/orders',
      icon: FaShoppingCart,
    },
    {
      label: 'Payments',
      path: '/vendor/payments',
      icon: FaCreditCard,
    },
    {
      label: 'Messages',
      path: '/vendor/messages',
      icon: FaComments,
    },
    {
      label: 'Settings',
      path: '/vendor/settings',
      icon: FaCog,
    },
  ];

  const routes = [
    {
      path: 'dashboard',
      element: <VendorOverview />,
    },
    {
      path: 'services',
      element: <VendorServices />,
    },
    {
      path: 'orders',
      element: <VendorOrders />,
    },
    {
      path: 'payments',
      element: <VendorPayments />,
    },
    {
      path: 'messages',
      element: <VendorMessages />,
    },
    {
      path: 'settings',
      element: <VendorSettings />,
    },
  ];

  return (
    <DashboardLayout navItems={navItems} routes={routes} />
  );
};

export default VendorDashboard; 