import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const CustomerOrders = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box>
      <VStack spacing={6} align="stretch">
        <Box>
          <Heading size="lg">My Orders</Heading>
          <Text color="gray.600">Track your order status and history.</Text>
        </Box>

        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <Text>Order tracking functionality coming soon...</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default CustomerOrders; 