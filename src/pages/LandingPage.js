import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { 
  FaUsers, 
  FaHandshake, 
  FaShieldAlt, 
  FaRocket,
  FaSun,
  FaMoon
} from 'react-icons/fa';

const LandingPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  const features = [
    {
      icon: FaUsers,
      title: 'Connect with Experts',
      description: 'Find skilled professionals for any service you need'
    },
    {
      icon: FaHandshake,
      title: 'Trusted Marketplace',
      description: 'Verified vendors and secure payment processing'
    },
    {
      icon: FaShieldAlt,
      title: 'Secure & Reliable',
      description: 'Your data and transactions are protected'
    },
    {
      icon: FaRocket,
      title: 'Fast & Efficient',
      description: 'Quick service delivery and instant communication'
    }
  ];

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Header */}
      <Box 
        as="header" 
        bg={cardBg} 
        boxShadow="sm" 
        position="sticky" 
        top={0} 
        zIndex={10}
      >
        <Container maxW="container.xl" py={4}>
          <HStack justify="space-between">
            <Heading size="lg" color="brand.500">
              ServLink
            </Heading>
            <HStack spacing={4}>
              <Button
                onClick={toggleColorMode}
                variant="ghost"
                size="sm"
              >
                <Icon as={colorMode === 'light' ? FaMoon : FaSun} />
              </Button>
              <Button as={Link} to="/login" colorScheme="brand">
                Get Started
              </Button>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} textAlign="center">
          <Heading 
            size="2xl" 
            bgGradient="linear(to-r, brand.400, brand.600)"
            bgClip="text"
          >
            Your Trusted Service Marketplace
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="2xl">
            Connect with skilled professionals, find reliable services, and get things done efficiently. 
            Whether you're a customer looking for quality services or a vendor wanting to grow your business.
          </Text>
          <HStack spacing={4} pt={4}>
            <Button as={Link} to="/login" size="lg" colorScheme="brand">
              Browse Services
            </Button>
            <Button as={Link} to="/login" size="lg" variant="outline">
              Become a Vendor
            </Button>
          </HStack>
        </VStack>
      </Container>

      {/* Features Section */}
      <Box py={20} bg={cardBg}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size="xl">Why Choose ServLink?</Heading>
              <Text fontSize="lg" color="gray.600" maxW="2xl">
                We provide a comprehensive platform that benefits both customers and vendors
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {features.map((feature, index) => (
                <VStack 
                  key={index} 
                  p={6} 
                  bg={bgColor} 
                  rounded="lg" 
                  spacing={4}
                  align="start"
                >
                  <Icon as={feature.icon} boxSize={8} color="brand.500" />
                  <VStack align="start" spacing={2}>
                    <Heading size="md">{feature.title}</Heading>
                    <Text color="gray.600">{feature.description}</Text>
                  </VStack>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Heading size="xl">Ready to Get Started?</Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Join thousands of satisfied customers and vendors who trust ServLink for their service needs
            </Text>
            <Button as={Link} to="/login" size="lg" colorScheme="brand">
              Start Your Journey
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg={cardBg} py={8} borderTop="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <Text textAlign="center" color="gray.600">
            © 2024 ServLink. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage; 