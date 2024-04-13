import { Card, Text } from '@chakra-ui/react'

interface ListItemProps {
  title?: string
}

const ListItem: React.FC<ListItemProps> = ({ title }) => {
  return (
    <Card padding={4}>
      <Text>{title}</Text>
    </Card>
  )
}

export default ListItem
