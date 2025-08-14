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
  Avatar,
  Badge,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { mockUsers } from '../../data/mockData';

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const filteredCustomers = mockUsers.customers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterRole === 'all' || filterRole === 'customer')
  );

  const filteredVendors = mockUsers.vendors.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterRole === 'all' || filterRole === 'vendor')
  );

  const getStatusColor = (status) => {
    return status === 'active' ? 'green' : 'red';
  };

  return (
    <Box>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="lg">User Management</Heading>
          <Text color="gray.600">Manage customers and vendors on your platform.</Text>
        </Box>

        {/* Filters */}
        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <HStack spacing={4} wrap="wrap">
            <Box flex={1} minW="200px">
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<FaSearch />}
              />
            </Box>
            <Select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              w="150px"
            >
              <option value="all">All Roles</option>
              <option value="customer">Customers</option>
              <option value="vendor">Vendors</option>
            </Select>
            <Button colorScheme="brand">
              Add New User
            </Button>
          </HStack>
        </Box>

        {/* Users Tabs */}
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Customers ({filteredCustomers.length})</Tab>
            <Tab>Vendors ({filteredVendors.length})</Tab>
          </TabList>

          <TabPanels>
            {/* Customers Tab */}
            <TabPanel p={0} pt={6}>
              <Box bg={cardBg} borderRadius="lg" border="1px" borderColor={borderColor} overflow="hidden">
                <Box overflowX="auto">
                  <Table variant="simple">
                    <Thead bg={useColorModeValue('gray.50', 'gray.700')}>
                      <Tr>
                        <Th>User</Th>
                        <Th>Email</Th>
                        <Th>Phone</Th>
                        <Th>Join Date</Th>
                        <Th>Orders</Th>
                        <Th>Total Spent</Th>
                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {filteredCustomers.map((customer) => (
                        <Tr key={customer.id}>
                          <Td>
                            <HStack spacing={3}>
                              <Avatar size="sm" src={customer.avatar} name={customer.name} />
                              <Text fontWeight="medium">{customer.name}</Text>
                            </HStack>
                          </Td>
                          <Td>{customer.email}</Td>
                          <Td>{customer.phone}</Td>
                          <Td>{new Date(customer.joinDate).toLocaleDateString()}</Td>
                          <Td>{customer.totalOrders}</Td>
                          <Td>${customer.totalSpent.toLocaleString()}</Td>
                          <Td>
                            <HStack spacing={2}>
                              <Button size="sm" variant="ghost" leftIcon={<FaEye />}>
                                View
                              </Button>
                              <Button size="sm" variant="ghost" leftIcon={<FaEdit />}>
                                Edit
                              </Button>
                              <Button size="sm" variant="ghost" leftIcon={<FaTrash />} colorScheme="red">
                                Delete
                              </Button>
                            </HStack>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Box>
              </Box>
            </TabPanel>

            {/* Vendors Tab */}
            <TabPanel p={0} pt={6}>
              <Box bg={cardBg} borderRadius="lg" border="1px" borderColor={borderColor} overflow="hidden">
                <Box overflowX="auto">
                  <Table variant="simple">
                    <Thead bg={useColorModeValue('gray.50', 'gray.700')}>
                      <Tr>
                        <Th>Vendor</Th>
                        <Th>Email</Th>
                        <Th>Category</Th>
                        <Th>Rating</Th>
                        <Th>Services</Th>
                        <Th>Earnings</Th>
                        <Th>Status</Th>
                        <Th>Actions</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {filteredVendors.map((vendor) => (
                        <Tr key={vendor.id}>
                          <Td>
                            <HStack spacing={3}>
                              <Avatar size="sm" src={vendor.avatar} name={vendor.name} />
                              <Text fontWeight="medium">{vendor.name}</Text>
                            </HStack>
                          </Td>
                          <Td>{vendor.email}</Td>
                          <Td>{vendor.category}</Td>
                          <Td>
                            <HStack spacing={1}>
                              <Text>{vendor.rating}</Text>
                              <Text color="yellow.500">★</Text>
                            </HStack>
                          </Td>
                          <Td>{vendor.totalServices}</Td>
                          <Td>${vendor.totalEarnings.toLocaleString()}</Td>
                          <Td>
                            <Badge colorScheme={getStatusColor(vendor.status)}>
                              {vendor.status}
                            </Badge>
                          </Td>
                          <Td>
                            <HStack spacing={2}>
                              <Button size="sm" variant="ghost" leftIcon={<FaEye />}>
                                View
                              </Button>
                              <Button size="sm" variant="ghost" leftIcon={<FaEdit />}>
                                Edit
                              </Button>
                              <Button size="sm" variant="ghost" leftIcon={<FaTrash />} colorScheme="red">
                                Delete
                              </Button>
                            </HStack>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Box>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};

export default AdminUsers; 