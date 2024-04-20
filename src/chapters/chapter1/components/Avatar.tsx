import React from 'react';
import { Avatar } from '@chakra-ui/react';

interface AvatarItemProps {
  src: string;
}

export const Avatars: React.FC<AvatarItemProps> = ({ src }) => {
  return <Avatar src={src} />;
};


