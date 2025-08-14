import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import StatCard from '../../components/StatCard';
import {
  FaShoppingCart,
  FaDollarSign,
  FaStar,
  FaClock,
  FaCheckCircle,
  FaHeart,
} from 'react-icons/fa';
import { mockStats, mockOrders, mockServices } from '../../data/mockData';

const CustomerOverview = () => {
  const stats = mockStats.customer;
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // Filter data for current customer (assuming customer ID 1)
  const customerOrders = mockOrders.filter(order => order.customerId === 1);

  // Chart data
  const spendingData = [
    { month: 'Jan', spent: 300 },
    { month: 'Feb', spent: 450 },
    { month: 'Mar', spent: 280 },
    { month: 'Apr', spent: 600 },
    { month: 'May', spent: 420 },
    { month: 'Jun', spent: 400 },
  ];

  const recentOrders = customerOrders.slice(0, 3);
  const recommendedServices = mockServices.slice(0, 3);

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
        {/* Header */}
        <Box>
          <Heading size="lg">Customer Dashboard</Heading>
          <Text color="gray.600">Welcome back! Here's your activity summary.</Text>
        </Box>

        {/* Stats Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          <StatCard
            label="Total Orders"
            value={stats.totalOrders}
            icon={FaShoppingCart}
            color="blue.500"
          />
          <StatCard
            label="Total Spent"
            value={`$${stats.totalSpent.toLocaleString()}`}
            icon={FaDollarSign}
            color="green.500"
          />
          <StatCard
            label="Active Orders"
            value={stats.activeOrders}
            icon={FaClock}
            color="yellow.500"
          />
          <StatCard
            label="Average Rating"
            value={stats.averageRating}
            icon={FaStar}
            color="purple.500"
          />
        </SimpleGrid>

        {/* Charts and Recent Activity */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          {/* Spending Chart */}
          <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
            <VStack spacing={4} align="stretch">
              <Heading size="md">Monthly Spending</Heading>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={spendingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="spent" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </VStack>
          </Box>

          {/* Recent Orders */}
          <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
            <VStack spacing={4} align="stretch">
              <Heading size="md">Recent Orders</Heading>
              <VStack spacing={3} align="stretch">
                {recentOrders.map((order) => (
                  <Box
                    key={order.id}
                    p={4}
                    border="1px"
                    borderColor={borderColor}
                    borderRadius="md"
                  >
                    <HStack justify="space-between" align="start">
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="medium">{order.serviceTitle}</Text>
                        <Text fontSize="sm" color="gray.500">
                          {order.vendorName}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                          {new Date(order.orderDate).toLocaleDateString()}
                        </Text>
                      </VStack>
                      <VStack align="end" spacing={1}>
                        <Text fontWeight="bold">${order.amount}</Text>
                        <Badge colorScheme={getStatusColor(order.status)}>
                          {order.status.replace('_', ' ')}
                        </Badge>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Recommended Services */}
        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <VStack spacing={4} align="stretch">
            <HStack justify="space-between">
              <Heading size="md">Recommended Services</Heading>
              <Button size="sm" variant="outline" colorScheme="brand">
                View All
              </Button>
            </HStack>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {recommendedServices.map((service) => (
                <Box
                  key={service.id}
                  border="1px"
                  borderColor={borderColor}
                  borderRadius="lg"
                  overflow="hidden"
                  _hover={{ boxShadow: 'md' }}
                  transition="all 0.2s"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    h="150px"
                    w="full"
                    objectFit="cover"
                  />
                  <Box p={4}>
                    <VStack align="start" spacing={2}>
                      <Text fontWeight="medium" noOfLines={1}>
                        {service.title}
                      </Text>
                      <Text fontSize="sm" color="gray.500" noOfLines={2}>
                        {service.description}
                      </Text>
                      <HStack justify="space-between" w="full">
                        <Text fontWeight="bold" color="brand.500">
                          ${service.price}
                        </Text>
                        <HStack spacing={1}>
                          <Text fontSize="sm">{service.rating}</Text>
                          <Text fontSize="sm" color="yellow.500">★</Text>
                        </HStack>
                      </HStack>
                      <Button size="sm" colorScheme="brand" w="full">
                        Book Now
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default CustomerOverview; 