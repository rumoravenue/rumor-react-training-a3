import { Box, Button, Flex } from '@chakra-ui/react'
import { LegacyRef, MouseEventHandler } from 'react'
interface videoProp {
  src: string | undefined
  Ref: LegacyRef<HTMLVideoElement> | undefined
  btnAction: MouseEventHandler<HTMLButtonElement> | undefined
}

function Video(props: videoProp) {
  return (
    <>
      <Box>
        {props.src && (
          <Box maxW="40vw">
            <video controls ref={props.Ref}>
              <source src={props.src} />
              Your browser does not support the video element.
            </video>
          </Box>
        )}
      </Box>

      <Flex gap='4' mt='1rem'>
        <Button onClick={props.btnAction}>Play</Button>
        <Button onClick={props.btnAction}>Pause</Button>
      </Flex>
    </>
  )
}

export default Video
