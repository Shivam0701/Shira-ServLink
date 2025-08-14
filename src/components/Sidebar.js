import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  useColorModeValue,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

const Sidebar = ({ navItems, isMobile = false, onClose }) => {
  const location = useLocation();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');

  const NavItem = ({ item }) => {
    const isActive = location.pathname.includes(item.path);
    const activeBg = useColorModeValue('brand.50', 'brand.900');
    const activeColor = useColorModeValue('brand.600', 'brand.200');

    return (
      <Link to={item.path} onClick={onClose}>
        <HStack
          w="full"
          px={4}
          py={3}
          spacing={3}
          borderRadius="md"
          bg={isActive ? activeBg : 'transparent'}
          color={isActive ? activeColor : 'inherit'}
          _hover={{
            bg: isActive ? activeBg : hoverBg,
          }}
          transition="all 0.2s"
        >
          <Icon as={item.icon} boxSize={5} />
          <Text fontWeight={isActive ? 'semibold' : 'normal'}>
            {item.label}
          </Text>
        </HStack>
      </Link>
    );
  };

  const SidebarContent = () => (
    <VStack
      spacing={2}
      align="stretch"
      w="full"
      h="full"
      py={4}
    >
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </VStack>
  );

  if (isMobile) {
    return (
      <Drawer isOpen={isMobile} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" borderColor={borderColor}>
            ServLink
          </DrawerHeader>
          <DrawerBody p={0}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Box
      w="250px"
      h="100vh"
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      position="fixed"
      left={0}
      top={0}
      zIndex={10}
    >
      <Box p={4} borderBottom="1px" borderColor={borderColor}>
        <Text fontSize="xl" fontWeight="bold" color="brand.500">
          ServLink
        </Text>
      </Box>
      <SidebarContent />
    </Box>
  );
};

export default Sidebar; 