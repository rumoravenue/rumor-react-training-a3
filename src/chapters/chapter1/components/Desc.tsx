import React, { ChangeEvent } from 'react'
import { VStack, Flex, Input, Text } from '@chakra-ui/react'

interface DescriptionProps {
  onChange: (value: string) => void
}

const Description: React.FC<DescriptionProps> = ({ onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <VStack>
      <Flex flexDirection="row" width="xl" align="center" mb='4'>
        <Text width="40%">Insert Description:</Text>
        <Input placeholder="Desc here" onChange={handleChange} />
      </Flex>
    </VStack>
  )
}

export default Description
