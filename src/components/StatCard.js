import React from 'react';
import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

const StatCard = ({ 
  label, 
  value, 
  change, 
  changeType = 'increase', 
  icon, 
  color = 'brand.500',
  formatValue = (val) => val 
}) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="lg"
      border="1px"
      borderColor={borderColor}
      boxShadow="sm"
      _hover={{ boxShadow: 'md' }}
      transition="all 0.2s"
    >
      <Stat>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <StatLabel color="gray.600" fontSize="sm" fontWeight="medium">
              {label}
            </StatLabel>
            <StatNumber fontSize="2xl" fontWeight="bold" color={color}>
              {formatValue(value)}
            </StatNumber>
            {change && (
              <StatHelpText mb={0}>
                <StatArrow type={changeType} />
                {change}%
              </StatHelpText>
            )}
          </Box>
          {icon && (
            <Icon as={icon} boxSize={8} color={color} opacity={0.8} />
          )}
        </Box>
      </Stat>
    </Box>
  );
};

export default StatCard; 