import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
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
import { FaSearch, FaEye } from 'react-icons/fa';
import { mockOrders } from '../../data/mockData';

const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const filteredOrders = mockOrders.filter(order =>
    order.serviceTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterStatus === 'all' || order.status === filterStatus)
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'green';
      case 'in_progress': return 'yellow';
      case 'pending': return 'blue';
      case 'cancelled': return 'red';
      default: return 'gray';
    }
  };

  return (
    <Box>
      <VStack spacing={6} align="stretch">
        <Box>
          <Heading size="lg">Order Management</Heading>
          <Text color="gray.600">Monitor and manage all platform orders.</Text>
        </Box>

        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <HStack spacing={4} wrap="wrap">
            <Box flex={1} minW="200px">
              <Input
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<FaSearch />}
              />
            </Box>
            <Select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              w="150px"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="in_progress">In Progress</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </Select>
          </HStack>
        </Box>

        <Box bg={cardBg} borderRadius="lg" border="1px" borderColor={borderColor} overflow="hidden">
          <Box overflowX="auto">
            <Table variant="simple">
              <Thead bg={useColorModeValue('gray.50', 'gray.700')}>
                <Tr>
                  <Th>Order ID</Th>
                  <Th>Customer</Th>
                  <Th>Service</Th>
                  <Th>Vendor</Th>
                  <Th>Amount</Th>
                  <Th>Status</Th>
                  <Th>Date</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredOrders.map((order) => (
                  <Tr key={order.id}>
                    <Td>#{order.id}</Td>
                    <Td>{order.customerName}</Td>
                    <Td>{order.serviceTitle}</Td>
                    <Td>{order.vendorName}</Td>
                    <Td>${order.amount}</Td>
                    <Td>
                      <Badge colorScheme={getStatusColor(order.status)}>
                        {order.status.replace('_', ' ')}
                      </Badge>
                    </Td>
                    <Td>{new Date(order.orderDate).toLocaleDateString()}</Td>
                    <Td>
                      <Button size="sm" variant="ghost" leftIcon={<FaEye />}>
                        View
                      </Button>
                    </Td>
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

export default AdminOrders; 