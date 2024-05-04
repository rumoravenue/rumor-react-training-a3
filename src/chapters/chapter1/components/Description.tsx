import React from 'react';
import { Text } from '@chakra-ui/react';

interface DescriptionProps {
  children: React.ReactNode;
}

export  const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <Text color={'gray.500'}>{children}</Text>;
};


