import { Box, VStack } from '@chakra-ui/react'
import ListItem from './components/ListItem'

const Chapter1 = () => {
  return (
    <Box>
      <VStack alignItems="flex-start">
        <ListItem title="List item" />
        <ListItem title="List item" />
        <ListItem title="List item" />
        <ListItem title="List item" />
      </VStack>
    </Box>
  )
}

export default Chapter1
