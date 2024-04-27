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
        <Text width="40%">Enter Job Description:</Text>
        <Input placeholder="Enter Your Job Description" onChange={handleChange} />
      </Flex>
    </VStack>
  )
}

export default Description
