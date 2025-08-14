import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Box,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useAuth } from '../contexts/AuthContext';

const DashboardLayout = ({ navItems, routes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth();
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Sidebar */}
      <Sidebar 
        navItems={navItems} 
        isMobile={isOpen} 
        onClose={onClose} 
      />

      {/* Main Content */}
      <Box
        ml={{ base: 0, lg: '250px' }}
        transition="margin-left 0.2s"
      >
        {/* Header */}
        <Header onMenuClick={onOpen} user={user} />

        {/* Page Content */}
        <Box p={6}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout; 