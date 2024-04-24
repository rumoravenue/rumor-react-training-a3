import React from 'react'
import { MediaProvider } from './SampleProvider'
import {MediaPlayer} from './MediaPlayer'
import { VStack } from '@chakra-ui/react'

const Chapter2: React.FC = () => {
  return (
    <MediaProvider>
      <VStack align="start" spacing={4}>
        <MediaPlayer
          id="video1"
          mediaType="video"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        <MediaPlayer
          id="video2"
          mediaType="video"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        <MediaPlayer
          id="audio1"
          mediaType="audio"
          src="http://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
        />
        <MediaPlayer
          id="audio2"
          mediaType="audio"
          src="http://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
        />
      </VStack>
    </MediaProvider>
  )
}

export default Chapter2
