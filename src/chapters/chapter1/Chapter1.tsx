import { Box, VStack } from '@chakra-ui/react'
import ListItem from './components/ListItem'

const Chapter1 = () => {
  return (
    <Box>
      <VStack alignItems="flex-start">
        <ListItem
          avatarSrc="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png"
          title="List item 1"
          description="This is the description."
        />
        <ListItem
          mediaSrc="https://images.pexels.com/photos/14894306/pexels-photo-14894306.jpeg?auto=compress&cs=tinysrgb&w=70&h=50"
          avatarSrc="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png"
          title="List item 2"
          description="This is the description."
        />
        <ListItem
          avatarSrc="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png"
          title="List item 3"
        />
        <ListItem title="List item 4" />
        <ListItem
          mediaSrc="https://images.pexels.com/photos/14894306/pexels-photo-14894306.jpeg?auto=compress&cs=tinysrgb&w=70&h=50"
          title="List item 5"
        />
      </VStack>
    </Box>
  )
}

export default Chapter1
