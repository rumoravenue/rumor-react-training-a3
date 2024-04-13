import { Box, Button, Text } from '@chakra-ui/react'
import { SampleProvider, useSampleContext } from './SampleProvider'

const Chapter2 = () => {
  const { sampleProp, setSampleProp } = useSampleContext()
  return (
    <Box>
      <Text>Sample Prop : {sampleProp}</Text>
      <Button onClick={() => setSampleProp(sampleProp + 1)}>
        Increment State
      </Button>
      <Button onClick={() => setSampleProp(sampleProp - 1)}>
        Decrement State
      </Button>
    </Box>
  )
}

/** Since chapter 2 need to use the context, provider should be in the parent of the Chapter 2 */
export const Chapter2WithProvider = () => {
  return (
    <SampleProvider>
      <Chapter2 />
    </SampleProvider>
  )
}

export default Chapter2WithProvider
