import { Box, Image } from '@chakra-ui/react'
import React from 'react'

interface AvatarType {
  url?: string
  alt?: string
}

const Avatar: React.FC<AvatarType> = ({ url, alt = 'avtar' }) => {
  return (
    <Box pl={'.8rem'}>
      <Image
        borderRadius={'50%'}
        src={url}
        alt={alt}
        boxSize={'5rem'}
        objectFit={'cover'}
      />
    </Box>
  )
}

export default Avatar
