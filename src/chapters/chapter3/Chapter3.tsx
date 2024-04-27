import { Box, Button, Heading } from '@chakra-ui/react'
import Input from './components/Input'
import { useRef, useState } from 'react'
import Video from './components/Video'

const Chapter3 = () => {
  /**
   * Tell useRef to expect HTMLInputRef
   */
  const inputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const handleFocusClick = () => inputRef.current && inputRef.current.focus()
  const videoUrl =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  const [isplaying, setIsPlaying] = useState(false)
  const handlePlaying = () => {
    // Toggle play/pause
    if (videoRef.current) {
      setIsPlaying(!isplaying)
      if (!isplaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <Box>
      <Input
        /** Input component will forward the DOM node ref to this ref */
        ref={inputRef}
        label="Enter your name"
        placeholder="Enter your name"
      />
      <Button onClick={handleFocusClick}>Focus</Button>

      <Box>
        <Heading mt='1rem'>Video Element</Heading>
        <Video src={videoUrl} Ref={videoRef} btnAction={handlePlaying} />
      </Box>
    </Box>
  )
}

export default Chapter3
