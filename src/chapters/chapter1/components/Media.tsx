import { Card, Image } from '@chakra-ui/react'
import React from 'react'
interface mediaType {
  url?: string
  alt?: string
}
const Media: React.FC<mediaType> = ({ url, alt = 'image' }) => {
  return (
    <Card>
      <Image
        src={url}
        alt={alt}
        borderRadius={'2px'}
        boxSize={'5rem'}
        objectFit={'cover'}
      />
    </Card>
  )
}

export default Media
