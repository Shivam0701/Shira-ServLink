import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication - in real app, this would check localStorage or API
  useEffect(() => {
    const savedUser = localStorage.getItem('servlink_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password, role) => {
    // Mock login - in real app, this would be an API call
    const mockUser = {
      id: Date.now(),
      email,
      role,
      name: role === 'admin' ? 'Admin User' : 
            role === 'vendor' ? 'John Vendor' : 'Jane Customer',
      avatar: `https://ui-avatars.com/api/?name=${role}&background=3b82f6&color=fff`,
    };

    setUser(mockUser);
    localStorage.setItem('servlink_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('servlink_user');
  };

  const switchRole = (newRole) => {
    if (user) {
      const updatedUser = { ...user, role: newRole };
      setUser(updatedUser);
      localStorage.setItem('servlink_user', JSON.stringify(updatedUser));
    }
  };

  const value = {
    user,
    login,
    logout,
    switchRole,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 