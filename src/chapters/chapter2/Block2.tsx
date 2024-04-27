import { Box,Flex, Heading } from '@chakra-ui/react'


import { useMediaContext } from './MediaContext'

function Block2() {
  const { audioUrl, videoUrl } = useMediaContext()
  console.log(videoUrl)
  return (
    <>
       <Flex align="center" direction='column' gap='4'>
        <Heading fontSize="2rem" width="40%">
          Second block
        </Heading>
        <Flex direction="column" justify='center' align='center' gap='3'>
          <Box>
            {audioUrl && (
              <audio controls>
                <source src={audioUrl} />
                Your browser does not support the audio element.
              </audio>
            )}
          </Box>
          <Box>
            {videoUrl && (
               <Box maxW='40vw'>
                <video controls>
                  <source src={videoUrl} />
                  Your browser does not support the video element.
                </video>
              </Box>
            )}
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Block2
