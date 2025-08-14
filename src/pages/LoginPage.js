import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Heading,
  Text,
  useToast,
  Card,
  CardBody,
  Select,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const toast = useToast();
  const { login } = useAuth();
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Mock login delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user = login(email, password, role);
      
      toast({
        title: 'Login Successful',
        description: `Welcome back, ${user.name}!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      navigate(`/${role}/dashboard`);
    } catch (error) {
      toast({
        title: 'Login Failed',
        description: 'Please check your credentials and try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const quickLogin = (selectedRole) => {
    setRole(selectedRole);
    setEmail(`${selectedRole}@example.com`);
    setPassword('password123');
  };

  return (
    <Box minH="100vh" bg="gray.50" py={10}>
      <Container maxW="md">
        <VStack spacing={8}>
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Button
              as={Link}
              to="/"
              leftIcon={<Icon as={FaArrowLeft} />}
              variant="ghost"
              alignSelf="flex-start"
            >
              Back to Home
            </Button>
            <Heading size="xl" color="brand.500">
              Welcome to ServLink
            </Heading>
            <Text color="gray.600">
              Sign in to access your dashboard
            </Text>
          </VStack>

          {/* Login Form */}
          <Card w="full" bg={cardBg} border="1px" borderColor={borderColor}>
            <CardBody p={8}>
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  {/* Role Selection */}
                  <FormControl isRequired>
                    <FormLabel>Login As</FormLabel>
                    <Select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="customer">Customer</option>
                      <option value="vendor">Vendor</option>
                      <option value="admin">Admin</option>
                    </Select>
                  </FormControl>

                  {/* Email */}
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </FormControl>

                  {/* Password */}
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <HStack>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Icon as={showPassword ? FaEyeSlash : FaEye} />
                      </Button>
                    </HStack>
                  </FormControl>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    colorScheme="brand"
                    size="lg"
                    w="full"
                    isLoading={isLoading}
                  >
                    Sign In
                  </Button>
                </VStack>
              </form>
            </CardBody>
          </Card>

          {/* Quick Login Buttons */}
          <VStack spacing={4} w="full">
            <Text fontSize="sm" color="gray.600">
              Quick Login (Demo)
            </Text>
            <HStack spacing={3} w="full">
              <Button
                size="sm"
                variant="outline"
                flex={1}
                onClick={() => quickLogin('customer')}
              >
                Customer
              </Button>
              <Button
                size="sm"
                variant="outline"
                flex={1}
                onClick={() => quickLogin('vendor')}
              >
                Vendor
              </Button>
              <Button
                size="sm"
                variant="outline"
                flex={1}
                onClick={() => quickLogin('admin')}
              >
                Admin
              </Button>
            </HStack>
          </VStack>

          {/* Footer */}
          <Text fontSize="sm" color="gray.500" textAlign="center">
            This is a demo application. Use any email/password combination to login.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default LoginPage; 