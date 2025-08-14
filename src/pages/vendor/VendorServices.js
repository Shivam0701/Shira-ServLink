import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const VendorServices = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box>
      <VStack spacing={6} align="stretch">
        <Box>
          <Heading size="lg">My Services</Heading>
          <Text color="gray.600">Manage your service listings and offerings.</Text>
        </Box>

        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <VStack spacing={4}>
            <Text>Service management functionality coming soon...</Text>
            <Button colorScheme="brand">Add New Service</Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default VendorServices; 