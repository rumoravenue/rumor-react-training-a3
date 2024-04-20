import React from 'react';
import { Box, Image } from '@chakra-ui/react';

interface MediaProps {
  src: string;
}

export const Media: React.FC<MediaProps> = ({ src }) => {
  return (
    <Box>
      <Image src={src} objectFit="cover" />
    </Box>
  );
};


