import { Box, Text } from '@chakra-ui/react'
import React from 'react'
interface descriptionType {
  description?: string
}
const Description: React.FC<descriptionType> = ({ description }) => {
  return (
    <Box>
      <Text>{description}</Text>
    </Box>
  )
}

export default Description
