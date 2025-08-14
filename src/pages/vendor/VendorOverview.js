import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import StatCard from '../../components/StatCard';
import {
  FaBriefcase,
  FaShoppingCart,
  FaDollarSign,
  FaStar,
  FaCheckCircle,
  FaClock,
} from 'react-icons/fa';
import { mockStats, mockOrders, mockServices } from '../../data/mockData';

const VendorOverview = () => {
  const stats = mockStats.vendor;
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // Filter data for current vendor (assuming vendor ID 1)
  const vendorOrders = mockOrders.filter(order => order.vendorId === 1);
  const vendorServices = mockServices.filter(service => service.vendorId === 1);

  // Chart data
  const earningsData = [
    { month: 'Jan', earnings: 2000 },
    { month: 'Feb', earnings: 2500 },
    { month: 'Mar', earnings: 3000 },
    { month: 'Apr', earnings: 2800 },
    { month: 'May', earnings: 3500 },
    { month: 'Jun', earnings: 4000 },
  ];

  const orderStatusData = [
    { name: 'Completed', value: 45, color: '#10B981' },
    { name: 'In Progress', value: 12, color: '#F59E0B' },
    { name: 'Pending', value: 8, color: '#3B82F6' },
    { name: 'Cancelled', value: 2, color: '#EF4444' },
  ];

  const servicePerformanceData = vendorServices.map(service => ({
    service: service.title,
    orders: Math.floor(Math.random() * 20) + 5,
    revenue: service.price * (Math.floor(Math.random() * 20) + 5),
  }));

  const recentOrders = vendorOrders.slice(0, 5);

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
          <Heading size="lg">Vendor Dashboard</Heading>
          <Text color="gray.600">Welcome back! Here's how your business is performing.</Text>
        </Box>

        {/* Stats Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          <StatCard
            label="Total Services"
            value={stats.totalServices}
            change={stats.monthlyGrowth}
            icon={FaBriefcase}
            color="blue.500"
          />
          <StatCard
            label="Total Orders"
            value={stats.totalOrders}
            change={15.3}
            icon={FaShoppingCart}
            color="green.500"
          />
          <StatCard
            label="Total Earnings"
            value={`$${stats.totalEarnings.toLocaleString()}`}
            change={12.5}
            icon={FaDollarSign}
            color="orange.500"
          />
          <StatCard
            label="Average Rating"
            value={stats.averageRating}
            icon={FaStar}
            color="yellow.500"
          />
        </SimpleGrid>

        {/* Charts Section */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          {/* Earnings Chart */}
          <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
            <VStack spacing={4} align="stretch">
              <Heading size="md">Earnings Trend</Heading>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="earnings" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </VStack>
          </Box>

          {/* Order Status Chart */}
          <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
            <VStack spacing={4} align="stretch">
              <Heading size="md">Order Status Distribution</Heading>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {orderStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Service Performance Chart */}
        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <VStack spacing={4} align="stretch">
            <Heading size="md">Service Performance</Heading>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={servicePerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="service" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </VStack>
        </Box>

        {/* Recent Orders */}
        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <VStack spacing={4} align="stretch">
            <Heading size="md">Recent Orders</Heading>
            <Box overflowX="auto">
              <Box as="table" w="full">
                <Box as="thead">
                  <Box as="tr" borderBottom="1px" borderColor={borderColor}>
                    <Box as="th" py={3} px={4} textAlign="left">Order ID</Box>
                    <Box as="th" py={3} px={4} textAlign="left">Customer</Box>
                    <Box as="th" py={3} px={4} textAlign="left">Service</Box>
                    <Box as="th" py={3} px={4} textAlign="left">Amount</Box>
                    <Box as="th" py={3} px={4} textAlign="left">Status</Box>
                  </Box>
                </Box>
                <Box as="tbody">
                  {recentOrders.map((order) => (
                    <Box as="tr" key={order.id} borderBottom="1px" borderColor={borderColor}>
                      <Box as="td" py={3} px={4}>#{order.id}</Box>
                      <Box as="td" py={3} px={4}>{order.customerName}</Box>
                      <Box as="td" py={3} px={4}>{order.serviceTitle}</Box>
                      <Box as="td" py={3} px={4}>${order.amount}</Box>
                      <Box as="td" py={3} px={4}>
                        <Badge colorScheme={getStatusColor(order.status)}>
                          {order.status.replace('_', ' ')}
                        </Badge>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default VendorOverview; 