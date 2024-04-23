import { Icon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import React from 'react'

interface iconType {
  icon: React.ElementType
}
const IconSign = ({ icon }: iconType) => {
  return (
    <Box>
      <Icon as={icon} boxSize={'1.5rem'} />
    </Box>
  )
}

export default IconSign
