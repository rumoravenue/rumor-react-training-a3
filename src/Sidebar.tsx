import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Link,
  VStack,
  Text,
  HStack,
  Button,
  useColorMode,
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack gap={4} padding={3} alignItems="flex-start">
      <HStack w="100%" alignItems="flex-start">
        <Text flex="1 1 auto" marginBottom={4} fontWeight={600}>
          Chapters
        </Text>
        <Button onClick={toggleColorMode} size="xs" variant="ghost">
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
      <Link as={ReactRouterLink} to="/chapter1">
        Chapter 1
      </Link>
      <Link as={ReactRouterLink} to="/chapter2">
        Chapter 2
      </Link>
      <Link as={ReactRouterLink} to="/chapter3">
        Chapter 3
      </Link>
      <Link as={ReactRouterLink} to="/misc">
        Misc
      </Link>
    </VStack>
  )
}

export default Sidebar
