import React, { ChangeEvent } from 'react'
import { VStack, Flex, Select, Text } from '@chakra-ui/react'

interface ImageInputProps {
  onChange: (value: string) => void
}

const Photo: React.FC<ImageInputProps> = ({ onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  return (
    <VStack>
      <Flex flexDirection="row" width='xl' align='center' mb='4'>
        <Text width='40%'>Insert Media:</Text>
        <Select placeholder="Select option" onChange={handleChange}>
          <option value="https://fastly.picsum.photos/id/465/536/354.jpg?hmac=WEXd5GqsLQ1Wiw0QZw0SEHS4wVLetFejAcyF-jkNH3A">
            Image 1
          </option>
          <option value="https://fastly.picsum.photos/id/100/536/354.jpg?hmac=IFSN5RUAqYtL3epHwfu5cahc51PmydqwgdB2ApY6FeM">
            Image 2
          </option>
          <option value="https://fastly.picsum.photos/id/853/536/354.jpg?hmac=QA0xGYcnolgEXyHSHMlkRXpcXT8w4J7wnUq_D-c5_s4">
            Image 3
          </option>
        </Select>
      </Flex>
    </VStack>
  )
}

export default Photo
