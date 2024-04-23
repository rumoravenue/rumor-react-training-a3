// src/App.tsx

import React from 'react'
import { MediaProvider } from './SampleProvider'
import MediaPlayer from './MediaPlayer'
import { Box, Text } from '@chakra-ui/react'

const Chapter2: React.FC = () => {
  return (
    <MediaProvider>
      <Box>
        <Text>Media Control App</Text>
        <MediaPlayer
          id="video1"
          type="video"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        <MediaPlayer
          id="audio1"
          type="audio"
          src="http://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
        />
        <MediaPlayer
          id="audio2"
          type="audio"
          src="http://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
        />
        <MediaPlayer
          id="audio3"
          type="audio"
          src="http://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
        />
      </Box>
    </MediaProvider>
  )
}

export default Chapter2
