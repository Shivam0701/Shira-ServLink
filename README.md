# ServLink - Service Marketplace Platform

A comprehensive, responsive web application for a service marketplace platform with three separate dashboards for Admin, Vendor, and Customer roles.

## 🚀 Features

### 🔐 Authentication & Role Management
- Role-based login system (Admin, Vendor, Customer)
- Mock authentication with localStorage persistence
- Protected routes with role-based access control
- Easy role switching for demo purposes

### 🎨 Modern UI/UX
- Built with React.js and Chakra UI
- Responsive design for all screen sizes
- Light/Dark mode toggle
- Beautiful, accessible components
- Tailwind CSS for custom styling

### 📊 Admin Dashboard
- **Overview**: Platform statistics, revenue charts, order distribution
- **User Management**: Manage customers and vendors
- **Service Management**: Monitor and manage all platform services
- **Order Management**: Track all platform orders
- **Payment Management**: Monitor transactions and payments
- **Message Management**: View communications between users
- **Settings**: Platform-wide configuration

### 🏪 Vendor Dashboard
- **Overview**: Business performance metrics, earnings charts
- **My Services**: Manage service listings
- **Orders**: Track incoming orders and manage status
- **Payments**: View earnings and payment history
- **Messages**: Communicate with customers
- **Settings**: Profile and business settings

### 👤 Customer Dashboard
- **Overview**: Personal activity summary, spending trends
- **Browse Services**: Discover and book services
- **My Orders**: Track order status and history
- **Payments**: View payment history
- **Messages**: Communicate with vendors
- **Settings**: Profile and preferences

## 🛠 Tech Stack

- **Frontend**: React.js 18
- **Routing**: React Router v6
- **UI Components**: Chakra UI
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: React Icons & Lucide React
- **State Management**: React Context API

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Dashboard header with user menu
│   ├── Sidebar.js      # Navigation sidebar
│   ├── StatCard.js     # Statistics display component
│   └── ProtectedRoute.js # Route protection component
├── contexts/           # React contexts
│   └── AuthContext.js  # Authentication state management
├── data/              # Mock data
│   └── mockData.js    # All mock data for the application
├── layouts/           # Layout components
│   └── DashboardLayout.js # Main dashboard layout
├── pages/             # Page components
│   ├── LandingPage.js # Public landing page
│   ├── LoginPage.js   # Authentication page
│   ├── admin/         # Admin dashboard pages
│   ├── vendor/        # Vendor dashboard pages
│   └── customer/      # Customer dashboard pages
├── App.js             # Main application component
├── index.js           # Application entry point
└── theme.js           # Chakra UI theme configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ServLink
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔑 Demo Login

The application includes quick login buttons for demo purposes:

- **Customer**: customer@example.com / password123
- **Vendor**: vendor@example.com / password123  
- **Admin**: admin@example.com / password123

Or use the "Quick Login" buttons on the login page.

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Theme Colors
Edit `src/theme.js` to customize the color scheme:
```javascript
colors: {
  brand: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize your brand colors
  },
}
```

### Mock Data
All data is stored in `src/data/mockData.js`. You can:
- Add more users, services, or orders
- Modify existing data
- Add new data structures

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 📊 Features Overview

### Admin Features
- ✅ Platform statistics and analytics
- ✅ User management (customers & vendors)
- ✅ Service approval and management
- ✅ Order monitoring
- ✅ Payment tracking
- ✅ Communication monitoring
- ✅ Platform settings

### Vendor Features
- ✅ Business performance dashboard
- ✅ Service management
- ✅ Order tracking and management
- ✅ Earnings and payment history
- ✅ Customer communication
- ✅ Profile and business settings

### Customer Features
- ✅ Personal dashboard
- ✅ Service browsing and booking
- ✅ Order tracking
- ✅ Payment history
- ✅ Vendor communication
- ✅ Profile settings

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Push your code to GitHub
2. Connect your repository to Netlify/Vercel
3. Set build command: `npm run build`
4. Set publish directory: `build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Create an issue in the repository
- Contact the development team

## 🔮 Future Enhancements

- [ ] Real backend integration
- [ ] Real-time messaging
- [ ] Payment gateway integration
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] Multi-language support
- [ ] Advanced search and filters
- [ ] Review and rating system
- [ ] Notification system

---

**ServLink** - Your trusted service marketplace platform 🚀 