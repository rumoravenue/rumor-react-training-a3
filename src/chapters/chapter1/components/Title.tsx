import React from 'react';
import { Text } from '@chakra-ui/react';

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <Text fontWeight={600}>{children}</Text>;
};


