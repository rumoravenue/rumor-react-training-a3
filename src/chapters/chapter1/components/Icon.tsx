import React from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';

interface IconRightProps {
  icon?: React.ReactNode;
}

export const IconRight: React.FC<IconRightProps> = ({ icon }) => {
  return icon || <ChevronRightIcon w={6} h={6} />;
};


