// Mock data for the ServLink marketplace platform

export const mockUsers = {
  customers: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1-555-0123',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff',
      joinDate: '2024-01-15',
      totalOrders: 12,
      totalSpent: 2450.00
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1-555-0124',
      avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=10b981&color=fff',
      joinDate: '2024-02-20',
      totalOrders: 8,
      totalSpent: 1800.00
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1-555-0125',
      avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson&background=f59e0b&color=fff',
      joinDate: '2024-03-10',
      totalOrders: 5,
      totalSpent: 950.00
    }
  ],
  vendors: [
    {
      id: 1,
      name: 'Tech Solutions Pro',
      email: 'contact@techsolutions.com',
      phone: '+1-555-0201',
      avatar: 'https://ui-avatars.com/api/?name=Tech+Solutions&background=8b5cf6&color=fff',
      category: 'Technology',
      rating: 4.8,
      totalServices: 15,
      totalEarnings: 12500.00,
      status: 'active',
      joinDate: '2024-01-01'
    },
    {
      id: 2,
      name: 'Home Cleaning Experts',
      email: 'info@homecleaning.com',
      phone: '+1-555-0202',
      avatar: 'https://ui-avatars.com/api/?name=Home+Cleaning&background=06b6d4&color=fff',
      category: 'Home Services',
      rating: 4.9,
      totalServices: 8,
      totalEarnings: 8900.00,
      status: 'active',
      joinDate: '2024-01-10'
    },
    {
      id: 3,
      name: 'Design Studio Creative',
      email: 'hello@designstudio.com',
      phone: '+1-555-0203',
      avatar: 'https://ui-avatars.com/api/?name=Design+Studio&background=ec4899&color=fff',
      category: 'Design',
      rating: 4.7,
      totalServices: 12,
      totalEarnings: 15600.00,
      status: 'active',
      joinDate: '2024-02-01'
    }
  ]
};

export const mockServices = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Professional website development with modern technologies',
    vendorId: 1,
    vendorName: 'Tech Solutions Pro',
    category: 'Technology',
    price: 1500.00,
    duration: '2-3 weeks',
    rating: 4.8,
    reviews: 24,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'House Cleaning Service',
    description: 'Complete house cleaning including kitchen, bathroom, and living areas',
    vendorId: 2,
    vendorName: 'Home Cleaning Experts',
    category: 'Home Services',
    price: 120.00,
    duration: '3-4 hours',
    rating: 4.9,
    reviews: 156,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'Logo Design',
    description: 'Professional logo design with multiple concepts and revisions',
    vendorId: 3,
    vendorName: 'Design Studio Creative',
    category: 'Design',
    price: 300.00,
    duration: '1 week',
    rating: 4.7,
    reviews: 89,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'iOS and Android app development with modern UI/UX',
    vendorId: 1,
    vendorName: 'Tech Solutions Pro',
    category: 'Technology',
    price: 2500.00,
    duration: '4-6 weeks',
    rating: 4.6,
    reviews: 18,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    title: 'Deep Carpet Cleaning',
    description: 'Professional carpet cleaning with steam technology',
    vendorId: 2,
    vendorName: 'Home Cleaning Experts',
    category: 'Home Services',
    price: 200.00,
    duration: '2-3 hours',
    rating: 4.8,
    reviews: 67,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop'
  }
];

export const mockOrders = [
  {
    id: 1,
    customerId: 1,
    customerName: 'John Doe',
    serviceId: 1,
    serviceTitle: 'Website Development',
    vendorId: 1,
    vendorName: 'Tech Solutions Pro',
    amount: 1500.00,
    status: 'completed',
    orderDate: '2024-01-20',
    completionDate: '2024-02-10',
    paymentStatus: 'paid'
  },
  {
    id: 2,
    customerId: 2,
    customerName: 'Jane Smith',
    serviceId: 2,
    serviceTitle: 'House Cleaning Service',
    vendorId: 2,
    vendorName: 'Home Cleaning Experts',
    amount: 120.00,
    status: 'in_progress',
    orderDate: '2024-03-15',
    completionDate: null,
    paymentStatus: 'paid'
  },
  {
    id: 3,
    customerId: 3,
    customerName: 'Mike Johnson',
    serviceId: 3,
    serviceTitle: 'Logo Design',
    vendorId: 3,
    vendorName: 'Design Studio Creative',
    amount: 300.00,
    status: 'pending',
    orderDate: '2024-03-20',
    completionDate: null,
    paymentStatus: 'pending'
  },
  {
    id: 4,
    customerId: 1,
    customerName: 'John Doe',
    serviceId: 4,
    serviceTitle: 'Mobile App Development',
    vendorId: 1,
    vendorName: 'Tech Solutions Pro',
    amount: 2500.00,
    status: 'cancelled',
    orderDate: '2024-02-25',
    completionDate: null,
    paymentStatus: 'refunded'
  }
];

export const mockTransactions = [
  {
    id: 1,
    orderId: 1,
    amount: 1500.00,
    type: 'payment',
    status: 'completed',
    date: '2024-01-20',
    description: 'Payment for Website Development'
  },
  {
    id: 2,
    orderId: 2,
    amount: 120.00,
    type: 'payment',
    status: 'completed',
    date: '2024-03-15',
    description: 'Payment for House Cleaning Service'
  },
  {
    id: 3,
    orderId: 3,
    amount: 300.00,
    type: 'payment',
    status: 'pending',
    date: '2024-03-20',
    description: 'Payment for Logo Design'
  },
  {
    id: 4,
    orderId: 4,
    amount: -2500.00,
    type: 'refund',
    status: 'completed',
    date: '2024-03-01',
    description: 'Refund for cancelled Mobile App Development'
  }
];

export const mockMessages = [
  {
    id: 1,
    senderId: 1,
    senderName: 'John Doe',
    receiverId: 1,
    receiverName: 'Tech Solutions Pro',
    message: 'Hi, I need some modifications to the website design. Can we discuss this?',
    timestamp: '2024-03-20T10:30:00Z',
    read: true
  },
  {
    id: 2,
    senderId: 1,
    senderName: 'Tech Solutions Pro',
    receiverId: 1,
    receiverName: 'John Doe',
    message: 'Of course! I\'m available for a call tomorrow at 2 PM. Would that work for you?',
    timestamp: '2024-03-20T11:15:00Z',
    read: true
  },
  {
    id: 3,
    senderId: 2,
    senderName: 'Jane Smith',
    receiverId: 2,
    receiverName: 'Home Cleaning Experts',
    message: 'What time will you arrive for the cleaning service?',
    timestamp: '2024-03-19T14:20:00Z',
    read: false
  }
];

export const mockStats = {
  admin: {
    totalUsers: 156,
    totalVendors: 23,
    totalServices: 89,
    totalOrders: 342,
    totalRevenue: 45600.00,
    monthlyGrowth: 12.5,
    activeUsers: 89,
    pendingApprovals: 7
  },
  vendor: {
    totalServices: 15,
    totalOrders: 67,
    totalEarnings: 12500.00,
    averageRating: 4.8,
    completedOrders: 58,
    pendingOrders: 9,
    monthlyGrowth: 8.3
  },
  customer: {
    totalOrders: 12,
    totalSpent: 2450.00,
    activeOrders: 2,
    completedOrders: 10,
    savedServices: 8,
    averageRating: 4.7
  }
};

export const mockCategories = [
  'Technology',
  'Home Services',
  'Design',
  'Marketing',
  'Consulting',
  'Education',
  'Health & Wellness',
  'Legal Services'
];

export const mockNotifications = [
  {
    id: 1,
    title: 'New Order Received',
    message: 'You have received a new order for Website Development',
    type: 'order',
    read: false,
    timestamp: '2024-03-20T09:00:00Z'
  },
  {
    id: 2,
    title: 'Payment Received',
    message: 'Payment of $1500.00 has been received for order #1234',
    type: 'payment',
    read: true,
    timestamp: '2024-03-19T15:30:00Z'
  },
  {
    id: 3,
    title: 'Service Approved',
    message: 'Your service "Mobile App Development" has been approved',
    type: 'approval',
    read: true,
    timestamp: '2024-03-18T11:20:00Z'
  }
]; 