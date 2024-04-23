import React, { ChangeEvent } from 'react'
import { VStack, Flex, Select, Text } from '@chakra-ui/react'

interface AvatarProps {
  onChange: (value: string) => void
}

const Avatar: React.FC<AvatarProps> = ({ onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  return (
    <VStack>
      <Flex flexDirection="row" width="xl" align="center" mb='4'>
        <Text width="40%">Insert Avatar:</Text>
        <Select placeholder="Select option" onChange={handleChange}>
          <option value="https://bit.ly/dan-abramov">Avatar 1</option>
          <option value="https://bit.ly/tioluwani-kolawole">Avatar 2</option>
          <option value="https://bit.ly/kent-c-dodds">Avatar 3</option>
        </Select>
      </Flex>
    </VStack>
  )
}

export default Avatar
