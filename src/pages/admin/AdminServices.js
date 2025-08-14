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
  Image,
} from '@chakra-ui/react';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { mockServices, mockCategories } from '../../data/mockData';

const AdminServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const filteredServices = mockServices.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'all' || service.category === filterCategory)
  );

  const getStatusColor = (status) => {
    return status === 'active' ? 'green' : 'red';
  };

  return (
    <Box>
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Box>
          <Heading size="lg">Service Management</Heading>
          <Text color="gray.600">Manage all services listed on the platform.</Text>
        </Box>

        {/* Filters */}
        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <HStack spacing={4} wrap="wrap">
            <Box flex={1} minW="200px">
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<FaSearch />}
              />
            </Box>
            <Select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              w="200px"
            >
              <option value="all">All Categories</option>
              {mockCategories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Select>
            <Button colorScheme="brand">
              Add New Service
            </Button>
          </HStack>
        </Box>

        {/* Services Table */}
        <Box bg={cardBg} borderRadius="lg" border="1px" borderColor={borderColor} overflow="hidden">
          <Box overflowX="auto">
            <Table variant="simple">
              <Thead bg={useColorModeValue('gray.50', 'gray.700')}>
                <Tr>
                  <Th>Service</Th>
                  <Th>Vendor</Th>
                  <Th>Category</Th>
                  <Th>Price</Th>
                  <Th>Rating</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredServices.map((service) => (
                  <Tr key={service.id}>
                    <Td>
                      <HStack spacing={3}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          boxSize="50px"
                          objectFit="cover"
                          borderRadius="md"
                        />
                        <Box>
                          <Text fontWeight="medium">{service.title}</Text>
                          <Text fontSize="sm" color="gray.500" noOfLines={1}>
                            {service.description}
                          </Text>
                        </Box>
                      </HStack>
                    </Td>
                    <Td>{service.vendorName}</Td>
                    <Td>{service.category}</Td>
                    <Td>${service.price}</Td>
                    <Td>
                      <HStack spacing={1}>
                        <Text>{service.rating}</Text>
                        <Text color="yellow.500">★</Text>
                        <Text fontSize="sm" color="gray.500">({service.reviews})</Text>
                      </HStack>
                    </Td>
                    <Td>
                      <Badge colorScheme={getStatusColor(service.status)}>
                        {service.status}
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
      </VStack>
    </Box>
  );
};

export default AdminServices; 