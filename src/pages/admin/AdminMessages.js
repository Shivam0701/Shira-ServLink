import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useColorModeValue,
  Avatar,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { mockMessages } from '../../data/mockData';

const AdminMessages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const filteredMessages = mockMessages.filter(message =>
    message.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.senderName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <VStack spacing={6} align="stretch">
        <Box>
          <Heading size="lg">Message Management</Heading>
          <Text color="gray.600">Monitor communications between users and vendors.</Text>
        </Box>

        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <HStack spacing={4} wrap="wrap">
            <Box flex={1} minW="200px">
              <Input
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<FaSearch />}
              />
            </Box>
          </HStack>
        </Box>

        <Box bg={cardBg} borderRadius="lg" border="1px" borderColor={borderColor} overflow="hidden">
          <Box overflowX="auto">
            <Table variant="simple">
              <Thead bg={useColorModeValue('gray.50', 'gray.700')}>
                <Tr>
                  <Th>From</Th>
                  <Th>To</Th>
                  <Th>Message</Th>
                  <Th>Status</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredMessages.map((message) => (
                  <Tr key={message.id}>
                    <Td>
                      <HStack spacing={3}>
                        <Avatar size="sm" name={message.senderName} />
                        <Text fontWeight="medium">{message.senderName}</Text>
                      </HStack>
                    </Td>
                    <Td>{message.receiverName}</Td>
                    <Td>
                      <Text noOfLines={2} maxW="300px">
                        {message.message}
                      </Text>
                    </Td>
                    <Td>
                      <Badge colorScheme={message.read ? 'green' : 'yellow'}>
                        {message.read ? 'Read' : 'Unread'}
                      </Badge>
                    </Td>
                    <Td>{new Date(message.timestamp).toLocaleDateString()}</Td>
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

export default AdminMessages; 