import React from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { 
  FaBars, 
  FaSun, 
  FaMoon, 
  FaSignOutAlt, 
  FaUser,
  FaCog
} from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';

const Header = ({ onMenuClick, user }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { logout, switchRole } = useAuth();
  
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleLogout = () => {
    logout();
  };

  const handleRoleSwitch = (newRole) => {
    switchRole(newRole);
  };

  return (
    <Box
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      px={6}
      py={4}
      position="sticky"
      top={0}
      zIndex={5}
    >
      <HStack justify="space-between">
        {/* Left side - Menu button */}
        <IconButton
          icon={<FaBars />}
          variant="ghost"
          onClick={onMenuClick}
          display={{ base: 'flex', lg: 'none' }}
        />

        {/* Right side - User menu and theme toggle */}
        <HStack spacing={4}>
          {/* Theme toggle */}
          <IconButton
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            variant="ghost"
            onClick={toggleColorMode}
          />

          {/* User menu */}
          <Menu>
            <MenuButton
              as={IconButton}
              variant="ghost"
              rounded="full"
            >
              <HStack spacing={3}>
                <Avatar size="sm" src={user?.avatar} name={user?.name} />
                <VStack spacing={0} align="start" display={{ base: 'none', md: 'flex' }}>
                  <Text fontSize="sm" fontWeight="medium">
                    {user?.name}
                  </Text>
                  <Text fontSize="xs" color="gray.500" textTransform="capitalize">
                    {user?.role}
                  </Text>
                </VStack>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem icon={<FaUser />}>
                Profile
              </MenuItem>
              <MenuItem icon={<FaCog />}>
                Settings
              </MenuItem>
              <Menu>
                <MenuButton as={MenuItem} icon={<FaUser />}>
                  Switch Role
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => handleRoleSwitch('customer')}>
                    Customer
                  </MenuItem>
                  <MenuItem onClick={() => handleRoleSwitch('vendor')}>
                    Vendor
                  </MenuItem>
                  <MenuItem onClick={() => handleRoleSwitch('admin')}>
                    Admin
                  </MenuItem>
                </MenuList>
              </Menu>
              <MenuItem icon={<FaSignOutAlt />} onClick={handleLogout}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header; 