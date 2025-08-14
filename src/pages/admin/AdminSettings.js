import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Textarea,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';

const AdminSettings = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box>
      <VStack spacing={6} align="stretch">
        <Box>
          <Heading size="lg">Platform Settings</Heading>
          <Text color="gray.600">Configure platform-wide settings and preferences.</Text>
        </Box>

        {/* General Settings */}
        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <VStack spacing={6} align="stretch">
            <Heading size="md">General Settings</Heading>
            
            <FormControl>
              <FormLabel>Platform Name</FormLabel>
              <Input defaultValue="ServLink" />
            </FormControl>

            <FormControl>
              <FormLabel>Platform Description</FormLabel>
              <Textarea 
                defaultValue="Your trusted service marketplace platform"
                rows={3}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Contact Email</FormLabel>
              <Input defaultValue="support@servlink.com" />
            </FormControl>

            <FormControl>
              <FormLabel>Support Phone</FormLabel>
              <Input defaultValue="+1-555-0123" />
            </FormControl>
          </VStack>
        </Box>

        {/* Commission Settings */}
        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <VStack spacing={6} align="stretch">
            <Heading size="md">Commission Settings</Heading>
            
            <FormControl>
              <FormLabel>Platform Commission (%)</FormLabel>
              <Input defaultValue="10" type="number" />
            </FormControl>

            <FormControl>
              <FormLabel>Minimum Payout Amount</FormLabel>
              <Input defaultValue="50" type="number" />
            </FormControl>

            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Enable Auto Payout</FormLabel>
              <Switch defaultChecked />
            </FormControl>
          </VStack>
        </Box>

        {/* Security Settings */}
        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <VStack spacing={6} align="stretch">
            <Heading size="md">Security Settings</Heading>
            
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Require Email Verification</FormLabel>
              <Switch defaultChecked />
            </FormControl>

            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Require Phone Verification</FormLabel>
              <Switch />
            </FormControl>

            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Enable Two-Factor Authentication</FormLabel>
              <Switch />
            </FormControl>

            <FormControl>
              <FormLabel>Session Timeout (minutes)</FormLabel>
              <Input defaultValue="30" type="number" />
            </FormControl>
          </VStack>
        </Box>

        {/* Notification Settings */}
        <Box bg={cardBg} p={6} borderRadius="lg" border="1px" borderColor={borderColor}>
          <VStack spacing={6} align="stretch">
            <Heading size="md">Notification Settings</Heading>
            
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Email Notifications</FormLabel>
              <Switch defaultChecked />
            </FormControl>

            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">SMS Notifications</FormLabel>
              <Switch />
            </FormControl>

            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Push Notifications</FormLabel>
              <Switch defaultChecked />
            </FormControl>
          </VStack>
        </Box>

        {/* Save Button */}
        <HStack justify="flex-end" spacing={4}>
          <Button variant="outline">Reset to Default</Button>
          <Button colorScheme="brand">Save Settings</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AdminSettings; 