import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { mockTransactions } from '../../data/mockData';

const AdminPayments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const filteredTransactions = mockTransactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterType === 'all' || transaction.type === filterType)
  );

  const getStatusColor = (status) => {
    return status === 'completed' ? 'green' : 'yellow';
  };

  return (
    <Box>
      <VStack spacing={6} align="stretch">
        <Box>
          <Heading size="lg">Payment Management</Heading>
          <Text color="gray.600">Monitor all payment transactions on the platform.</Text>
        </Box>

        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <HStack spacing={4} wrap="wrap">
            <Box flex={1} minW="200px">
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<FaSearch />}
              />
            </Box>
            <Select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              w="150px"
            >
              <option value="all">All Types</option>
              <option value="payment">Payments</option>
              <option value="refund">Refunds</option>
            </Select>
          </HStack>
        </Box>

        <Box bg={cardBg} borderRadius="lg" border="1px" borderColor={borderColor} overflow="hidden">
          <Box overflowX="auto">
            <Table variant="simple">
              <Thead bg={useColorModeValue('gray.50', 'gray.700')}>
                <Tr>
                  <Th>Transaction ID</Th>
                  <Th>Order ID</Th>
                  <Th>Description</Th>
                  <Th>Amount</Th>
                  <Th>Type</Th>
                  <Th>Status</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredTransactions.map((transaction) => (
                  <Tr key={transaction.id}>
                    <Td>#{transaction.id}</Td>
                    <Td>#{transaction.orderId}</Td>
                    <Td>{transaction.description}</Td>
                    <Td color={transaction.amount < 0 ? 'red.500' : 'green.500'}>
                      ${Math.abs(transaction.amount)}
                    </Td>
                    <Td>
                      <Badge colorScheme={transaction.type === 'payment' ? 'green' : 'orange'}>
                        {transaction.type}
                      </Badge>
                    </Td>
                    <Td>
                      <Badge colorScheme={getStatusColor(transaction.status)}>
                        {transaction.status}
                      </Badge>
                    </Td>
                    <Td>{new Date(transaction.date).toLocaleDateString()}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default AdminPayments; 