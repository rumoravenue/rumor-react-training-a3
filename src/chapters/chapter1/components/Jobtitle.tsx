import React, { ChangeEvent } from 'react';
import { VStack, Flex, Input, Text } from '@chakra-ui/react';

interface JobTitleProps {
  onChange: (value: string) => void;
}

const JobTitle: React.FC<JobTitleProps> = ({ onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <VStack>
       <Flex flexDirection="row" width='xl' align='center' mb='4'>
       <Text width='40%'>Insert Title:</Text>
        <Input placeholder="Basic usage" onChange={handleChange} />
      </Flex>
    </VStack>
  );
};

export default JobTitle;
