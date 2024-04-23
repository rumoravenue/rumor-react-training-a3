// Chapter3.tsx
import { Box, Button } from '@chakra-ui/react'
import Video from './components/Video'
import { useRef } from 'react'

const Chapter3: React.FC = () => {
  const ref = useRef<HTMLVideoElement>(null)

  return (
    <Box>
      <Button
        bg={'green'}
        mb={'1rem'}
        borderRadius={'1rem'}
        onClick={() => ref.current?.play()}
      >
        Play
      </Button>
      <Button
        bg={'red'}
        ml={'.5rem'}
        mb={'1rem'}
        borderRadius={'1rem'}
        onClick={() => ref.current?.pause()}
      >
        Pause
      </Button>

      <Video ref={ref} />
    </Box>
  )
}

export default Chapter3
