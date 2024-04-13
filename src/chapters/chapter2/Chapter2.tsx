import { Box } from '@chakra-ui/react'
import { SampleProvider, useSampleContext } from './SampleProvider'

const Chapter2 = () => {
  const { sampleProp } = useSampleContext()
  return <Box>{sampleProp} coming from Provider</Box>
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
