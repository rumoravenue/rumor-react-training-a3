import { Box } from '@chakra-ui/react'
import ListItem from './components/ListItem'
import dataList from './dataList'

const Chapter1 = () => {
  return (
    <Box>
      {dataList.map((data, index) => (
        <ListItem
          key={index}
          avatarUrl={data.avatarUrl}
          mediaUrl={data.mediaUrl}
          title={data.title}
          description={data.description}
        />
      ))}
    </Box>
  )
}

export default Chapter1
