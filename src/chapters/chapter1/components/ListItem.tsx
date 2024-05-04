import React from 'react';
import { Box, HStack, VStack, useColorModeValue } from '@chakra-ui/react';
import {Media} from './Media';
import {Avatars} from './Avatar';
import {Title} from './Title';
import {Description} from './Description';
import {IconRight} from './Icon';

interface ListItemProps {
  mediaSrc?: string;
  avatarSrc?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  mediaSrc,
  avatarSrc,
  title,
  description,
  icon,
}) => {
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box
      bg={cardBg}
      boxShadow={'md'}
      rounded={'md'}
      p={5}
      overflow={'hidden'}
    >
      <HStack spacing={4}>
        {mediaSrc && <Media src={mediaSrc} />}
        {avatarSrc && <Avatars src={avatarSrc} />}
        <VStack align={'start'}>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
        </VStack>
        <IconRight icon={icon} />
      </HStack>
    </Box>
  );
};
export default ListItem;
