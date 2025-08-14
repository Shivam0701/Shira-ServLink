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
  FaUsers,
  FaBriefcase,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { mockStats, mockOrders, mockServices } from '../../data/mockData';

const AdminOverview = () => {
  const stats = mockStats.admin;
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // Chart data
  const revenueData = [
    { month: 'Jan', revenue: 12000 },
    { month: 'Feb', revenue: 15000 },
    { month: 'Mar', revenue: 18000 },
    { month: 'Apr', revenue: 22000 },
    { month: 'May', revenue: 25000 },
    { month: 'Jun', revenue: 28000 },
  ];

  const orderStatusData = [
    { name: 'Completed', value: 245, color: '#10B981' },
    { name: 'In Progress', value: 67, color: '#F59E0B' },
    { name: 'Pending', value: 23, color: '#3B82F6' },
    { name: 'Cancelled', value: 7, color: '#EF4444' },
  ];

  const serviceCategoryData = [
    { category: 'Technology', count: 25 },
    { category: 'Home Services', count: 18 },
    { category: 'Design', count: 15 },
    { category: 'Marketing', count: 12 },
    { category: 'Consulting', count: 8 },
    { category: 'Education', count: 6 },
  ];

  const recentOrders = mockOrders.slice(0, 5);

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
          <Heading size="lg">Admin Dashboard</Heading>
          <Text color="gray.600">Welcome back! Here's what's happening with your platform.</Text>
        </Box>

        {/* Stats Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          <StatCard
            label="Total Users"
            value={stats.totalUsers}
            change={stats.monthlyGrowth}
            icon={FaUsers}
            color="blue.500"
          />
          <StatCard
            label="Total Vendors"
            value={stats.totalVendors}
            change={8.2}
            icon={FaBriefcase}
            color="purple.500"
          />
          <StatCard
            label="Total Orders"
            value={stats.totalOrders}
            change={15.3}
            icon={FaShoppingCart}
            color="green.500"
          />
          <StatCard
            label="Total Revenue"
            value={`$${stats.totalRevenue.toLocaleString()}`}
            change={12.5}
            icon={FaDollarSign}
            color="orange.500"
          />
        </SimpleGrid>

        {/* Charts Section */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          {/* Revenue Chart */}
          <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
            <VStack spacing={4} align="stretch">
              <Heading size="md">Revenue Trend</Heading>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
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

        {/* Service Categories Chart */}
        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <VStack spacing={4} align="stretch">
            <Heading size="md">Services by Category</Heading>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={serviceCategoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8B5CF6" />
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

export default AdminOverview; 