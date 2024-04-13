import { Box, BoxProps, Heading } from '@chakra-ui/react'

interface IProps extends BoxProps {
  title: string
}

const ChapterLayout: React.FC<IProps> = ({ title, children, ...rest }) => {
  return (
    <Box {...rest}>
      <Box padding={5} borderBottomWidth={1}>
        <Heading fontSize="2xl">{title}</Heading>
      </Box>
      <Box padding={5}>{children}</Box>
    </Box>
  )
}

export default ChapterLayout
