import { Box } from '@chakra-ui/react'

interface titleType {
  title: string
}

const Title = ({ title }: titleType) => {
  return <Box>{title}</Box>
}

export default Title
