import { Box } from '@chakra-ui/react'
import React from 'react'

interface PropsTypes {
  // define any specific props here if needed
}

const Video: React.ForwardRefRenderFunction<HTMLVideoElement, PropsTypes> = (
  _,
  ref
) => {
  return (
    <Box width={'50%'} h={'50%'}>
      <video controls ref={ref}>
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      </video>
    </Box>
  )
}

export default React.forwardRef(Video)
