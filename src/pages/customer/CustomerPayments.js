import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const CustomerPayments = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box>
      <VStack spacing={6} align="stretch">
        <Box>
          <Heading size="lg">Payments</Heading>
          <Text color="gray.600">View your payment history and manage payment methods.</Text>
        </Box>

        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <Text>Payment management functionality coming soon...</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default CustomerPayments; 